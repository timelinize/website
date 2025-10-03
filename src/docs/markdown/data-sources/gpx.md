---
title: GPX files - Data Sources
---

GPX files
=========

GPS Exchange (GPX) files contain location tracks recorded by a GPS receiver.

How to get it
-------------

(TODO: detailed instructions & specific apps)


Expected format
---------------

The file extension must be `.gpx`. The contents must be an XML document declaring and adhering to the [GPX 1.1 schema](https://www.topografix.com/GPX/1/1/).

Example snippet:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<gpx creator="StravaGPX Android"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd"
	version="1.1" xmlns="http://www.topografix.com/GPX/1/1">
 <metadata>
  <time>2014-09-23T15:25:13Z</time>
 </metadata>
 <trk>
  <name>Morning Ride</name>
  <type>cycling</type>
  <trkseg>
   <trkpt lat="39.94985832" lon="-92.15115356">
    <ele>1416.8</ele>
    <time>2014-09-23T15:25:13Z</time>
   </trkpt>
   ...
```

Timelinize can import individual files or a folder comprised primarily of .gpx files.

