import React, { Component } from "react";

import { Text, StyleSheet, View, Image, Dimensions,FlatList, ImageBackground, Animated } from "react-native";

//import styleSheet
import styles from '../src/styleSheet';

const {width, height } = Dimensions.get('screen');

//Add data
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
 renderDots () {
  const {destinations} = this.props;
  
    return (
      <View style={[styles.flex, styles.row, 
      { justifyContent:'center', alignItems:'center', marginTop:(36*2) }]}>
        {destinations.map(item =>{
          return (
            <Animated.View 
            key={`step-${item.id}`} 
            style={[styles.dots, item.id === 1 ? styles.activeDot : null ]} />
          )
        })}
    </View> 
    )
 }

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column, styles.destinations]}>
        <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showHorizontalScrollIndicator ={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment='center'
        style={{overflow: 'visible',}}
        data = {this.props.destinations}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => this.renderDestination(item)}
        />
        {this.renderDots()}
      </View>
    );
  };

renderDestination = item => {
  return (
    <ImageBackground 
      style={[ styles.destination, styles.shadow]}
      source= {{uri:item.preview}}
      imageStyle={{borderRadius: 16}}
    >
      <View style={[styles.row,{justifyContent: 'space-between'}]}>
        <View style={[styles.flex]}>
          <Image 
            source={{ uri: item.user.avatar}}
            style={styles.avatar}
          />
        </View>

        <View style={[ styles.column, {paddingHorizontal:18}]}>
          <Text style={{color:'white', fontWeight:'bold'}}>{item.user.name}</Text>
          <Text style={{color:'white'}}>{item.location}</Text>
        </View>

        <View style={[{ justifyContent: 'space-between', alignItems: 'center',}]}>
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>

      <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
        <Text style={{fontSize: 18, fontWeight:'500', paddingBottom:8}}>{item.title}</Text>
        <Text style={{color: '#cbced3'}}>{item.description}</Text>
      </View>
    </ImageBackground>
  )
}

  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <Text>Recommended</Text>
      </View>
    );
  };

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