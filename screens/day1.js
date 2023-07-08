import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Title from '../components/title';
 

const day1 = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.head}>
    <Image source = {{uri:'https://hamsantech.com/wp-content/uploads/2023/01/hamsantech-logo.png'}}  style = {styles.img} />
      </View>
      <Text style={styles.title}>Day 1 Progress</Text>
      <Text style={styles.paragraph}>Environment Configuration</Text>
      <Text style={styles.paragraph1}>Working on Snack.Expo online </Text>
      <View>
<Image source={require('../day 0.png')}  style={styles.img2}/>
</View>
  
<View style={{height: 50, backgroundColor: 'black', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day2')} style={styles.text1}>
<Text style={styles.text1}>Next</Text>
</TouchableOpacity></View>
  

<View style={{height: 50, backgroundColor: 'black', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.text1}>
<Text style={styles.text1}>Go Back</Text>
</TouchableOpacity></View>
    </View>
  );
};

export default day1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#202030',
    padding: 8,
    
  },
  head: {
    width: '1000',
    height: 120,
    backgroundColor: '#29293B',
    },
  title:{
    	fontSize: 34,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 40,
      color :'grey',
  },
  paragraph: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
   paragraph1: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
  },
  text1: {
      textAlign: "center",
       justifyContent: 'center',
       alignItems: 'center',
       	fontSize: 25,
     // textAlign: 'center',
      fontWeight: 'bold',
      color: 'grey',
  },
  img: {
    width: 160,
    height: 104,
    //display: 'block',
    //justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',
  },
   img2: {
    width: '100%',
    height: 200,
    //display: 'block',
    //justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',
  },
});

