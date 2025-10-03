---
title: Instagram - Data Sources
---

Instagram
=========

Your Instagram account data can be import from an account export file.

How to get it
-------------

Go to [_Your information and permissions_](https://accountscenter.instagram.com/info_and_permissions/dyi/) in the Meta account center, then click _Download your information_, then _Download or transfer information_. Select the profile(s) you want to export (if prompted) then choose _All available information_, which should export everything.

You are then given the option to download to your device or send to a cloud storage service. Since the data needs to be on your computer to import it, select _Download to device_. (You could send to cloud storage, but you'd still have to download it from there as an extra step.)

Then make sure to change:

- Date range: _All time_
- Format: _JSON_
- Media quality: _High_

Then click _Create files_. Facebook will send you an email or notification when your data is ready to download.

Expected format
---------------

Instagram exports from 2022 onward are supported. They can remain in their archive files (they do not need to be extracted), however, extracting the archive first may speed up the import.


What is imported
----------------

The following information is added to your timeline:

- Basic profile info
- Posts with their photos and videos
- Stories
- Direct messages

Caveats
-------

The source data lacks proper IDs, so individuals' display names become their ID on the timeline. This means if someone changes their name on Instagram, they will be cataloged as two different people in your timeline.

Like with Facebook, JSON strings are improperly encoded; emoji characters are encoded as UTF-8 instead of UTF-16. The importer does its best to reconstruct true values but may not always be accurate, and some corruption may be inevitable.
