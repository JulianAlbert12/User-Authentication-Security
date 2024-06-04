# MyProject

This is a user authentication application built with React, Firebase, and React Router. It supports user registration, login, and password reset functionalities.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Security Features](#security-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [License](#license)

## Demo

You can view a live demo of the application [here](https://julianalbert12.github.io/User-Authentication/).

## Features
- User Registration with Email Verification
- User Login
- Password Reset
- Logout functionality

## Security Features
- Client-side validation for email format
- Require strong passwords 
- Input validation: regular expressions to ensure they meet the required criteria
- Preventing Duplicate Emails: Checks are performed to ensure that the email address provided during registration does not already exist in the system
- Sanitized user inputs before sent to Firebase
- Secure Environment Variables for Firebase config

## Prerequisites
- npm installed on your machine
- Firebase account for authentication.
- [Get started here](https://firebase.google.com/docs/firestore) for Firebase instructions

## Installation
1. Clone the repository to your local machine:
```
git clone https://github.com/Julianalbert12/User-Authentication.git
```
2. Navigate to the project directory:
```
cd User-Authentication
```
3. Install dependencies:
```
npm install
```
4. Once you have created your Firebase account you will recieve configurations like this:
![Alt Text](./public/firebase.png)

5. Once you recieve your configurations, create a '.env' file in the root directory and add your Firebase configuration:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```
6. On a separate terminal, run project:
```
npm start
```

## License
This project is licensed under the MIT License. See the LICENSE file for more information.








