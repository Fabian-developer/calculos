import { StyleSheet, TextInput, View, Text } from "react-native";
import { useState } from 'react';

export default function Conversor(){
    const[dolar, setDolar] = useState(0);
    const[quantia, setQuantia] = useState(0);
    
    let reais = 0;

    reais = (dolar * quantia);

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Digite a cotação da moeda</Text>
            <TextInput style={styles.formulario} placeholder = 'Cotação' keyboardType = 'numeric' value={dolar} onChangeText={text=> setDolar(text)}/>
            <Text style={styles.texto}>Digite a quantia</Text>
            <TextInput style={styles.formulario} placeholder = 'Quantia' keyboardType = 'numeric' value={quantia} onChangeText={text=>setQuantia(text)}/>
            <Text style={styles.texto}>{reais.toFixed(2)} reais</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    formulario: {
        height: 50,
        width: 190,
        backgroundColor: 'white',
        borderColor: 'darkblue',
        borderWidth: 1,
        margin: 10,
        padding: 5,
    }, 
})



