import { StyleSheet } from 'react-native'; 

export type Styles ={
  fontHeader: {
    fontFamily: string ,
    fontSize:number,
  },
  fonts: {
    fontFamily: string ,
    fontSize: number,
    width: string,
    marginLeft: string,
  },
  image: {
    height:number,
    width: number,
  },
  activit: {
    flexDirection:'row',
    height: number,
    width: string,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: string ,
  },
  input: {
    borderRadius:number,
    height: number,
    color: string,
    borderColor: string,
    borderWidth: 1,
  },
  header: {
    height: number,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}

export default async function allStyle(){

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