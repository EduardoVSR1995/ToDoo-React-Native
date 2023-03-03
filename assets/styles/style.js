import * as Font from 'expo-font';
import { StyleSheet } from 'react-native'; 

export default async function allStyle(){
  await Font.loadAsync({
      'TiltNeon-Regular': require('./TiltNeon-Regular.ttf'),
  });  

  const styles = StyleSheet.create({
    fontHeader: {
      fontFamily: 'TiltNeon-Regular' ,
      fontSize:35,
    },
    fonts: {
      fontFamily: 'TiltNeon-Regular' ,
      fontSize: 20,
      width: '80%',
      marginLeft: '5%',
    },
    image: {
      height:20,
      width: 20,
    },
    container: {
      flexWrap: 'wrap',
      fontSize:60,
      height: 40,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      height: 100,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });
  return styles;
}