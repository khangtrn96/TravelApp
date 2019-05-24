import React, { Component } from "react";

import { Text, StyleSheet, View, Image, Dimensions, FlatList, ImageBackground } from "react-native";

//import styleSheet
import styles from '../src/styleSheet';

const {width, height } = Dimensions.get('screen');

const mocks = [{
  id: 1,
  user: {
    name: 'Phát',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  location:'Thành phố Hồ Chí Minh',
  temperature: 30,
  title: 'Cầu Vàng',
  description:'Thành phố Đà Nẵng',
  rating: 4.2,
  reviews: 1200,
  preview: 'https://images.unsplash.com/photo-1558117338-7ef3d637ce2f?auto=format&fit=crop&w=1353&q=80',
  images: [
    'https://unsplash.com/photos/gl7HtLuT7iQ?auto=format&fit=crop&w=1350&q=80',
    'https://unsplash.com/photos/gl7HtLuT7iQ?auto=format&fit=crop&w=1350&q=80',
    'https://unsplash.com/photos/gl7HtLuT7iQ?auto=format&fit=crop&w=1350&q=80',
    'https://unsplash.com/photos/gl7HtLuT7iQ?auto=format&fit=crop&w=1350&q=80',
    ]
},
{
  id: 2,
  user: {
    name: 'Phát',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  location:'Thành phố Hồ Chí Minh',
  temperature: 30,
  title: 'Cầu Vàng',
  description:'Thành phố Đà Nẵng',
  rating: 4.2,
  reviews: 1200,
  preview: 'https://images.unsplash.com/photo-1558127920-90f28455f888?auto=format&fit=crop&w=1350&q=80',
  images: [
    'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
    'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
    'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
    'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
    ]
},
{
    id: 3,
    user: {
      name: 'Phát',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    location:'Thành phố Hồ Chí Minh',
    temperature: 30,
    title: 'Cầu Vàng',
    description:'Thành phố Đà Nẵng',
    rating: 4.2,
    reviews: 1200,
    preview: 'https://images.unsplash.com/photo-1558127920-90f28455f888?auto=format&fit=crop&w=1350&q=80',
    images: [
      'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
      'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
      'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
      'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
      ]
  },
  {
    id: 4,
    user: {
      name: 'Phát',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    location:'Thành phố Hồ Chí Minh',
    temperature: 30,
    title: 'Cầu Vàng',
    description:'Thành phố Đà Nẵng',
    rating: 4.2,
    reviews: 1200,
    preview: 'https://images.unsplash.com/photo-1558127920-90f28455f888?auto=format&fit=crop&w=1350&q=80',
    images: [
      'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
      'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
      'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
      'https://unsplash.com/photos/f60qQpYOHd4?auto=format&fit=crop&w=1350&q=80',
      ]
  },
];

 class List extends Component {
  static navigationOptions = {
    header: (
      <View style={[ styles.row, styles.header, styles.flex]}>
        <View>
          <Text style={{color:'#d9dde2'}}>Search for</Text>
          <Text style={{fontSize:24}} >Destination</Text>
        </View>
        <View>
          <Image style={styles.avatar} source={{uri:'https://randomuser.me/api/portraits/women/65.jpg'}}/>
        </View>
      </View>
    )
  };

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <Text>Destinations</Text>
      </View>
    );
  };
  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[
            styles.row, 
            {
            justifyContent:'space-between',
            alignItems:'flex-end',
            marginBottom:36,
            paddingHorizontal: 36,
            }
          ]}>
          <Text style={{fontSize:18}}>Recommended</Text>  
          <Text style={{color: '#cbced3'}}>More</Text>  
        </View>

        <View style={[styles.flex, styles.column, styles.recommendedList]}>
          <FlatList 
          //feature to scroll picture like the card easily
            horizontal
            pagingEnabled
            scrollEnabled
            showHorizontalScrollIndicator ={false}
            scrollEventThrottle={16}
            snapToAlignment='end'
            data = {this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderRecommendation(item, index)}
          />
        </View>
      </View>
    );
  };

  renderRecommendation = (item, index) => {
    return(
      <View style={[
        styles.flex, styles.column, styles.recommendation, styles.shadow, 
        ]}>
        <View style={[styles.flex]}>
          <ImageBackground 
          style={[ {overflow: 'hidden'},styles.flex, styles.row, styles.recommendationImage ]}
          source= {{uri:item.preview}}>
              <Text style={{color:'black'}}>{item.temperature}℃</Text>
              <Text style={{color:'black'}}>Hello</Text>
          </ImageBackground>
        </View>

        <View style={[styles.flex, styles.column, {justifyContent:'space-evenly', padding: 18}]}>
          <Text style={{fontSize: 18, fontWeight:'500', paddingBottom:8}}>{item.title}</Text>
          <Text style={{color: '#cbced3'}}>{item.location}</Text>
          <Text style={{color: '#007BFA'}}>{item.rating}</Text>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={[styles.flex, styles.articles]}>
        {this.renderDestinations()}
        {this.renderRecommended()}
      </View>
    );
  }
}

List.defaultProps = {
  destinations: mocks
}
 
export default List;