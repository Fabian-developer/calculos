import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function TelaMenu({navigation}){
    return(
      <View style={styles.container}>
      <Text style={styles.texto}>Escolha o cálculo desejado:</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>navigation.navigate('Melhor Combustivel')}
      >
      <Text style={styles.textoBotao}>Calculo de melhor combustível</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>navigation.navigate('Conversor')}
      >
      <Text style={styles.textoBotao}>Conversor de moeda</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress={()=>navigation.navigate('Calculo IMC')}
      >
      <Text style={styles.textoBotao}>Calculo de IMC</Text>
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
   container: {
       flexDirection: 'column',
       justifyContent:'space-around',
       flex: 1,
       backgroundColor: '#618a61',
       alignItems: 'center',
   },
   button:{
        margin: 10,
        width: 350,
        height: 150,
        borderRadius: 10,
        fontSize: 15,
        padding: 25,
        backgroundColor: 'white',
   },
   texto:{
       fontSize: 25,
       color: 'white',
   },
   textoBotao:{
       fontSize: 20,
       color: '#618a61'
   }
})