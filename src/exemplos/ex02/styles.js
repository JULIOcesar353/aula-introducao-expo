import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 8,
            backgroundColor: '#fff',
            allignItems: 'center',
            borderRadius: 20,
        },
        titulo: {
            fontSize: RFPercentage(5),
            color: 'deepskyblue',
            fontWeight: 'bold',
            borderWidth: 2,
            borderColor: 'deepskyblue', 
            marginTop: 10,
            marginBottom: 10,
            padding: 8, 
            width: '100%',
            height: 80,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 20,
        },
        imagem: {
            // height: RFPercentage(10),
            // widht: RFPercentage(28),
            width: '80%',
            resizeMode: 'contain',
        },
    }
);
 
export default styles;