# React Project Manager

This project originated as a [zip file](https://github.com/academind/react-complete-guide-course-resources/tree/main/attachments/09%20Practice%20Project%20-%20Project%20Management)
in Maximilian Schwarzmüller's [React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux) 
course on Udemy.

The zip contained minimal content, with creation of the app left as a project for the student. I stripped out Tailwind, and
implemented the project based on the description given in Section 8, Lecture 148 of the 2025 course, but before actually
watching the rest of the Section. I wanted to test myself on creation of an app from scratch, without first watching the rest
of the lecture.

There are certainly improvements to be made, and I'll come back to them as I learn more about React. This version of the app,
for example, doesn't persist data, doesn't use HTTP, doesn't have user logins, doesn't use anything more complex for state
than React Hooks. I can also see that the CSS can be cleaned up a bit.

## Install Dependencies

Run `npm i` to install project dependencies.

## Port

I updated the vite config to run on port 4200, simply because I'm accustomed to using that port for running dev versions
of Angular apps.

## Other

The current version of the app doesn't use forms, as I haven't yet reached that section of the React course. For the
moment, I'm using refs to get data from what few fields there are in the app.