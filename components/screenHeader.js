import React from 'react';
import {Text, View, ImageBackground, StyleSheet, TouchableOpacity, SafeAreaView, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ScreenHeader({bgImage, title, navigation}) {
    return (
        <View style={styles.headerContainer}>
            <ImageBackground style={styles.bgImage} source={bgImage}>
                <SafeAreaView>
                    <View style={styles.headerContent}>
                        <TouchableOpacity onPress={() => {navigation.goBack();}}>
                            <Icon name="arrow-left-circle" size={40} color={'#fff'}/>
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>{title}</Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    bgImage: {
        width: 'auto',
        height: Platform.OS === "android" ? 90 : 130,
        padding: 10,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 30,
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
    headerContainer: {
        elevation: 7,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    headerContent: {
        flexDirection: 'row',

        paddingTop: 10,
        paddingLeft: 10,
        opacity: 1,
    },
});
