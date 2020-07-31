import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Button, TouchableOpacity, SafeAreaView} from 'react-native';
import Card from '../components/card';

export default function Home({navigation}) {
    const [sections, setSections] = useState([
        {
            id: '1',
            backgroundImage: require('../assets/images/card-1.png'),
            title: 'Bible Studies',
            metaText: 'Wednesday - 8:00PM to 10:00PM',
            button: '',
            endpoint: '',
        },
        {
            backgroundImage: require('../assets/images/card-2.jpg'),
            title: 'Friday Intercession',
            metaText: 'Friday - 8:00PM to 10:30PM',
            button: '',
            endpoint: '',
            id: '2',
        },
        {
            backgroundImage: require('../assets/images/card-3.jpg'),
            title: 'Sunday Intercession',
            metaText: 'Sunday - 3:00PM to 6:00PM',
            button: '',
            endpoint: '',
            id: '3',
        },
        {
            backgroundImage: require('../assets/images/card-4.jpg'),
            title: 'Sunday Sermon',
            metaText: 'Sunday - 3:00PM to 6:00PM',
            button: '',
            endpoint: '',
            id: '4',
        },
        {
            backgroundImage: require('../assets/images/card-5.png'),
            title: 'Morning Glory',
            metaText: 'Monday to Saturday - 6:00AM to 7:30AM',
            button: '',
            endpoint: '',
            id: '5',
        },
        {
            backgroundImage: require('../assets/images/card-6.png'),
            title: 'Prayer Lines',
            metaText: '',
            button: '',
            endpoint: '',
            id: '6',
        },
    ]);

    return (

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


    );
}

const styles = StyleSheet.create({
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
