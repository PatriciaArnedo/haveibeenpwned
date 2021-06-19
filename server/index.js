const express = require('express')
const fetch = require('node-fetch')


const app = express()
const apiKey = process.env.HAVE_I_BEEN_PAWNED_API_KEY
const port = process.env.PORT || '8080'

// Source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

async function getBreachesByEmail(emailAddress, includeUnverified) {
    const url = `https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(emailAddress)}?includeUnverified=${includeUnverified}&truncateResponse=false`
    const resp = await fetch(url, {
        headers: {
            "User-Agent": "JupiterOne Have I Beeen Pwned App",
            "hibp-api-key": apiKey,
        }
    })
    if (resp.status !== 200) {
        throw Error(`non-200 response code ${resp.status}`)
    }
    return resp.json()
}

app.get('/breaches', async (req, res) => {
    const emailAddress = req.query.email
    if (!validateEmail(emailAddress)) {
        return res.status(400).json({
            "friendly_error": "Please enter a valid email address"
        })
    }

    const includeUnverified = req.query.includeUnverified || false
    getBreachesByEmail(emailAddress, includeUnverified)
        .then(breaches => {
            return res.json({
                data: breaches
            })
        })
        .catch(e => {
            console.error("error while querying haveibeenpwned", e)
            return res.status(500).json({
                "friendly_error": "An unknown error occurred while fetching data. Please try again."
            })
        })
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
