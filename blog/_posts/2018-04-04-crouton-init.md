---
title:  "Tweaks for Crouton on my Pixelbook"
date:   2018-04-10 12:58:00
category: blog
tags: [crouton,bread crumbs]
---
Some directions on what I did to set up Crouton on my Pixelbook

* Follow directions to get gcloud up and running. Those are basic steps to get my development environment up. This includes `git`, `nvim`, `texlive`, `tmux`, and `julia`

There are a couple other nice things:

* For some reason I needed to fix the locale on the xenail machine. This involved following directions from [this post][1]

```bash
sudo apt-get install locales    
sudo dpkg-reconfigure locales   # ... and selected en_US fonts, using *space* to select
multiple. make sure to select ok, by navigating with tab. should be asked to set a default.
select the en_US.UTF-8, and that worked for me
```

* [This page][2] was useful for the initial setup of Crouton. Especially this line of code, which makes `xiwi` the default when starting `xfce4`. The problem with the default is that `startxfce4` opens in something like a guest screen, totally separate from the main screen. I ran into problems with getting multiple screens, and other things, so using `xiwi` (i.e. linux windows within chrome-os) makes things pretty nice.This
    ```bash
    sudo sh ~/Downloads/crouton -t xiwi -u -n xenial
    ```
    
* I needed to `sudo apt-get install bash-completion` to get autocompletion to work for things like `apt-get install`.
* I manually installed the `Hack` Nerd font to get special characters (i.e. powerline). Download the font from [here][3]
* I got tired of typing `sudo startxiwi xfce4-terminal` all the time so I added an alias to the crouton shell in the `.bashrc`. When opening the crouton shell from the chroot it automatically enters the root directory. In order to get to the home directory just type `cd`. That changes the terminal prompt from `chronos@localhost / $` to `chronos@localhost ~ $`. Once there add `alias xterm="sudo startxiwi xfce4-terminal"` to the `.bashrc` file. Next time just type `xterm` once in the shell and you just saved yourself a bunch of typing.

[1]: https://github.com/dnschneid/crouton/issues/74
[2]: https://www.theverge.com/2017/11/16/16656420/google-pixelbook-chromebook-development-linux-crouton-how-to
[3]: https://nerdfonts.com/