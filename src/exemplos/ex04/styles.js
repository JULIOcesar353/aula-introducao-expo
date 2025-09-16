import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#aaa',
            alignItems: 'center',
        },
        titulo: {
            fontSize: RFPercentage(5),
            // fontSize: RFValue(25),
            fontWeight: 'bold',
            color: '#000',
            margin: RFPercentage(5),
            borderColor: '#000',
            borderWidth: RFPercentage(0.1),
            borderRadius: RFPercentage(5),
            paddingRight: RFPercentage(1.6),
            paddingLeft: RFPercentage(1.6),
            backgroundColor: '#ddd',
        },
        txt: {
            fontSize: RFPercentage(2.5),
            marginTop: RFPercentage(2),
            alignItems: 'center',
        },
        textInput: {
            borderWidth: RFPercentage(0.3),
            borderColor: '#000',
            width: '50%',
            textAlign: 'center',
            fontSize: RFPercentage(2.1),
            fontWeight: 'bold',
            borderRadius: RFPercentage(2.5),
            padding: RFPercentage(1),
            margin: RFPercentage(1),
        },
        botao: {
            marginTop: RFPercentage(2),
            borderWidth: RFPercentage(0.3),
            borderColor: '#000',
            borderRadius: RFPercentage(2.5),
            width: '50%',
            fontSize: RFPercentage(2.1),
            alignItems: 'center',
            padding: RFPercentage(0.5),
            backgroundColor: '#ddd',
        },
        txtBotao: {
            fontSize: RFPercentage(3),
            fontWeight: 'bold',
            textAlign: 'center',
        },
    }
);

export default styles;