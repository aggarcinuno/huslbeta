import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useRef, useState } from "react";
import CheckInScreen from "../../screens/post/CheckInScreen";

import FeedScreen from "../../screens/user/feed/FeedScreen";
import AsyncStorage from '@react-native-community/async-storage';
import { sharedLocalState } from "../../states/LocalState";
import { FieldValue } from "firebase/firestore";
import { useIsFocused } from "@react-navigation/native";

import { useLayoutEffect } from "react";
import StartupScreen from "../../screens/auth/StartupScreen";
import StartupScreenCopy from "../../screens/auth/StartupScreen copy";
import TimerScreen from "../../screens/post/TimerScreen";
import PostOptionsModal from "../../screens/post/PostOptionsModal";

const FeedStackNavigator = createStackNavigator();

export const FeedNavigator = () => {

    const [hasPosted, setHasPosted] = useState(false);
    const {hasPostedTracker} = sharedLocalState();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
            const getHasPosted = async () => {
                let hasPosted = await AsyncStorage.getItem('hasPosted')
                if (hasPosted == 'false') {
                    setHasPosted(false)
                    setIsReady(true)
                } else if (hasPosted == 'true') {
                    setHasPosted(true)
                    setIsReady(true)
                } else {
                    setHasPosted(false)
                    setIsReady(true)
                }
            }
            getHasPosted()
    }, [])
    if(isReady)
    return (
        <FeedStackNavigator.Navigator screenOptions={{headerShown:false}}>

                {(!hasPosted) ?  <FeedStackNavigator.Screen name="Checky" component={CheckInScreen}/> : null}
                <FeedStackNavigator.Screen name="FeedyFeedy" component={FeedScreen}/>
                
                
                

                
                
        </FeedStackNavigator.Navigator>
    );
};