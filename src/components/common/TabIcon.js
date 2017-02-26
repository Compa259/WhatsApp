import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constant/Colors';

const propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    iconName: PropTypes.string,
    iconSize: PropTypes.number
};

const renderIcon = ({ iconDefault, iconSelected, iconSize = 30, selected }) => {
    console.log(selected);

    return (
        <Icon
           name={selected ? iconSelected : iconDefault}
           size={iconSize}
           color={selected ? Colors.tabbarIconSelected : Colors.tabbarIconDefault}
        />
    );
};

const TabIcon = ({ title, selected, iconDefault, iconSelected, iconSize }) => {

    return (

        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
           {renderIcon({ iconDefault, iconSelected, iconSize, selected })}
           <Text>{title}</Text>
        </View>
    );
};

TabIcon.propTypes = propTypes;
export { TabIcon };
