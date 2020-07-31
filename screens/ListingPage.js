import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet, Button} from 'react-native';
import ScreenHeader from '../components/screenHeader';
import Icon from 'react-native-vector-icons/Feather';

export default function ListingPage({route, navigation}) {
    const [links, setLinks] = useState([
        {
            link: 'http://vfi.org.uk/LeslieAnnanForson_PreventingRestorationOfEvilAltars_24072020.mp3',
            title: 'Leslie Prayer',
            id: '1',
        },
        {link: 'http://vfi.org.uk/AkuaAddo_AltarsAndBloodline_26072020.mp3', title: 'Akua Bloodline and then lorem ipsum is added so lets', id: '2'},
        {link: 'http://vfi.org.uk/PastorEric_Angels_Part_3_26072020.mp3', title: 'Sunday Sermon', id: '3'},
    ]);

    const {title, backgroundImage, metaText} = route.params;

    return (
        <View style={styles.listingPageContainer}>
            <ScreenHeader title={title} bgImage={backgroundImage} navigation={navigation}/>
            <View style={styles.listingPageContent}>
                <Text style={styles.metaText}>{metaText}</Text>

                <TouchableOpacity>
                    <View style={styles.joinBtn}>
                        <Text style={styles.metaJoin}>Join</Text>
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

    );
}

const styles = StyleSheet.create({
    listingPageContainer: {
        backgroundColor: '#450571',
        height: 'auto',
        ...StyleSheet.absoluteFillObject,
    },
    listingPageContent: {
        padding: 20,
    },
    metaText: {
        color: '#fff',
        fontFamily: 'OpenSansCondensed-Bold',
        fontSize: 19,
    },
    joinBtn: {
        backgroundColor: '#fff',
        borderRadius: 7,
        width: 135,
        padding: 5,
        marginTop: 10,
    },
    metaJoin: {
        color: '#A754DF',
        textTransform: 'uppercase',
        textAlign: 'center',
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
    },
    listItemText: {
      width: 290
    },
    listItemTitle: {
        color: '#340057',
        fontSize: 25,
        fontFamily: 'OpenSansCondensed-Bold',
    },
    listItemDate: {
        color: '#340057',
        fontFamily: 'OpenSansCondensed-Light',
        fontSize: 17,
    },
    icon: {
        marginLeft: 10,
        marginTop: 5,
    }
});
