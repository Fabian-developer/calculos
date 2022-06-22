import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';



export default function CalcImc() {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);

  const equacao = (peso / (altura*altura));


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Calculo de IMC</Text>
      <TextInput style={styles.formulario} placeholder=' altura' keyboardType='numeric' value={altura} onChangeText={text => setAltura(text)} />
      <TextInput style={styles.formulario} placeholder=' peso(kg)' keyboardType='numeric' value={peso} onChangeText={text => setPeso(text)} />
      <Text style={styles.botao} onPress={() => alert('seu IMC é ' + equacao.toFixed(2))}>Calcular IMC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    height: 45,
    width: 90,
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  texto: {
    color: 'white',
    fontSize: 25,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#618a61',
    alignItems: 'center',
  },
  botao: {
    borderRadius: 7,
    height: 40,
    width: 120,
    fontSize: 15,
    backgroundColor: 'white',
    color: '#618a61',
    alignItems: 'center',
    textAlign: 'center',
    padding: 8,
  }
});