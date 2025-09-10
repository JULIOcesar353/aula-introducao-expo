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
            // borderWidth: RFPercentage(0.1),
            // width: '70%',
            alignItems: 'center',
        },
        botao: {
            backgroundColor: '#777',
            width: '60%',
            borderRadius: RFPercentage(1),
            padding: RFPercentage(1),
            alignItems: 'center',
            
        },
        botaoL: {
            backgroundColor: '#777',
            width: RFPercentage(25),
            padding: RFPercentage(1),
            alignItems: 'center',
        },
        txtBotao: {
            color: '#FF1',
            fontSize: RFPercentage(2),
            fontWeight: 'bold',
            alignItems: 'center',
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
            height: '80%',
            alignItems: 'center',
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
            flexDirection: 'row',
            alignItems: 'center',
        },
    }
);

export default styles;