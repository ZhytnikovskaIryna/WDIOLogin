# WDIOLogin
Task: Automate Login for Spotify:
UC -1 - Test Login form with empty credentials: 1.Type any credentials 2. Clear the inputs. 3. Check the error messages: 3.1 Please enter your Spotify username or email address. 3.2 Please enter your password.

UC-2 - Test Login form with incorrect credentials:

Type any incorrect credentials and click LOG IN button. X.
Check the error message: 2.1 Incorrect username or password.
UC -3 - Test Login form with correct credentials:

Type correct credentials and click LOG IN button.

To run test: npm run wdio

Notes:
- parallel execution enabled via 'Instances:3' option in wdio.conf.js
- logging enabled via Instances 'logLevel:warn' option in wdio.conf.js. But in task needed log level is not specified. I've set 'warn'
- parametrized browser option using .env file and 'browserName: process.env.BROWSER' option in wdio.conf.js. I don't know how to do next part of task 'use tagging to parametrize tests suite run' as per wdio doc it is possible only with cucumber...and we need to use Mocha
- For Empty credentials scenario ClearValue method was not used as in case of it using error message does not appear. So had to use Backspace key