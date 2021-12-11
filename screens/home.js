import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import Card from '../components/card';
import TrackPlayer from 'react-native-track-player';
import Header from '../components/header';

export default function Home({navigation}) {
  const sections = [
    {
      backgroundImage: require('../assets/images/card-5.png'),
      title: 'Morning Glory',
      metaText: 'Monday to Saturday - 6:00AM to 7:30AM',
      number: '+44 20 3937 3199',
      pin: '872 536 619#',
      meetingLink: 'https://meet.google.com/ssa-awgy-pmx',
      endpoint: 'https://www.vfi.org.uk/api/messages/morning-glory',
      id: '5',
    },
  ];

  React.useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
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
        title="VFI Media Centre"
        bgImage={require('../assets/images/headerBG.jpg')}
      />
      <View style={styles.buttonStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('PrayerLines', sections)}>
          <View style={styles.btnWrapper}>
            <Text style={styles.btnText}>Prayer Lines</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cardComponents}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={sections}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ListingPage', item)}>
              <View style={styles.cardContainer}>
                <Card title={item.title} bgImage={item.backgroundImage} />
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
    backgroundColor: '#450571',
  },
  cardComponents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#450571',
  },
  cardContainer: {
    borderRadius: 100,
  },
  btnWrapper: {
    backgroundColor: '#960200',
    padding: 5,
    borderRadius: 10,
  },
  buttonStyle: {
    marginTop: 30,
    marginBottom: 30,
    padding: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 2, 5, 0.75)',
    textShadowOffset: {width: 2, height: 5},
    textShadowRadius: 10,
    fontFamily: 'OpenSansCondensed-Bold',
  },
});
