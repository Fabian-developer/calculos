import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaMenu from './telas/TelaMenu';
import CalcImc from './telas/calcImc';
import MelhorComb from './telas/MelhorCombustivel';
import Conversor from './telas/conversor';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Cálculos Úteis" component={TelaMenu} />
        <Stack.Screen name="Calculo IMC" component={CalcImc} />
        <Stack.Screen name="Melhor Combustivel" component={MelhorComb}/>
        <Stack.Screen name="Conversor" component={Conversor}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


