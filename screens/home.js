import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.head}>
    <Image source = {{uri:'https://hamsantech.com/wp-content/uploads/2023/01/hamsantech-logo.png'}}  style = {styles.img} />
      </View>
      <Text style={styles.title}>Hello Everyone</Text>
      <Text style={styles.paragraph}>I am Jibran Bilal Khan</Text>
      <Text style={styles.paragraph1}>Welcome to the React Native Intership with HamsanTech</Text>
      <Text style={styles.paragraph1}>You will find all the progress I have made through out this internship</Text>

<View style={{height: 50, backgroundColor: 'black', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.text1}>
<Text style={styles.text1}>Show Progress</Text>
</TouchableOpacity></View>
    </View>
  );
};

export default Home;
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
});

