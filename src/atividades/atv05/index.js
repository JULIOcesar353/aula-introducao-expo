import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function Atividade5() {
  const [texto, setN1] = useState('');
  const [texto2, setN2] = useState('');
  const [total, setTotal] = useState('-');
  const [sinal, setSinal] = useState('+');
  const [operacao, setOperacao] = useState(1);
  //1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão

  function funcCalcula() {
    if (operacao == 1) {
      setTotal(parseInt(texto) + parseInt(texto2));
    }
    if (operacao == 2) {
      setTotal(parseInt(texto) - parseInt(texto2));
    }
    if (operacao == 3) {
      setTotal(parseInt(texto) * parseInt(texto2));
    }
    if (operacao == 4) {
      setTotal(parseFloat(texto) / parseFloat(texto2));
    }
  }

  function funcMais() {
    setOperacao(1);
    setSinal('﹢');
  }

  function funcMenos() {
    setOperacao(2);
    setSinal('-');
  }

  function funcVezes() {
    setOperacao(3);
    setSinal('×');
  }

  function funcDivide() {
    setOperacao(4);
    setSinal('÷');
  }

  function funcLimpa() {
    setN1('');
    setN2('');
    setTotal('-');
    setSinal('+');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 05</Text>

      <Text style={styles.legenda}>1º número:</Text>
      <TextInput
        value={texto}
        onChangeText={setN1}
        keyboardType="ascii-capable"
        style={styles.textInput}
      />

      <Text style={styles.legenda}>{sinal}</Text>

      <Text style={styles.legenda}>2º número:</Text>
      <TextInput
        value={texto2}
        onChangeText={setN2}
        keyboardType="ascii-capable"
        style={styles.textInput}
      />

      <Text style={styles.legenda}>=</Text>
      <Text style={styles.legenda}>Total:</Text>

      <Text style={styles.textInput}>{total}</Text>

      <View style={styles.txtOperacoes}>
        <TouchableOpacity style={styles.contas} onPress={() => funcMais()}>
          <Text style={styles.simbolos}>﹢</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contas} onPress={() => funcMenos()}>
          <Text style={styles.simbolos}>﹣</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contas} onPress={() => funcVezes()}>
          <Text style={styles.simbolos}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contas} onPress={() => funcDivide()}>
          <Text style={styles.simbolos}>÷</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contas} onPress={() => funcLimpa()}>
          <Text style={styles.simbolos}>⌫</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => funcCalcula()}>
        <Text style={styles.txtBotao}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}
