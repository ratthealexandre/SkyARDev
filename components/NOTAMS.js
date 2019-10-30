import React, {Component} from 'react';
import {ActivityIndicator, View, Text, FlatList, StyleSheet, ListView, Alert, Platform} from 'react-native';

//Page Notice to Airmets (NOTAMs)
class NOTAMS extends React.Component {

constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    }
}

componentDidMount(){
    return (fetch('http://192.168.2.10:80/notam_site/NotamList.php')
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
            //Faire de quoi avec le nouvel état
        });
    })
    .catch((error) => {
        console.error(error);
    }));
}

FlatListItemSeparator = () => {
    return (
    <View
        style={{
        height: 1,
        width: "100%",
        backgroundColor: "#000",
        }}
    />
    );
}

GetFlatListItem (postId) {
  Alert.alert(postId);
}

render() {
    if (this.state.isLoading) {
      return (
          <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
          <Text>Still loading</Text>
          </View>
      );
    }

    return (
        <View style={styles.MainContainer}>
            <FlatList
              data={this.state.dataSource}
              ItemSeparatorComponent = {this.FlatListItemSeparator}
              renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.postId)} > {item.name}</Text>}
              keyExtractor={(item, index) => index.toString()}
            />
        </View>
    
    );
}
}

  const styles = StyleSheet.create({

  MainContainer :{
  justifyContent: 'center',
  flex:1,
  margin: 10

  },

  FlatListItemStyle: {
    padding: 5,
    fontSize: 12,
    height: 30,
  },

  rowViewContainer: {
  fontSize: 20,
  paddingRight: 10,
  paddingTop: 10,
  paddingBottom: 10,
  }

});
  export default NOTAMS