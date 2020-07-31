import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import TrackPlayer from 'react-native-track-player';

export default class MyPlayerBar extends TrackPlayer.ProgressComponent {

    render() {
        return (
            <View>
                <Text>formatTime{this.state.position}</Text>
                <ProgressBar
                    progress={this.getProgress()}
                    buffered={this.getBufferedProgress()}
                    color={Colors.red800}
                />
            </View>
        );
    }
}
