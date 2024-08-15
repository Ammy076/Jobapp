import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import JobsScreen from './src/screens/JobsScreen';
import BookmarksScreen from './src/screens/BookmarksScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Jobs" component={JobsScreen} />
          <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

