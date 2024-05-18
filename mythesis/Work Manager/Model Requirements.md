---
p_server: ""
c_server: ""
du_rates: ""
---
1. Server specifications:
	1. Server power consumption `INPUT[text:p_server]`
	2. Server capacity/bandwidth `INPUT[text:c_server]`
	3. If not available, Server or CPU model  `INPUT[text:server_model]`
2.  Network specifications:
	1. Network components power consumption `INPUT[text:p_switch]`
	2. Network components capacity/bandwidth `INPUT[text:c_switch]`
	3. If not available, network components model  `INPUT[text:switch_model]`
3. Storage specifications:
	1. RAID type `INPUT[text:raid_type]`
	2. Storage read/write rate `INPUT[text:read_rate]`
	3. Disk capacity `INPUT[text:disk_size]` 
4.  Monthly/weekly server traffic `INPUT[text:server_traffic]`
	1. Measures of download/upload data rates `INPUT[text:du_rates]`
5. Monthly/weekly energy consumption `INPUT[text:energy_consumption]`
6. Components redundancy `INPUT[text:redundancy]`
7. Type of data stored 
	 `INPUT[textArea:data_types]`
