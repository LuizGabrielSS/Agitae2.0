import { 
    Dimensions, 
    StyleSheet
} from 'react-native';

const Dime = Dimensions.get('screen').width;

const Dimes = Dimensions.get('screen').height;

export default StyleSheet.create({
    Container:{
        backgroundColor:"#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 5,
        padding: 10,
        marginHorizontal:10,
        marginVertical:10,
        justifyContent:"space-between",
        height:Dimes,
        width:Dime,
    },
    Container:{
        backgroundColor:"#fff",
        padding: 10,
        marginHorizontal:10,
        marginVertical:10,
        justifyContent:"space-between",
        flex:1,
        height:Dimes,
        width:Dime,
    },
    ContainerAcompanhante:{
        alignItems:'center',
        alignContent: "center",
        backgroundColor:"#9900cc",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        margin:10,
        justifyContent:"center",
    },
    TituloAcompanhante:{
        fontSize:22,
        padding: 11,
        marginVertical: 8,
        color:"#ffffff",
        textAlign:"center"
    },
    ContainerLogin:{
        alignItems:'center',
        alignContent: "center",
        backgroundColor:"#9900cc",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        margin:10
    },
    TextoLogin:{
        fontSize:22,
        padding: 11,
        marginVertical: 8,
        color:"#ffffff",
        textAlign:"center"
    },
    ContainerBotao:{
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor:"#9900cc",
        padding: 10,
        alignItems:'center',
        margin:10
    },
    TextoBotao:{
        fontSize:20,
        color:"#000",
        textAlign:"center"
    },
    TextoOutrosBotoes:{
        fontSize:18,
        color:"#595959",
        textAlign:"center",
        margin:10
    },
    Input:{
        color:"#000",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor:"#260033",
        textAlign:"left",
        margin:10
    },
    InputErrado:{
        color:"#000",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor:"#ff0000",
        textAlign:"left",
    },
})