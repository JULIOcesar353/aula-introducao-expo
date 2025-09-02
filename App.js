import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import { RFPercentage } from 'react-native-responsive-fontsize';

import Exemplo01 from './src/exemplos/ex01';
import Exemplo02 from './src/exemplos/ex02';


import Atividade01 from './src/atividades/atv01';
import Atividade02 from './src/atividades/atv02';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade02 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f6',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: RFPercentage(1.5),  
    paddingTop: Constants.statusBarHeight,
  },
});