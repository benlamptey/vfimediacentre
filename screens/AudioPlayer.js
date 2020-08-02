import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, Platform} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {usePlayerContext} from '../contexts/PlayerContexts';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyPlayerBar from '../components/progressBar';
import ScreenHeader from '../components/screenHeader';


const AudioPlayer = ({route, navigation}) => {
    const playerContext = usePlayerContext();
    const soundItem = route.params;

    const currentTrack = playerContext.currentTrack;
    if (currentTrack != null) {
        const match = currentTrack.id === soundItem.link;
        if (!match){
            TrackPlayer.reset();
            playerContext.play({
                title: soundItem.title,
                id: soundItem.link,
                url: soundItem.link,
                artwork: 'http://www.vfi.org.uk/themes/custom/tbc/images/vfi-logo-min.png',
                artist: 'another artist name',
            });
        }
    }

    return (
        <View style={styles.audioContainer}>
            <ScreenHeader title={''} bgImage={require('../assets/images/card-1.png')} navigation={navigation}/>
            <View style={styles.artworkContainer}>
                <Image source={require('../assets/images/vfi-logo.png')} style={styles.audioArtwork}/>
            </View>
            <View style={styles.audioWrapper}>
                <Text style={styles.audioTitle} numberOfLines={1}>{soundItem.title} </Text>
                <Text style={styles.audioAuthor}>Victorious Family International</Text>
                <View style={styles.progressBar}>
                    <MyPlayerBar/>
                </View>
            </View>
            <View style={styles.audioControls}>
                <TouchableOpacity onPress={() => playerContext.seekTo(-30)}>
                    <Icon name="undo" size={40} color={'#fff'}/>
                    <Text style={styles.seconds}>-30</Text>
                </TouchableOpacity>

                {playerContext.isStopped && (
                    <TouchableOpacity onPress={() => {
                        if (!soundItem) {
                            return;
                        }

                        playerContext.play({
                                title: soundItem.title,
                                id: soundItem.link,
                                url: soundItem.link,
                                artwork: 'http://www.vfi.org.uk/themes/custom/tbc/images/vfi-logo-min.png',
                                artist: 'Victorious Family International',
                            },
                        );
                    }} style={styles.playButtonContainer}>
                        <Icon name="play" size={40} color={'#340057'} style={styles.playButton}/>
                    </TouchableOpacity>
                )}

                {playerContext.isBuffering && (
                    <TouchableOpacity onPress={() => {}} style={styles.playButtonContainer}>
                        <Icon name="pause" size={40} color={'#340057'} style={styles.playButton}/>
                    </TouchableOpacity>
                )}

                {playerContext.isPlaying && (
                    <TouchableOpacity onPress={() => {
                        playerContext.pause();
                    }} style={styles.playButtonContainer}>
                        <Icon name="pause" size={40} color={'#340057'} style={styles.playButton}/>
                    </TouchableOpacity>
                )}
                {playerContext.isPaused && (
                    <TouchableOpacity onPress={() => {
                        playerContext.play();
                    }} style={styles.playButtonContainer}>
                        <Icon name="play" size={40} color={'#340057'} style={styles.playButton}/>
                    </TouchableOpacity>
                )}

                <TouchableOpacity onPress={() => playerContext.seekTo(30)}>
                    <Icon name="undo" size={40} color={'#fff'}/>
                    <Text style={styles.seconds}>+30</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    audioHeader: {
        height: Platform.OS === 'android' ? 90 : 130,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    audioContainer: {
        backgroundColor: '#340057',
        flex: 1,
    },
    audioArtwork: {
        width: 200,
        height: 200,
        margin: 50,
    },
    artworkContainer: {
        elevation: 14,
        alignItems: 'center',
    },
    audioTitle: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'OpenSansCondensed-Bold',
        textAlign: 'center',
        width: 300,
    },
    audioAuthor: {
        color: '#fff',
        fontFamily: 'OpenSansCondensed-Light',
        fontSize: 20,
        letterSpacing: 2,
        textAlign: 'center',
    },
    audioControls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    playButtonContainer: {
        backgroundColor: '#fff',
        borderColor: 'rgba(253, 149, 255, 0.2)',
        borderWidth: 16,
        width: 130,
        height: 130,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 32,
        elevation: 19,
    },
    playButton: {},
    audioWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        width: 300,
        margin: 30,
        alignContent: 'center',
    },
    seconds: {
        color: '#c1c1c1',
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',

    },
});
export default AudioPlayer;
