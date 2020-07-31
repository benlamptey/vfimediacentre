import React from 'react';
import {Text, View, ImageBackground, StyleSheet, Image} from 'react-native';

export default function Header({bgImage, title}) {
    return (
        <ImageBackground style={styles.bgImage} source={bgImage}>
            <View style={styles.homeCard}>
                <View style={styles.headerContent}>
                    <Image style={styles.headerIcon} source={require('../assets/images/vfi-logo.png')}/>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        width: 'auto',
        height: 90,
        padding: 10,
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
        height:70,
    },
    headerContent: {
        flexDirection: 'row',
    }
});
