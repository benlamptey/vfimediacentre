import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function ListingPage({route, navigation}) {
    const [links, setLinks] = useState([
        {link: 'http://vfi.org.uk/LeslieAnnanForson_PreventingRestorationOfEvilAltars_24072020.mp3', title: 'Leslie Prayer', id: '1'},
        {link: 'http://vfi.org.uk/AkuaAddo_AltarsAndBloodline_26072020.mp3', title: 'Akua Bloodline', id: '2'},
        {link: 'http://vfi.org.uk/PastorEric_Angels_Part_3_26072020.mp3', title: 'Sunday Sermon', id: '3'},
    ]);

    const { title } = route.params;

    return (
        <View>
            <Text>{title} </Text>
            <FlatList
                keyExtractor={(item) => item.id}
                data={links}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('AudioPlayer', item)}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

