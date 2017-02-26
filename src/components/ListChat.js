import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import ListChatItem from './ListChatItem';
import SearchBar from 'react-native-material-design-searchbar';



class ListChat extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.listChat)
    }

    renderRow(item) {
        return (
            <ListChatItem item={item} />
        );
    }

    render() {
        const { containerStyle, contentStyle } = styles;

        return (
            <View style={containerStyle}>
               <View style={contentStyle}>
                   <SearchBar 
                     height={35}
                     placeholder={'Search...'}
                     padding={5}
                     returnKeyType={'search'}
                   />
                  <ListView
                     dataSource={this.dataSource}
                     renderRow={this.renderRow}
                  />
               </View>
            </View>
            
        );
    }
}

const mapStateToProps = state => {
    return { listChat: state.ListChatReducer };
};

const styles = {
   containerStyle: {
        flex: 1,
        justifyContent: 'space-between'
    },
    contentStyle: {
        flex: 1,
    }
}
export default connect(mapStateToProps)(ListChat); 
