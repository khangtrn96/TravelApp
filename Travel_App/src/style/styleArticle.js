import {StyleSheet, Dimensions} from 'react-native';
import * as theme from '../../theme';

const styles_travel = {
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
        backgroundColor: "transparent",
        paddingHorizontal: 36,
        paddingTop: 48,
        //paddingBottom: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      back: {
        width:42, 
        heght:42,
        justifyContent: 'center',
        alignItems:'center'
      },
      content: {
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      },
      contentHeader:{
        padding: theme.sizes.padding
      },
      avatar: {
        position:'absolute',
        top: -theme.sizes.margin,
        right: theme.sizes.margin,
        width:theme.sizes.padding * 2,
        height: theme.sizes.padding * 2,
        borderRadius:36,
      },
      shadow:{
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
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
    title:{
      fontSize: theme.sizes.font*2,
      fontWeight: 'bold'    
    },
    description:{
      fontSize: theme.sizes.font,
      color: theme.colors.caption,
      lineHeight: theme.sizes.font*1.5
    }
}

export default styles_travel;