import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ff1',
            alignItems: 'center',
            justifyContent: 'center',
        },
        txt: {
            fontSize: RFPercentage(4),
            fontWeight: 'bold',
        },
        botao: {
            backgroundColor: '#777',
            width: '75%',
            borderRadius: 50,
            padding: RFPercentage(0.5),
            alignItems: 'center',
            justifyContent: 'center',            
        },
        botaoL: {
            backgroundColor: '#777',
            width: RFPercentage(25),
            padding: RFPercentage(1),
            borderRadius: 50,
            alignItems: 'center',
            marginTop: '1%',
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
            backgroundColor: '#aaa',
            borderRadius: 20,
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
        },
    }
);

export default styles;