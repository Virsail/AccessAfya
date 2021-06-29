# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# neighbourhood

[virsail mbagaya](https://github.com/virsail)  
  
# Description  
An analytics platform built on React js for UI ,Javascript ,Scss for application styling and GraphQl for api data queries.
##  Live Link  
 View App site [View Site](https://accessafyaplatform.netlify.app/dashboard)  
  
 
## User Story  
A user is able to:
* View graphical analysis of patient satisfaction,revenue and foot fall 
* Monitor period or time on the platform
* See Key issues and the loactions at which issues get reported
* have a personal account where he or she can see updates,notifications,tasks to be undertaken and comments in general concerning Access Afya as a whole
* Contact Access Afya (we give the user access to access afya contacts) on the application header
* Keep track of Staff members ,their efficiency and issues reported on each .
## Dashboard
![Screenshot from 2021-06-29 13-58-02](https://user-images.githubusercontent.com/66640798/123786390-4c585d00-d8e2-11eb-8c7c-d13cc1ce2cfd.png)

## User account creation
![Screenshot from 2020-11-04 18-31-37](https://user-images.githubusercontent.com/66640798/98131182-176b4600-1ecc-11eb-9312-381b2f918574.png)
## Business Search results

![Screenshot from 2020-11-04 18-35-33](https://user-images.githubusercontent.com/66640798/98131786-ad9f6c00-1ecc-11eb-8ce9-a807a03e9cb7.png)
## Setup and Installation  
Clone the repository from github 
##### Cloning the repository:  
 ``` git clone 
 https://github.com/Virsail/neighbourhood.git
```
##### Navigate into the folder and install requirements  
 ```bash 
cd neighbourhood then pip install -r requirements.txt 
```
##### Install and activate Virtual  
 ```bash 
- python3 -m venv virtual - source virtual/bin/activate  
```  

 ##### Setup Database  
  SetUp your database User,Password, Host then make migrate  
 ```bash 
python manage.py makemigrations insta
 ``` 
 Now Migrate  
 ```bash 
 python manage.py migrate 
```
##### Run the application  
 ```bash 
 python manage.py runserver 
``` 
##### debug your model classes
```
python3.8 manage.py check 
this is the fastest way to debug/check your model classes
```
##### Testing the application  
 ```bash 
 python manage.py test 
```
Open the application on your browser `127.0.0.1:8000`.  
  
  
## Technology used  
  
* [Python3.8](https://www.python.org/)  
* [Django 1.11.7](https://docs.djangoproject.com/en/2.2/)  
* [Heroku](https://heroku.com)  
* HTML
* CSS
* JS
  
  
## Contact Information   
ericmbagaya@gmail.com 
  

### License
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT) 
* Copyright (c) 2020 **Virsail Mbagaya**

