<h1>JupiterOne X HaveIBeenPwned?</h1>

<h2>Overview</h2>
Welcome to JupiterOne X HaveIBeenPwned! This service allows users to look up their emails using the haveibeenpwned? api to see if they have been compromised in previous breaches. 

Enter an email in the email field and submit to see it you have been pwned and the details of the breaches if any. 


<h3>User Stories</h3>

1. A user can submit their email and see all associated breaches for that email
2. A user can see if their username and password were compromised, as well as the domain and the date of the breach. 


User Story: 

How to run the server:
```
cd server
npm install
HAVE_I_BEEN_PAWNED_API_KEY=xxxxxx node index.js
```
Optionally, the server port can also be changed by setting the PORT environment variable

How to run the react app:
```
npm install
npm start
```
