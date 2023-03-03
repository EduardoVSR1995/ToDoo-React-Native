import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'; 
import allStyle from './src/styles/style.js';
import trash from './src/images/trash.png'
import send from './src/images/send.png'

export default function App() {
  const [styles, setStyles] = useState();
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');
  
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
    <ScrollView 
      contentContainerStyle={styles.container}
      >
      { 
      list.length > 0 ? 
        list.map((value, i) => {
        return(
        <View key={i} style={styles.activit}>
          <Text style={styles.fonts} >
            {value}
          </Text>
          <TouchableOpacity 
            onPress={() =>{
              list.splice(i,1);
              setList([...list]) }} 
            >
            <Image 
              style={styles.image} 
              source={trash} 
              /> 
          </TouchableOpacity>
        </View>) })
        :
        <View style={styles.activit}>
          <Text style={styles.fonts} >
            Ainda não a tarefas!
          </Text>
        </View>
      }
    </ScrollView>
    <SafeAreaView 
      style={{ 
        ...styles.activit, 
        ...styles.input
        }}
      >
      <TextInput 
        value={task} 
        placeholder="Adicione a tarefa por aqui" 
        onChangeText={ setTask } 
        underlineColorAndroid="transparent" 
        style={styles.fonts} 
        />
      <TouchableOpacity 
        onPress={() => { 
          setList([...list, task]), 
          setTask('')} } 
        >
        <Image 
          style={{ 
            ...styles.image, 
            width: 30, 
            height: 30 
            }} 
          source={send} 
          />
      </TouchableOpacity>
    </SafeAreaView>
    <StatusBar style="auto" />
  </>
  );
}
