README as described by [here](https://capstone.cse.sc.edu/milestone/source-control/#september)

# Delta
Delta is a web file system designed for use by researchers and data scientists. It is essentially a file transfer system with a social media and market aspect. Researchers or data scientists can perform CRUD operations on data, and can also assess the validity of data by creating posts on data sets or ML models or by rating data sets or ML models. 

Note the following instructions are designed for *nix machines.

To run, first clone the repository by running:
`git clone https://github.com/SCCapstone/Delta`

Then cd into `Delta`. 

Running `ls` you should see `README.md`, `delta_web`, and `env`. Enter the virtual environment with `source env/bin/activate`. Cd into `delta_web` with `cd delta_web`.

Running `ls` you should see `delta`, `package-lock.json`, `package.json`, and `webpack.config.js`. Change directory into `delta` with `cd delta`.

Install the necessary JavaScript requirements with `npm i`. 

Now open up two terminals from your current directory.

On terminal one, type
`python3 manage.py runserver`
If there are dependency requirements, install them using pip. There should not be if you are in the virtual environment. Check if there are any unapplied migrations. If so, end the server by pressing `CONTROL-C` and run `python manage.py makemigrations` followed by `python manage.py migrate`. Now run `python manage.py runserver` again. This will start the backend server on port 8000 on localhost.

This terminal shall be running the backend REST API.

On terminal two, type:
`npm run dev` to begin the front end server.

To view the website, 

## External Requirements:
In order to build this project, you will first have to install:

- The latest version of Node.js: https://nodejs.org/en/download/
- The latest version of Python: https://www.python.org/downloads/

Then move into the project directory `cd proj-dir` and install python's virtual environment setup: // is this ncessary?
`pip3 install pipenv`

Now, we can download the Django, the REST framework, and KNOX for token authentication: // is this ncessary?
`pipenv install django djangorestframework django-rest-knox`

Here we create the 'project' not to be confused with an 'app' and then we navigate into the project folder: // is this ncessary?
`django-admin startproject delta-web`
`cd delta-web`

[TO DO: List the necessary installs DEVDEPENDENCES]
- Babel and its adjacent packages for backwards compatible JS and webpack for the bundler:
`npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader babel-plugin babel-plugin-transform-class-properties`
`npm install -D webpack webpack-cli`

[TO DO: List the necessary installs DJANGO]
`pipenv install django djangorestframework django-rest-knox`
`pip3 install pipenv`

[TO DO: List the necessary installs REACT]
To install the frontend frameworks and redux devtool extension, simply type:
`npm i react react-dom react-alert react-alert-template-basic react-router-dom react-transition-group redux react-redux redux-devtools-extension redux-thunk`

Don't forget to download Axios so we can communicate with our backend:
`npm i axios` 

## Setup:
[list any one-time things the dev needs to do after loading]

## Running
[list commands to run app from cloned repo]

## Deployment
[How to get it deployed on the internet]

# Testing
[Necessary now?]

## Testing Technology
[Necessary now?]

## Running Tests
[Necessary now?]

## Authors:
Vince Kolb-Lugo: kolblugo@email.sc.edu

Blake Seekings: seekingj@email.sc.edu
merge commit change

Naveen Chithan: nchithan@email.sc.edu

Carter Marlowe: marlowc@email.sc.edu

Lexington Whalen: lawhalen@email.sc.edu

