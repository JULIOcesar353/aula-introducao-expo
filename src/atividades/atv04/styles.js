import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#f44',
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
            paddingRight: RFPercentage(2),
            paddingLeft: RFPercentage(2),
            backgroundColor: '#e99',
        },
        txt: {
            fontSize: RFPercentage(2.5),
            alignItems: 'center',
        },
        textInput: {
            borderWidth: RFPercentage(0.3),
            borderColor: '#000',
            width: '60%',
            textAlign: 'center',
            fontSize: RFPercentage(2.1),
            fontWeight: 'bold',
            borderRadius: RFPercentage(2.5),
            padding: RFPercentage(1),
        },
        botao: {
            marginTop: RFPercentage(2.5),
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
        legenda: {
            borderColor: '#000',
            width: '60%',
            textAlign: 'left',
            fontWeight: 'bold',
            padding: RFPercentage(1),
            margin: RFPercentage(1),
            fontSize: RFPercentage(2.5),
            marginBottom: RFPercentage(-3),
        }
    }
);

export default styles;