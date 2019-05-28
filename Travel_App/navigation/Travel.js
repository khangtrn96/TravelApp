import React from 'react';
import { createStackNavigator } from "react-navigation";

import List from '../screens/List';
import Article from '../screens/Article';

const AppNavigator = createStackNavigator(
    {
        List,
        Article
    },
    {
        initialRouteName: "List",
        headerMode:'float'
    }
);

export default AppNavigator;