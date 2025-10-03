---
title: Generic - Data Sources
---

Generic
=======

If no other data sources are recognized, this data source will import the data but without rich semantics or structure. (TODO: This importer is undergoing a significant redesign. Don't use it for now.)

It will attempt to extract timestamp from the file header (if possible) or the filepath.

In general, try to avoid this; especially for now, while I am still redesigning it.