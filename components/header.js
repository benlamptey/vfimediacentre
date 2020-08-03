import React from 'react';
import {Text, View, ImageBackground, StyleSheet, Image, SafeAreaView, Platform} from 'react-native';

export default function Header({bgImage, title}) {
    return (
        <ImageBackground style={styles.bgImage} source={bgImage}>
            <SafeAreaView>
                <View style={styles.headerContent}>
                    <Image style={styles.headerIcon} source={require('../assets/images/vfi-logo.png')}/>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        width: 'auto',
        height: Platform.OS === 'android' ? 90 : 120,
        padding: 10,
        // marginBottom: 20,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 24,
        paddingTop: 20,
        paddingLeft: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        fontFamily: 'OpenSansCondensed-Bold',
    },
    headerIcon: {
        width: 70,
        height: 70,
    },
    headerContent: {
        flexDirection: 'row',
    },
});
