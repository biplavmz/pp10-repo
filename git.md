# upload code to github

##FIRST time setup
* git config --global user.email "biplavmazumdar5@gmail.com"
* git config --global user.name "biplav mazumdar"
* git config --list  //to check name and email

##(you need to do this always)
* git init -> timeline create for that particular folder
* git add . -> add all folders for tracking
* git commit -m "message"
* git log -> to list all the comits

## create a repo on github

* git remote add origin Your **repo name**
* git branch -m main
* git push -u origin main

* if we want to ignore any folder/file -> create.gitignore file and push file/folder name in it 

### always

* git add .
* git commit -m "message"
* git push
