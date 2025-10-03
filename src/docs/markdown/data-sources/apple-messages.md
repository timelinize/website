---
title: Apple Messages - Data Sources
---

Apple Messages
==============

Add all your conversations from the Apple Messages app (formerly iMessage), to Timelinize.


How to get it
-------------

Running Timelinize on your Mac, you can easily bring in your content from the Messages app.

When you go to import, simply choose the folder where the Messages database is stored. The default location on Macs is `Library/Messages` in your user/home folder.

If you are not running Timelinize on a Mac, you can copy that `Messages` folder to another computer and import it.


Expected format
---------------

There should be a file called `chat.db` in the folder, which should be a SQLite database.


What is imported
----------------

Timelinize imports messages, the basic information about people involved with each message (name and phone number or email address), emoji reactions, and most attachments. We could use help with importing a richer set of the data, so if you would like to contribute, please [get involved](https://github.com/timelinize/timelinize)!
