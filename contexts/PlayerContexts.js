import React from 'react';
import RNTrackPlayer, {
    State as TrackPlayerState,
    STATE_PAUSED,
    STATE_PLAYING,
    STATE_STOPPED,
    STATE_BUFFERING,
    STATE_NONE,
    STATE_CONNECTING,
    Track,
} from 'react-native-track-player';

interface PlayerContextType {
    isPlaying: boolean;
    isPaused: boolean;
    isStopped: boolean;
    isBuffering: boolean;
    isConnecting: boolean;
    isNone: boolean;
    isEmpty: boolean;
    currentTrack: Track | null;
    play: (track?: Track) => void;
    pause: () => void;
    seekTo: (amount?: number) => void;
    stopPlaying: null;
}

export const PlayerContext = React.createContext({
    isPlaying: false,
    isPaused: false,
    isStopped: false,
    isBuffering: false,
    isConnecting: false,
    isNone: false,
    isEmpty: true,
    currentTrack: null,
    play: () => null,
    pause: () => null,
    seekTo: () => null,
    stopPlaying: () => null,

});

export const PlayerContextProvider = (props) => {
    const [playerState, setPlayerState] = React.useState(null);

    const [currentTrack, setCurrentTrack] = React.useState(null);

    React.useEffect(() => {
        const listener = RNTrackPlayer.addEventListener(
            'playback-state',
            ({state}: {state: TrackPlayerState}) => {
                setPlayerState(state);
            },
        );

        return () => {
            listener.remove();
        };
    }, []);

    const play = async (track?: Track) => {
        if (!track) {
            if (currentTrack) {
                await RNTrackPlayer.play();
            }
            return;
        }
        await RNTrackPlayer.add([track]);
        setCurrentTrack(track);
        await RNTrackPlayer.play();
    };

    const pause = async () => {
        await RNTrackPlayer.pause();
    };

    const stopPlaying = async () => {
        RNTrackPlayer.stop();
    };
    const seekTo = async (amount = 30) => {
        const position = await RNTrackPlayer.getPosition();
        await RNTrackPlayer.seekTo(position + amount);
    };

    const value: PlayerContextType = {
        isPlaying: playerState === STATE_PLAYING,
        isPaused: playerState === STATE_PAUSED,
        isStopped: playerState === STATE_STOPPED,
        isBuffering: playerState === STATE_BUFFERING,
        isConnecting: playerState === STATE_CONNECTING,
        isNone: playerState === STATE_NONE,
        isEmpty: playerState === null,
        currentTrack,
        pause,
        play,
        seekTo,
        stopPlaying,
    };

    return (
        <PlayerContext.Provider value={value}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export const usePlayerContext = () => React.useContext(PlayerContext);
