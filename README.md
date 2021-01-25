# ACM Authentication Flow
![Build](https://github.com/acmutd/dev_web_testing/workflows/Build/badge.svg)

Template Repository for use by ACM Development

##### Features
- Logging in to Auth0 using Redirect Mode
- Accessing profile information that has been provided
- Gated content. The `/profile` and `/external-api` routes are not accessible without having first logged in
- Authenticating against a 3rd party API and accessing secure cloud functions
- Guide to implementing Auth0 into your project

## Quick Start

  - [Create an Auth0 account](auth0.com) if you don't have one already, request ACM Development for access to the acmutd tenant
  - Install all project dependencies using `npm install`
  - This template uses the `auth0-react` library. For single page applications that do not use React we recommend going with the `auth0-spa-js` library.
  - Auth0 requires access to the domain, client id and API audience to work. Create a a `.env` file as follows and request ACM Development for the fields.
  
```
REACT_APP_AUTH0_DOMAIN=<YOUR DOMAIN HERE>
REACT_APP_AUTH0_CLIENTID=<YOUR CLIENT ID HERE>
REACT_APP_AUTH0_AUDIENCE=<YOUR AUDIENCE HERE>
```

 - Run `npm start` and navigate to `http://localhost:3000`

### Advanced
Integrating Auth0 into your application

The `auth0-react` library supports many functions for use in your application. With respect to React Applications, the library needs to be used differently within class vs functional components. Below are outlined the steps to integrate Auth0. Note that the steps described below will work for both JavaScript and TypeScript projects. For TypeScript it may be necessary to disable source maps depending on the transpiler being used.

 - `npm install @auth0/auth0-react`

#### Functional Components
 - `import { useAuth0 } from "@auth0/auth0-react";`
 - You can access Auth0 context this way within the functional component `const { getAccessTokenSilently } = useAuth0();` 

#### Class Components
 - `import { withAuth0 } from "@auth0/auth0-react";`
 - Update the export for your component to be `export default withAuth0(NameOfComponent);`
 - You can access Auth0 context this way within the class component `const { getAccessTokenSilently, user } = this.props.auth0;`
 - Auth0 wraps class components with a higher order component and injects the necessary functions and variables as props

#### Final Steps

 - In your `index.js` file make sure to `import { Auth0Provider } from "@auth0/auth0-react";`
 - Wrap the `<App>` component within the `<Auth0Provider>`. This provides Auth0 with the necessary information to function and makes its features available to all children components through context.
```
<Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    redirectUri={window.location.origin}
    audience={config.audience}
    scope={"read:current_user update:current_user_metadata"}
  >
    <App />
  </Auth0Provider>
```
 - Within all components now you will have access to the following variables and functions
 - This is not a comprehensive list of all features provided by Auth0 but rather the list of ones that are most likely to be used

###### Auth0 Variables & Functions
| Auth0                  | Type               | Additional Information                                      |
| ---------------------  | ------------------ | ----------------------------------------------------------- |
| isAuthenticated        | boolean            | is the user signed in                                       |
| user                   | json               | contains all the info about the signed in user              |
| loading                | boolean            | is Auth0 loading, do not attempt to render anything if true |
| loginWithRedirect      | function           | ACM Development recommends this signin method               |
| getAccessTokenSilently | function           | get access token to validate against ACM api                |
| logout                 | function           | logout the current user                                     |

### Resources

 - The offical documentation for [Auth0](https://auth0.com/docs/)
 - Quickstart for Auth0 for [React](https://auth0.com/docs/quickstart/spa/react)
 - [Sample Application](https://github.com/auth0-samples/auth0-react-samples/tree/master/Sample-01} for Auth0

### Questions

Sometimes you may have additional questions. If the answer was not found in this readme please feel free to reach out to the [Director of Development](mailto:comet.acm@gmail.com) for _ACM_

We request that you be as detailed as possible in your questions, doubts, or concerns to ensure that we can be of maximum assistance. Thank you!

![ACM Development](https://www.acmutd.co/brand/Development/Banners/light_dark_background.png)
