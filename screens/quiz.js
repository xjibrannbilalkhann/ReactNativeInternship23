import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';


const Quiz = ({navigation}) => {
  return (
       
    <View style={styles.container}>
     <View style={styles.head}>
    <Image source = {{uri:'https://hamsantech.com/wp-content/uploads/2023/01/hamsantech-logo.png'}}  style = {styles.img} />
      </View>
      <Text style={styles.paragraph}>
        You Will See All The Progress Here
      </Text>
      <Text style={styles.paragraph}>
        Select from the options below:
      </Text>
<ScrollView>
<View style={{height: 70, backgroundColor: 'grey', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day1')}>
<Text style={styles.text1}> Day 1</Text>
<Text style={styles.text2}> Environment Configuration</Text>
</TouchableOpacity>
</View>

<View style={{height: 70, backgroundColor: '#6D6D6D', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day3')}>
<Text style={styles.text1}> Day 2</Text>
<Text style={styles.text2}> View | Text | ScrollView</Text>
</TouchableOpacity>
</View>

<View style={{height: 70, backgroundColor: 'grey', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day4')}>
<Text style={styles.text1}> Day 3</Text>
<Text style={styles.text2}> FlatList | SectionList | TextInput</Text>
</TouchableOpacity>
</View>

<View style={{height: 70, backgroundColor: '#6D6D6D', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day5')}>
<Text style={styles.text1}> Day 4</Text>
<Text style={styles.text2}> Pressables | Images | Hooks</Text>
</TouchableOpacity>
</View>

<View style={{height: 70, backgroundColor: 'grey', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day6')}>
<Text style={styles.text1}> Day 5</Text>
<Text style={styles.text2}> Navigation | Stack | Tab</Text>
</TouchableOpacity>
</View>

<View style={{height: 70, backgroundColor: '#6D6D6D', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day7')}>
<Text style={styles.text1}> Day 6</Text>
<Text style={styles.text2}> SignUp | Resume </Text>
</TouchableOpacity>
</View>

<View style={{height: 70, backgroundColor: 'grey', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day8')}>
<Text style={styles.text1}> Go Back</Text>
<Text style={styles.text2}> Home</Text>
</TouchableOpacity>
</View>

<View style={{height: 70, backgroundColor: 'grey', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day8')}>
<Text style={styles.text1}> Go Back</Text>
<Text style={styles.text2}> Home</Text>
</TouchableOpacity>
</View>

<View style={{height: 70, backgroundColor: 'grey', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day9')}>
<Text style={styles.text1}> Go Back</Text>
<Text style={styles.text2}> Home</Text>
</TouchableOpacity>
</View>

<View style={{height: 70, backgroundColor: 'grey', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day10')}>
<Text style={styles.text1}> Go Back</Text>
<Text style={styles.text2}> Home</Text>
</TouchableOpacity>
</View>

<View style={{height: 70, backgroundColor: 'grey', alignitem: 'center'}}>
<TouchableOpacity onPress={() => navigation.navigate('day11')}>
<Text style={styles.text1}> Go Back</Text>
<Text style={styles.text2}> Home</Text>
</TouchableOpacity>
</View>

</ScrollView>
    </View>


  );
};

export default Quiz;

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
    marginTop: 40,
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
      color: 'black',
  },
   text2: {
      textAlign: "center",
       justifyContent: 'center',
       alignItems: 'center',
       	fontSize: 19,
     // textAlign: 'center',
      fontWeight: 'bold',
      color: 'black',
  },
  img: {
    width: 160,
    height: 104,
    //display: 'block',
    //justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',
  },
    
  
    top:{
      marginVertical: 16,
      color: '#FFFFFF',
    },
    options:{
      marginVertical: 16,
      flex: 1,
      color: '#808080',
    },
    bottom:{
      marginBottom: 12,
      paddingVertical: 16,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    button:{

    backgroundColor: '#39304A',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
    },
     buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#808080',
  },
  question:{
    color: '#808080',
    fontSize: 28,
    fontWeight: '500',
  },
  option:{
    color: '#808080',
    fontSize: 16,
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#39304A',
     paddingHorizontal: 12,
     borderRadius: 12,
  },
  parent:{
    height: '100%',
  },
});