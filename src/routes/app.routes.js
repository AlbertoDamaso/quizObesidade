import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Quiz from '../pages/Quiz';
import ResultQuiz from '../pages/ResultQuiz';

const AppStack = createStackNavigator();

export default function AppRoutes(){
     return(
         <AppStack.Navigator>
            <AppStack.Screen 
                name="Home" 
                component={Home} 
                options={{headerShown: false}}
            />
            <AppStack.Screen name="Quiz" component={Quiz}/>
            <AppStack.Screen name="ResultQuiz" component={ResultQuiz}/>
         </AppStack.Navigator>
     )
 }