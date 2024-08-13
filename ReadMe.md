
## Project Overview

This project is a mobile application built with React Native. It includes features for viewing loan products and submitting loan applications. The project uses Apollo Client for GraphQL queries and a REST API for form submissions.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Expo CLI**: Install Expo CLI globally by running `npm install -g expo-cli`
- **Npm** Package manager
- **Android Studio** or **Xcode** (for running the app on an emulator or device)

## Setup Instructions
1. Spin up the server.

2. Clone and go into this project's directory.
    - Due to some issues faces during using Apollo, one needs to use there machine's ip address and pass it in the `.env`
    ```
    EXPO_PUBLIC_API_URL=http://192.xxx.xxx.xxx:5000

3. Install dependencies
    ```
    npm install

4. start 
    ``` 
    npx expo start



## Usage

    Viewing Loan Products
        Open the app to see a list of available loan products.

    Applying for a Loan
        Navigate to the "Apply for a Loan" screen to submit a loan application form.

## Common Issues

    Network Request Failed: Ensure that your backend server is running and accessible. Verify the endpoint in the Apollo Client configuration.
    Apollo Client Errors: Ensure that the Apollo Client is correctly configured and that the server's GraphQL schema matches your queries.