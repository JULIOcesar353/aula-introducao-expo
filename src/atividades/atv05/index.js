import { useState } from 'react';
import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade5() {

    const [texto, setN1] = useState('');
    const [texto2, setN2] = useState('');
    const [name, setName] = useState('-');

    function handleExibeMensagem() {
        setName(`${texto} ${texto2}`);
        setTexto2('');
        setTexto('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 05</Text>

            <Text style={styles.legenda}>1º número:</Text>
            <TextInput
                value={texto}
                onChangeText={setN1}
                keyboardType='ascii-capable'
                style={styles.textInput}
            />

            <Text style={styles.legenda}>+</Text>

            <Text style={styles.legenda}>2º número:</Text>
            <TextInput
                value={texto2}
                onChangeText={setN2}
                keyboardType='ascii-capable'
                style={styles.textInput}
            />

            <Text style={styles.legenda}>=</Text>
            <Text style={styles.legenda}>Total:</Text>


            <Text style={styles.textInput}>{name}</Text>

            <View style={styles.txtOperacoes}>=</View>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleExibeMensagem()}>
                <Text style={styles.txtBotao}>CALCULAR</Text>
            </TouchableOpacity>
        </View >
    );
}