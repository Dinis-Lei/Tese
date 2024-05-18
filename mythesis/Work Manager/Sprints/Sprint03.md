
### Progress
`$= const t = dv.current().file.tasks; const tTotal = t.length; const tComplete = t.filter(t => t.completed).length; dv.paragraph("Task completion: " + tComplete + " of " + tTotal); dv.el("progress", "", { attr:  { max: tTotal, value: tComplete}}) `

### Miscellaneous

- [ ] Schedule meeting with STIC:
    - [x] Resend email to start scheduling
- [ ] Send email to CERN asking for data

### Compression Algorithms Analysis

- [ ] Install missing compression algorithms:
    - [ ] Mfcompress
    - [ ] jarvis3
    - [ ] Naf
    - [ ] Agc
    - [ ] Fqzcomp
    - [ ] Quip
    - [ ] Leon
    - [ ] Spring
    - [ ] DCRC2
- [ ] Get genome dataset
- [ ] Perform compression tests on all data:
    - [ ] genome
	    - [ ] Mfcompress
	    - [ ] jarvis3
	    - [ ] Naf
	    - [ ] Agc
	    - [ ] Fqzcomp
	    - [ ] Quip
	    - [ ] Leon
	- [ ] image
		- [x] gzip
		- [x] zstandard
		- [x] bzip2
		- [x] lzma
		- [x] paq8
		- [ ] nncp
- [ ] Perform decompression tests on all data:
    - [ ] genome
	    - [ ] Mfcompress
	    - [ ] jarvis3
	    - [ ] Naf
	    - [ ] Agc
	    - [ ] Fqzcomp
	    - [ ] Quip
	    - [ ] Leon
	- [ ] image
		- [ ] gzip
		- [ ] zstandard
		- [ ] bzip2
		- [ ] lzma
		- [ ] paq8
		- [ ] nncp
	- [ ] random_text
		- [ ] gzip
		- [ ] zstandard
		- [ ] bzip2
		- [ ] lzma
		- [ ] paq8
		- [ ] nncp
	- [ ] text
		- [ ] gzip
		- [ ] zstandard
		- [ ] bzip2
		- [ ] lzma
		- [ ] paq8
		- [ ] nncp

### Web calculator

- [x] Get a name for the web calculator
	- EcoCompress
- [ ] Add helper text for each form component
- [ ] Add compression algorithm selection 
	- [ ] Add  compression algorithms with corresponding compression rate and time cost
- [x] Fix Latex click event


### Thesis Writing

- [ ] Energy Model
	- [x] Description
	- [x] Upload Stage
		- [x] Energy Model
		- [x] Energy Model with Compression
	- [x] Storage Stage
		- [x] Energy Model
		- [x] Energy Model with Compression
	- [x] Download Stage
		- [x] Energy Model
		- [x] Energy Model with Compression
	- [ ] Conclusion
- [ ] Compression Algorithm Benchmarking
	- [x] Description
	- [x] Methodology
	- [ ] Results
	- [ ] Conclusion
- [ ] Web calculator
	- [ ] Description
	- [ ] How to use
	- [ ] Conslusion
