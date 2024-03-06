import formulas from '../formulas.json';

let models = []

export function load_models() {
    models = [];
    
    for (let formula of formulas) {
        // Transform the formula to include the data object
        formula.dependent_variables.map((variable, index) => {
            if (!formula.normal_model.includes(`data.${variable}`)){
                formula.normal_model = formula.normal_model.replaceAll(variable, `data.${variable}`);
            }
            if ("compressed_model" in formula && !formula.compressed_model.includes(`data.${variable}`)) {
                formula.compressed_model = formula.compressed_model.replaceAll(variable, `data.${variable}`);
            }
        });

        models.push({
            "name": formula.name,
            "dependent_variables": formula.dependent_variables,
            "normal_model": new Function(...formula.independent_variables, 'data', `return ${formula.normal_model}`),
            "compressed_model": new Function(...formula.independent_variables, 'data', `return ${"compressed_model" in formula ? formula.compressed_model : formula.normal_model}`)
        });
    }
}

export function calculate_model(data, nDataPoints=20, stepSize=100) {
    console.log("DATA", data);
    
    if (!data) {
        return null;
    }


    let series = [];
    for (let d_in = 0; d_in < nDataPoints*stepSize; d_in += stepSize) {
        
        let element = {
            "normal_value": 0,
            "compressed_value": 0,
            "xaxis": d_in,
            "normal_pie": [],
            "compressed_pie": []
        };

        for (let model of models) {
            if (model.dependent_variables.some((variable, index) => data.disabled.includes(variable))) {
                console.log("DISABLED", model.name);
                continue;
            }


            let normal_value = model.normal_model(d_in, data);
            let d_in_compressed = d_in*(1-data.compression_rate);
            let compressed_value = model.compressed_model(d_in_compressed, data);

            element.normal_value += normal_value;
            element.compressed_value += compressed_value;
            element.normal_pie.push({
                "name": model.name,
                "value": Math.round((normal_value + Number.EPSILON)*100)/100
            });
            element.compressed_pie.push({
                "name": model.name,
                "value": Math.round((compressed_value + Number.EPSILON)*100)/100
            });
        }

        // Round Numbers
        element.normal_value = Math.round((element.normal_value + Number.EPSILON)*100)/100;
        element.compressed_value = Math.round((element.compressed_value + Number.EPSILON)*100)/100;

        series.push(element);
    }


    return series;
}