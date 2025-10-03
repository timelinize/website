---
title: Google Voice - Data Sources
---

Google Voice
=============

Google Voice is a VOIP service. Adding data from Google Voice can enhance your timeline with some of your communications.


How to get it
-------------

1. Go to [takeout.google.com](https://takeout.google.com).
2. Under _Create a new export_, click _Deselect all_.
3. Scroll down and check the box by _Google Voice_.
4. Scroll all the way down and click _Next step_.
5. For _File type_, we **strongly recommend `.zip`** because it imports much faster than .tgz.
6. Increase the _File size_ to 50 GB so you have fewer files to download. Timelinize can handle large zip64 archives.
7. Click _Create export_ and wait for your download(s) to become available.


Expected format
---------------

Google Takeout archives come in one or more archive files. If there are multiple, do not rename them, so that they can be linked together as part of the same dataset.

The Google Voice data is in the `Takeout/Voice` subfolder. You do not need to extract the archive; Timelinize can find the data inside the archive just fine. However, because Google Voice exports use lots of small files, importing may be faster if you first extract the archive.


What is imported
----------------

Currently, this importer only supports text messages. It should import one-on-one conversations, group conversations, and media attachments.


Caveats
-------

Google Voice exports only expose up to two real pieces of information about other people you are communicating with: their phone number, and their name (if they're in your contact list, or are a publicly-listed business in their directory).

In one-on-one conversations, only one of those appear unless the other person sends a message as well. If you only send to them, we don't have both pieces of information. Sometimes we only have the person's name, not phone number.

As such, this data source creates an identifying attribute called "gvoice_name" which, if later paired with a phone number, can be used to avoid duplicate entities, but it is otherwise unnecessary to have an entity for their name, and this situation is unfortunate. (Other data sources like Facebook suffer a similar problem.)