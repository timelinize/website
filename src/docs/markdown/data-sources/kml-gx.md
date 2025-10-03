---
title: KML-gx files - Data Sources
---

KML-gx files
============

KML files with with Google's extensions ("-gx"). The Google extensions are required so that each point has a timestamp.


How to get it
-------------

(TODO: detailed instructions & specific apps)


Expected format
---------------

The file extension must be `.kml`. The contents must be an XML document declaring and adhering to the [KML 2.2 schema](http://www.opengis.net/kml/2.2) and [`gx` extensions](http://www.google.com/kml/ext/2.2).

Example snippet:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2"
  xmlns:gx="http://www.google.com/kml/ext/2.2"
  xmlns:kml="http://www.opengis.net/kml/2.2"
  xmlns:atom="http://www.w3.org/2005/Atom">
<Document>
  <name>2023-06-25T04:00:39.108Z</name>
  <Placemark>
    <gx:Track>
      <when>2023-06-26T03:56:29.999Z</when>
      <gx:coord>-23.03862162414516 31.74870614287313 -10.280447321797435</gx:coord>
...
```

Timelinize can import individual files or a folder comprised primarily of .kml files.





Timelinize supports KML files with with Google's extensions ("gx"). GPSLogger is one such app that creates these files.

The Google extensions are required so that each point has a timestamp.

This importer does not support streaming so it's recommended that the files are smaller than 1 GB.