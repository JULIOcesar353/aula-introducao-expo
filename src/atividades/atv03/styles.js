import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fb5',
            alignItems: 'center',
            justifyContent: 'center',
        },
        txt: {
            fontSize: RFPercentage(4),
            fontWeight: 'bold',
        },
        botao: {
            backgroundColor: '#abc',
            width: '80%',
            borderRadius: 50,
            padding: RFPercentage(0.5),
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: RFPercentage(0.3),
            borderColor: 'black',
        },
        botaoL: {
            backgroundColor: '#777',
            width: RFPercentage(25),
            padding: RFPercentage(1),
            borderRadius: 50,
            alignItems: 'center',
            marginTop: '1%',
            borderWidth: RFPercentage(0.3),
            borderColor: 'black',
            top: RFPercentage(2),
        },
        txtBotao: {
            color: '#FF1',
            fontSize: RFPercentage(4),
            fontWeight: 'bold',
        },
        box: {
            flexDirection: 'row',
        },
        left: {
            width: '33.3%',
            height: '80%',
            alignItems: 'center',
        },
        center: {
            width: '33.3%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFF',
            borderRadius: 20,
            borderWidth: RFPercentage(0.3),
            borderColor: 'black',
        },
        right: {
            alignItems: 'center',
            width: '33.3%',
            height: '80%',
        },

        global: {
            backgroundColor: '#555',
            width: RFPercentage(25),
            height: RFPercentage(12),
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: RFPercentage(0.3),
            borderColor: 'black',
        },
        posicao: {
            width: RFPercentage(30),
            height: RFPercentage(10),
            padding: RFPercentage(1),
            border: 'black',
            borderWidth: 1,
            borderRadius: 20,
            bottom: '20%',
            backgroundColor: '#eee',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: RFPercentage(0.3),
            borderColor: 'black',
        },
        tituloTxt: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
        }
    }
);

export default styles;