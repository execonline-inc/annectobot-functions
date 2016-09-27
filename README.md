# Annectobot Functions

## Todo

- make repo -- DONE
- add IAM user and policy -- DONE
- bootstrap app -- DONE
- test deploy with function + gateway -- DONE
- convert to ES6 -- DONE
- put the schedule somewhere
  - hard code it in the javascript
- figure out if we can get the message out of quotes
- styling
- Who is on this week, who is on next week, and previous week
- slack show everybody (broadcast)
- figure out permissions for real (AWS user stuff)
- token on the API call (on the gateway api)
- decide on a fancy place for the schedule
- command: when is my next turn?
- error handling stuff
  - stale schedule
  - parsing error

# Getting started

- clone
- `cd annectobot-functions`
- `npm install`
- `npm test`

To deploy, you will also need to install serverless.

- `npm install serverless -g`

# Deploying

- Ensure you have AWS access/secret environment variables in your current shell (AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY) for a user that can create lambdas and gateways in AWS.
- `serverless deploy`

## Deploy issue

If you get the error message:

``EEXIST: file already exists, link '.webpack/.serverless'``

Edit ``/node_modules/serverless-webpack/lib/cleanup.js`` line 14, change
``move`` to ``copy``.
