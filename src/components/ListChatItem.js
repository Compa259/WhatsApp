import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

class ListChatItem extends Component {

    renderScreen() {
        if (this.props.editSelectedBool) {
            return (
                <View style={styles.editDomainStyle}>
                    <Icon name='ios-remove-circle' size={30} color='red' />
                </View>
            );
        } else {
            return;
        }
    }
    
    render() {
        const { item } = this.props;
        const { totalContainerStyle, containerStyle, thumnailContainerStyle, 
            thumnailStyle, boxChatStyle, notiStyle } = styles;
        return (
            <View style={totalContainerStyle}>
            {this.renderScreen()}
            <View style={containerStyle}>
                <View style={thumnailContainerStyle}>
                    <Image
                       style={thumnailStyle}
                       source={{ uri: item.avatar }}
                    />
                </View>

                <View style={boxChatStyle}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <Text ellipsizeMode="tail"
                          numberOfLines={1} >
                          {item.status}
                    </Text>
                </View>

                <View style={notiStyle}>
                    <Icon name="ios-information-circle-outline" size={40} color="#0173fa" />
                </View>
            </View>
            </View>
        );
    }
}

const styles = {
    totalContainerStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    editDomainStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerStyle: {
        flex: 9,
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#f7f7f7',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderTopWidth: 1
    },
    thumnailContainerStyle: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumnailStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    boxChatStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    notiStyle: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

const mapStateToProps = state => {
    return { editSelectedBool: state.EditReducer };
};

export default connect(mapStateToProps)(ListChatItem);
