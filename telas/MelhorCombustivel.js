import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function MelhorComb(){
    const [gasolina, setGasolina] = useState(0);
    const [alcool, setAlcool] = useState(0); 

    let resultado = 'vazio';

    if (alcool<0.7 * gasolina){
        resultado = 'Melhor abastecer com álcool'
    }else{
        resultado = 'Melhor abastecer com gasolina'
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.texto}>Informe o preço dos combustíveis</Text>
            <TextInput style = {styles.formulario} placeholder = 'Álcool' keyboardType='numeric' value={alcool} onChangeText={text=> setAlcool(text)} />
            <TextInput style = {styles.formulario} placeholder = 'Gasolina' keyboardType='numeric' value={gasolina} onChangeText={text=> setGasolina(text)} />
            <Text style = {styles.texto}>{resultado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
      texto: {
          color: 'white',
          fontSize: 25,
      },
      formulario: {
          height: 50,
          width: 190,
          backgroundColor: 'white',
          borderColor: 'darkblue',
          borderWidth: 1,
          margin: 10,
          padding: 5,
      },
      container: {
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: '#618a61',
          alignItems: 'center',
      }
})