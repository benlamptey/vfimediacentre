import React from 'react';
import RNTrackPlayer, {
    State as TrackPlayerState,
    STATE_PAUSED,
    STATE_PLAYING,
    STATE_STOPPED,
    Track,
} from 'react-native-track-player';

interface PlayerContextType {
    isPlaying: boolean;
    isPaused: boolean;
    isStopped: boolean;
    isEmpty: boolean;
    currentTrack: Track | null;
    play: (track?: Track) => void;
    pause: () => void;
}

export const PlayerContext = React.createContext({
    isPlaying: false,
    isPaused: false,
    isStopped: false,
    isEmpty: true,
    currentTrack: null,
    play: () => null,
    pause: () => null,
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

    const value: PlayerContextType = {
        isPlaying: playerState === STATE_PLAYING,
        isPaused: playerState === STATE_PAUSED,
        isStopped: playerState === STATE_STOPPED,
        isEmpty: playerState === null,
        currentTrack,
        pause,
        play,
    };

    return (
        <PlayerContext.Provider value={value}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export const usePlayerContext = () => React.useContext(PlayerContext);
