import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert} from 'react-native';
import MainButton from '../../components/MainButton';
import ImagePicker from 'react-native-image-crop-picker';

import { sharedLocalState } from '../../states/LocalState';







const CameraScreen = ({navigation}) => {

    const {setImg} = sharedLocalState();

    const choosePicture = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {setImg(image.path);
        });
    };
  
    return (
        <View style={{  justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View >
                <MainButton style = {0} title={'Upload'} onPress={choosePicture}></MainButton>
            </View>
            <View style={{marginTop: 32}}>
                <MainButton style = {0} title={'Confirm'} onPress={() => navigation.navigate('Timer')}></MainButton>
            </View>
            <View style={{marginTop: 32}}>
                <MainButton style = {0} title={'Delete'} onPress={() => setImg(null)}></MainButton>
            </View>
        </View>
     );
};

export default CameraScreen;