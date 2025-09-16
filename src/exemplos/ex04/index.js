import { useState } from 'react';
import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo04() {

    const [texto, setTexto] = useState('');
    const [texto2, setTexto2] = useState('');

    function handleLimpar() {
        setTexto('');
        setTexto2('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txt}>{texto}</Text>
            <TextInput
                value={texto}
                onChangeText={setTexto}
                placeholder='PASSWORD'
                keyboardType='numeric'
                secureTextEntry
                style={styles.textInput}
            />


            <Text style={styles.txt}>{texto2}</Text>
            <TextInput
                value={texto2}
                onChangeText={setTexto2}
                placeholder='PASSWORD2'
                keyboardType='numeric'
                secureTextEntry
                style={styles.textInput}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleLimpar()}
            >
                <Text style={styles.txtBotao}>LIMPAR</Text>
            </TouchableOpacity>
        </View>
    );
}