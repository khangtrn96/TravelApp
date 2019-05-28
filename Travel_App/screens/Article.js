import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

//Import style
import styles from '../src/style/styleArticle';
import * as theme from '../theme'

//import icon library
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Article extends Component {
    static navigationOptions = ({navigation}) => {
        header: (
          <View style={[ styles.row, styles.header, styles.flex]}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <EvilIcons style={{fontSize:36}} name='arrow-left'/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons style={{fontSize:36}} name='more-vert'/>
            </TouchableOpacity>
          </View>
        )
      };

    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.flex}>
                    <Text>Header</Text>
                </View>

                <View style={styles.flex}>
                    <Text>Content</Text>
                </View>
            </View>
            
        )
    }
}

export default Article;