import { StyleSheet} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // preenchimento gradiente

const styles = StyleSheet.create({
    boxTitle: {
        alignItems: 'center',
        justifyContent: "center",
        padding: 10,
        //marginTop: 30,
        height: '50%',
        width: '100%',
        backgroundColor: 'purple',
        borderBottomRightRadius: 60,
    },
    textTitle: {
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 200
    }
})

export default styles