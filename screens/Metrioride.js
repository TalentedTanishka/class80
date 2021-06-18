import React , {Component} from 'react';
import { StyleSheet, Text, View , SafeAreaView , Platform , StatusBar,TouchableOpacity,ImageBackground,Image,FlatList,Dimensions} from 'react-native';
import axios from 'axios'

export default class MetriorideScreen extends Component

{
    constructor(props){
        super(props)

        this.state={
            meteors:{}
        }
    }
    getMeteors=()=>{
        axios.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=GajCdGtMgakgq0WJXwgdNcsafJV9gYPBy9Kci3Xe")
        .then(response=>{
        this.setState({
            meteors:response.data.near_earth_objects
        })
        .catch(error=>{
            alert(error.message)
        })
        })
    }

    componentDidMount()
    {
        this.getMeteors()
    }

    keyExtractor=(item,index)=>{
        index.toString()
    }

    renderItem=({item})=>{
        let meteor = item
        console.log(meteor)
        let bg_img , size , speed
        if(meteor.threat_Score<=30)
        {
            bg_img = require("../assets/meteor_bg1.png")
            speed = require("../assets/meteor_speed3.gif")
            size = 100
        }
        else if(meteor.tthreat_Score<=75){
            bg_img = require("../assets/meteor_bg2.png")
            speed = require("../assets/meteor_speed3.gif")
            size = 150
        }
        else{
            bg_img = require("../assets/meteor_bg3.png")
            speed = require("../assets/meteor_speed3.gif")
            size = 200
        }
      return(
          <View>
              <ImageBackground source={bg_img} style={styles.backgroundImage}>
              <View>
                  <Image source={speed} style={{width:size, height:size,alignSelf:"center"}}/>
                  <View>
                      <Text style={[styles.cardTitle, {marginTop:400 , marginLeft:50}]}>
                          {item.name}
                      </Text>
                      <Text style={[styles.cardTitle, {marginTop:20 , marginLeft:50}]}>
                          Closest to Earth : {item.close_approach_data[0].close_approach_date_full}
                      </Text>
                      <Text style={[styles.cardTitle, {marginTop:5 , marginLeft:50}]}>
                          Minimum Diameter in kilometers : {item.estimated_diameter.kilometers.estimated_diameter_min}
                      </Text>
                      <Text style={[styles.cardTitle, {marginTop:5 , marginLeft:50}]}>
                         Maximum Diameter in kilometers : {item.estimated_diameter.kilometers.estimated_diameter_max}
                      </Text>
                      <Text style={[styles.cardTitle, {marginTop:5 , marginLeft:50}]}>
                          Velocity : {item.close_approach_data[0].relative_velocity.kilometers_per_hour}
                      </Text>
                      <Text style={[styles.cardTitle, {marginTop:5 , marginLeft:50}]}>
                          Missing Earth By : {item.close_approach_data[0].miss_distance.kilometers}
                      </Text>
                  </View>
                  </View>
                  
              </ImageBackground>
             
          </View>
      ) 
    }

    render()
    {
        if(Object.keys(this.state.meteors).length === 0){
            return(
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text>
                        Loading....
                    </Text>
                </View>
            )
        }
        else{


      
  var meteor_array1= Object.keys(this.state.meteors).map(meteor_date=>{
      return this.state.meteors[meteor_date]
        
      
  })
  console.log(this.state.meteors)

  var meteors = [].concat.apply([],meteor_array1)

 
  
  meteors.forEach(function(element){
      let Diameter= (element.estimated_diameter.kilometers.estimated_diameter_min+element.estimated_diameter.kilometers.estimated_diameter_max)/2
      let threat_Score = (Diameter/element.close_approach_data[0].miss_distance.kilometers)*1000000000

      element.threat_Score = threat_Score
  })
console.log(meteors)
  meteors.sort(function(a,b){
      return b.threat_Score - a.threat_Score
  })

  finalMeteors=meteors.slice(0,5)



  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <SafeAreaView style={styles.anroidSafeArea}/> 

<FlatList keyExtractor={this.keyExtractor} data={finalMeteors} renderItem={this.renderItem} horizontal={true}></FlatList>
    </View>
)
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

meteorContainer: {
    flex: 0.85
},
listContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 10,
    padding: 10
},
cardTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "white"
},
cardText: {
    color: "white"
},
threatDetector: {
    height: 10,
    marginBottom: 10
},
gifContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
},
meteorDataContainer: {
    justifyContent: "center",
    alignItems: "center",

}
})