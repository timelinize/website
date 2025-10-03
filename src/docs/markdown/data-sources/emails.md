---
title: Emails - Data Sources
---

Emails
======

Emails can be imported from email and mailbox files.


How to get it
-------------

Emails can be exported from many email apps, including:

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Gmail</b>
	</div>
	<div class="expander">

TODO:...

</div>
</div>

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Outlook</b>
	</div>
	<div class="expander">

TODO:...

</div>
</div>

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Apple Mail</b>
	</div>
	<div class="expander">

TODO:...

</div>
</div>


Expected format
---------------

Files must have one of the following file extensions:

- `.eml`
- `.mbox`

The contents of files must be MIME-encoded emails that conform to the 1996 standard, [RFC 2047](https://datatracker.ietf.org/doc/html/rfc2047).

What is imported
----------------

The subject and body of emails are concatenated with a newline to become the content of the item. The sender of the email becomes the owner of the item, and email items point to each recipient in the database.

TODO: email headers, customization (separate subject as metadata, etc.)...