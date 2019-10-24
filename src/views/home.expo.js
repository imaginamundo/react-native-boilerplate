import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import DefaultPage from '../hoc/DefaultPage';
import DefaultLayout from '../components/layout/DefaultLayout';
import Modal from '../components/Modal';

function ModalTest({ state, setState }) {
    return (
        <Modal
            title="Modal"
            state={ state }
            close={ () => setState(false) }
        >
            <View>
                <Text>Hello :D</Text>
                <Button
                    title="Close Modal"
                    onPress={
                        () => setState(false)
                    }
                />
            </View>
        </Modal>
    );
}

function Page(props) {
    const [ modalState, useModalState ] = useState(false);
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

            <Button
                title="Test modal"
                onPress={
                    () => {
                        useModalState(true);
                    }
                }
            />
            <ModalTest state={ modalState } setState={ useModalState } />
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