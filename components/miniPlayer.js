import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {usePlayerContext} from '../contexts/PlayerContexts';

const MiniPlayer = () => {
    const playerContext = usePlayerContext();
    if (playerContext.isEmpty || !playerContext.currentTrack) {
        return null;
    }

    return (
        <View>
            <View style={styles.miniPlayerWrapper}>
                    <Text style={styles.miniText} numberOfLines={1}>{playerContext.currentTrack.title}</Text>

                {playerContext.isPaused && (
                    <TouchableOpacity onPress={() => playerContext.play()}>
                        <Icon name="play" size={24} color={'#fff'}/>
                    </TouchableOpacity>
                )}
                {playerContext.isPlaying && (
                    <TouchableOpacity onPress={() => playerContext.pause()}>
                        <Icon name="pause" size={24} color={'#fff'}/>
                    </TouchableOpacity>
                )}
                {playerContext.isStopped && (
                    <TouchableOpacity onPress={() => playerContext.play()}>
                        <Icon name="play" size={24} color={'#fff'}/>
                    </TouchableOpacity>
                )}
            </View>
        </View>

    );
};

export default MiniPlayer;

const styles = StyleSheet.create({
    miniPlayerWrapper: {
        backgroundColor: '#bf0068',
        height: 70,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    miniText: {
        color: '#fff',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
    },
});
