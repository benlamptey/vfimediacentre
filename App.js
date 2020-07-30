import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import ListingPage from './screens/ListingPage';
import AudioPlayer from './screens/AudioPlayer';
import {PlayerContextProvider} from './contexts/PlayerContexts';

const Stack = createStackNavigator();

function App() {

    return (
        <PlayerContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="ListingPage" component={ListingPage}/>
                    <Stack.Screen name="AudioPlayer" component={AudioPlayer}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PlayerContextProvider>
    );
}

export default App;
