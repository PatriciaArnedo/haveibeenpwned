<h1>Have I Been Pwned Interface</h1>

<img width="1358" alt="Screen Shot 2023-02-27 at 4 24 04 PM" src="https://user-images.githubusercontent.com/13356497/221700431-064e3b18-0e95-45ce-b0f7-e9a0066bb77e.png">

<h2>Overview</h2>
Welcome to Have I Been Pwned! This service allows users to look up emails using the haveibeenpwned? api and see if they have been compromised in previous breaches.

Enter an email in the email field and submit to see if you have been pwned and the details of the breaches if any.

<h3>User Stories</h3>

1. A user can submit their email and see all associated breaches for that email
2. A user can see if their username and password were compromised, as well as the domain and the date of the breach.
3. A user can sort their breaches by various atributes.
4. A user can search breaches
5. A user will see an error message if an invlaid email address is entered

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
