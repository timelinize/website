---
title: vCard - Data Sources
---

vCard
=====

vCard is the recommended format for importing contacts due to broad compatibility.

How to get it
-------------

(TODO: Specific instructions for various services/apps.)


Expected format
---------------

The file(s) must have one of the following extensions:

- `.vcf`
- `.vcard`

The contents of the file must conform to the vCard specification, [RFC 6350](https://datatracker.ietf.org/doc/html/rfc6350).

Profile pictures may optionally exist next to the vCard file in the form of the contact's FN (Formatted Name) with a `.jpg` extension.

What is imported
----------------

- Names
- Email addresses
- Phone numbers
- Picture
- Gender
- Birthdate
- Anniversary
- URLs
- Title
- Role
- Note

A few extension fields are also supported. More are planned if requested.

For each contact with a FN (Formatted Name) field, a .jpg picture file in the same folder as the vcard file, with the contact's name as the file name, will be used as the contact's profile picture. Otherwise, the photo/logo URL will be used to download the image.
