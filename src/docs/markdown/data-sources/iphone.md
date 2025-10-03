---
title: iPhone - Data Sources
---

iPhone
======

Timelinize can import data from your **unencrypted** iPhone backup stored locally on your computer.


How to get it
-------------

You'll need to plug your iPhone into your computer. Follow the instructions in [the Apple user guide](https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios) under one of these headings:

- Back up iPhone using your Mac
- Back up iPhone using your Windows device

(Don't follow the iCloud instructions if you want the data from your phone. iCloud doesn't export some things, like Messages)

**Do not encrypt your backup.** Timelinize cannot read encrypted iPhone backups, so make sure _Encrypt your backup_ is unchecked.

Once the backup is complete, you can [find it](https://support.apple.com/en-us/HT204215) at `~/Library/Application Support/MobileSync/Backup/` on your Mac, or `%AppData%` on your Windows PC (click the link for details). There may be multiple folders in there; the most recently modified folder should be your latest backup.

You can move/copy the backup folder around if needed. Just make sure that folder (which contains a Manifest.db file) with all its files and subfolders remains intact.


Expected format
---------------

The iPhone backup must be **unencrypted**. Do not modify the files in it or the structure of the folder.


What is imported
----------------

iPhone imports read the following data:

- Device phone number
- Address book (contacts)
- iMessage database (messages, attachments, reactions, etc.)
- Camera roll (your photos and videos)


