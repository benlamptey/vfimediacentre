import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import ListingPage from './screens/ListingPage';
import AudioPlayer from './screens/AudioPlayer';
import {PlayerContextProvider} from './contexts/PlayerContexts';
import Header from './components/header';
import SplashScreen from 'react-native-splash-screen';
import { navigationRef } from './RootNavigation';
import codePush from 'react-native-code-push';

const Stack = createStackNavigator();

class App extends Component {
    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }

    render() {
        return (
            <PlayerContextProvider>
                <NavigationContainer ref={navigationRef}>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerShown: false,
                                header: () => <Header
                                    title='VFI Media Centre'
                                    bgImage={require('./assets/images/headerBG.jpg')}/>,
                            }}/>
                        <Stack.Screen
                            name="ListingPage"
                            component={ListingPage}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="AudioPlayer"
                            component={AudioPlayer}
                            options={{
                                headerShown: false,
                                headerMode: 'none',

                            }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </PlayerContextProvider>
        );
    }
}

const codePushOptions = {
    installMode: codePush.InstallMode.IMMEDIATE,
    minimumBackgroundDuration: 60,
    updateDialog: true,
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

// export default App;
export default codePush(codePushOptions)(App);
