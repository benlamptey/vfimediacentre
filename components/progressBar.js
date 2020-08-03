import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';

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

    static defaultProps = {
        value: 56,
    };

    state = {
        value: this.props.value,
    };

    render() {

        return (
            <View>
                <Slider
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                    thumbTintColor="#661e78"
                    onSlidingComplete={value => TrackPlayer.seekTo(value)}
                    value={this.state.position}
                    maximumValue={this.state.duration}
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
