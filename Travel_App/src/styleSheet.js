import {StyleSheet, Dimensions} from 'react-native';

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
      flex: 1,
      justifyContent:'space-between'
    },
    destination: {
      width: width -(36*2),
      height: width *0.5,
      marginHorizontal: 36,
      paddingHorizontal: 36,
      paddingVertical: 24,
      padding: 36,
      borderRadius: 12,
      // position:'relative'
      overflow:'visible'
    },
    destinationInfo: {
      position:'absolute',
      paddingHorizontal: 36,
      paddingVertical: 24,
      borderRadius: 18,
      bottom:-36,
      right: 36,
      left: 36,
      backgroundColor: 'white'
      
    },
    recommended: {
      //padding:36
    },
    recommendedList: {
      //paddingHorizontal:36
    },
    recommendation: {
      width: (width -(36*2))/2 , 
      //height:'auto',
      marginRight: 18,
      marginHorizontal: 18,
      // paddingHorizontal: 36,
      // paddingVertical: 24,
      backgroundColor:'white',
      
    },
    recommendationImage:{
      width: (width-36*2)/2,
      height: (width-36*2)/2,
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      padding:16, 
      justifyContent:'space-between'
    },
    avatar: {
      width:35,
      height: 35,
      borderRadius:18,
    },
    rating: {
      fontSize: 28,
      color:'white',
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
        width: 8,
        height: 8,
        backgroundColor:'#d9dde2',
        borderRadius: 4,
        marginHorizontal:6,
        borderWidth: 2,
        borderColor:'transparent'
    },
    activeDot: {
        width: 12,
        height:12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor:'#007BFA',
    },
  });
  

export default styles