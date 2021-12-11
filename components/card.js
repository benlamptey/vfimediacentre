import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';

export default function HomeCards({title, bgImage}) {

    return (
        <View style={styles.homeCardContainer}>
            <ImageBackground style={styles.bgImage} source={bgImage} imageStyle={{borderRadius: 25}}>
                <View style={styles.homeCard}>
                    <View style={styles.homeCardContent}>
                        <Text style={styles.cardTitle}>{title}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        width: 170,
        height: 150,
        flex: 1,
        borderRadius: 25,
    },
    homeCardContainer: {
        borderRadius:25,
        margin:10,
        elevation:7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    homeCard: {
        backgroundColor: 'rgba(69, 5, 113,0.3)',
        ...StyleSheet.absoluteFillObject,
        opacity: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 26,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 2, 5, 0.75)',
        textShadowOffset: {width: 2, height: 5},
        textShadowRadius: 10,
        fontFamily: 'OpenSansCondensed-Bold'
    },

});
