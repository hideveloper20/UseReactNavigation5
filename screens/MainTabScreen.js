import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {useTheme, Avatar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Icon.loadFont();

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import FeedScreen from './FeedScreen';
import BookMarkScreen from './BookMarkScreen';
import ProfileScreen from './ProfileScreen';
import ExplorerScreen from './ExplorerScreen';
import EditProfileScreen from './EditProfileScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    style={{backgroundColor: 'tomato'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="BookMark"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Book',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({color}) => <Icon name="book" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({color}) => (
          <Icon name="account-box" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explorer"
      component={ExplorerScreen}
      options={{
        tabBarLabel: 'Explorer',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => (
          <Icon name="airline-seat-flat" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, //ios
          elevation: 0, //android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Food Finder',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="menu"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => navigation.openDrawer()}></Icon.Button>
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="search"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => {}}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => navigation.navigate('Profile')}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://api.adorable.io/avatars/80/abott@adorable.png',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, //ios
          elevation: 0, //android
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '',
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor={colors.background}
              color={colors.text}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              backgroundColor={colors.background}
              color={colors.text}
              onPress={() => navigation.navigate('EditProfile')}
            />
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;
