import { Text, View,StyleSheet,Image,TouchableOpacity } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Image source={require('./src/crono.png')} />

            <Text style={styles.timer}>00:00:00</Text>

            <View style={styles.btnArea}>
                <TouchableOpacity styles={styles.btn}>
                    <Text style={styles.btnTexto}>VAI</Text>
                </TouchableOpacity>

                <TouchableOpacity styles={styles.btn}>
                    <Text style={styles.btnTexto}>LIMPAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00AEEF'
    },
    timer: {
        marginTop: -160,
        fontSize: 45,
        fontWeight: 'bold',
        color:'#FFF'
    },
    btnArea: {
    
        flexDirection: 'row',
        marginTop: 130,
        height: 40,
        backgroundColor:'red'
    },
    btn:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FFF',
        height:40,
        margin: 17,
        borderRadius:9
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff'
    }
})