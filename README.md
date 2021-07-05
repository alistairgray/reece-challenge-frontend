# Code Challenge - Employee Payslip

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The Goal
This was to design a script that would take in employee details as an argument and output their payment details, including superannuation, gross income, income tax and net income. 

Once I perfected the script, I decided to try and showcase a greater understanding of React. My portfolio is still in its early stages and this challenge provided a great way to both illustrate my skills whilst pushing myself in areas that are still new to me.

## Assumptions / Thinking
My initial thoughts were that a foundational level, this is a problem of navigating and interacting with objects.
The goal will be to initially prove the base requirements via vanilla javascript and
then make it work in HTML and CSS. 
The design needs to be a blend between pleasant visuals and function.
Testing wise, the project will need to be integrated into React via create-react-app, with
Jest to verify.
A nice to have would be to have the ability to adjust the payment months.

I have taken the assumption that the user can see all of the payslip data from each employee. Initially I had thought of only showing one employee at a time but I felt it detracted from the app's potential to showcase all the employees and add a filter for each.

Another assumption was the type of calculation. I used a marginal tax instead of a flat tax to reflect how tax is calculated in Australia. This proved more complex but I was able to verify the calculations and integrate it into the app. Personally the logic behind these calculations was the most rewarding as the remainder of the app took a whole lot of research and trial and error! 

## Features

- Visualise employee data including super, taxes and income
- Add new employees with annual salaries and it will add it to the above table
- Data is automatically calculated to reflect income tax, gross income and net income
- You can download the payslip table in a csv file format, this includes added employees
- You can drag and drop the downloaded csv into the browser and it will replace the table with the data from the csv *NOTE* Must be dropped on top of the table or it will not work correctly


## Challenges/Bugs

Testing is not my forte given the complexity of it. Normally in a development environment, one must create a failing test -> code till it passes -> refactor -> repeat.
But for my experience, this is still very new, not just from a testing perspective but also because React hooks is also new to me. My course was biased towards Classes and so a modern React project involved: figuring out what I need to do -> code till it works, whilst researching why it doesn't -> research tests and write them as best as I can -> figure out why the tests won't work -> write a passing test -> refactor. 

I was pleased with my understanding of tests that involves Forms in React. This particular code had me stumped but I had help from this website: https://testing-library.com/docs/dom-testing-library/api-events/ , which illustrated a better understanding of the methodology required.

![image](https://user-images.githubusercontent.com/73462489/124377437-40f49f80-dcef-11eb-8241-aabc29b32091.png)



## Wishlist

- Modify the table to visualise multi month periods
- Filter by employees or other information


## Getting it to work on your device

You'll want to clone this project to your own device and in the project directory, follow these steps:

1. Clone the repository 
2. CD to the file directory
3. enter into your terminal "npm install" which will add the necessary files to the project folders
4. then "npm start" which will open up your browser automatically, otherwise head to http://localhost:3000 after running the command
5. You can also run "npm test" where you can see the tests that I have built to check various aspects of the app
