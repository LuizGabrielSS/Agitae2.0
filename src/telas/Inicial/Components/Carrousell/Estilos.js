import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 150,
    width: Dimensions.get("window").width,
  },
  image: {
    height: '100%',
    width: 180,
    marginHorizontal: 15,
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'white'
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 5,
    marginHorizontal: 15,
  },
  promocoes:{
    fontSize: 14,
    marginHorizontal: 15,
  },
})