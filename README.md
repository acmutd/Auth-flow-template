# Sample 01 - Logging In and Gated Content

This sample demonstrates:

- Logging in to Auth0 using Redirect Mode
- Accessing profile information that has been provided in the ID token
- Gated content. The `/profile` route is not accessible without having first logged in
- Guide to implementing Auth0 into your project

## Project setup

Use `yarn` or `npm` to install the project dependencies:

```bash
# Using npm..
npm install

# Using yarn..
yarn install
```

### Configuration

The project needs to be configured with your Auth0 domain and client ID in order for the authentication flow to work.

To do this, first copy `src/auth_config.json.example` into a new file in the same folder called `src/auth_config.json`, and replace the values with your own Auth0 application credentials:

```json
{
  "domain": "{YOUR AUTH0 DOMAIN}",
  "clientId": "{YOUR AUTH0 CLIENT ID}"
}
```

### Compiles and hot-reloads for development

```bash
npm run start
```

## Deployment

### Compiles and minifies for production

```bash
npm run build
```

### Docker build

To build and run the Docker image, run `exec.sh`, or `exec.ps1` on Windows.

### Run your tests

```bash
npm run test
```

## Frequently Asked Questions

We are compiling a list of questions and answers regarding the new JavaScript SDK - if you're having issues running the sample applications, [check the FAQ](https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md)!

# What is Auth0?

Auth0 helps you to:

- Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
- Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
- Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
- Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
- Analytics of how, when and where users are logging in.
- Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](https://auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](../LICENSE) file for more info.

## Quick Start

  - [Create an Auth0 account](auth0.com) if you don't have one already
  - Properly install all project dependencies using `npm install` if you haven't already
  - use the `auth0-react` library instead of `auth0-spa-js` library to tailor your app to React
  

### Scripts
  
  1.   Clone the [dev_web_testing repository](https://github.com/acmutd/dev_web_testing) and it's `src` source code folder for sample code
  
  2. Configure your Auth0 domain and client ID for the authentication flow to work. It should be in your index.js file.
  
  ```
  const config = {
    domain: process.env.REACT_APP_DOMAIN,
    clientId: process.env.REACT_APP_CLIENT_ID
  }
  ```
  
  3. Add the configured variables to a `.env` file and also add your `.env` file to `.gitignore` to keep things secure
  
  ```
  REACT_APP_AUTH0_DOMAIN={YOUR DOMAIN HERE}
  REACT_APP_AUTH0_CLIENT_ID={YOUR CLIENT ID HERE}
  ```
  4. Create the following files, or add code to an existing file if the file already exists. Then, copy and paste the content from  the cloned repository into your `src` folder

    - react-auth0-spa.js
    - serviceWorker.js
    - index.js
    - PrivateRoute.js
    - history.js
    - Loading.js
    
  5. Add the following code from the `App.js` file
  
  ```
  import React from "react";
  import { Router, Route, Switch } from "react-router-dom";
  import { Container } from "reactstrap";

  import PrivateRoute from "./components/PrivateRoute";
  import Loading from "./components/Loading";
  import { useAuth0 } from "./react-auth0-spa";
  import history from "./utils/history";

  const App = () => {
    const { loading } = useAuth0();

    if (loading) {
      return <Loading />;
    }
    return (
    *include home pages (which should have a login button) and profile page components here
    ...
    );
  };
  ```
  
  6. Open Terminal, use `npm start` to run react scripts


### Resources

 - The offical documentation for [Auth0](https://auth0.com/docs/)
 - Quickstart for Auth0 for [React](https://auth0.com/docs/quickstart/spa/react)
 - [Sample Application](https://github.com/auth0-samples/auth0-react-samples/tree/master/Sample-01} for Auth0

### Questions

Sometimes you may have additional questions. If the answer was not found in this readme please feel free to reach out to the [Director of Development](mailto:comet.acm@gmail.com) for _ACM_

We request that you be as detailed as possible in your questions, doubts, or concerns to ensure that we can be of maximum assistance. Thank you!

![ACM Development](https://www.acmutd.co/brand/Development/Banners/light_dark_background.png)
