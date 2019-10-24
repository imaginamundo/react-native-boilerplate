# React Native boilerplate

A structure for folders and must have components for a React Native application.

## Requirements

- NPM or Yarn;
- Node 10 or superior;

## Installing

1. Clone the repository to your computer;
2. In the terminal, find the folder you have clonned the project;
3. Run the command `npm i` or `yarn`;

## Starting the application

### For Web
Run the command `npm run web` or `yarn run web`;

### For iOS
Run the command `npm run ios` or `yarn run ios`;

### For Android
Run the command `npm run android` or `yarn run android`;

## Folders structure
```
.
├── ...
├── src
│   ├── components                  # Store components
│   │   └── layout                  # Store layout components
│   │   │   └── Default.jsx         # Most common layout
│   ├── [hoc](#hoc)      
│   │   ├── DefaultPage.jsx         # Build initial state
│   │   └── SecurePage.jsx          # Page require auth
│   ├── [views](#views)                       # Store pages
│   └── ...
├── assets                          # Store assets
└── ...
```

# Components

# HOC
**High order components** or **HOC** are functions that get the solicited and inject information, modify behavior, etc…

In this case cenario, we wrap the whole page in a HOC and add initial props, or don't let an unauthenticated user to view the page.

# Views
The default page, for a view we require to import the **DefaultPage.jsx** or **SecurePage.jsx**, because this will create the initialProps.

## Example
``` javascript
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DefaultPage from '../hoc/DefaultPage';
import DefaultLayout from '../components/DefaultLayout';

function Page({
    staticInitialProps,
    asyncInitialProps
}) {
    const [ loader, useLoder ] = useState(true);

    useEffect(() => {
        useLoader(false);
    }, [ asyncInitialProps ])

    return (
        <DefaultLayout>
            <Text>Hello World!</Text>
        </DefaultLayout>
    );
};

// Get information instantly
Page.staticInitialProps = () => {
    return { hello: 'world!' };
};

// Gather information with a request
// Need to wait completion
Page.asyncInitialProps = async () => {
    return { hello: 'async world!' };
};

Page.navigationOptions = () => {
    return {
        header: null
    }
}

export default DefaultPage(Page);
```

### Initial Props
We have two initialProps, async and static. 

When you use an static, we can receive the information instantly.

With async, we have to wait the state gatter the information (could be useful for a select in a database, fetch data from an API, etc…);

### Default Layout
You can create reusable components for common layouts, like the default (usually the home), overlay, etc…

## Built with
* [Expo](https://expo.io/) - Make easier to create React Native Apps
* [React Navigation](https://reactnavigation.org/) - Simple way to create routes