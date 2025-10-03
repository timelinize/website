---
title: Contact list - Data Sources
---

Contact list
============

Contact lists, also known as address books, contain people's information in a delimited text file. They can be opened in a text editor or a spreadsheet program like Excel, Numbers, Sheets, LibreOffice, or Lotus 1-2-3 to verify its contents.

How to get it
-------------

Contact lists can often be downloaded or exported from various cloud services (email, VoIP, ...) and apps (Google Contacts, Outlook, ...). Some instructions are provided here for common sources:

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Google Contacts</b>
	</div>
	<div class="expander">

1. Go to [contacts.google.com](https://contacts.google.com).
2. Click the export icon at the top-right side of your contact list.
3. Click _Export_.

	</div>
</div>

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Google Takeout</b>
	</div>
	<div class="expander">

<div class="box box-filled box-red">
	<div class="box-title">
		Be advised
	</div>
	<p>
		Contact list files exported from Google Takeout have been reported to be incomplete. Use <a href="vcard">vCard</a> when possible instead.
	</p>
</div>

1. Go to [takeout.google.com](https://takeout.google.com).
2. Under _Create a new export_, click _Deselect all_.
3. Scroll down and check the box by _Contacts_.
4. The default format will be vCard (which is advised), but if you want a CSV contact list, click _vCard format_ and choose _CSV_ in the list, then hit _OK_ to confirm.
5. Scroll all the way down and click _Next step_, then _Create export_.

	</div>
</div>


Expected format
---------------

Contact list files must have one of these file extensions:

- `.csv`
- `.tsv`

The field delimiter must be one of:

- `,` (comma)
- <code>   </code> (tab)
- `;` (semicolon)

The first row must be the header row with field/column names, and the first few rows must have the same number of columns.

Specific fieldsets are recognized for popular services/apps:

- Google Contacts

But in general, supported fields include:

- Full name
- First name
- Last name
- Birthday
- Phone number
- Email address
- Gender
- Picture (can be either a URL or the base64-encoded picture bytes)

along with some variations for each field name (e.g. _Birthday_ could be _Birthdate_, _Date of birth_, _DOB_, etc.).

