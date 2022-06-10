import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: '#FFBA11',
        alignItems: "center",
        //marginTop: 10,
        borderTopLeftRadius: 60,
        // borderTopRightRadius: 30
    },
    form: {
        width: "100%",
        height: '90%',
        marginTop: 20,
        padding: 10,
    },
    // formLabel: {
    //     color: '#000000',
    //     fontSize: 20,
    //     paddingLeft: 20,
    // },
    input: {
        align: 'center',
        width: '90%',
        height: '25%',
        borderRadius: 30,
        backgroundColor: '#fff',
        margin: 12,
        paddingTop: 20,
        paddingLeft: 20,
        textAlign: 'left',
        textAlignVertical: 'top',
        fontSize: 15,
    },
    buttom: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: 'purple',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        //marginTop: 1,
        align: 'center'
    },
    buttomText: {
        fontSize: 25,
        color: 'orange',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    boxDecrypted: {
        align: 'center',
        width: '90%',
        height: '25%',
        borderRadius: 30,
        backgroundColor: '#fff',
        margin: 12,
        paddingTop: 20,
        paddingLeft: 20,
        textAlign: 'left',
        textAlignVertical: 'top',
        fontSize: 15,
    }
})

export default styles