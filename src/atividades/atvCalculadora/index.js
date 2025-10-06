import { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './styles';

export default function AtvCalculador() {
  const [valor1, setValor1] = useState('0');
  const [valor2, setValor2] = useState('0');
  const [verificaMomento, setVerificaMomento] = useState(true);

  const scrollRef = useRef(null);

  const [substituir, setSubstituir] = useState(true);

  //modo: 1-substituir, 2- limpaVisor, 3-operacoes, 4-apagarUltimo
  function valueAtual(val, modo, tipo) {
    if (modo == 1) {
      // AC já está separado, então val != 10 aqui
      if (substituir) {
        setValor1(String(val)); // substitui o visor
        setSubstituir(false);
      } else {
        setValor1(prev => prev + String(val)); // opcional, concatena após o primeiro número
      }
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 0);
    }


    else if (modo == 2) {
      setValor1('0');
      setSubstituir(true); // próximo número substitui
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 0);
    }


    else if (modo == 3) {
      if (verificaMomento) {
        if ((tipo == 1)) {
          setValor1(`${valor1}+`);
          setVerificaMomento(false);
        }
        if (tipo == 2) {
          setValor1(`${valor1}−`);
          setVerificaMomento(false);
        }
        if (tipo == 3) {
          setValor1(`${valor1}×`);
          setVerificaMomento(false);
        }
        if (tipo == 4) {
          setValor1(`${valor1}÷`);
          setVerificaMomento(false);
        }
      }
    }


    else if (modo == 4) {
      setVerificaMomento(true);
      setValor1(prev => prev.slice(0, -1));
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.visor}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={() =>
            setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 0)
          }
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text style={styles.number}>{valor1}</Text>
        </ScrollView>
      </View>
      <View style={styles.grid}>
        <View style={styles.gridL1}>
          <TouchableOpacity style={styles.botoesLine1} onPress={() => valueAtual()}>
            <Text style={styles.txtBotoes}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesLine1}>
            <Text style={styles.txtBotoes}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesLine1}>
            <Text style={styles.txtBotoes}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesColumn4} onPress={() => operacoes(4)}>
            <Text style={styles.txtBotoes}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridL2}>
          <TouchableOpacity style={styles.botoes} onPress={() => valueAtual(7)}>
            <Text style={styles.txtBotoes}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes} onPress={() => valueAtual(8)}>
            <Text style={styles.txtBotoes}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes} onPress={() => valueAtual(9)}>
            <Text style={styles.txtBotoes}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesColumn4} onPress={() => operacoes(3)}>
            <Text style={styles.txtBotoes}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridL3}>
          <TouchableOpacity style={styles.botoes} onPress={() => valueAtual(4)}>
            <Text style={styles.txtBotoes}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes} onPress={() => valueAtual(5)}>
            <Text style={styles.txtBotoes}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes} onPress={() => valueAtual(6)}>
            <Text style={styles.txtBotoes}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesColumn4} onPress={() => operacoes(2)}>
            <Text style={styles.txtBotoes}>−</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridL4}>
          <TouchableOpacity style={styles.botoes} onPress={() => valueAtual(1)}>
            <Text style={styles.txtBotoes}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes} onPress={() => valueAtual(2)}>
            <Text style={styles.txtBotoes}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes} onPress={() => valueAtual(3)}>
            <Text style={styles.txtBotoes}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesColumn4} onPress={() => operacoes(1)}>
            <Text style={styles.txtBotoes}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridL5}>
          <TouchableOpacity style={styles.botoes} onPress={() => apagarUltimo()}>
            <Text style={styles.txtBotoes}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes} onPress={() => valueAtual(0)}>
            <Text style={styles.txtBotoes}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesColumn4}>
            <Text style={styles.txtBotoes}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
