
### Progress
`$= const t = dv.current().file.tasks; const tTotal = t.length; const tComplete = t.filter(t => t.completed).length; dv.paragraph("Task completion: " + tComplete + " of " + tTotal); dv.el("progress", "", { attr:  { max: tTotal, value: tComplete}}) `

### Miscellaneous

- [ ] Schedule meeting with STIC:
    - [ ] Resend email to start scheduling
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

### Web calculator

- [ ] Get a name for the web calculator
- [x] Implement missing models:
    - [x] User side decompression
    - [x] Add total graph Din/Dout lock
- [x] Complete Model explanation page
	- [x] Fill page
		- [x] Upload Part
		- [x] Download Part
			- [x] Introduction
			- [x] Server Read
			- [x] Global Network
			- [x] User side
		- [x] Storage Part
		- [x] Overall Part
	- [x] Add lateral pagination:
		- [x] Add index
			- [x] Add Left Tab indicator
			- [x] Integrate with Drawer
				- [x] Change drawer width
				- [x] Fix Drawer width change animation
	- [x] Implement Collapse Tab
		- [x] Change Index from Tab to List
	- [x] Add scroll to page section
	- [x] Change Math library
-  ~~Add model load page~~
    - ~~Add model local storage~~
- [ ] Add helper text for each form component
- [x] Improve website customization
	- [x] Add a dark mode and light mode theme
- [ ] Add compression algorithm selection 
	- [x] Make Select Component
	- [x] Integrate with form control
	- [ ] Add  compression algorithms with corresponding compression rate and time cost
- [x] Main page Customization:
	- [x] Change line graph library
- [x] Add tab with ABOUT
- [x] Fix compatibility issues
- [x] Pie Chart Customization:
	- [x] Add Title to chart
	- [x] Add Highlight Mechanics
- [x] Line Chart Customization:
	- [x] Add title on 4 panel option
	- [x] Fix Left axis legend
	- [x] Added Option to make a Din/Dout ratio
		- [x] Add top axis to Total graph
		- [x] change position of legend
- [x] Fix Drawer scrolling up issue


### Thesis Writing

- [ ] Document process of gathering data
- [ ] Document results
- [ ] Document Web calculator progress
