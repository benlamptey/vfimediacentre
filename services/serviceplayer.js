import TrackPlayer from 'react-native-track-player';

module.exports = async function() {
    // This service needs to be registered for the module to work
    // but it will be used later in the "Receiving Events" section

    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

    TrackPlayer.addEventListener('playback-state', (state) => {
        console.log('playback-state', state )
    });

    TrackPlayer.addEventListener(
        'remote-jump-forward',
        async ({interval}: {interval: number}) => {
            const position = await TrackPlayer.getPosition();
            await TrackPlayer.seekTo(position + interval);
        },
    );

    TrackPlayer.addEventListener(
        'remote-jump-backward',
        async ({interval}: {interval: number}) => {
            const position = await TrackPlayer.getPosition();
            await TrackPlayer.seekTo(position - interval);
        },
    );
};
