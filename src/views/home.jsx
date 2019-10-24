import React, { useState, useEffect } from 'react';
import { Text, Button } from 'react-native';

import DefaultPage from '../hoc/DefaultPage';
import DefaultLayout from '../components/layout/DefaultLayout';

function Page(props) {
    const [ loader, useLoader ] = useState(true);

    // Wait for asyncInitialProps to remove loader
    useEffect(() => {
        useLoader(false);
    }, [ props.asyncInitialProps ]);

    return (
        <DefaultLayout>
            <Text>Hello World!</Text>

            <Text>{ JSON.stringify(props) }</Text>

            <Button
                title="Use React Navigation"
                onPress={
                    () => {
                        props.navigation.navigate('navigation');
                    }
                }
            />
        </DefaultLayout>
    );
};

// Get information instantly
Page.staticInitialProps = () => {
    return { hello: 'world!' };
};

// Need to wait completion
Page.asyncInitialProps = async () => {
    return { hello: 'async world!' };
};

// Options for react-navigation
Page.navigationOptions = () => {
    return {
        header: null
    }
}

export default DefaultPage(Page);