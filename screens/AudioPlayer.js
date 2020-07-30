import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import MiniPlayer from '../components/miniPlayer';
import {usePlayerContext} from '../contexts/PlayerContexts';
import Icon from 'react-native-vector-icons/Feather';

const AudioPlayer = ({route, navigation}) => {
    const [isReady, setIsReady] = useState(false);
    const playerContext = usePlayerContext();

    React.useEffect(() => {
        TrackPlayer.setupPlayer().then(() => {
            TrackPlayer.updateOptions({
                capabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_STOP,
                    TrackPlayer.CAPABILITY_JUMP_FORWARD,
                    TrackPlayer.CAPABILITY_JUMP_BACKWARD,
                    TrackPlayer.CAPABILITY_SEEK_TO,
                    TrackPlayer.CAPABILITY_PLAY_FROM_SEARCH,
                ],
                jumpInterval: 30,
            });
            setIsReady(true);
        });
    }, []);

    const soundItem = route.params;
    return (
        <View>
            <Text>Audio player screen </Text>
            <Text>{soundItem.title} </Text>
            <Text>{soundItem.link} </Text>
            <TouchableOpacity onPress={() => {
                if (!soundItem) {
                    return;
                }

                playerContext.play({
                        title: soundItem.title,
                        id: soundItem.link,
                        url: soundItem.link,
                        artwork: 'http://www.vfi.org.uk/themes/custom/tbc/images/vfi-logo-min.png',
                        artist: 'another artist name',
                    },
                );
            }}>
                <Icon name="play" size={40}/>
            </TouchableOpacity>
            {isReady ? (
                <View>
                    <MiniPlayer />
                    <Text>Player is ready</Text>
                </View>
            ) : (
                <ActivityIndicator/>
            )}
            <TouchableOpacity
                onPress={() => console.log('loggin')}>
                <Text style={{color: 'blue'}}>
                    Google
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default AudioPlayer;
