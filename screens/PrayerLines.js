import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import ScreenHeader from '../components/screenHeader';
import MeetingLine from '../components/meetingLine';

export default function PrayerLines({route, navigation}) {
    const sections = [
        {
            backgroundImage: require('../assets/images/card-4.jpg'),
            title: 'Sunday Service',
            metaText: 'Sunday - 3:00PM to 6:00PM',
            number: '+44 20 3956 6068',
            pin: '615 741 733%23',
            meetingLink: 'https://meet.google.com/pth-qmay-qmq',
            endpoint: 'https://www.vfi.org.uk/api/messages/sunday-sermon',
            id: '4',
        },
        {
            title: 'Women\'s Line',
            metaText: 'Get in touch for meeting times',
            number: '+44 20 3937 3199',
            pin: '511 592 783%23',
            meetingLink: 'https://meet.google.com/ssa-awgy-pmx',
            id: '6',
        },
        {
            title: 'Men\'s Line',
            metaText: 'Mondays and Thursdays - From 21:00',
            number: '+44 20 3957 2679',
            pin: '483 889 806%23',
            meetingLink: 'https://meet.google.com/jyd-thfj-wod',
            id: '7',
        },
        {
            id: '1',
            backgroundImage: require('../assets/images/card-1.png'),
            title: 'Bible Studies',
            metaText: 'Wednesday - 8:00PM to 10:00PM',
            number: '+44 20 3956 6068',
            pin: '615 741 733%23',
            meetingLink: 'https://meet.google.com/pth-qmay-qmq',
            endpoint: 'https://www.vfi.org.uk/api/messages/bible-studies',
        },
        {
            backgroundImage: require('../assets/images/card-2.jpg'),
            title: 'Friday Intercession',
            metaText: 'Friday - 8:00PM to 10:30PM',
            number: '+44 20 3956 6068',
            pin: '615 741 733%23',
            meetingLink: 'https://meet.google.com/pth-qmay-qmq',
            endpoint: 'https://www.vfi.org.uk/api/messages/friday-intercession',
            id: '2',
        },
        {
            backgroundImage: require('../assets/images/card-5.png'),
            title: 'Morning Glory',
            metaText: 'Monday to Saturday - 6:00AM to 7:30AM',
            number: '+44 20 3937 3199',
            pin: '511 592 783#%23',
            meetingLink: 'https://meet.google.com/ssa-awgy-pmx',
            endpoint: 'https://www.vfi.org.uk/api/messages/morning-glory',
            id: '5',
        },
    ];

    const renderItem = ({ item }) => (
        <MeetingLine item={item} />
    );
    return (
        <View style={styles.prayerLinesContainer}>
            <View style={styles.listingPageContainer}>
                <ScreenHeader title={'VFI - Prayer lines'} bgImage={require('../assets/images/card-6.png')}
                              navigation={navigation}/>
                    <SafeAreaView style={styles.meetingLines}>

                    <FlatList
                        style={styles.listContainer}
                        keyExtractor={item => item.id}
                        data={sections}
                        renderItem={renderItem}
                    />
                    </SafeAreaView>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    prayerLinesContainer: {
        flex: 1,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#fff',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    meetingLines: {
        padding: 20,
        flex: 1,
    },
    meetingLine: {
      paddingBottom: 20,
    },
    flatlistWrapper: {
        flex: 1,
    },
    listingPageContainer: {
        backgroundColor: '#450571',
        height: 'auto',
        flex: 2,
    },
    listingPageContent: {
        padding: 20,
        flex: 1,
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
    metaTextTel: {
        color: '#fff',
        fontSize: 16,
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
    },
    listItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 20,
        height: 75,
        paddingLeft: 15,
        paddingTop: 10,
        elevation: 10,
    },
    listItemText: {
        flex: 1,
    },
    listItemTitle: {
        color: '#340057',
        fontSize: 25,
        fontFamily: 'OpenSansCondensed-Bold',
    },
    listItemDate: {
        color: '#340057',
        fontSize: 18,
    },
    icon: {
        marginTop: 5,
        marginRight: 10,
    },
});
