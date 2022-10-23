README as described by [here](https://capstone.cse.sc.edu/milestone/source-control/#september)

### Delta
Delta is a web file system designed for use by researchers and data scientists. It is essentially a file transfer system with a social media and market aspect. Researchers or data scientists can perform CRUD operations on data, and can also assess the validity of data by creating posts on data sets or ML models or by rating data sets or ML models. 

Note the following instructions are designed for *nix machines.

To run, first clone the repository by running:
`git clone https://github.com/SCCapstone/Delta`

Then cd into `Delta`. 

Running `ls` you should see `README.md`, `delta_web`, and `env`. Enter the virtual environment with `source env/bin/activate`. Cd into `delta_web` with `cd delta_web`.

Running `ls` you should see `delta`, `package-lock.json`, `package.json`, and `webpack.config.js`. Change directory into `delta` with `cd delta`.

Install the necessary JavaScript requirements with `npm i`. 
##### It may be the case you need to install certain packages on your own. If so, please check the error logs and this document to see what it is you need to install.

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

Then move into the project directory `cd proj-dir-name` and install python's virtual environment setup: // is this ncessary?

`pip3 install pipenv` 

or try this if using Windows:

`py pip3 install pipenv` 

Now, let's build the backend! Start by downloading Django, the REST framework, and KNOX for token authentication:

`pipenv install django djangorestframework django-rest-knox`

or

`py pipenv install django djangorestframework django-rest-knox`

[TO DO: List the necessary installs DEVDEPENDENCES] // should this go in the Setup section?
We're almost done. There are just a couple of important things to include. First Babel and its adjacent packages for backwards compatible JS; second, webpack for the bundler:

`npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader babel-plugin babel-plugin-transform-class-properties`

`npm install -D webpack webpack-cli`

[TO DO: List the necessary installs REACT]
To install the frontend frameworks and redux devtool extension, simply type (read copy pasta):

`npm i react react-dom react-alert react-alert-template-basic react-router-dom react-transition-group redux react-redux redux-devtools-extension redux-thunk`

Don't forget to download Axios! Axios facilitates communication between the frontend and backend:

`npm i axios` 

Need to install `react-dropzone` for drag and drop files [see here](https://www.npmjs.com/package/react-dropzone).
`npm i react-dropzone`

## Setup:
[list any one-time things the dev needs to do after loading]
// perhaps this is where babel and webpack stuff should go?

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

Naveen Chithan: nchithan@email.sc.edu

Carter Marlowe: marlowc@email.sc.edu

Lexington Whalen: lawhalen@email.sc.edu

