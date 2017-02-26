import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { edit } from '../../actions';

const Header = (props) => {
    const { textLeft, textCenter, textRight, iconHeader } = props;
    const { containerStyle, textCenterStyle, textEdgeStyle } = styles;
    return (
        <View style={containerStyle}>
            <TouchableOpacity onPress={() => this.props.edit(true)}>
               <Text style={textEdgeStyle}>{textLeft}</Text>
            </TouchableOpacity>

            <Text style={textCenterStyle}>{textCenter}</Text>

            {iconHeader !== undefined ?
                iconHeader : <Text style={textEdgeStyle}>{textRight}</Text>}
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#f7f7f7',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        paddingLeft: 8,
        paddingRight: 8
    },
    textCenterStyle: {
        fontSize: 20,
        color: '#000',
    },
    textEdgeStyle: {
        fontSize: 18,
        color: '#0173fa'
    }
};

export default connect({ edit })({ Header });
