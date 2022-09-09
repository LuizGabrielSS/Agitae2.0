import { 
    Dimensions, 
    StyleSheet
} from 'react-native';

const Dime = Dimensions.get('screen').width;

export default StyleSheet.create({
    Container:{
    width: "100%",
    backgroundColor: "#fff",
    },
    BotaoLogOut:{
    alignItems: 'flex-end',
    margin:10
    },
    LogOut:{
    fontSize: 20,
    color: "#9900cc",
    fontWeight: "bold",
    },
    ContainerFoto:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    },
    Foto:{
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    },
    ContainerNome:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    },
    Nome:{
    fontSize: 26,
    color: "#9900cc",
    fontWeight: "bold",
    margin: 10,
    },
    ContainerData:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: 10,
    },
    Data:{
    fontSize: 20,
    color: "#9900cc",
    margin: 10,
    fontWeight: "bold"
    },
    ContainerDados:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        margin: 10,
    },
    NomeDado:{
        fontSize:20,
        fontWeight: "bold",
        color: "#000",
    },
    BotaoRedefinirSenha:{
    alignItems: 'flex-end',
    margin:30
    },
    RedefinirSenha:{
    fontSize: 20,
    color: "#9900cc",
    fontWeight: "bold",
    },
})