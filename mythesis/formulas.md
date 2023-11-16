## CPE & AN

Formula from [Coroama2015](https://link.springer.com/chapter/10.1007/978-3-319-09228-7_8):

$$
E_{CPE\&AN} = t_s I_{CPE\&AN} = t_s(R_{idle} \frac{P_{CPE}}{N_{CPE}} + \frac{P_{AN}}{N_{AN}} PUE_{AN})
$$

- $E_{CPE\&AN}$: Energy consumption of both CPE and AN.
- $t_s$: time of service consumption.
- $I_{CPE\&AN}$: Intensity of both CPE and AN.
- $R_{idle}$: Ratio of time that the device is actively working. 
- $P_{CPE}$: Power of all CPE devices.
- $N_{CPE}$: Number of Users connected to the CPE.
- $P_{AN}$: Power of all AN devices.
- $N_{AN}$: Number of users (subscribers) connected to the AN
- $PUE_{AN}$: PUE of the AN.


This method is time sensitive.

According to the paper:
- $R_{idle} = \frac{t_{on}}{t_{use}}$.
- $R_{idle} = 6$ from the technical report [Fraunhofer IZM](https://www.izm.fraunhofer.de/content/dam/izm/en/documents/Publikationen/Jahresberichte/AR_2008_EN_web.pdf).
- $P_{CPE} = 8W$, using data from [ENERGY STAR, Nov 2013](https://www.energystar.gov/sites/default/files/specs/SmallNetworkEquipment_V1_ENERGYSTAR_ProgramRequirements_Nov2013_0.pdf) and doing some rounding up to account for legacy equipment.
- They assume $N_{CPE} = 1$, because they are modeling the energy intensity of the Internet, that is the average value for one Internet connection.
- $\frac{P_{AN}}{N_{AN}} = 2W$, from the study [Schien2013](https://onlinelibrary.wiley.com/doi/full/10.1111/jiec.12065).
- $PUE = 2$
- Finally, $I_{CPE\&AN} = 52W$

We can write $P_{CPE}$ in two ways:

- $\sum{P_i}$: this is impratical because the user will probably use the same type of router or similar routers in the network. And if they are different  it is annoying to calculate the sum for all the network.
- $N_{router}P_{router}$: this is not as accurate but should be a close enough alternative.

(idea) Using the second way, the $t_s$ could be influenced by the $N_{CPE}$ and $N_{routers}$  


## Edge and Core

- It is dependent on data volume.
- According to [Schien2015](https://www.researchgate.net/publication/266968255_The_Energy_Intensity_of_the_Internet_Edge_and_Core_Networks)
the consumption is 0.052 kWh/GB.
- The value above is also used by [Manz2022](https://onlinelibrary.wiley.com/doi/10.1111/j.1530-9290.2010.00278.x)
- This layer the user probably won't have a way to change it because it is related to the ISP so we can use a value from a study like [Schien2015](https://www.researchgate.net/publication/266968255_The_Energy_Intensity_of_the_Internet_Edge_and_Core_Networks)
- [Malmodin 2010](https://www.ericsson.com/en/reports-and-papers/research-papers/lca-of-data-transmission-and-ip-core-networks) estimates that the value of the core network for Sweden is 0.08 kwh/GB

## Datacenter (DC)

The cost of the datacenter will only be the storage cost, as server activity isn't relevant for this study.

The model we create should be a compromised between complexety and simplicity. The most simple model would be:
$$
E(V, t) = V*t*P_{GB}
$$
- $E$: energy consumption.
- $V$: data volume.
- $t$: time for the task.
- $P_{GP}$: Power per gigabyte

$P_{GB}$ would be the average or a value that the user could input. But I don't think that the user would have apriori the value for $P_{GB}$ of his  system.


The model should also be too complexed has presented in the paper [Miriam 2009](https://www.researchgate.net/publication/221351970_Storage_modeling_for_power_estimation).
This model is based on a set of disk activities, such as the average number of seeks/sec, average number of transferred bytes/sec or the disk queue length. 

According to [Li Y](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7033642) the power consumption of storage devices (HDD, SDD) is dependent of what type of I/O workload being used.
The paper describes 2 types of workloads:
- capability 
- capacity

Capbility workloads are when its demand for I/O bandwidth is more difficult to meet than its demand for storage space. For example a web server.
Capacity is when the requirement for storage space is greater than other requirements.

If we take the SRA example the type of workload we will deal with is capacity, due to the sheer amount of data.

The formula for calculating the energy consumption of the I/O operation:

$$
    E = T_a P_i N_i + T_a P_b N_a
$$

- E: Energy consumption of the workload.
- T_a: The time needed to complete the workload.
- P_i: The Power of the device when in idle mode.
- P_b: The Power of the device when in busy mode.
- N_i: The number of idle devices during the workload.
- N_a: The number of active devices during the workload.

The $T_a$ can be expressed as:

$$
    T_a = \frac{W_c}{W_{ab}}
$$

- $W_c$: Workload capacity requirement.
- $W_{ab}$: Workload average bandwith requirement.

The number of active and idle devices ($N_a$, $N_i$) can be expressed as: 

$$
    N = \left \lceil {\frac{W_c}{D_c}} \right \rceil
$$
$$
    N_a = \alpha \frac{W_{ab}}{D_b}
$$
$$
    N_i = N - N_a
$$

- $N$: Total number of devices used in the workload.
- $W_c$: Workload capacity requirement.
- $W_{ab}$: Workload average bandwith requirement.
- $D_c$: Device capacity.
- $D_b$: Device bandwith.
- $\alpha$: if $N_{min}$ is the theoretical minimum number of devices needed to complete the workload then, $\alpha N_{min}$ is the actual number of devices needed, $\alpha \in [1,\frac{N}{N_{min}}]$.

This approach doesn't take into account the operational costs and cooling costs, a simple solution would be multiplying the result by a $PUE_{dc}$ constant.

According to the datacenter survey from [Uptime Institute 2022](https://uptimeinstitute.com/resources/research-and-reports/uptime-institute-global-data-center-survey-results-2022) who has been tracking the PUE since 2007, the value has seen little improvement since 2014, arriving at the average value of 1.55 in 2022.

According to [US DC Report 2016](https://www.osti.gov/biblio/1372902/) the $PUE_{dc}$ varies by the space type of the DC.

|Type|PUE|
|---|---|
|Closet| 2.0|
|Room| 2.5|
|Localized|2.0|
|Midtier|1.9|
|High-end|1.7|
|Hyperscale|1.2|

The same report has a more "simplified" way to calculate energy:

$$
E_y = \sum_{t=HDD,SDD}{(I_{t,y} * P_{t,y}) * h_y * (1 + O * \frac{C_{external}}{C_{total}})}
$$

- $E_y$: Storage electricity consumption in year y
- $I_{t,y}$: Installed base of storage type t in year y
- $P_{t,y}$: Per-unit power consumption of storage type t in year y
- $h_y$: Number of hours in year y
- $O$: Operational energy as a fraction of storage energy
- $C_{external}$: Capacity of the external storage installed base
- $C_{total}$: Capacity of the total storage installed base

For our use case instead of year it would be the time to process the workload.

The second part of the equation $(1 + O * \frac{C_{external}}{C_{total}})$ refers to the operational cost of storage that is external to the server.
The report states that operational cost is assumed to be 25% of the storage energy, based on industry comment, and it only applies to external storage. 

(opinion) I would assume that in our use case, $C_{external} \simeq C_{total}$, because it makes sense to have large external storage when dealing with a great amount data. So $\frac{C_{external}}{C_{total}} \simeq 1$













