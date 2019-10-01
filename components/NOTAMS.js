import React from 'react';
import {View, Text,FlatList} from 'react-native';
import notamsdata from '../Helpers/notamsdata';
import { colors } from 'react-native-elements';

//Page Notice to Airmets (NOTAMs)
class NOTAMS extends React.Component {
    render() {
        return (
            <View style={{flex: 1, marginLeft:25, marginTop:50 }}>
              <Text>NOTAMS</Text>

              <FlatList
                data={notamsdata}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <Text style={{color:'red'}}>{item.id}{'\n'}<Text style={{color:'black'}}>{item.title}{'\n'}</Text></Text>}
                />

            </View>
          );
    }  
  }

  export default NOTAMS