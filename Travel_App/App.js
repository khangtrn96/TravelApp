import React from 'react';
import {View, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';

// You can import from local files
import Travel from './navigation/Travel';


// export default class App extends React.Component {
//   render() {
//     return (
//       <View>
//        <Text>dsad</Text>
//       </View>
//     );
//   }
// }
// or any pure javascript modules available in npm
export default createAppContainer(Travel);

