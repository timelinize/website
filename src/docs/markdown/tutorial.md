---
title: First run tutorial
---

First run tutorial
==================

**First you need to [acquire your data](/docs/data-preparation).** If you don't have your datasets yet, you will need to get them from various data sources. The more kinds of data you add to your timeline, the better it gets! We highly recommend a mixture of:

- [Contact lists](/docs/data-sources/contact-list) or [vCards](/docs/data-sources/vcard)
- Social media ([Facebook](/docs/data-sources/facebook), [Twitter](/docs/data-sources/x), etc.)
- Location history ([Google Timeline](/docs/data-sources/google-location-history), [GeoJSON](/docs/data-sources/geojson), [GPX](/docs/data-sources/gpx), etc.)
- Messages/texts ([Android](/docs/data-sources/android-text-messages), [iPhone](/docs/data-sources/iphone), etc.)
- Photo/media library ([Google Photos](/docs/data-sources/google-photos), [generic photo albums](/docs/data-sources/media), etc.)

Once you have some data to import, run Timelinize for the first time. You will be asked to select a folder to open or create a timeline.


## Creating a timeline

A timeline is simply a folder that contains your data. The folder you choose should either not yet exist or should be empty. **Make sure you have enough disk space where you put your timeline.** Imports copy your data into the timeline, so you will need a lot of disk space to import a lot of data.

Choose a folder where you want your timeline to be. If the folder isn't empty, Timelinize will create a timeline in a new subfolder called `My Timeline`.

Timeline tips:

- **Fill out the form about yourself completely when you create the timeline.** Though not strictly required, adding that information now helps the program identify you in your own data.
- When using new versions of the program, it is best to start over with a new timeline, because the app is still being developed and changes could break the program with older timelines.
- Timeline folders are portable! You can move them around to other computers or disks. Don't modify the contents of a timeline manually.

## Import

Click the blue "+ Import" button in the top-right to start importing your data that you already [prepared](/docs/data-preparation).

Choose a file or folder that is or contains one or more of your datasets. If it is a folder, Timelinize can recursively scan that folder tree for files it recognizes and automatically generate an import plan. If you select "Traverse archives," Timelinize will even scan within archive files (zip/tar/compressed tar) to find supported data.

After an import plan has been generated, the dialog will disappear and you'll see the data sources that were recognized. You can customize some data sources or remove files you don't want imported.

Customize the import using the options to the right, then click "Start Import" to begin importing. You should see live import progress on the next page. After an import finishes, it will automatically generate thumbnails and embeddings on the imported items.

**KEEP YOUR ORIGINAL INPUT DATA.** Do not delete your source data. Timelinize is still unstable software. So throughout your testing, if you delete old timelines, be sure to keep your original source data!

### Duplicate entities

As you import data from various sources, you may notice that a single person -- including yourself -- appears multiple times as different entities (for example, "Matthew" on Google and "Matt" on Twitter). This is common and is normal when there's not enough information from the data source to link that representation of the person to what's already in your timeline. For example, Bob may have user ID 12345 on Service A, but on Service B, Bob is known as 98765. Unless Timelinize has a profile for Bob that links the two accounts, there's no way to know they're the same Bob.

Common ways of linking entities across data sources are global identifiers such as phone numbers and email addresses. Importing contact lists is a great way to auto-link identities across data sources.

For everything else, there is a Merge button which you can use to de-duplicate entities. You can find it on the Entities page. It's primitive currently, but it works. In the future, this process will be way less tedious and more automated, including showing helpful suggestions.

## Explore!

After data is imported, click around under the "Explore" menu option to view your data in various ways. There is also a more "raw" listing of all your data under the "Items" and "Entities" pages. You can also explore some types of data before the import is finished.

Have fun!

## Feedback

This is perhaps the most important part of the testing phase.

Head over to [our Discord](https://discord.gg/C9dCnTW6qV) and submit your feedback:
- Why are you interested in or excited about this?
- What were your first impressions seeing your data?
- What do you like / what went well?
- What could go better? (Note that "polish" is not a priority until later.)
- What is most important to you in terms of functionality and features?
- Any feature ideas / suggestions / requests? Data sources you want?
- I'm already aware of the lack of functionality and several broken UI elements. It's a WIP.
- For now, you don't need to try to break the app. (You will succeed.) Just let me know your thoughts and wishlist, etc. Or crashes and major problems.

I hope you will stay involved with the discussion and the ongoing progress of the application to launch! Thank you!
