README as described by [here](https://capstone.cse.sc.edu/milestone/source-control/#september)

# Delta
Delta is a web file system designed for use by researchers and data scientists. It is essentially a file transfer system with a social media and market aspect. Researchers or data scientists can perform CRUD operations on data, and can also assess the validity of data by creating posts on data sets or ML models or by rating data sets or ML models. 

Some useful links:
- Delta URL: https://guarded-journey-12008.herokuapp.com/#/ 
- See our [Architecture](https://github.com/SCCapstone/Delta/wiki/Architecture)
- See the general [Design](https://github.com/SCCapstone/Delta/wiki/Architecture)
- See a more in depth [Description](https://github.com/SCCapstone/Delta/wiki/Project-Description)
- See some general [Requirements](https://github.com/SCCapstone/Delta/wiki/Requirements)


# Style Guide:
Please adhere to the guidelines for JavaScript and Python found [here](https://google.github.io/styleguide/)

# Running
Note the following instructions are designed for *nix machines.

To run, first clone the repository by running:
`git clone https://github.com/SCCapstone/Delta` 

Then cd into `Delta`. 

You should have installed `pipenv`. Install following `https://pipenv.pypa.io/en/latest/install/` or some other resource online.

When installed, you should be able to run 
`pipenv sync` to sync the pipenv file, and then `pipenv install` to install dependencies.

To run the backend, cd into `delta_web` with `cd delta_web`.
Change directory into `delta` with `cd delta`.

The currect working directory should be something like:
`[OTHER_DIRECTORIES]/Delta/delta_web/delta/`

Then run `pipenv run python3 manage.py runserver`. Now the backend should be running.

To set up `npm`, from the same directory as prior cd into `frontend`. 
Install the necessary JavaScript requirements with `npm i`. 
### It is possible that certain requirements are not caught by the package manager. If that is the case, please look at the error log and run `npm i [PACKAGE_NAME]` where [PACKAGE_NAME] is the name of the package needed.

On terminal two, type:
`npm run dev` to begin the front end server.

To view the website, open up a browser and type in the url `localhost:8000`. You should be directed to a login screen.

## External Requirements:
In order to build this project, you will first have to install:

- The latest version of Node.js: https://nodejs.org/en/download/
- You can run `sudo apt update` then `sudo apt install nodejs npm`
- See [here](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/)
- The latest version of Python: https://www.python.org/downloads/
- You can run `sudo apt update` then `sudo apt install python3`
- See [here](https://www.makeuseof.com/install-python-ubuntu/)

If for some reason the environment fails to work, the following are the dependencies needed for Django:

`pipenv install django djangorestframework django-rest-knox`

or

`py pipenv install django djangorestframework django-rest-knox`

If `npm i` fails to work, the following are the dependencies for npm.

`npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader babel-plugin babel-plugin-transform-class-properties`

`npm install -D webpack webpack-cli`

To install the frontend frameworks and redux devtool extension, simply type:

`npm i react react-dom react-alert react-alert-template-basic react-router-dom react-transition-group redux react-redux redux-devtools-extension redux-thunk`

`npm i axios` 

`npm i react-dropzone`

## Setup:
There is no setup required as of now. In the future, we may include commands for setting up the database / other things.

## Deployment
This is where we will put deployment steps.

# Testing
Testing the Delta application includes dozens/hundreds of unit tests plus behavioral testing. To accomplish this, we
use a combination of testing libraries, which are listed below under the next heading.

Unit tests run against APIs in the following directories:
- accounts/
- data/
- organizations/
- social/

## Testing Technology
Testing the Delta application requires two/three/ libraries: 

### Django's built-in testing suite for backend
This library comes installed with the framework so there is no additional command needed.

### React's built-in testing suite
This comes installed with React, so again no need to run an additional command.

### Jest [any other frontend stuff] for frontend
To install Jest type:

`command to install jest, probably npm i Jest`

### Selenium for behavioral testing
To install Selenium type:

`command to install Selenium, probably npm i selenium`

## Running Tests
To run the backend tests, remember to start a virtual environment in the Delta directory:

`pipenv shell`

Then, either navigate to the delta directory `cd delta_web/delta` and run:

`pipenv run python3 manage.py test`

Or, from the current directory, type:

`pipenv run python3 delta_web/delta/manage.py test`

To run frontend tests cd to the the delta_web directort `cd delta_web` and then run:

`command to run tests, LOOK THIS UP`

To run the suit of behavioral tests... MORE TO COME

## Authors:
Vince Kolb-Lugo: kolblugo@email.sc.edu

Blake Seekings: seekingj@email.sc.edu

Naveen Chithan: nchithan@email.sc.edu

Carter Marlowe: marlowc@email.sc.edu

Lexington Whalen: lawhalen@email.sc.edu
