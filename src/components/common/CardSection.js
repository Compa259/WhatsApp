import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constant/Colors';

const CardSection = (props) => {
    const { icon, title, frameColor } = props;
    const { containerCardSectionStyle, iconStyle, infoStyle, iconForwardStyle, 
            frameIconStyle } = styles;
    return (
        <View style={containerCardSectionStyle}>
            <View style={iconStyle}>
              <View style={frameIconStyle} backgroundColor={frameColor}>
                              
                 {icon}
              </View>
            </View>
            <View style={infoStyle}>
                <Text style={{ fontSize: 18 }}>
                    {title}
                </Text>
            </View>
            <View style={iconForwardStyle}>
                <Icon name="ios-arrow-forward" size={30} color={Colors.iconColor} />
            </View>
        </View>
    );
};

const styles = {
    containerCardSectionStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        height: 50
    },
    iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 50,
    },
    frameIconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        borderRadius: 10,
    },
    infoStyle: {
        flex: 1,
        justifyContent: 'center',
        height: 50,
    },
    iconForwardStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 50
    },
};
export { CardSection };

