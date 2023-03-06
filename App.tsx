import { useEffect, useState } from 'react';
import { Text, View, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'; 
import trash from './itens/images/trash.png'; 
import send from './itens/images/send.png';
import allStyle, { Styles } from './itens/styles/style';

export default function App(): JSX.Element {
  const [styles, setStyles] = useState<Styles>(); 
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');
  
  useEffect(()=>{
    allStyle().then((i)=> setStyles(i as Styles))
  }, []);

  if( !styles ) return <View />

  styles as Styles;

  return (
  <>
    <StatusBar />
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
  </>
  );
}
