import React from 'react';
import { Text } from 'react-native';

import DefaultPage from '../hoc/DefaultPage';
import DefaultLayout from '../components/layout/DefaultLayout';

function Page(props) {
    return (
        <DefaultLayout>
            <Text>We are using React Navigation!</Text>
            <Text>{ JSON.stringify(props) }</Text>
        </DefaultLayout>
    );
};

Page.navigationOptions = () => {
    return {
        title: 'React Navigation'
    }
}

export default DefaultPage(Page);