import { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo03() {

    const [numero, setNumero] = useState(0);
    console.log(numero);

    function handleIncrementar() {
        setNumero(numero + 1);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>

            <Button
                onPress={() => { alert('Alguém tocou no botão!') }}
                title='Alerta'
                color='#973'
                accessibilityLabel='Botão de Alerta'
            />

            <Text style={styles.txt}>{numero}</Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleIncrementar()}
            >
                <Text style={styles.txtBotao}>Incrementar número</Text>
            </TouchableOpacity>
        </View>
    );
}