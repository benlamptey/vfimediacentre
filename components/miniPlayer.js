import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {usePlayerContext} from '../contexts/PlayerContexts';
import MyPlayerBar from '../components/progressBar';

const MiniPlayer = () => {
    const playerContext = usePlayerContext();
    if (playerContext.isEmpty || !playerContext.currentTrack) {
        return null;
    }

    return (
        <View>
            <Text>play icon</Text>
            <Text>{playerContext.currentTrack.title}</Text>
            <MyPlayerBar />
            {playerContext.isPaused && (
                <TouchableOpacity onPress={() => playerContext.play()}>
                    <Icon name="play" size={24}/>
                </TouchableOpacity>
            )}
            {playerContext.isPlaying && (
                <TouchableOpacity onPress={() => playerContext.pause()}>
                    <Icon name="pause" size={24}/>
                </TouchableOpacity>
            )}
            {playerContext.isStopped && (
                <TouchableOpacity onPress={() => null}>
                    <Icon name="square" size={24}/>
                </TouchableOpacity>
            )}

        </View>
    );
};

export default MiniPlayer;
