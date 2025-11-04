import React, { useState } from 'react';
import { View, Text, FlatList, Alert, Platform } from 'react-native';
import uuid from 'react-native-uuid';
import styles from './styles';

import ListItem from './itemLista';
import AddItem from './addItem';

export default function Atividade8() {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Arroz' },
    { id: uuid.v4(), text: 'Feijão' },
    { id: uuid.v4(), text: 'Macarrão' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const addItem = (text) => {
    if (!text.trim()) {
      Platform.OS === 'web'
        ? console.log('Digite um item válido!')
        : Alert.alert('Erro', 'Digite um item válido!');
      return;
    }

    setItems(prevItems => [{ id: uuid.v4(), text }, ...prevItems]);
  };

  console.log('Plataforma atual:', Platform.OS);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}
