import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image } from 'react-native'; 
import allStyle from './assets/styles/style.js';


export default function App() {
  const [styles, setStyles] = useState();
  
  useState(()=>{
    allStyle().then((i)=> setStyles({...i}) )
  },[])

  if( !styles ) return <View />

  return (
  <>
    <View style={styles.header}>
      <Text style={styles.fontHeader} >
        ToDooozinha
      </Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.fonts} >
        OIOIO
      </Text>
      <Image style={styles.image} source={require('./assets/images/trash.png')} /> 
    </View>
    <StatusBar style="auto" />
  </>
  );
}
