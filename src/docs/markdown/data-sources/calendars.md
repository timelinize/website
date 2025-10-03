---
title: Calendar - Data Sources
---

Calendars
=========

Calendars can be imported from iCalendar (`.ics`) files, a common serialization format for calendar programs.


How to get it
-------------

Calendar files can be exported from most calendaring apps or scheduling services.

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Google Calendar</b>
	</div>
	<div class="expander">

TODO:...

</div>
</div>

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Apple Calendar</b>
	</div>
	<div class="expander">

TODO:...

</div>
</div>


Expected format
---------------

Calendar files must have the `.ics` file extension.

The file contents must mostly conform to the 2009 iCalendar specification, [RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545).


What is imported
----------------

Only VEVENT items are currently supported. The UID field must be reliable because it is treated as an item's unique ID.

The item content is a concatenation of the event's SUMMARY and DESCRIPTION fields. Items span the DTSTART and DTEND fields. LOCATION (a string) is stored as metadata, while GEO is stored as location coordinates.

The owner of each item will be populated from the ORGANIZER field, unless it is empty, in which case a default fallback entity will be assigned.

TODO: Attendees, attachments, and other fields