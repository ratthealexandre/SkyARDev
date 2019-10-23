import React from 'react';
import MapView from 'react-native-maps';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

//Page Carte
class MAPS extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <MapView style={styles.mapStyle} />
        </View>
      );
    }  
}

export default MAPS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

//<Image
//style={{width: 200, height: 200, marginBottom: 30}}
//source={{uri: 'https://www.iFlightPlanner.com/AviationCharts/?Map=sectional&GS=115&Route='}}
//>