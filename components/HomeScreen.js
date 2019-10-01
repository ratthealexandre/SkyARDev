import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

//Page d'acceuil
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>MY APP {'\n'}</Text>
        <Image
          style={{width: 200, height: 200, marginBottom: 30}}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg'}}
        />

        <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row', marginBottom:5}}>
                    <Text>Departure :</Text>
                    <TextInput
                        style={styles.textinput1}
                        placeholder='CYUL'
                        editable maxLength={4} 
                        autoCapitalize={"characters"}>           
                    </TextInput>
                </View> 
                <View style={{flexDirection:'row', marginBottom:5}}>  
                    <Text>Arrival :</Text>
                    <TextInput
                        style={styles.textinput2}
                        placeholder='CYYZ'
                        editable maxLength={4} 
                        autoCapitalize={"characters"}>           
                    </TextInput>
                </View> 
                <View style={{flexDirection:'row'}}>
                    <Text>Alternate :</Text>
                    <TextInput
                        style={styles.textinput3}
                        placeholder='CYOW'
                        editable maxLength={4} 
                        autoCapitalize={"characters"}>           
                    </TextInput>
                </View> 

        </View>

            <Text style={{fontSize: 8, paddingTop: 30}}>By : Alexandre Ratthé</Text>
    </View>
    );
  }  
}


const styles ={
    textinput1:{
        height: 30, width: 50,
        marginLeft:10,
        justifyContent: 'center', 
        borderColor: 'gray', 
        borderWidth: 1, 
        textAlign:'center'
    },
    textinput2:{
        height: 30, width: 50,
        marginLeft:30,
        justifyContent: 'center', 
        borderColor: 'gray', 
        borderWidth: 1, 
        textAlign:'center'
    },
    textinput3:{
        height: 30, width: 50,
        marginLeft:15,
        justifyContent: 'center', 
        borderColor: 'gray', 
        borderWidth: 1, 
        textAlign:'center'
    }
};


export default HomeScreen