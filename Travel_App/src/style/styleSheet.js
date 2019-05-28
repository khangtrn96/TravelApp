import {StyleSheet, Dimensions} from 'react-native';
import * as theme from '../../theme';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    flex: {
      flex: 1
    },
    column: {
      flexDirection: "column"
    },
    row: {
      flexDirection: "row"
    },
    header: {
      backgroundColor: "white",
      paddingHorizontal: 36,
      paddingTop: 48,
      paddingBottom: 24,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    articles: {
      // paddingHorizontal: 36
    },
    color: {
      backgroundColor: 'red'
    },
    destinations: {
      // paddingHorizontal:36,
      marginTop: -20,
      flex: 1,
      justifyContent:'space-between'
    },
    destination: {
      width: width -(theme.sizes.padding*2),
      height: width -(theme.sizes.padding*2),
      marginHorizontal: theme.sizes.padding,
      paddingHorizontal: theme.sizes.padding,
      //paddingVertical: 24,
      marginBottom:72,
      padding: theme.sizes.padding,
      borderRadius: 12,
      // position:'relative'
      overflow:'visible'
    },
    destinationInfo: {
      position:'absolute',
      paddingHorizontal: theme.sizes.padding,
      paddingVertical: theme.sizes.padding/2,
      borderRadius: 18,
      bottom:-36,
      right: 36,
      left: 36,
      backgroundColor: 'white'
      
    },
    recommended: {
      //paddingTop:70
    },
    recommendedList: {
      paddingHorizontal:20
    },
    recommendation: {
      width: (width -(theme.sizes.padding*2))/2 , 
      //height:,
      marginRight: theme.sizes.padding/2,
      marginHorizontal: theme.sizes.padding/2,
      // paddingHorizontal: 36,
      // paddingVertical: 24,
      backgroundColor:'white',
      
    },
    recommendationImage:{
      width: (width-theme.sizes.padding*2)/2,
      height: (width-theme.sizes.padding*2)/2,
      borderTopRightRadius: 9,
      borderTopLeftRadius: 9,
      padding:16, 
      justifyContent:'space-between'
    },
    avatar: {
      width:theme.sizes.padding,
      height: theme.sizes.padding,
      borderRadius:18,
    },
    rating: {
      fontSize: theme.sizes.font+10,
      color:theme.colors.white,
      fontWeight:'bold'
    },
    shadow:{
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.05,
      shadowRadius: 6,
    },
    dots: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal:6,
        borderWidth: 2.5,
        backgroundColor: theme.colors.gray,
        borderColor:'transparent'
    },
    activeDot: {
        width: 12.5,
        height:12.5,
        borderRadius: 6.25,
        
        borderColor:'#007BFA',
    },
  });
  

export default styles