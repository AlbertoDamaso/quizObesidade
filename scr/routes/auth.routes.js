import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
            name="SiginIn"
            component={SignIn}
            options={{headerShown: false}}
            />
            
            <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
                headerStyle:{
                    backgroundColor: '#0072BB',
                    borderBottomWidth: 1,
                    borderBottomColor:'#00C864'
                },
                headerBackTitleVisible: false,
                headerTitle: ''
            }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;