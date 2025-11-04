import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function ListItem({ item, deleteItem }) {
    return (

        <View style={styles.texto}>
            <Text style={styles.itemText}>{item.text}</Text>

            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => deleteItem(item.id)}
            >
                
                <Ionicons name="trash" size={25} color="red" />
            </TouchableOpacity>
        </View>

    );
}
