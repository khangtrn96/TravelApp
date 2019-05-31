import React, { Component } from "react";



import { 
  Text, 
  View, 
  Image, 
  Dimensions,
  FlatList, 
  ImageBackground, 
  Animated, 
  ScrollView } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


//import styleSheet
import styles from '../src/style/styleSheet';
import * as theme from '../theme'
import { TouchableOpacity } from "react-native-gesture-handler";

const {width, height } = Dimensions.get('screen');


//Add data

const mocks = [{
  id: 1,
  user: {
    name: 'Trần An Khang',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  saved: true,
  location:'Hồ Chí Minh',
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
  saved: false,
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
    saved: false,
    location:'Thành phố Hồ Chí Minh',
    temperature: 30,
    title: 'Cầu Vàng',
    description:'Thành phố Đà Nẵng',
    rating: 3,
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
    saved: true,
    location:'Thành phố Hồ Chí Minh',
    temperature: 30,
    title: 'Cầu Vàng',
    description:'Thành phố Đà Nẵng',
    rating: 4.5,
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
          <Text style={{color: theme.colors.gray}}>Search for</Text>
          <Text style={{fontSize:theme.sizes.font+6}} >Destination</Text>
        </View>
        <View>
          <Image style={styles.avatar} source={{uri:'https://randomuser.me/api/portraits/women/65.jpg'}}/>
        </View>
      </View>
    )
  };
  //  renderDots () {
//   const {destinations} = this.props;
//   const dotPosition = Animated.divide(this.scrollX, width);
//     return (
//       <View style={[styles.flex, styles.row, 
//       { justifyContent:'center', alignItems:'center', marginTop:(36*2) }]}>
//         {destinations.map((item,index) =>{
//           const opacity = dotPosition.interpolate({
//             inputRange: [index -1, index, index +1],
//             outputRange: [1, 2, 1],
//             extrapolate: 'clamp'
//           });
//           return (
//             <Animated.View 
//             key={`step-${item.id}`} 
//             style={[styles.dots, styles.activeDot]} >
//             </Animated.View>
//           )
//         })}
//     </View> 
//     )
  //  }

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
          />
        )
      })
    )
  }

  renderDestinations = () => {
    return (
      <View style={[styles.flex, styles.column, styles.destinations]}>
        <FlatList
        horizontal
        pagingEnabled// help slide one page 
        scrollEnabled
        showsHorizontalScrollIndicator ={false}
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment='center'
        style={{overflow: 'visible'}}
        data = {this.props.destinations}
        keyExtractor={(item, index) => `${item.id}`}
        onScroll={Animated.event([{nativeEvent: { contentOffset: { x: this.scrollX}}
        }])}
        renderItem={({ item }) => this.renderDestination(item)}
        />
        {/* {this.renderDots()} */}
      </View>
    );
  };

  renderDestination = item => {
    const {navigation} = this.props;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
      <ImageBackground 
        style={[styles.flex, styles.destination, styles.shadow]}
        source= {{uri:item.preview}}
        imageStyle={{borderRadius: theme.sizes.border}}
      >
        <View style={[styles.row,{justifyContent: 'space-between'}]}>
          <View style={{flex:0}}>
            <Image 
              source={{ uri: item.user.avatar}}
              style={styles.avatar}
            />
          </View>

          <View style={[ styles.column, {flex:2,addingHorizontal:18}]}>
            <Text style={{color:theme.colors.white, fontWeight:'bold'}}>{item.user.name}</Text>
            
            <Text style={{color:'white'}}>
              <EvilIcons name="location" size={theme.sizes.font *0.9} color={theme.colors.black} />
              {item.location}
            </Text>
          </View>

          <View style={[ {flex: 0, justifyContent: 'center', alignItems: 'flex-end',}]}>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>

        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
          <Text style={{fontSize: theme.sizes.font, fontWeight:'500', paddingBottom:theme.sizes.padding /4}}>{item.title}</Text>
          <View style={[styles.row ,{justifyContent:'space-between',alignItems: 'flex-end',}]}>
            <Text style={{color:theme.colors.caption}}>{item.description.split('').slice(0,50)}...</Text> 
            <FontAwesome name="chevron-right" size={theme.sizes.font * 0.9} color={theme.colors.gray} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
    )
  };

  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[
            styles.row, 
            {
            justifyContent:'space-between',
            alignItems:'flex-end',
            marginBottom:18,
            paddingHorizontal: 36,
            }
          ]}>
          <Text style={{fontSize:18}}>Recommended</Text>  
          
          <TouchableOpacity style={{color: theme.colors.caption}} > 
            <Text>More</Text>
          </TouchableOpacity> 
        </View>

        <View style={[styles.flex, styles.column, styles.recommendedList]}>
          <FlatList 
          //feature to scroll picture like the card easily
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator ={false}
            scrollEventThrottle={16}
            snapToAlignment='end'
            style={{overflow: 'visible',}} //make clearly shadow 
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
            <Text style={{fontSize:theme.sizes.font * 1.25, color:theme.colors.white}}>{item.temperature}℃</Text>
            <FontAwesome 
                  name={ item.saved ? "bookmark" : "bookmark-o"} 
                  size={theme.sizes.font * 1.5} 
                  color={theme.colors.white} 
            />
          </ImageBackground>
        </View>

        <View style={[styles.flex, styles.column, {justifyContent:'space-evenly', padding: theme.sizes.padding/2}]}>
          <Text style={{fontSize: theme.sizes.font, fontWeight:'500', paddingBottom:theme.sizes.padding/2}}>{item.title}</Text>
          <Text style={{color: theme.colors.caption}}>{item.location}</Text>

          <View style={[styles.row, { alignItems:'center', justifyContent: 'space-between',paddingTop: 8}]}>
            {this.renderRatings(item.rating)}
            <Text style={{color: theme.colors.active}}>
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    )
  };
  render() {
    return (
      <ScrollView 
      style={styles.flex}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingVertical: theme.sizes.padding/2}}
      >
        {this.renderDestinations()}
        {this.renderRecommended()}
      </ScrollView>
    );
  };
}

List.defaultProps = {
  destinations: mocks
}
 
export default List;