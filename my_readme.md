# This includes some instructions for how to compile the site, since it is not a straightforward process.
I need to precompile the site before I push it to Github because I am using an unsupported plugin in order to allow pinning of my posts (i.e. the google scholar profile)

Now I'm trying to remember how it all works :-)

* From the source directory `bisraelsen.github.io`
    * you can preview the site by running `bash test_build.sh` and then using `http://Ruby-brettisraelsen613580.codeanyapp.com:4000` (the link found in the "info" selection of the Ruby project, with the port added on to the end)
    * After the changes look good in the preview, use `rake build`
    * This directory is on the `source` branch, and changes should be committed and pushed to the Github source branch after the `rake build` command

* From the compiled directory `compiled_site`
    * this is the `master` branch, this is the branch that Github uses to publish the website
    * after running `rake build` in the source directory, changes here need to be committed and pushed.
    
Notes: I just spent forever trying to get the page to update. I ended up clearing the entire `master` branch and re-pushing the build site. I also had to clear the cache in chrome. After that it worked... maybe I only needed to clear the cache? Probably, but I am not going to try and figure it out again.

On Chrome the cache can be cleared by using f12 to acces developer mode, then long clicking the refresh button, and selecting `Empty cache and hard reload`.
    
That should be it!