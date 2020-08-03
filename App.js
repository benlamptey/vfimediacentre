import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';
import ListingPage from './screens/ListingPage';
import AudioPlayer from './screens/AudioPlayer';
import {PlayerContextProvider} from './contexts/PlayerContexts';
import Header from './components/header';

const Stack = createStackNavigator();

function App() {

    return (
        <PlayerContextProvider>
            <NavigationContainer>
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
                            headerMode: 'none'

                        }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PlayerContextProvider>
    );
}

export default App;
