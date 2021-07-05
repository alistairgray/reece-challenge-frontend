# Code Challenge - Employee Payslip

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The Goal
This was to design a script that would take in employee details as an argument and output their payment details, including superannuation, gross income, income tax and net income. 

Once I perfected the script, I decided to try and showcase a greater understanding of React. My portfolio is still in its early stages and this challenge provided a great way to both illustrate my skills whilst pushing myself in areas that are still new to me.

## Assumptions


## Features

- Visualise employee data including super, taxes and income
- Add new employees with annual salaries and it will add it to the above table
- Data is automatically calculated to reflect income tax, gross income and net income
- You can download the payslip table in a csv file format, this includes added employees


## Challenges/Bugs

Testing is not my forte given the complexity of it. Normally in a development environment, one must create a failing test -> code till it passes -> refactor -> repeat.
But for my experience, this is still very new, not just from a testing perspective but also because React hooks is also new to me. My course was biased towards Classes and so a modern React project involved: figuring out what I need to do -> code till it works, whilst researching why it doesn't -> research tests and write them as best as I can -> figure out why the tests won't work -> write a passing test -> refactor. 

I was pleased with my understanding of tests that involves Forms in React. This particular code had me stumped but I had help from this website: https://testing-library.com/docs/dom-testing-library/api-events/ , which illustrated a better understanding of the methodology required.

![image](https://user-images.githubusercontent.com/73462489/124377437-40f49f80-dcef-11eb-8241-aabc29b32091.png)



## Wishlist

- Modify the table to visualise multi month periods
- Filter by employees or other information


## Getting it to work on your device

You'll want to clone this project to your own device and in the project directory, you can run:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
