import * as Font from 'expo-font';
import { StyleSheet } from 'react-native'; 
import TiltNeonRegular from './TiltNeon-Regular.ttf'

export default async function allStyle(){
  await Font.loadAsync({
      'TiltNeon-Regular': TiltNeonRegular,
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
    activit: {
      flexDirection:'row',
      height: 40,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      height: '100%' ,
    },
    input: {
      borderRadius:20,
      height: 80,
      color: 'black',
      borderColor: 'gray',
      borderWidth: 1,
    },
    header: {
      height: 100,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });
  return styles;
}