---
title: Install
---

Install
=======

**Timelinize is still in early development. You will encounter bugs and missing functionality.** I hope you'll be patient with the development process and participate in the project. Thanks for being a part of it!

System requirements
-------------------

- Operating system:
	- macOS 14 or newer
	- Windows 10 or newer
	- Linux
- [vips](https://www.libvips.org/) (for photo processing)
- [ffmpeg](https://ffmpeg.org/) (for video processing)
- [uv](https://docs.astral.sh/uv/) (for semantic search)
- Recommended:
	- GPU (NVIDIA 20-series or newer; 40-series for faster thumbnails) or Apple Silicon (M2 or newer)
	- [libheif](https://github.com/strukturag/libheif) if you have an iPhone
	- 10+ GB free space for semantic/AI features
	- Fast storage devices and data buses (SSDs over USB 3.1 Gen2+, NVME, PCIe 5+, etc.)

See the instructions below to help you get the dependencies installed for your platform.

Download
--------

We recommend most users download the [latest release](https://github.com/timelinize/timelinize/releases/latest) for their platform. Only download development builds if you want the most recent patches (and bugs) that haven't yet been released.

<a href="https://github.com/timelinize/timelinize/releases/latest" class="button"><b>Latest release</b> (recommended)</a>
&nbsp; &nbsp;
<a href="https://github.com/timelinize/timelinize/actions/workflows/release.yml" class="button">Development builds</a>

Then be sure to follow the instructions below to run it.

<div class="box box-filled box-red">
	<div class="box-title">
		Pre-release disclaimer
	</div>
	<p>
		Keep your source data. Because Timelinize is still in development, you will likely need to start over with a new timeline each time you run a new version.
	</p>
</div>

## Instructions

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Windows</b>
	</div>
	<div class="expander">
<!-- powershell -c "irm https://astral.sh/uv/install.ps1 | iex" -->

1. Install [vips](https://www.libvips.org):
	1. Go to the [latest vips release for Windows](https://github.com/libvips/build-win64-mxe/releases/latest).
	2. Download the asset for your platform architecture with **-all-** in the name.
	3. Extract the archive, or at least the `bin` subfolder, to a path of your choosing.
	4. Add the full path of the extracted `bin` folder to your `Path` environment variable. (An easy way is to press the <kbd>⊞ Win</kbd> key, type "env", and hit Enter, then proceed in the GUI.)
	5. Restart any open shells/command prompts, and enter `echo %Path%` to ensure the environment has been updated.
2. To process photos/videos from iPhones, install [libheif](https://github.com/strukturag/libheif) by following [their instructions](https://github.com/strukturag/libheif/blob/master/README.md#windows).
3. Install [ffmpeg](https://ffmpeg.org/):
	<pre><code class="cmd">curl.exe https://webi.ms/ffmpeg | powershell</code></pre>
4. Install [uv](https://docs.astral.sh/uv/):
	<pre><code class="cmd">powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"</code></pre>
5. Download Timelinize (see above).
6. Extract the program, `timelinize.exe`.
7. Run the program (from the command line, for logs). We are not yet code-signed, so you will have to override built-in OS protections:
	- You will get a warning that this software is not signed. Click _More info_ and then _Run anyway_.


</div>
</div>

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Mac</b>
	</div>
	<div class="expander">

1. Install [libvips](https://www.libvips.org/):
	<pre><code class="cmd"><span class="bash">brew install vips</span></code></pre>
2. To process photos/videos from iPhones, install [libheif](https://github.com/strukturag/libheif):
	<pre><code class="cmd"><span class="bash">brew install libheif</span></code></pre>
3. Install [ffmpeg](https://ffmpeg.org/):
	<div><pre><code class="cmd"><span class="bash">brew install ffmpeg</span></code></pre></div>
	or
	<pre><code class="cmd"><span class="bash">curl https://webi.sh/ffmpeg | sh</span></code></pre>
4. Install [uv](https://docs.astral.sh/uv/):
	<pre><code class="cmd"><span class="bash">curl -LsSf https://astral.sh/uv/install.sh | sh</span></code></pre>
5. Download Timelinize (see above) and extract the archive to expose the binary.
6. We are not yet code-signed, so you will have to override the OS to run the app: follow [these instructions](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac) to run apps from unidentified developers (that's me!).

### Additional steps

Mac has a whole extra layer of kernel-level protections that go beyond posix-style file permissions, users, and groups, that will likely require additional steps:

7. If you get an error that says Timelinize "is damaged," that's a lie: the checksums probably match; the real problem is that Apple has placed it in "quarantine" because it was downloaded. You can either:
	- Do a **two-finger** ("right") click and select **Open**, twice (once for the warning, the second time to open it)
	- Or, open Terminal and run this command:
		<pre><code class="cmd"><span class="bash">xattr -d com.apple.quarantine ~/Downloads/timelinize</span></code></pre>
		(adjust path as needed).
8. If you get errors when opening or creating a timeline, when planning an import, or right after an import starts, Apple is likely blocking access to your files (especially if the error is something like "operation not permitted"). The easiest way around this is to give Terminal explicit access in Settings -> Privacy & Security. For access to everything, find "Full Disk Access" and add/enable Terminal:
	![Full Disk Access for Terminal](/resources/images/docs/full-disk-access.png)
	If you prefer, you can be more selective about what you grant access to by selecting more specific data instead, such as Photos, Contacts, or Files & Folders. Remember to grant it for Terminal, since Timelinize runs in the Terminal.

</div>
</div>

<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Linux</b>
	</div>
	<div class="expander">

1. Install [libvips](https://www.libvips.org/):
	- Debian/Ubuntu/Raspbian:
	  <pre><code class="cmd"><span class="bash">sudo apt install -y libvips</span></code></pre>
	  <!-- If that version is too old: "sudo add-apt-repository ppa:dhor/myway && sudo apt update", then vips package will be available to install -->
	- Arch:
	  <pre><code class="cmd"><span class="bash">sudo pacman -S libvips</span></code></pre>
2. To process photos/videos from iPhones, install [libheif](https://github.com/strukturag/libheif):
	- Debian/Ubuntu/Raspbian:
	  <pre><code class="cmd"><span class="bash">sudo add-apt-repository ppa:ubuntuhandbook1/libheif
	  sudo apt update
	  sudo apt install libheif1 libheif-plugin-libde265</span></code></pre>
	- Arch:
	  <pre><code class="cmd"><span class="bash">sudo pacman -S libvips</span></code></pre>
3. Install [ffmpeg](https://ffmpeg.org/):
	- Debian/Ubuntu/Raspbian:
	  <pre><code class="cmd"><span class="bash">sudo apt install -y ffmpeg</span></code></pre>
	- Arch:
	  <pre><code class="cmd"><span class="bash">sudo pacman -S ffmpeg</span></code></pre>
4. Install [uv](https://docs.astral.sh/uv/):
	<pre><code class="cmd"><span class="bash">curl -LsSf https://astral.sh/uv/install.sh | sh</span></code></pre>
5. Download Timelinize (see above).
6. Extract the program, and make sure it is executable: `chmod +x ./timelinize`
7. Run `./timelinize`. A browser tab should open automatically.

</div>
</div>


<div class="expander-container content-flow">
	<div class="expander-toggle">
		<b>Docker</b>
	</div>
	<div class="expander">

Pull the [automated Docker image](https://github.com/timelinize/timelinize/pkgs/container/timelinize) from GHCR:

<pre><code class="cmd"><span class="bash">docker pull ghcr.io/timelinize/timelinize/</span></code></pre>

It can be run like so:

<pre><code class="cmd"><span class="bash">docker run -p12002:12002 \
	-v /path/to/repo:/repo \
	-v /path/to/config:/app/.config/timelinize \
	ghcr.io/timelinize/timelinize</span></code></pre>

That will run Timelinize on port `12002`, with the timeline repository mounted at `/path/to/repo` (change it to suit your needs) and the configuration directory mounted at `/path/to/config` (change it).
When using Docker bind mounts like above, make sure the directories exist on your host machine and that they belong to the user ID 1000.

<div class="box box-filled box-red">
	<div class="box-title">
		File system access
	</div>
	<p>
		Because Timelinize is running inside a Docker container, it won't have access to your host's filesystem. You will need to mount the directories you want to access as volumes, to be able to load data into Timelinize.
	</p>
</div>

</div>
</div>

