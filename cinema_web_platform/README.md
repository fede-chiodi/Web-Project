# CINEMA WEB PLATFORM
In this folder there is a cinema platform simulator

If you want to try it clone the repo, and go to the cinema_web_platform directory.

After that you have to start your connection with the database
```
sudo /opt/lampp/xampp start (only if you have xampp)
```

Than you have to install all the packages present in the package.json file (you find it in the main directory of the project)
```
npm install (it will create the node-modules directory)
```
At the end you can start the project launching this command (always in the main directory):
```
npm start
```

If you want to close the server, you have to press Ctrl + C and then you have to stop xampp with this command from terminal:
```
sudo /opt/lampp/xampp stop
```
