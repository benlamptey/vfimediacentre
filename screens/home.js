import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
    const [sections, setSections] = useState([
        {title: 'Bible Studies', endpoint: '', id: '1'},
        {title: 'Friday Intercession', endpoint: '', id: '2'},
        {title: 'Sunday Intercession', endpoint: '', id: '3'},
        {title: 'Sunday Sermon', endpoint: '', id: '4'},
        {title: 'Morning Glory', endpoint: '', id: '5'},
        {title: 'Prayer Lines', endpoint: '', id: '6'},
    ]);

    return (
        <View>
            <FlatList
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={sections}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ListingPage', item)}>
                        <Text style={styles.section}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: '#3c5fff',
        fontWeight: 'bold',
        marginTop: 70,
        marginHorizontal: 10,
        padding: 30,
        fontSize: 16,
        width: 200,
    }
});
