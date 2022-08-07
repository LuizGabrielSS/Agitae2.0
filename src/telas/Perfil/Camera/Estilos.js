import { Dimensions, StyleSheet } from 'react-native'

const Dime = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    Botoes:{
        justifyContent:'flex-end',
        alignItems:'center',
        flex:1,
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#121212',
        margin:20,
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').height * 0.1,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
    },
    Fixo:{
        flex:1,
    },
    ContainerOpcoes:{
        margin:10,
        alignItems:'flex-end',
        flexDirection: 'row',
        flex:1,
    },
    Modal:{
        flex:1, 
        backgroundColor:'#000'
    },
    Imagem:{
        flex:1,  
    },
    opcao:{
        alignItems:'center',
        width:"50%",
        
    }
})

export default styles