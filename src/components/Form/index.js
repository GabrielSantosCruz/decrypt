import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import Decript from "./Decript";
import styles from "./style";
import Clipboard from "@react-native-community/clipboard";
//import { Icon } from "react-native-vector-icons/Icon";
//import * as Clipboard from "expo-clipboard";

export default function Form(){

    const [text, setText] = useState(null); // texto criptografado
    const [decrypt, setDecrypt] = useState(null); // texto descriptografado

    const [copiedText, setCopiedText] = useState(''); // texto copiado

    const copyToClipboard = () => {
        Clipboard.setString('Hello World');
    };

    const fetchCopiedText = async () => {
        const textToCopy = await Clipboard.getString();
        setCopiedText(textToCopy);
    }

    // retorna o index da posição da letra na string
    function position(letra, string){
        if(string.includes(letra)) return string.indexOf(letra);
        
        return null;
    };
    
    // Descriptografa o texto
    function decryptor(){
        var str1 = 'CRISTAL';
        var str2 = 'EMPUNHO';
        var decrypted = text;
        if(text != null){
            for(var i = 0; i < text.length; i++){
                if(str1.includes(text[i])){
                    var index = position(text[i], str1);
                    var decrypted = decrypted.replace(decrypted[i], str2[index]);
                } else if(str2.includes(text[i])){
                    var index = position(text[i], str2);
                    var decrypted = decrypted.replace(decrypted[i], str1[index]);
                }
            }
        }
        return setDecrypt(decrypted);
    }

    function startDecrypt(){
        decryptor()
        setText(null)
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Insira o texto aqui..."
                keyboardType="default"/>
                
                <TouchableOpacity
                style={styles.buttom}
                onPress={() => {startDecrypt()}}>
                    <Text
                    style={styles.buttomText}>CRIPTOGRAFAR DESCRIPTOGRAFAR</Text></TouchableOpacity>
                <View style={styles.boxDecrypted}>
                    <Decript textDecript={decrypt}/>
                    <TouchableOpacity
                    onPress={() => {copyToClipboard}}>
                        <Text>COPIAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={fetchCopiedText}>
                        <Text>View copied text</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}