import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function AddItem({ addItem }) {
  const [text, setText] = useState('');

  const onChange = (value) => setText(value);

  const handleAdd = () => {
    addItem(text);
    setText(''); // limpa o campo após adicionar
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Adicione um item..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Ionicons name="add-circle-outline" size={30} color="#1E90FF" />
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
