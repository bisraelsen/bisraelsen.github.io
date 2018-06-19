---
title:  "Some notes about my setup for running bash on windows"
date:   2017-02-20 20:04:23
comments: true
category: blog
tags: [Windows Linux Subsystem,bread crumbs]
---
I am going to put a few notes here about how I set up my bash environment on Windows 10.

* First you need to get "bash on ubuntu on Windows" onto your installation. [This page](https://gist.github.com/MadLittleMods/0e38f03774fb16e8d698175e505f1f3e) was pretty helpful.
* Installed neovim using `apt-get install neovim`
* From [this post](https://github.com/Microsoft/BashOnWindows/issues/637) I found out how to get x windows open
    * basically installed [VcXsrv](https://sourceforge.net/projects/vcxsrv/), added the `VcXsrv` shortcut to the startup folder to automatically start the server on startup
    * add `export DISPLAY=:0.0` to my `.bashrc`
* The default terminal for `bash.exe` wasn't great so I used [wsltty](https://github.com/mintty/wsltty)
    * I downloaded the `hacker` font from [NerdFonts](https://github.com/ryanoasis/nerd-fonts), which gives Powerline symbols, and other nice stuff
    * See [this issue](https://github.com/mintty/wsltty/issues/29) for how to add new fonts
* I am using auto-hotkey to get my shortcut key functionality that I am missing from stock Windows
    * This is to trigger always on top, which I really like especially when working on my laptop
    ``` If GetKeyState("Alt","P") ; This makes Alt-LShift-a the shortcut for always on top
        LShift & a:: Winset, Alwaysontop, , A
    ```
    * This is to launch some of my favorite applications, the ***your-app-id*** part below by creating a desktop shortcut for Google Keep and then looking at the shortcut properties.
    ``` #k:: ; Google Keep
        Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"  --profile-directory=Default --app-id=***your-app-id***
            Return

        #f:: ; File manager
            Run explorer.exe
            Return

        #w:: ; Chrome
            Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
            Return
    ```
* I installed tex-live in the lxss using [this](https://github.com/scottkosty/install-tl-ubuntu) script, and had to add the path in my `.bashrc` using:
    ```PATH=/usr/local/texlive/2016/bin/x86_64-linux/:$PATH
    ```

I'll keep trying to add stuff here as I find it. 
