
const params = {
    "client_id": clientId,
    "client_secret": clientSecret,
    "audience": audience,
    "grant_type": grantType
   }
   
const response = await fetch('https://maf2qxs1f6.execute-api.us-east-1.amazonaws.com/prod/oauth/token', { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(params) 
});

const data = await response.json();