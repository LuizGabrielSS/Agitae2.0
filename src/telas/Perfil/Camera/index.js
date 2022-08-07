import React, {useState, useEffect, useRef, useContext} from 'react';
import { View, SafeAreaView, Modal,TouchableOpacity,Text,ImageBackground} from 'react-native'
import { Camera } from 'expo-camera' 
import { FontAwesome } from '@expo/vector-icons'
import Estilos from './Estilos'

export default function App(){

    const camRef = useRef(null)
    
    const [type, setType] = useState(Camera.Constants.Type.back);

    const[hasPermission,setHasPermission] = useState(null)

    const[CapturedPhoto, setCapturedPhoto] = useState(null) 

    const [open, setOpen] = useState(false)

    const[status,setStatus] = useState(null)

    const[executed,setExecuted] = useState(false)

    const {SetFoto} = useContext(Auth)

    useEffect(() => {
        (async ()=>{
            const {status} = await Camera.requestPermissions();
            setHasPermission(status === 'granted');
        })();
    },[])

    if(hasPermission === false){
        return <Text> Acesso Negado </Text>
    }

    async function takepicture(){
        if(camRef){
            const data = await camRef.current.takePictureAsync(options={base64:true});
            //console.log(data.base64)
            setCapturedPhoto(data)
            setOpen(true)

        }
    }

    const DefinirFoto = () => {
        SetFoto(CapturedPhoto.uri)
    }

    return (
        <SafeAreaView style={Estilos.container}>
            <Camera 
            style={Estilos.Fixo}
            type={type}
            ref={camRef}
            >
            <View style={Estilos.Botoes}>
                <TouchableOpacity style={Estilos.button} onPress={() => takepicture()}>
                    <FontAwesome name="camera" size={23} color="#fff"/>
                </TouchableOpacity>
            </View>
            </Camera>
            { CapturedPhoto &&
            <Modal animationType='slide'
            transparent={false}
            visible={open}
            style={Estilos.Modal}
            >
            <View style={Estilos.Modal}>
                <ImageBackground
                style={Estilos.Imagem}
                source={{uri:CapturedPhoto.uri}}
                >
                <View style={Estilos.ContainerOpcoes}>
                    <TouchableOpacity style={Estilos.opcao} onPress={() => setOpen(false)}>
                        <FontAwesome name="window-close" size={50} color='#ff0000'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={Estilos.opcao} onPress={() => DefinirFoto()}>
                        <FontAwesome name="check-square" size={50} color='#00a867' />
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
            </Modal>
            }
        </SafeAreaView>
        )
}