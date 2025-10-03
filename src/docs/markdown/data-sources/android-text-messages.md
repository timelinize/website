---
title: Android Text Messages - Data Sources
---

Android Text Messages
=====================

Texting conversations from your Android device can be added to your timeline.


How to get it
-------------

1. Install the [SMS Backup and Restore](https://play.google.com/store/apps/details?id=com.riteshsahu.SMSBackupRestore) app from the Google Play Store. (The [Pro version](https://play.google.com/store/apps/details?id=com.riteshsahu.SMSBackupRestorePro) is well worth the few dollars if you use it more than once; it supports compression and has no ads.)
2. Use the app to create a backup of all your text messages. It can be saved to cloud storage services or directly on your phone. Whichever you choose, download the resulting file onto your computer.


Expected format
---------------

An XML file containing all SMS, MMS, and RCS messages.

The file extension must be one of:

- `.xml`
- `.zip` (containing the .xml file; the Pro version can do this)


Caveats
-------

As this data source has no way of indicating the source device's phone number, you will have to provide that phone number when you go to import. By default, your own phone number (if already in the timeline) will be used.