---
title: Importing data
---

Importing data
==============

Add data to your timeline by clicking the "+ Import" button in the top-right corner. Some important things to know:

- **Imported data is copied into the timeline folder.** If you have a lot of data, make sure you have enough space on the device where your timeline is stored. Timelinize does not yet measure available space to protect you from running out.

- **Keep your original input files.** This application is still in development, so you may have to wipe your timeline and start over in a future update.

- **Timelinize does not modify, move, or delete input files.** Your files are considered read-only and are never modified or deleted.

- **Data is processed on-device.** Your data is processed locally/internally, and no part of it (not even metadata) is sent to any third party or remote service without your explicit consent. Some data sources or import jobs require _downloading_ data from remote servers, but we don't _upload_ your data. We strive to keep all processing functionality strictly local, but if that cannot be avoided, such features are configurable and only opt-in.

- **Backups are still necessary.** Timelinize is an archival tool, not a backup utility. Please back up your timeline(s) with a proper backup tool. We recommend [Backblaze](https://backblaze.com) and [restic](https://restic.net).

- **Timelinize does not encrypt your timeline.** Timeline files are just like any others on your computer or storage device, so keep that in mind when sharing the device with other people. Consider disk encryption if you want to protect your data if you lose physical control of your computer or hard disk.


FAQ
---


### My import job seems stuck (throughput drops to 0 for an extended period of time).

This is normal and has been observed for several reasons:

- **A large file is being processed.** Read and write times can be long on a single large file, like large videos for example. This can hold up the finalization of the batch.

- **Device write buffers are flushing.** Similar to the previous point, but applies more generally regardless of individual file size. On some OSes and file systems, writing large amounts of data can seem quick at first, but it's really just filling a buffer which is then flushed altogether, presumably for efficiency. When the buffer is full, it gets flushed to the storage device, which blocks writes until the buffer is emptied. (This is the same phenomenon that sometimes requires you to eject a storage device after using it: failure to eject before the write buffer has been flushed will result in a loss of that data because it hasn't been written to the disk.) You can verify this is what is happening by opening your operating system's Task Manager or System Monitor (or equivalent), and view the "Disk Write" (or equivalent) metric for the `timelinize` process. (You can also look at the device's LED to see if it's blinking, but that's not always a good indicator.) We know this write buffering is not always aesthetically pleasing, but it is implemented by the OS and/or file system, and it's largely out of our control. The best thing you can do is choose storage mediums, file systems, and buses/cables that support fast, long-running writes.

- **Data has to be imported in a certain order.** This is true, for example, with the classic Google Location History, which intermixes paths from different devices to preserve chronological order. Since our location processor requires sequential points _per path_, the importer has to scan for the next data point that comes from a specific device, so as not to mix paths.

- **Reading the data is slow.** Slow reads can also cause pauses; in particular, some data sources require downloading their content over a network before processing can proceed. For example, you would think importing contacts from a vCard file would be nearly instantaneous, but when contact pictures are specified as a remote URL in the vCard, those downloads can take time, causing the import to appear slow or stuck.

The only concerning pauses on an import job would be those in which no network or disk activity is observed for an extended duration, and/or where CPU usage is consistently exceptionally high (e.g. 100%).

There is one known edge case that has been observed on macOS: a dependency called `libvips`, which we love dearly, seems to hang on a syscall when loading an image (typically to generate a preview or thumbnail). This is rare, but seems to be a bug in libvips or the kernel (!?) related to concurrent use. Because `go-vips` (the Go wrapper library) is invoking C where the hang occurs, debugging is difficult. If you encounter this bug, restarting the program should get your import to resume approximately where it left off.


### Is my imported data protected?

Timelinize adopts a single-user model, mainly because the application is self-hosted and whomever administers it always has full access to all of the data.\* As such, it is up to you to protect your timeline data. For example, you could encrypt your hard drive if you're worried about losing physical control of it. Timelinize does set restrictive permissions on data files so that only the current OS user can access them, but this will not stop someone who boots into a live OS image or has admin privileges on your computer.

_\* We could employ some sort of complex homomorphic encryption scheme, with unrecoverable private keys for each user, but this would not only be volatile to data loss, it is also very technically difficult to securely share and de-duplicate encrypted data. Due to encryption's complexity and the self-hosted nature of the project, we're not even going there._


### How long do imports take?

That entirely depends on the nature of the data, how much there is, and the performance of your hardware. Photo libraries or any data set with images/videos or large files will take longer, and are bound by the I/O speeds of your device and computer. Smaller data points such as location tracks and chats/messages typically go the quickest. Social media data sources tend to be in the middle with a mix of media and text.

