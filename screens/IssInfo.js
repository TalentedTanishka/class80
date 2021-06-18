import React , {Component} from 'react';
import { StyleSheet, Text, View , SafeAreaView , Platform , StatusBar,TouchableOpacity,ImageBackground,Image} from 'react-native';
import MapView ,{Marker} from 'react-native-maps';
import axios from 'axios'

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

componentDidMount()
{
    this.getIssLocation()
    try{
        setInterval(async()=>{
            this.getIssLocation()
        },5000)

    }
    catch(error)
    {
        console.log(error)
    }
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
            <View style={styles.info_container}>
                <Text style={styles.info_text}>
                    latitude:{this.state.location.latitude}
                    
                </Text>

                <Text style={styles.info_text}>
                    longitude:{this.state.location.longitude}
                    
                </Text>

                <Text style={styles.info_text}>
                    altitude:{this.state.location.altitude}
                    
                </Text>

                <Text style={styles.info_text}>
                    velocity:{this.state.location.velocity}  
                </Text>

                
            </View>
        )
    }
}
}

const styles = StyleSheet.create({
    info_container:{
        flex:0.2,
        backgroundColor:"white",
        marginTop:-10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30,
    },
    info_text:{
        fontSize:15,
        fontWeight:"bold"
    }
})


