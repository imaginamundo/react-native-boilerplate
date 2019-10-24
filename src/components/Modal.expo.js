import React from 'react';
import { StyleSheet, Modal, Button, Text, View } from 'react-native';

export default ({
    children,
    state,
    title,
    close,
    onDismiss
}) => (
    <Modal
        animationType="slide"
        transparent={ true }
        visible={ state }
        onDismiss={ onDismiss }
    >
        <View
            style={ styles.background }
        >
            <View style={ styles.modal }>
                <View
                    style={ styles.header }
                >
                    <Text
                        style={ styles.title }
                    >
                        { title }
                    </Text>
                    <Button
                        title="×"
                        color="tomato"
                        style={ styles.close}
                        onPress={ () => close() }
                    />
                </View>
                { children }
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    background: {
        padding: 1,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, .5)'
    },
    modal: {
        backgroundColor: '#fff',
        padding: 18
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    close: {
        fontSize: 20,
        fontWeight: '900'
    }
});