---
title: Apple Photos - Data Sources
---

Apple Photos
============

Import your Apple Photos library, whether on your Mac or copied elsewhere.

The default setting in the Photos app is to optimize storage, which only downloads some original files. (The rest are kept in the cloud and only downloaded when needed.) Timelinize can't access your iCloud account, so make sure your local photo library includes _all_ your original files. You will see warnings if original files are missing, which means you need to adjust a setting in your Photos app (see next section).


How to get it
-------------

1. Open the Apple Photos app on your Mac.
2. In the menubar, go to Photos -> Settings (or press `Cmd+,`). Go to the iCloud tab.
3. **Ensure that "Download Originals to Mac" is selected.** This downloads your photo library locally, which Timelinize will need to import the files. Otherwise, you will only get a subset of your library since Apple will store most of your photo library in the cloud to save space. Make sure you have enough disk space.
    ![Settings app](/resources/images/docs/applephotos-setting.png)
4. Allow time for Photos to download your entire library.

When you go to import your library in Timelinize, simply choose the photo library "package" (a folder that looks like a regular file in Finder) and Timelinize will detect it. The default photo library is at `Pictures/Photos Library.photoslibrary` in your home folder. (Depending on settings, Finder might not show the file extension, so it might just show up as `Photos Library` in the Pictures folder.)

If you are not on a Mac, you can copy the photo library from any Mac and import it on another computer.

Expected format
---------------

Keep the package intact without any modifications. There should be a photos database at `database/Photos.sqlite` within the package. The original media files should be in the `originals` folder in the package.


What is imported
----------------

All photos and videos, along with live photo sidecar files, that have been downloaded locally to the library are imported.

We also import various metadata found in the files themselves and also in the library database.

The database may also contain information about who or what is in each photo. Timelinize adds relations to entities so you can search by who is in each photo, including pets. Some of this metadata includes face coordinates, facial features such as smiles, closed/open eyes, facial hair, glasses, and more. This data is preserved with your timeline. (There is still much more data in the database we do not yet import, but we could, if anyone wanted to contribute an enhancement.)