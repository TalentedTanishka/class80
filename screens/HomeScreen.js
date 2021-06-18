import React , {Component} from 'react';
import { StyleSheet, Text, View , SafeAreaView , Platform , StatusBar,TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component
{
    render()
    {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.anroid_Safe_Area}/>
                <ImageBackground
                style={styles.backgroundImage}
                source={require("../assets/bg_image.png")}
                >
                    <View style={styles.title_bar}>
                <Text style={styles.title_text}>
                ISS TRACKER APP
                </Text>
                </View>

                <TouchableOpacity style={styles.button_style} onPress={()=>{
                    this.props.navigation.navigate("ISSLocation")
                }}>
                    <Text style={styles.button_text}>
                        ISS LOCATION
                    </Text>
                    <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        1
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/iss_icon.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button_style} onPress={()=>{
                    this.props.navigation.navigate("Metrioride")
                }}>
                    <Text style={styles.button_text}>
                        METEORS
                    </Text>
                    <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        2
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/meteor_icon.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity  style={styles.button_style}  onPress={()=>{
                    this.props.navigation.navigate("Update")
                }}>
                    <Text style={styles.button_text}>
                        UPDATES
                    </Text>
                
                <Text style={styles.knowMore}>
                        {"know more-->"}
                    </Text>
                    <Text style={styles.bgDigit}>
                        3
                    </Text>
                    <Image
                    style={styles.iconImage}
                    source={require("../assets/rocket_icon.png")}
                    />
                     </TouchableOpacity>
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
       fontSize:50,
       fontWeight:"bold",
       color:"white",
       
    },
   button_text:{
       fontSize:30,
       fontWeight:"bold",
       color:"yellow",
       //marginTop:75,
       //paddingLeft:30
   },
   button_style:{
       //flex:0.25,
       width:500,
       height:90,
       borderRadius:30,
       backgroundColor:"green",
       alignItems:"center",
       justifyContent:"center",
       alignSelf:"center",
       alignContent:"center",
       marginTop:50,
     
   },
   knowMore: {
    //paddingLeft: 30,
    color: "red",
    fontSize: 15
},
bgDigit: {
    position: "absolute",
    color: "rgba(183, 183, 183, 0.6)",
    fontSize: 100,
    right: 40,
    bottom: -10,
    zIndex: -1
},
iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 350,
    top: -50
},
backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
},
})