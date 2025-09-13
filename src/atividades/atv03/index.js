import { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade3() {

    const [numero, setNumero] = useState(0);
    console.log(numero);

    function handleIncrementar() {
        setNumero(numero + 1);
    }

    function handleDecrementar() {
        setNumero(numero - 1);
    }

    function handleLimpar() {
        setNumero(0);
    }


    return (
        <View style={styles.container}>
            <View style={styles.posicao}>
                <Text style={styles.tituloTxt}>Atividade 3</Text>
            </View>

            <View style={styles.global}>
                <View style={styles.box}>

                    <View style={styles.left}>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => handleDecrementar()}
                        >
                            <Text style={styles.txtBotao}>-</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.center}>
                        <Text style={styles.txt}>{numero}</Text>
                    </View>

                    <View style={styles.right}>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => handleIncrementar()}
                        >
                            <Text style={styles.txtBotao}>+</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>
            <TouchableOpacity
                style={styles.botaoL}
                onPress={() => handleLimpar()}
            >
                <Text style={styles.txtBotao}>LIMPAR</Text>
            </TouchableOpacity>



        </View>
    );
}