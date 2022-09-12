import { 
    Dimensions, 
    StyleSheet
} from 'react-native';

const Dime = Dimensions.get('screen').width;
const Dimes = Dimensions.get('screen').height;
export default StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        width:Dime,
        height:Dimes,
    },
    containerTitulo:{
        padding:10,
        backgroundColor:"#9900cc",
        alignItems:"center",
    },
    Titulo:{
        color:"#000",
        fontSize:32,
        fontWeight:"bold",
    },
    ContainerPerto:{
        padding:10,
        alignItems:"center",
        justifyContent:"center",
    },
    Perto:{
        color:"#000",
        fontSize:25,
        fontWeight:"bold",
        alignItems:"center"
    },
})