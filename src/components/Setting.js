import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { CardSection } from './common';
import Colors from '../constant/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

class Setting extends Component {
    render() {

        const { containerSetting, thumnailSettingStyle, thumnailContainerStyle, thumnailStyle, 
                rateSetting, detailSetting, iconForwardStyle, infoStyle } = styles;
        return (
            <View style={containerSetting}>
                <View style={thumnailSettingStyle}>
                    <View style={thumnailContainerStyle}>
                       <Image
                         style={thumnailStyle}
                         source={require('../imageSource/avatar.jpg')}
                       />
                    </View>

                    <View style={infoStyle}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nguyễn Minh Đức</Text>
                        <Text style={{ fontSize: 16 }}>Compa</Text>
                   </View>

                    <View style={iconForwardStyle}>
                        <Icon name="ios-arrow-forward" size={30} color={Colors.iconColor} />
                    </View>
                    
                </View>

                <View style={rateSetting}>
                    <CardSection
                       icon={<Icon name="ios-star" size={30} color='white' />}
                       frameColor={Colors.starredMessagesFrame}
                       title="Starred Messages"
                    />
                    <CardSection
                       icon={<Icon name="ios-laptop-outline" size={30} color='white' />}
                       frameColor={Colors.whatsappWebDesktop}
                       title="WhatsApp Web/Desktop"
                    />
                </View>

                <View style={detailSetting}>
                    <CardSection
                       icon={<Icon name="ios-key" size={30} color='white' />}
                       frameColor={Colors.accountFrame}
                       title="Account"
                    />
                    <CardSection
                       icon={<Icon name="logo-whatsapp" size={30} color='white' />}
                       frameColor={Colors.chatsFrame}
                       title="Chats"
                    />
                    <CardSection
                       icon={<Icon name="ios-notifications-outline" size={30} color='white' />}
                       frameColor={Colors.notificationFrame}
                       title="Notifications"
                    />
                    <CardSection
                       icon={<Icon name="ios-analytics-outline" size={30} color='white' />}
                       frameColor={Colors.dataFrame}
                       title="Data and Storage Usage"
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    containerSetting: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        justifyContent: 'space-around',
        marginBottom: 50
    },
    thumnailSettingStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: Colors.navbarBorderColor,
        borderWidth: 1,
        height: 100,
    },
    thumnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    thumnailStyle: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    iconForwardStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 100
    },
    infoStyle: {
        flex: 1,
        justifyContent: 'center',
        height: 100,
    },
    rateSetting: {
        backgroundColor: '#fff',
        borderColor: Colors.navbarBorderColor,
        borderWidth: 1,
        height: 100
    },
    detailSetting: {
        backgroundColor: '#fff',
        height: 200
    }
};

export default Setting;
