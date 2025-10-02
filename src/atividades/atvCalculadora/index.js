import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function AtvCalculador() {

  return (
    <View style={styles.container}>

      <View style={styles.visor}>
        <Text style={styles.number}>0</Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.gridL1}>
          <TouchableOpacity style={styles.botoesLine1}>
            <Text style={styles.txtBotoes}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesLine1}>
            <Text style={styles.txtBotoes}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesLine1}>
            <Text style={styles.txtBotoes}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesColumn4}>
            <Text style={styles.txtBotoes}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridL2}>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesColumn4}>
            <Text style={styles.txtBotoes}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridL3}>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesColumn4}>
            <Text style={styles.txtBotoes}>−</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridL4}>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoesColumn4}>
            <Text style={styles.txtBotoes}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridL5}>
          <TouchableOpacity style={styles.botoes}>
            <Text style={styles.txtBotoes}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes}>
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
