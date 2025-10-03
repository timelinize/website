---
title: Facebook - Data Sources
---

Facebook
========

Adding Facebook data to your timeline can offer insights into your social relationships.


How to get it
-------------

Go to [Download your information](https://accountscenter.facebook.com/info_and_permissions/dyi/) in your Facebook account settings, then click _Download or transfer information_. Select the profile(s) you want to export (if prompted), then choose _Available information_, which should export everything.

You are then given the option to download to your device or send to a cloud storage service. Since the data needs to be on your computer to import it, select _Download to device_. (You could send to cloud storage, but you'd still have to download it from there as an extra step.)

Then make sure to change:

- Date range: _All time_
- Format: _JSON_
- Media quality: _High_
- Check _Include mobile compatible media_

Then click _Create files_. Facebook will send you an email or notification when your data is ready to download.

Expected format
---------------

Facebook exports from 2022 onward are supported. They can remain in their archive files (they do not need to be extracted), however, extracting the archive first may speed up the import.


What is imported
----------------

The following information is added to your timeline:

- Basic profile info (name, gender, birth date, birth place, username, emails, websites, and profile picture)
- Social media posts
- Photos and videos
- Messenger conversations that haven't been upgraded to E2E encrypted. Sometime in about 2024, Facebook started offering E2E-encrypted messaging; when a conversation switches to this, the message history is no longer exportable.


Caveats
-------

The source data lacks proper IDs, so individuals' display names become their ID on the timeline. This means if someone changes their name on Facebook, they will be cataloged as two different people in your timeline.

JSON strings are improperly encoded; emoji characters are encoded as UTF-8 instead of UTF-16. The importer does its best to reconstruct true values but may not always be accurate, and some corruption may be inevitable.
