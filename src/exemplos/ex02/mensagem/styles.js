import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            padding: 8,
            backgroundColor: 'deepskyblue',
            borderWidth: RFPercentage(0.6),
            width: '90%',
            allignItems: 'center',
            borderRadius: 20,
            marginBottom: RFPercentage(1),
        },
        titulo: {
            fontSize: RFPercentage(3),
            color: '#121212',
            fontWeight: 'bold',
            marginBottom: RFPercentage(1),
        },
        texto: {
            // height: RFPercentage(10),
            // widht: RFPercentage(28),
            fontSize: RFPercentage(2.2),
            color: '#fafafa',
        },
    }
);
 
export default styles;