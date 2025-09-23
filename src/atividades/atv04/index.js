import { useState } from 'react';
import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade4() {

    const [texto, setTexto] = useState('');
    const [texto2, setTexto2] = useState('');
    const [name, setName] = useState('-');

    function handleExibeMensagem() {
        setName(`${texto} ${texto2}`);
        setTexto2('');
        setTexto('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 04</Text>

            <Text style={styles.legenda}>Nome:</Text>
            <TextInput
                value={texto}
                onChangeText={setTexto}
                placeholder='informe seu nome...'
                keyboardType='ascii-capable'
                style={styles.textInput}
            />


            <Text style={styles.legenda}>Sobrenome:</Text>
            <TextInput
                value={texto2}
                onChangeText={setTexto2}
                placeholder='seu sobrenome...'
                keyboardType='ascii-capable'
                style={styles.textInput}
            />

            <Text style={styles.textInput}>{name}</Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleExibeMensagem()}>
                <Text style={styles.txtBotao}>EXIBIR</Text>
            </TouchableOpacity>
        </View >
    );
}