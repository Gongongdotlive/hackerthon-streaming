The first thing we must do is create a folder for each Virtualhost we want to create. This is basic to have every website or web application apart.

Also, we must take into account that it is recommended that the name of the folder is the same as the name of the virtual host. In my case, I have chosen “gongong.live” and “www.test2.osradar.lan“. You can choose whatever you want.
```bash
:~$ sudo mkdir -p /var/www/gongong.live
:~$ sudo mkdir -p /var/www/html/www.test2.osradar.lan
```

Then, for all applications and websites to run properly, you need to change the permissions to the virtual host folders.
```bash
:~$ sudo chmod -R 755 /var/www/gongong.live
:~$ sudo chmod -R 755 /var/www/html/www.test2.osradar.lan
```
Also, you have to change the owner of the folders. In the case of Debian, ownership must be given to the user and group www-data.
```bash
:~$ sudo chown -R www-data:www-data /var/www/gongong.live
:~$ sudo chown -R www-data:www-data /var/www/html/www.test2.osradar.lan
```
To demonstrate the proper functioning of the virtual hosts, create an index.html file in each folder and add the following for the first host:
```bash
:~$ sudo nano /var/www/html/gongong.live/index.html
```

```html
<html>
<body>
welcome to gongong.live
</body>
</html>
```
And
```bash
:~$ sudo nano /var/www/html/www.test2.osradar.lan/index.html
```

```html
<html>
<body>
welcome to www.test2.osradar.lan 
</body>
</html>
```

For the second one.

So, save the changes and close the file.
Creating virtual hosts on Lighttpd (II)

The folders and files are ready, now we have to make some changes for Lighttpd to interpret them.

It’s a good idea to create a folder called vhosts.d in /etc/lighttpd/ and place all the virtual host configuration files there. As with the folders, it’s a good idea to have one file for each virtual host.
```bash
:~$ sudo mkdir -p /etc/lighttpd/vhosts.d/
```
However, for all these changes to be made, the Lighttpd configuration file must be modified. So let’s do it.
```bash
:~$ sudo nano /etc/lighttpd/lighttpd.conf
```
And at the end of the file add the following:

```bash
include_shell "cat /etc/lighttpd/vhosts.d/*.conf"
```
1.- Adding the virtual host configuration directory
1.- Adding the virtual host configuration directory

Save the changes and close the file.

Now we will create a configuration file for each virtual host. And in the first one we will add the following.


```bash
:~$ sudo nano /etc/lighttpd/vhosts.d/gongong.live.conf
```

```
$HTTP["host"] =~ "(^|.)gongong.local$" {
    server.document-root = "/var/www/html/gongong.live"
    server.errorlog = "/var/log/lighttpd/gongong.live-error.log"
    accesslog.filename = "/var/log/lighttpd/gongong.live-access.log"
}
```

2.- Creating a new virtual host on Lighttpd
2.- Creating a new virtual host on Lighttpd

And for the second:
```bash
:~$ sudo nano /etc/lighttpd/vhosts.d/www.test2.osradar.lan.conf
```

```
$HTTP["host"] =~ "(^|.)test2.osradar.lan$" {
    server.document-root = "/var/www/html/www.test2.osradar.lan"
    server.errorlog = "/var/log/lighttpd/www.test2.osradar.lan-error.log"
    accesslog.filename = "/var/log/lighttpd/www.test2.osradar.lan-access.log"
}
```
3.- Creating the second virtual host on Lighttpd
3.- Creating the second virtual host on Lighttpd

Save the changes and close the editor.

You can also use the following command to check the syntax of the configuration files:
```bash
:~$ sudo lighttpd -t -f /etc/lighttpd/lighttpd.conf
```
The result should be something like:

Syntax OK.

Then, restart lighttpd.
```bash
:~$ sudo systemctl restart lighttpd
```
And that’s it.

To test it, you need to modify some parameters in the client computer.
```bash
:~$ sudo nano /etc/hosts
```
And add the following

```
[Server_IP] gongong.live
[Server_IP] www.test2.osradar.lan
```
Save the changes and close the editor.

Now open your favorite web browser and go to gongong.live and you will see the following:
4.- Testing the first Virtual host
4.- Testing the first Virtual host

Now, go to www.test2.osradar.lan:
5.- The second virtual host
5.- The second virtual host

So, everything is OK. And that is it.
Conclusion




## NGINX localhost

```
server {  
    listen 8000;
    server_name gongong.local;

    access_log /var/log/nginx/gongong.localaccess.log;
    error_log  /var/log/nginx/gongong.localerror.log;

    root /var/www/html/gongong.local;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/gongong /etc/nginx/sites-enabled/gongong
```

```bash
sudo service nginx reload
```