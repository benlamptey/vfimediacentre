import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import ScreenHeader from '../components/screenHeader';
import Icon from 'react-native-vector-icons/Feather';
import MiniPlayer from '../components/miniPlayer';

export default function ListingPage({route, navigation}) {
    const [links, setLinks] = useState([
        {
            link: 'http://vfi.org.uk/LeslieAnnanForson_PreventingRestorationOfEvilAltars_24072020.mp3',
            title: 'Leslie Prayer',
            id: '1',
        },
        {
            link: 'http://vfi.org.uk/AkuaAddo_AltarsAndBloodline_26072020.mp3',
            title: 'Akua Bloodline and then lorem ipsum is added so lets make this as long as we possibly can, it will never get here by tyou never k',
            id: '2',
        },
        {link: 'http://vfi.org.uk/PastorEric_Angels_Part_3_26072020.mp3', title: 'Sunday Sermon', id: '3'},
    ]);

    const {title, backgroundImage, metaText, pin, number, meetingLink} = route.params;

    return (
        <View style={styles.listingPageContainerr}>
            <View style={styles.listingPageContainer}>
                <ScreenHeader title={title} bgImage={backgroundImage} navigation={navigation}/>
                <View style={styles.listingPageContent}>
                    <Text style={styles.metaText}>{metaText}</Text>
                    <Text style={styles.metaTextTel}>Tel: {number}</Text>
                    <Text style={styles.metaTextTel}>Pin: {pin}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(meetingLink)}>

                        <View style={styles.joinBtn}>

                            <Text style={styles.metaJoin}>Join via Google Meet app</Text>

                        </View>
                    </TouchableOpacity>

                    <FlatList
                        style={styles.listContainer}
                        keyExtractor={(item) => item.id}
                        data={links}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => navigation.navigate('AudioPlayer', item)}>
                                <View style={styles.listItem}>
                                    <View style={styles.listItemText}>
                                        <Text style={styles.listItemTitle} numberOfLines={1}>{item.title}</Text>
                                        <Text style={styles.listItemDate}>28th July 2020</Text>
                                    </View>
                                    <View style={styles.icon}>
                                        <Icon name='play-circle' color='#9C41DB' size={40}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <MiniPlayer/>
        </View>

    );
}

const styles = StyleSheet.create({
    listingPageContainerr: {
        flex: 1,
    },
    listingPageContainer: {
        backgroundColor: '#450571',
        height: 'auto',
        flex: 1,

    },
    listingPageContent: {
        padding: 20,
    },
    metaText: {
        color: '#fff',
        fontFamily: 'OpenSansCondensed-Bold',
        fontSize: 19,
    },
    metaTextTel: {
        color: '#fff',
        fontFamily: 'OpenSans-Regular',
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
    listContainer: {
        marginTop: 20,
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
        width: 280,
    },
    listItemTitle: {
        color: '#340057',
        fontSize: 25,
        fontFamily: 'OpenSansCondensed-Bold',
    },
    listItemDate: {
        color: '#340057',
        fontFamily: 'OpenSans-Regular',
        fontSize: 18,
    },
    icon: {
        marginTop: 5,
        marginLeft: 10,
    },
});
