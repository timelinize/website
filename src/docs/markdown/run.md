---
title: Run Timelinize
---

Run Timelinize
==============

Once you have the Timelinize binary, you're ready to run it! (There's no formal install process.) 

You may need to ensure the Timelinize binary has the executable permission bit set (`chmod +x`)

We recommend running Timelinize from the terminal or command line so you can view log output if necessary.

Be aware Timelinize will open a web browser tab. (Closing the tab does not stop the application, so you can reopen it later.)

**We are not code-signed yet.** You may have to override built-in OS protections:

### Linux

Execute `./timelinize_alpha` from the terminal. You can also do it by clicking the binary in your file browser GUI, but we recommend the terminal during alpha versions so you can see any error messages in the logs.

### macOS

Follow [these instructions](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac) to run apps from unidentified developers (that's me!). If the error you get says that Timelinize "is damaged," that's a lie: checksums probably match; the real problem is that Apple has placed it in "quarantine" because it was downloaded.

You can either:

1. Do a **two-finger** click and select **Open**, twice (once for the warning, the second time to open it)
2. Open Terminal and run this command:
   <pre><code class="cmd"><span class="bash">xattr -d com.apple.quarantine ~/Downloads/timelinize_alpha</span></code></pre>
   (adjust path as needed).

It should finally run, but if you can't open or create a timeline, Apple may be blocking access to your disk. The easiest way around this is to give Timelinize.app "Full Disk Access" in System Settings (or at least access to folders you'll be using).

### Windows

You will get a warning that this software is not signed. Click "More info" and then "Run anyway." If it complains about a virus, it's just because of libheif.js which is embedded to decode HEIC images, and is not a virus.


## AI setup

The first time you run Timelinize, it will download and install a component that powers its semantic search / intelligent features. This download may be quite large (hundreds of MB) and could take a few minutes. After that completes its installation, the application may need to be restarted. This is still a work-in-progress and will be improved in the future so this isn't necessary.