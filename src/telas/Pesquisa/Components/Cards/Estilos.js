import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    Container:{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20,
        borderColor:'#FFF',
    },
    Nome:{
        fontWeight:"bold",
        fontSize: 18,
    },
    ContainerDescricao:{
        backgroundColor:'#FFF',
        paddingVertical: 20,
        paddingHorizontal: 8,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor:"#9900cc",
    },
    Descricao:{
        fontSize: 15,
        padding: 2,
    },
    Preco:{
        fontSize: 15,
        padding: 2,
    },
    Autor:{
        fontSize: 15,
        padding: 2,
    },
})