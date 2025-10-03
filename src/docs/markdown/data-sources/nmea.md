---
title: NMEA files - Data Sources
---

NMEA files
==========

The [National Marine Electronics Association 0183 Interface Standard](https://www.nmea.org/nmea-0183.html) (NMEA-0183) can log GPS tracks and is common among marine and electronic equipment, including radios.

How to get it
-------------

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Yaesu FTM-500 radio</b>
	</div>
	<div class="expander">

TODO: Specific instructions here

</div>
</div>


<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Kenwood TH-D74/75 radio</b>
	</div>
	<div class="expander">

TODO: Specific instructions here

</div>
</div>


Expected format
---------------

The file extension must be one of:

- `.nme`
- `.nmea`

And the contents must conform to the NMEA 0183 specification.

Example snippet:

```csv
$GPGGA,160245.100,1234.9637,N,10032.9079,W,1,7,1.04,1407.1,M,-16.5,M,,*5D
$GPGSA,A,3,23,18,10,13,15,32,08,,,,,,1.31,1.04,0.79*0C
$GPRMC,160245.100,A,1234.9637,N,10032.9079,W,0.30,241.49,110924,,,A*77
$GPVTG,241.49,T,,M,0.30,N,0.55,K,A*34
...
```

Timelinize can import individual files or a folder comprised primarily of NMEA files.


What is imported
----------------

Currently, the only supported [sentence types](https://receiverhelp.trimble.com/alloy-gnss/en-us/NMEA-0183messages_MessageOverview.html) are GGA and RMC. These include values such as position, velocity, time, and GPS fix information.
