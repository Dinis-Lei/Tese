
### Progress
`$= const t = dv.current().file.tasks; const tTotal = t.length; const tComplete = t.filter(t => t.completed).length; dv.paragraph("Task completion: " + tComplete + " of " + tTotal); dv.el("progress", "", { attr:  { max: tTotal, value: tComplete}}) `

### Miscellaneous

- [x] Schedule meeting with STIC:
    - [x] Resend email to start scheduling
- [x] Request BUD

### Compression Algorithms Analysis

- [x] Install missing compression algorithms:
    - [x] Mfcompress
    - [x] jarvis3
    - [x] Naf
    - [x] Agc
    - [x] Fqzcomp
    - [x] Quip
    - [x] Spring
    - [x] DCRC2
- [x] Get genome dataset
- [ ] Perform compression tests on all data:
    - [x] fasta
	    - [x] Mfcompress
	    - [x] jarvis3
	    - [x] Naf
	    - [x] Agc
	    - [x] Spring
	- [ ] fastq
	    - [ ] Fqzcomp
	    - [ ] Quip
		- [ ] DCRC2
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
	- [x] random_text
		- [x] gzip
		- [x] zstandard
		- [x] bzip2
		- [x] lzma
		- [x] paq8
	- [x] text
		- [x] gzip
		- [x] zstandard
		- [x] bzip2
		- [x] lzma
		- [x] paq8

### Web calculator

- [ ] Add helper text for each form component
- [ ] Add compression algorithm selection 
	- [ ] Add  compression algorithms with corresponding compression rate and time cost
- [x] Add local storage cache:
	- [x] default theme settings
	- [x] model calculations
- [ ] Hosting
	- [x] Test docker container
	- [ ] Deploy to VM

### Thesis Writing

- [ ] Energy Model
	- [ ] Model Evaluation
	- [ ] Conclusion
- [ ] Compression Algorithm Benchmarking
	- [ ] Results
	- [ ] Conclusion
- [ ] Web calculator
	- [x] Solution Description
		- [x] Functional Requirements
		- [x] Non-Functional Requirements
		- [x] Technology architecture
	- [x] Implementation
		- [x] Technology architecture
		- [x] Deployment architecture
		- [x] Website Structure and Functionalities
	- [ ] Conclusion
