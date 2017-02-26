import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = () => {
    
    const { containerStyle, containerIconStyle } = styles;

    return (
        <View style={containerStyle} >
          <View style={containerIconStyle}><Icon name="ios-star-outline" size={40} /></View>
          <View style={containerIconStyle}><Icon name="ios-call-outline" size={40} /></View>
          <View style={containerIconStyle}><Icon name="ios-contact-outline" size={40} /></View>
          <View style={containerIconStyle}><Icon name="ios-chatbubbles-outline" size={40} /></View>
          <TouchableOpacity onPress={() => Actions.Setting()}>
            <View style={containerIconStyle}><Icon name="ios-settings-outline" size={40} /></View>
          </TouchableOpacity>

        </View>
    );
};

const styles = {
    containerStyle: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#f7f7f7',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
    },
    containerIconStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Footer };
