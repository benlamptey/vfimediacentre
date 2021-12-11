import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Linking, StatusBar} from 'react-native';

export default function MeetingLine({item}) {
    const {title, metaText, pin, number, meetingLink} = item;
    const Separator = () => (
        <View style={styles.separator}/>
    );

    return (

            <View style={styles.meetingLine}>
                <Text style={styles.meetingHeading}>{title}</Text>
                <Text style={styles.metatext}>{metaText}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(meetingLink)}>
                    <View style={styles.joinBtn}>
                        <Text style={styles.metaJoin}>Join via Google Meet app</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${number};${pin}#`)}>
                    <View style={styles.joinBtn}>
                        <Text style={styles.metaJoin}>Dial {number}</Text>
                    </View>
                </TouchableOpacity>
                <Separator/>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
    separator: {
        paddingBottom: 25,
        borderBottomColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    meetingLine: {
        marginVertical: 8,
    },
    meetingHeading: {
        color: '#fff',
        fontFamily: 'OpenSansCondensed-Bold',
        fontSize: 24,
    },
    metatext: {
        color: '#fff',
        fontFamily: 'OpenSansCondensed-Bold',
        fontSize: 16,
    },
    pin: {
        color: '#fff',
        fontFamily: 'OpenSansCondensed-Bold',
        fontSize: 20,
    },
    joinBtn: {
        backgroundColor: '#fff',
        borderRadius: 7,
        width: 230,
        padding: 10,
        marginTop: 10,
    },
    metaJoin: {
        color: '#A754DF',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'OpenSans-SemiBold',
    }
});
