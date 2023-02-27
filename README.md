<h1>HaveIBeenPwned Interface</h1>

<h2>Overview</h2>
Welcome to HaveIBeenPwned! This service allows users to look up emails using the haveibeenpwned? api and see if they have been compromised in previous breaches.

Enter an email in the email field and submit to see if you have been pwned and the details of the breaches if any.

<h3>User Stories</h3>

1. A user can submit their email and see all associated breaches for that email
2. A user can see if their username and password were compromised, as well as the domain and the date of the breach.
3. A user can sort their breaches by various atributes.

How to run the server:

```
cd server
npm install
API_KEY=xxxxxx node index.js
```

Optionally, the server port can also be changed by setting the PORT environment variable

How to run the react app:

```
npm install
npm start
```