To get a rough idea: a plugged-in M2 Macbook Air can import about 1 million data points consisting of a 500 GB photo library, tens of thousands of messages and social media posts, and hundreds of thousands of location points -- between external USB 3.2 SSDs -- in about 2-3 hours. The same data set without the photo library -- so about 700,000 items -- takes around 10 minutes. On average, I expect about 50k-100k items processed per minute on that machine.


### How can I make imports faster?

I've put a fair amount of effort throughout the years to optimize Timelinize's import speed and reliability. While improvements can still be made in the processing pipeline, most imports are bottlenecked by hardware at this point.

Ensure your storage devices have fast read and write speeds, fast data interfaces (NVME, USB 3.1 Gen2 or newer; PCIe 5.x or newer, etc.), and sufficient thermal management.

A modern GPU will help a lot for quickly generating thumbnails and transcoding videos (but this typically happens after the import completes). 40-series or newer NVIDIA GPUs support codecs for more efficient thumbnails.

Modern Macs with Apple Silicon, especially the last few generations of chips, will also be blazing fast.

More CPU and RAM always helps, but I've also tried to adapt to varying CPU cores and reduce memory pressure as much as possible. Still, if you want things to go faster, opening more lanes can help.

The biggest wins for fast imports are fast storage devices and data buses, then a fast GPU (and preferably, neural chip too) for faster background tasks such as thumbnail and embedding generation.


### Do I have to keep the import job up on the screen?

Nope, feel free to click around and even close the tab. Just keep the server process running.


### What happens if the process exits, or I cancel a job, or there's an error?

Jobs checkpoint their progress. Individual data sources can also create more granular checkpoints as they iterate a list in a file, or files in an archive, for example (but not all do). Interrupted import jobs will resume from their last checkpoint. In most cases, a checkpoint is made every few seconds, so on average only a few seconds of work have to be repeated. (And duplicates are not imported.)

You can choose to restart or resume a failed or interrupted job. Resuming will start from the last checkpoint; restarting will clear the checkpoint and start over.


### Can I undo an import?

Not at this time. Imports are not strictly additive -- they can also update existing information, so in the general case, we can't simply delete data from an import to undo it. In the future, we may come up with a way to make imports undoable, or at least to preview some of the changes; but for now, best to create a testing timeline you can play with if you aren't sure about how to import a data set, and make regular backups of your timeline you can restore if an import goes sideways.


### Can I merge two photo libraries, e.g. Google Photos and Apple Photos?

Yes. You can configure what defines duplicate items ("unique constraints"), and how to handle duplicates ("update policies"). Default unique constraints include sensible things like timestamp, filename, content, etc. The default update policy is to skip duplicates (no updates). To merge photo libraries, you will want to customize both of these parameters.

To merge photo libraries like Google Photos and Apple Photos, customize the unique constraints and update policies to your liking. For example, I have successfully combined Apple and Google photo libraries with these unique constraints:

- Classification
- Filename
- Timestamp

Coordinates can optionally be used, if you trust them. I deselect "Content" because the photo files are seldom byte-for-byte identical across libraries. (Google Photos is notorious for re-encoding photos and videos.)

Then I set update policies:

- Update Content, keep the one from Apple Photos (higher quality)
- Update Metadata, keep the one from Apple Photos (more metadata)

You may also want to update Timestamp and Coordinates to fill them in if they are missing from the previous insert (like if only one data source has them).

Keep in mind that these settings apply to the entire import, so you may want to avoid importing other data sources that don't benefit from your custom settings for merging photo libraries.


### How precise do coordinates have to be to be considered identical?

Latitude/longitude coordinates are typically represented as decimals/floats, with up to 9 or so digits of precision behind the decimal point. That degree of precision is unnecessary and usually wrong, so while we will still store the full value, we only use the first few digits for comparison. Coordinates within about 1 meter will be considered identical.


### What is the difference between timestamp, timespan, and timeframe?

A timestamp is when the item occurred or originated. It is usually a specific moment in time, but in some cases, a time zone is not known, so the timestamp is a _wall time_ or _local time_.

A timespan is an end time, and is only valid in conjunction with a timestamp. When a timespan is set, the item goes from the timestamp to the timespan; i.e. the item spans time. This is typically the case when location points get clustered; or videos which start and end recording at different times; or an event on the calendar.

A timeframe is the end of a time interval, and like timespan, is only valid with a timestamp. When a timeframe is set, the item is said to have occurred throughout the interval from the timestamp to the timeframe. This is used when an item's date information is vague, such as only having a month and year: the timestamp would be the start of that month, and the timeframe would indicate the end of the month. The item occurred sometime in there, or throughout that month, but it's not clear exactly when. This is useful for documenting periods of time such as phases of life or historical records when exact dates aren't known.

It's invalid and ambiguous to have all 3 fields set.
