import React , {Component} from 'react';
import { StyleSheet, Text, View , SafeAreaView , Platform , StatusBar,TouchableOpacity,ImageBackground,Image} from 'react-native';
import MapView ,{Marker} from 'react-native-maps';
import axios from 'axios';
import ISSinfo from './IssInfo';
export default class ISSLocationScreen extends Component
{

    constructor(props)
    {
        super(props)

        this.state={
            location:{}
        }
    }

    getIssLocation=()=>{
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response=>{
            this.setState({
                location:response.data
            })
        })
        .catch(error=>
        {
            alert("Error")
        }
        )
    }

    componentDidMount(){
        this.getIssLocation()
    }

    render()
    {

        if(Object.keys(this.state.location).length === 0){
            return(
            <View style={{justifyContent:"center" , alignItems:"center" , flex:1}}>
                <Text>
                    Loading...
                </Text>
            </View>
            )
        }
        else{
        return(

            <View style={styles.container}>
            <SafeAreaView style={styles.anroid_Safe_Area}/>
            <ImageBackground
            style={styles.backgroundImage}
            source={require("../assets/iss_bg.jpg")}
            >
               <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.title_text}>
            ISS LOCATION SCREEN
            </Text>
            </View>


<View style={styles.mapCONTAINER}>
            <MapView style={styles.map} region={{
                latitude:this.state.location.latitude,
                longitude:this.state.location.longitude,
                latitudeDelta:100,
                longitudeDelta:100
                }} >
                <Marker coordinate={{
                    latitude:this.state.location.latitude,
                longitude:this.state.location.longitude,}}>
                    <Image
                    style={{width:50,height:51}}
                    source={require("../assets/iss_icon.png")}
                    />
                </Marker>
            </MapView>
            </View>
            <ISSinfo></ISSinfo>
           
            </ImageBackground>
        </View>
        
    );
}
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

map:{
    width:"100%",
   height:"100%",

},
mapCONTAINER:{
    flex:0.6
}
})