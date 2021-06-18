import React , {Component} from 'react';
import { StyleSheet, Text, View , SafeAreaView , Platform , StatusBar,TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class UpdateScreen extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
            <SafeAreaView style={styles.anroid_Safe_Area}/>
            <ImageBackground
            style={styles.backgroundImage}
            source={require("../assets/bg_updates.jpg")}
            >
               <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.title_text}>
            UPDATE SCREEN
            </Text>
            </View>
            </ImageBackground>
        </View>
        
    );
}
}

const styles = StyleSheet.create({
container:{
    flex:1
},
anroidSafeArea :{
    marginTop : Platform.OS === "android"?StatusBar.currentHeight:0
},
title_bar:{
    flex : 0.15,
    justifyContent:"center",
    alignItems:"center"
},
title_text:{
   fontSize:60,
   fontWeight:"bold",
   color:"white",
  
},

backgroundImage: {
flex: 1,
resizeMode: 'cover',
},
})