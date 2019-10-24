import React, { useState, useEffect } from 'react';
import { GlobalContextProvider } from '../components/context/GlobalContext';

export default (Page) => {
    function DefaultPage(props) {
        // Get static initial props
        const staticInitialProps = (
            Page.staticInitialProps &&
            Page.staticInitialProps()
        ) || {};

        // Get async initial props
        const [ asyncInitialProps, setAsyncInitialProps ] = useState({});

        useEffect(() => {
            async function getInitialProps() {
                const initialProps = (
                    Page.asyncInitialProps &&
                    await Page.asyncInitialProps()
                );
                if (initialProps) setAsyncInitialProps(initialProps);
            };

            getInitialProps();
        }, [ Page ]);

        // Add Global Context Provider and return components with intial props
        return (
            <GlobalContextProvider>
                <Page
                    staticInitialProps={ staticInitialProps }
                    asyncInitialProps={ asyncInitialProps }
                    { ...props }
                />
            </GlobalContextProvider>
        );
    };

    // Add Navigation options to component
    const navigationOptions = (
        Page.navigationOptions &&
        Page.navigationOptions()
    );

    if (navigationOptions) {
        DefaultPage.navigationOptions = () => {
            return navigationOptions;
        }
    }

    return DefaultPage;
};