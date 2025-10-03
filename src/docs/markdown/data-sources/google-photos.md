---
title: Google Photos - Data Sources
---

Google Photos
=============

Add your Google Photos library to your timeline.


How to get it
-------------

1. Go to [takeout.google.com](https://takeout.google.com).
2. Under _Create a new export_, click _Deselect all_.
3. Scroll down and check the box by _Google Photos_.
4. Scroll all the way down and click _Next step_.
5. For _File type_, we **strongly recommend `.zip`** because it imports much faster than .tgz.
6. Increase the _File size_ to 50 GB so you have fewer files to download. Timelinize can handle large zip64 archives.
7. Click _Create export_ and wait for your download(s) to become available.


Expected format
---------------

Due to its large size, this export is usually split across multiple archive files. In that case, _the archive files MUST NOT be renamed_ because their names link each other as part of the same dataset. The filenames should look like this: `takeout-20240516T230250Z-001.zip` or like this: `takeout-20240516T230250Z-3-008.zip`.

Google Photos exports are in a subfolder `Takeout/Google Photos`. The archives as downloaded from Google Takeout can be imported directly. There is no need to extract the .zip files. If you downloaded .tgz files instead, extracting them first will help imports go _significantly_ faster, though it is not strictly required.

If you do choose to extract your archives, they should all be extracted into the same target folder.

Google Photos takeout truncates filenames to 50 characters including the extension, and Timelinize is designed to account for this. It requires sorting the files in each folder, which is why this import can be so slow with .tgz files. (The full filename is still be contained in the contents of the .json file, so that name is preserved when copying the file into your repository.)

Takeouts from the year 2015 and newer are supported.


What is imported
----------------

All picture and video files should be imported. Each file has a sidecar metadata file that is also incorporated into the timeline. As described above, it is imperative that you do not rename the archive files, because sometimes a photo and its metadata may be split into different archives, and Timelinize relies on the naming convention used by Google Takeout to correlate photo/video and metadata files across archives. As you import each archive file, Timelinize should gracefully combine them all into your timeline, linking each photo to its metadata.

Album information is basically preserved: photos/videos in the same folder will be added to the same album which is made according to the album metadata file.

Embedded photo and video metadata, if present, will be read and stored with the item as metadata in the database. This includes EXIF and XMP tags. Not all XMP formats are supported; some values are proprietary and vendor-specific.

Motion pictures / live photos from iPhone, Samsung, and Google phone cameras are supported.

Exports can include multiple copies of a photo or video along with its metadata. They may be in multiple albums, even implicitly-created albums, so they appear in multiple folders. As usual, Timelinize will not import exact duplicates into your timeline. There can also be original photos and their edits; Timelinize will keep both with a relation linking the two.


Caveats
-------

Google Photos splits each "item" into the content file and a metadata file. Sometimes, the two are not even in the same archive. Timelinize has been meticulously designed and tested to accommodate this, and it will import "partial items" at each file it visits, and merge the associated files as it progresses.

Further, the filename of the content is only reliably inside the metadata file. (Google Takeout tends to truncate long names and replace some characters in filenames within the archive.) This means that the import progress will not show filename information while importing the content, only the metadata.

Motion pictures, if not embedded within the image file itself, must be adjacent to the still image within the archive. (This is usually the case.) If the sidecar file appears only in a different archive or folder, it won't be linked as a motion picture.
