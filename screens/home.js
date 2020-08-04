import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    Image,
    Text,
    Platform,
} from 'react-native';
import Card from '../components/card';
import TrackPlayer from 'react-native-track-player';
import Header from '../components/header';

export default function Home({navigation}) {
    const sections = [
        {
            id: '1',
            backgroundImage: require('../assets/images/card-1.png'),
            title: 'Bible Studies',
            metaText: 'Wednesday - 8:00PM to 10:00PM',
            number: '+44 20 3956 2929',
            pin: '286 283 690#',
            meetingLink: 'https://meet.google.com/wzf-oqnj-ffg',
            endpoint: 'https://www.vfi.org.uk/api/messages/bible-studies',
        },
        {
            backgroundImage: require('../assets/images/card-2.jpg'),
            title: 'Friday Intercession',
            metaText: 'Friday - 8:00PM to 10:30PM',
            number: '+44 20 3956 2929',
            pin: '286 283 690#',
            meetingLink: 'https://meet.google.com/wzf-oqnj-ffg',
            endpoint: 'https://www.vfi.org.uk/api/messages/friday-intercession',
            id: '2',
        },
        {
            backgroundImage: require('../assets/images/card-3.jpg'),
            title: 'Sunday Intercession',
            metaText: 'Sunday - 3:00PM to 6:00PM',
            number: '+44 20 3956 2929',
            pin: '286 283 690#',
            meetingLink: 'https://meet.google.com/wzf-oqnj-ffg',
            endpoint: 'https://www.vfi.org.uk/api/messages/sunday-intercession',
            id: '3',
        },
        {
            backgroundImage: require('../assets/images/card-4.jpg'),
            title: 'Sunday Sermon',
            metaText: 'Sunday - 3:00PM to 6:00PM',
            number: '+44 20 3956 2929',
            pin: '286 283 690#',
            meetingLink: 'https://meet.google.com/wzf-oqnj-ffg',
            endpoint: 'https://www.vfi.org.uk/api/messages/sunday-sermon',
            id: '4',
        },
        {
            backgroundImage: require('../assets/images/card-5.png'),
            title: 'Morning Glory',
            metaText: 'Monday to Saturday - 6:00AM to 7:30AM',
            number: '+44 20 3937 1683',
            pin: '872 536 619#',
            meetingLink: 'https://meet.google.com/nyg-fgna-wze',
            endpoint: 'https://www.vfi.org.uk/api/messages/morning-glory',
            id: '5',
        },
        {
            backgroundImage: require('../assets/images/card-6.png'),
            title: '40 Days Fasting & Prayer',
            metaText: 'Monday, Wednesdays & Fridays - 8:00PM to 10:30PM',
            number: '+44 20 3956 2929',
            pin: '286 283 690#',
            meetingLink: 'https://meet.google.com/wzf-oqnj-ffg',
            endpoint: 'https://www.vfi.org.uk/api/messages/forty-days',
            id: '6',
        },
    ];

    React.useEffect(() => {
        TrackPlayer.setupPlayer().then(() => {
            console.log('player set');
            TrackPlayer.updateOptions({
                stopWithApp: true,
                capabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_STOP,
                    TrackPlayer.CAPABILITY_JUMP_FORWARD,
                    TrackPlayer.CAPABILITY_JUMP_BACKWARD,
                    TrackPlayer.CAPABILITY_SEEK_TO,
                    TrackPlayer.CAPABILITY_PLAY_FROM_SEARCH,
                ],
                notificationCapabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_SEEK_TO,
                    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                ],
                compactCapabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_SEEK_TO,
                    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                ],
                jumpInterval: 30,
            });
        });
    }, []);
    return (
        <View style={styles.homeWrapper}>
            <Header
                title='VFI Media Centre'
                bgImage={require('../assets/images/headerBG.jpg')}/>

            <View style={styles.cardComponents}>
                <FlatList
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    data={sections}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ListingPage', item)}>
                            <View style={styles.cardContainer}>
                                <Card title={item.title} bgImage={item.backgroundImage}/>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    homeWrapper: {
        flex: 1,
    },
    cardComponents: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B064E3',
    },
    cardContainer: {
        borderRadius: 100,
    },
});
