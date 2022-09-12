import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        marginHorizontal: 25,
        marginBottom: 20,
        borderWidth: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor:"#9900cc"
    },
    containerTitulo:{
        padding: 20,
        height: '100%',
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 5,
        marginHorizontal: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    ContainerInfo:{
        padding: 20,
        marginBottom: 20,
        backgroundColor: "#9900cc",
    },
    Info:{
        fontSize: 24,
        marginHorizontal: 15,
        color: "#000",
    },
})