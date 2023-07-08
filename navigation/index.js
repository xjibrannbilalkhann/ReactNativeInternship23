import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import day1 from '../screens/day1';
import day2 from '../screens/day2';
import day3 from '../screens/day3';
import day4 from '../screens/day4';
import day5 from '../screens/day5';
import day6 from '../screens/day6';
import day7 from '../screens/day7';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="day1" component={day1} options={{headerShown: false}} />
     <Stack.Screen name="day2" component={day2} options={{headerShown: false}} />
      <Stack.Screen name="day3" component={day3} options={{headerShown: false}} />
       <Stack.Screen name="day4" component={day4} options={{headerShown: false}} />
        <Stack.Screen name="day5" component={day5} options={{headerShown: false}} />
         <Stack.Screen name="day6" component={day6} options={{headerShown: false}} />
          <Stack.Screen name="day7" component={day7} options={{headerShown: false}} />
              <Stack.Screen name="day8" component={day7} options={{headerShown: false}} />
                  <Stack.Screen name="day9" component={day7} options={{headerShown: false}} />
                      <Stack.Screen name="day10" component={day7} options={{headerShown: false}} />
                          <Stack.Screen name="day11" component={day7} options={{headerShown: false}} />

      <Stack.Screen name="Result" component={Result} options={{headerShown: false}} />
          </Stack.Navigator>
  );
}

export default MyStack;