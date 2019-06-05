import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Animated, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';

//Import style
import styles from '../src/style/styleArticle';
import * as theme from '../theme'

//import icon library
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height } = Dimensions.get('screen');

class Article extends Component {
    scrollX = new Animated.Value(0);
     
    static navigationOptions = ({navigation}) => ({
        header: (
          <View style={[ styles.row, styles.header, styles.flex]}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <EvilIcons style={{fontSize:36}} name='arrow-left'/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons style={{fontSize:36}} name='more-vert'/>
            </TouchableOpacity>
          </View>
        ),
        headerTransparent: true,
      })

      renderDots () {
          const {navigation} = this.props;
          const article = navigation.getParam('article')
          const dotPosition = Animated.divide(this.scrollX, width);
            return (
              <View style={[styles.flex, styles.row, 
              { justifyContent:'center', alignItems:'center', paddingBottom: 100,}]}>
                {article.images.map((item,index) =>{
                  const opacity = dotPosition.interpolate({
                    inputRange: [index -1, index, index +1],
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: 'clamp'
                  });
                  return (
                    <Animated.View 
                        key={`step-${item}-${index}`} 
                        style={[styles.dots, {opacity}]} 
                    ></Animated.View>
                  )
                })}
            </View> 
            )
           }   

    renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return(
        stars.map((value, index) =>{
        const activeStar = Math.floor(rating) >= (index+1) ;
        return (
            <FontAwesome 
            name="star" 
            key={`star-${index}`} 
            color={theme.colors[activeStar ? 'active' :'gray' ]}
            size={theme.sizes.font}
            style={{marginRight: 4}}
            />
        )
        })
    )
    }   

    render() {
        const { navigation } = this.props;
        const article = navigation.getParam('article');

        return (
            <View style={styles.flex}>
                    <View style={[styles.flex,{marginBottom: -theme.sizes.margin*3}] }>
                        <ScrollView
                            horizontal
                            pagingEnabled// help slide one page 
                            scrollEnabled
                            showsHorizontalScrollIndicator ={false}
                            decelerationRate={0}
                            scrollEventThrottle={16}
                            snapToAlignment='center'
                            onScroll={Animated.event([{nativeEvent: { contentOffset: { x: this.scrollX}}
                            }])}
                        >
                            {
                            article.images.map((img, index) => (
                                <Image 
                                    key={`${index}-${img}`} 
                                    source={{ uri: img}} 
                                    resizeMode='cover'
                                    style={{width, height: width}} />
                                ))
                            }
                        </ScrollView>
                        {this.renderDots()}
                    </View>

                <View style={[styles.flex, styles.content]}>
                    <View style={[styles.flex, styles.contentHeader]}>
                        <Image style={[styles.avatar, styles.shadow]} source={{uri: article.user.avatar}}></Image>
                        <Text style={styles.title}>{article.title}</Text>
                        <View style={[styles.row, { alignItems:'center', marginVertical: theme.sizes.margin /2 }]}>
                            {this.renderRatings(article.rating)}
                            <Text style={{marginLeft:theme.sizes.margin, color: theme.colors.caption}}>
                                ({article.reviews} reviews)
                            </Text>
                        </View>

                        <TouchableOpacity> 
                            <Text style={styles.description}>
                                {article.description.split('').slice(0, 180)}...
                                <Text style={{color: theme.colors.active}}>Read more</Text> 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        )
    }
}

export default Article;