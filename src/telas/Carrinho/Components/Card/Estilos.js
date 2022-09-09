import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Container:{
    width: '100%',
    margin:10,
    backgroundColor: '#fff',
  },
  Fixo:{

  },
  Containernome:{
    margin:10,
  },
  nome:{
    color: "#9900cc",
    fontSize: 20,
    fontWeight: "bold",
  },
  ContainerPrecoDescricao:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  ContainerPreco:{
    width: '40%'
  },
  
  Preco:{
    fontSize: 16,
  },
  Containerdescricao:{
    width: '60%'
  },
  descricao:{
    fontSize: 16,
  },
  ContainerQuantidade:{
    margin:10,
  },
  quantidade:{
    fontSize: 16,
  },
  Containerautor:{

  },
  autor:{

  },ContainerCusto:{

  },
  Custo:{

  },
  Botoes:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  BotaoAdicionar:{
    color: '#fff',
  },
  Adicionar:{
    backgroundColor: '#9900cc',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'#000'
  }, 
  BotaoRemover:{
    backgroundColor: '#fff',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'#000'
  },
  Remover:{
    fontSize: 16,
    color: '#9900cc',
  },
  });