---
title:  "Connecting to Google Cloud Platform Compute Engine"
date:   2018-03-03 11:34:00
category: blog
tags: [Google cloud platform,bread crumbs]
---
I have recently began using Google Cloud Platform for my more demading computing needs. I have really liked it, and find it quite a bit easier to navigate than AWS. Anyway, connecting to the instance via the web browser is very nice, but it is also useful to be able to connect via ssh when I need to transfer files to/from my machine (I know there is a upload/download tool in the browser, but it is very cumbersome for operating on many files). Anyway, the answer to this is to connect directly to the instance via ssh, but there are a few steps to make this work.I

I am assuming you have already created an instance, and now just want to connect to the instance directly from your Ubuntu computer. I have also tried this from WSL (Windows subsystem for Linux), and I suppose it is fairly straight-forward for other linux distributions as well. Following the `Use another SSH client` dropdown link from the connect column in the `VM Instances` tab of the `Compute Engine` screen will point you in the right direction for what you need, but I found the documentation a little difficult to navigate.

* This [link][gcloud] was especially for finding out how to install the Google Cloud SDK. Basically:

    *  ```bash
# Create an environment variable for the correct distribution
export CLOUD_SDK_REPO="cloud-sdk-$(lsb_release -c -s)"
# Add the Cloud SDK distribution URI as a package source
echo "deb http://packages.cloud.google.com/apt $CLOUD_SDK_REPO main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
# Import the Google Cloud Platform public key
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
# Update the package list and install the Cloud SDK
sudo apt-get update && sudo apt-get install google-cloud-sdk
```

* Once that is done, then follow the instructions for initializing the SDK, which are lower on that same page.
* For some reason the VM that I created on GCP made a user name that was `firstname_lastname`, however when I try to connect using the default settings from the SDK it logs in to the VM using the user `firstname`. I found after some diffing that you can specify what user with the following command:
    ```bash
    gcloud compute ssh [user name]@[instance name]
    ```    
* auto mounting other volumes
    * add `/deb/sdb /home/user/mount_folder` to `/etc/fstab`
    
* Can upload/download files via:
    * [scp][scp] `gcloud compute scp USER@instance:/file/to/copy /path/to/place/copy`
    * [rsync][rsync] `gsutil rsync FOLDER gs://example-bucket/DESTINATION`
    * [mount bucket by hand][bucket_mount] `gcsfuse example-bucket /path/to/mount/point`, and unmount via `fusermount -u /path/to/mount/point`
    
----
I spent quite a while figuring this out but I think this is a lost cause--- it would have been nice

* Connecting VM to a Cloud Storage Bucket. Use [this link][file_transfer] and this [link][cloud_storage]
    * Need to set the `Storage` access to `Full` in the cloud API access scopes
    * Now you can create a directory on your VM and then connect it to the storage bucket by
    ```bash
    gcsfuse example-bucket /path/to/mount
    ```
    * In order to mount the bucket automatically on startup I tried to use [this link][bucket_mount], `uid` and/or `gid` can be obtained by `id -u USER` and `id -g USER` respectively. `uid` and/or `gid` can be used (both don't have to be used).
        ```bash
        example-bucket /mount/point gcsfuse rw,uid=1001,gid=1001
        ```
        This approach DID NOT work. I also tried adding a startup script, but it didn't work either. It seems like the startup script is running with sudo permissions, which messes up `gcsfuse`. I found another thread [here][auto-mount] that gives another method
        * add `example-bucket /mount/point gcsfuse rw,noauto,user` to `/etc/fstab`
        * then add `mount example-bucket` to `/etc/rc.local`
 

[gcloud]: https://cloud.google.com/sdk/docs/quickstart-debian-ubuntu
[cloud_storage]: https://cloud.google.com/storage/docs/gcs-fuse
[file_transfer]: https://cloud.google.com/compute/docs/instances/transfer-files#gcstransfer
[bucket_mount]: https://github.com/GoogleCloudPlatform/gcsfuse/blob/master/docs/mounting.md
[scp]: https://cloud.google.com/sdk/gcloud/reference/compute/scp
[rsync]: https://cloud.google.com/storage/docs/gsutil/commands/rsync