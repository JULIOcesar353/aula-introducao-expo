import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#000',
            allignItems: 'center',
            justifyContent: 'space-evenly',
            borderRadius: 25,

        },
        titulo: {
            fontSize: RFPercentage(5),
            // fontSize: RFValue(25),
            fontWeight: 'bold',
            color: '#777',

        },
        txt:{
            fontSize: RFPercentage(2.5),
        },
    }
);
 
export default styles;