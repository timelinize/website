---
title: GeoJSON files - Data Sources
---

GeoJSON files
=============

[GeoJSON](https://geojson.org/) files contain location tracks with timestamps.

Timelinize recognizes most GeoJSON files, including those created by GPSLogger.

To be effective, it should contain a FeatureCollection with a list of points and their timestamps.


How to get it
-------------

Some GPS tracker apps, like GPSLogger, can save/export GeoJSON files.

(TODO: detailed instructions & specific apps)


Expected format
---------------

The file extension must be `.geojson`. The contents must be a JSON document following the specification [RFC 7946](https://datatracker.ietf.org/doc/html/rfc7946).

It should contain a `FeatureCollection` with a list of points and their timestamps.

Example snippet:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "time": "2023-06-26T03:56:29.999Z",
        "provider": "gps",
        "time_long": 1687751789999,
        "accuracy": 5.0507116,
        "altitude": 43.280447321797435,
        "bearing": 28.302074,
        "speed": 0.027355889
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -4.169180061008135,
          31.817421745717976
        ]
      }
    },
    ...
```

Notes
-----

Some applications produce GeoJSON files in violation of the specificiation. For example, sometimes the `coordinates` array contains a third element that, instead of altitude, might be a timestamp (in Unix epoch seconds). If a fourth element exists, either one might be timestamp or altitude. If your data is like this, enable _Lenient mode_ in the data source options to attempt to handle that data.