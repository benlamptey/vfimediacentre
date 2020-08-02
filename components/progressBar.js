import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import TrackPlayer from 'react-native-track-player';

export default class MyPlayerBar extends TrackPlayer.ProgressComponent {
    formatTime(seconds) {
        return seconds > 3600
            ?
            [
                parseInt(seconds / 60 / 60),
                parseInt(seconds / 60 % 60),
                parseInt(seconds % 60)
            ].join(":").replace(/\b(\d)\b/g, "0$1")
            :
            [
                parseInt(seconds / 60 % 60),
                parseInt(seconds % 60)
            ].join(":").replace(/\b(\d)\b/g, "0$1")
    }

    render() {

        return (
            <View style={styles.progressBarWrapper}>
                <ProgressBar
                    progress={this.getProgress()}
                    buffered={this.getBufferedProgress()}
                    color={'#fff'}
                />

                <View style={styles.positions}>
                    <Text style={styles.positionText}>{this.formatTime(this.state.position)}</Text>
                    <Text style={styles.positionText}>{this.formatTime(this.state.duration)}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    positionText: {
        color: '#fff',
    },
    positions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
