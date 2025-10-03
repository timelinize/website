---
title: Media - Data Sources
---

Media
=====

Photos, videos, and audio files, or folders comprised mostly of such files.

This data source imports what might be considered "generic" photo albums/libraries created by simply putting them into folders. As such, it works with almost anything media-related, and may even match folders that aren't intended to be imported as photo albums.


How to get it
-------------

Make a folder/directory with images, videos, and/or audio files, or get one by downloading or copying it from somewhere else.

For example, if you have a digital camera, you would copy the files off its memory card into a folder on your computer.

TODO: Specific instructions for common apps/services.


Expected format
---------------

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-photo"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8h.01" /><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" /><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" /><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" /></svg>
		<b>Images</b>
	</div>
<div class="expander">
	
Images must have one of these file extensions (case-insensitive) that matches its format:

- .arw
- .bmp
- .cr2
- .crw
- .dcr
- .dng
- .erf
- .gif
- .heic
- .heif
- .hif
- .jpeg
- .jpe
- .jpg
- .k25
- .kdc
- .nef
- .orf
- .pbm
- .pef
- .pgm
- .png
- .pnm
- .ppm
- .raf
- .raw
- .sr2
- .srf
- .svg
- .tiff
- .webp

If the image has a motion picture, it should either be embedded with an `ftypisom` or `ftypmp4` header, or if they are HEIC images, there should be a sidecar video of the same name but with a .MP4 extension.

</div>
</div>

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-movie"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 4l0 16" /><path d="M16 4l0 16" /><path d="M4 8l4 0" /><path d="M4 16l4 0" /><path d="M4 12l16 0" /><path d="M16 8l4 0" /><path d="M16 16l4 0" /></svg>
		<b>Videos</b>
	</div>
	<div class="expander">
	
Videos must have one of these file extensions (case-insensitive) that matches its format:

- .3g2
- .3gp
- .3gpp
- .asf
- .avi
- .divx
- .flv
- .m2t
- .m2ts
- .m4v
- .mkv
- .mov
- .mp
- .mp4
- .mpeg
- .mpg
- .mts
- .vob
- .wmv 

	</div>
</div>

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-music"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M9 17v-13h10v13" /><path d="M9 8h10" /></svg>
		<b>Audio</b>
	</div>
	<div class="expander">
	
Sound files must have one of these file extensions (case-insensitive) that matches its format:

- .aa
- .aac
- .aax
- .aiff
- .alac
- .au
- .flac
- .m4a
- .m4b
- .m4p
- .mogg
- .mp3
- .oga
- .ogg
- .wav
- .wma  

	</div>
</div>


Options
-------

#### Use filepath time

If enabled, try to find a timestamp or timeframe from the file path (useful if photos are organized into folders by date and may not have embedded timestamps). Can sometimes lead to false positives if file paths ambiguously look like date components.

#### Date range

If specified, this is the expected timeframe for the media (typically photos).

If more than one timestamp is available, this date range helps the importer select the right one. A timestamp within this range will be preferred over one not in the range. If both timestamps are either in or out of the range, then the configured range will be ignored in the choice of timestamp.

This is particularly useful when importing scanned photos. The scanner may embed the scan time, but if they've been organized into folders by year, then the date from the filepath would be more correct. When importing the scanned photos, you'd set a date range comprising the years the scanned photos were taken, not scanned. Then, Timelinize will properly choose the date from the filepath.


#### Folders are albums

If enabled, folders/directories are treated as albums, and the name of the folder becomes the album name. Items within that folder are organized into the album on the timeline.


#### Owner

Select the owner of the photos.



What is imported
----------------

Metadata embedded as EXIF or XMP is extracted and saved along with each item. Metadata extraction is a best-effort process, as some vendors' metadata is proprietary and undocumented. Timelinize does not strip metadata from files (or alter any incoming data in general).

Live photos (i.e. motion pictures, small videos associated with a photograph) are supported from:

- Google Photos ("MVIMG" and "MP" JPEGs)
- Apple (.HEIC + .MOV/.MP4)
- Samsung (JPEG)

If the live photo is a sidecar file (Apple's HEIC + MOV/MP4), it will be imported as a separate item with a relation linking it to the main photo, if it's in the same folder. If the live photo is embedded into the image file, the image is simply imported as a single item. In both cases, the motion photo can play in the UI the same way.

Sidecar .xmp files are not yet supported, but it's planned.


Media timestamps
----------------

Timestamps for media files may come from 3 sources, none of which are always correct:

- The embedded metadata like EXIF or XMP. This is the preferred timestamp source when available.
- The filepath. Useful if media is organized into folders by date (e.g. `Scanned/1959/3 March/...`)
- The file modification time ("modtime"). This seldom has any correlation to the contents of the file but may be better than nothing.

When importing with this data source, you can choose whether to accept external timestamps. This may be useful for a number of reasons:

- The photos were processed with software that didn't preserve the embedded timestamps.
- The files were generated from software or a service such as Google Photos that didn't embed a timestamp, but does set the modtime of the creation to the original photo when you download it.
- The photos are organized into folders by date.

Scanned media
-------------

In general, it is near-impossible (without advanced machine learning techniques) to accurately detect scanned images versus photos captured directly with a digital camera. Scanners are not consistent with image metadata. Scanned images may depict scenes from decades earlier yet the embedded timestamp, if any, will often be the time of the scan. This is understandable, as the scanner has no idea when the photo was originally taken unless the user inputs it into the scanning software. If that's the case, and the proper date is embedded, great!

But that is rare. Usually, you'll have a folder of scanned images, hopefully organized by date somehow, such as "1972/September/scanned_image_34.jpg". Timelinize can extract the timestamp in this folder path, but if the scanner embedded the date of the scan into the image, Timelinize would typically prefer that, unable to know which is correct.

When you import media, you can specify a date range for a preferred timestamp. If you specify an end year of 1990, and an item has an embedded timestamp in 2021, but a folder timestamp in 1972, then it will use the 1972 timestamp. This can be very helpful for importing scans correctly if your photos are organized by date.


Screenshots
-----------

Currently, this importer makes no distinctions between photos and screenshots/screencasts; they are all imported the same.

TODO: In the future, add some filters to skip/include items (esp. by filename); for example, skip files containing "Screenshot" in the name...
