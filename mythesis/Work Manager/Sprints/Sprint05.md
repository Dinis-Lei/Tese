
### Progress
`$= const t = dv.current().file.tasks; const tTotal = t.length; const tComplete = t.filter(t => t.completed).length; dv.paragraph("Task completion: " + tComplete + " of " + tTotal); dv.el("progress", "", { attr:  { max: tTotal, value: tComplete}}) `

### Miscellaneous

### Compression Algorithms Analysis

- [ ] Perform compression tests on all data:
	- [ ] fastq
	    - [x] Fqzcomp
	    - [x] Quip
		- [x] DCRC2
		- [ ] Jarvis3
- [ ] Perform decompression tests on all data:
    - [ ] genome
	    - [ ] Mfcompress
	    - [ ] jarvis3
	    - [ ] Naf
	    - [ ] Agc
	    - [ ] Fqzcomp
	    - [ ] Quip
	    - [ ] Spring
		- [ ] DCRC2

### Web calculator

- [ ] Add helper text for each form component
- [ ] Add compression algorithm selection 
	- [ ] Add  compression algorithms with corresponding compression rate and time cost
- [ ] Hosting
	- [ ] Deploy to VM

### Thesis Writing

- [ ] Energy Model
	- [ ] Model Evaluation
	- [ ] Conclusion
- [ ] Compression Algorithm Benchmarking
	- [ ] Results
		- [x] General Compressors
		- [ ] Specific Compressors
	- [ ] Conclusion
