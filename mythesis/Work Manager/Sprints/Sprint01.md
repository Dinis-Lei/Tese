### Progress
`$= const t = dv.current().file.tasks; const tTotal = t.length; const tComplete = t.filter(t => t.completed).length; dv.paragraph("Task completion: " + tComplete + " of " + tTotal); dv.el("progress", "", { attr:  { max: tTotal, value: tComplete}}) `

### Miscellaneous

- [ ] Schedule meeting with STIC:
    - [x] Send email to start scheduling
- [ ] Send email to CERN asking for data
- [x] Make a list of parameter needed for the models

### Compression Algorithms Analysis

- [ ] Install missing compression algorithms:
    - [x] nncp
    - [ ] Mfcompress
    - [ ] jarvis3
    - [ ] Naf
    - [ ] Agc
    - [ ] Fqzcomp
    - [ ] Quip
    - [ ] Leon
- [x] Get image dataset
- [ ] Get genome dataset
- [ ] Perform all tests on all data:
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
	- [x] random text
		- [x] gzip
		- [x] zstandard
		- [x] bzip2
		- [x] lzma
		- [x] paq8
		- [x] nncp
	- [x] normal text
		 - [x] gzip
		- [x] zstandard
		- [x] bzip2
		- [x] lzma
		- [x] paq8
		- [x] nncp
- [x] Improve data analysis plot visualization
	- [x] Zoom in bar plot
	- [x] Fix bar plot tile
	- [x] Add dot marker to line plot

### Web calculator

- [ ] Get a name for the web calculator
- [ ] Implement missing models:
    - [x] Edge network
    - [ ] User side decompression
- [ ] Complete Model explanation page
	- [x] Decide page layout
	- [x] Integrate with Drawer
	- [ ] Fill page
		- [x] Upload Part
		- [ ] Download Part
		- [ ] Storage Part
	- [x] Display math formulas 
- [ ] Add model load page
    - [ ] Add model local storage
- [x] Improve Navbar:
    - [x] Remove Test tab
    - [x] Add Icon for Form Drawer
	    - [x] Add Icon animation
	- [x] Make Navbar Tabs better
		- [x] Fix text color on light mode
		- [x] Center Nav tabs
		- [x] Add Tab Icons
		- [x] Improve interactivity
	- [x] Change lightmode color
- [ ] Add helper text for each form component
- [ ] Improve website customization
- [x] Change Main page layout
- [x] Improve Energy Pie Chart customization 
- [ ] Add compression algorithm selection 
- [ ] Main page Customization:
	- [x] Add multiple graphs according to models
	- [x] Add option to select multiple graph view or single view
		- [x] Add option to change graph according to model
		- [x] Highlight selected button

### Thesis Writing

- [ ] Document process of gathering data
- [ ] Document results
- [ ] Document Web calculator progress
