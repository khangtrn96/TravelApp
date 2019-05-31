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
      }
}

export default styles_travel;