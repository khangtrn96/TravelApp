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
        backgroundColor: "gray",
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
        backgroundColor: "white",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
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
}

export default styles_travel;