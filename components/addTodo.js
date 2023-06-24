
import { StyleSheet, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function AddTodo({ onSubmitHandler }) {
    const [text, setText] = useState("");
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        <View style={styles.form}>
            <TextInput style={styles.input}
                placeholder='new todo here...'
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => {onSubmitHandler(text)}}
                title={"add todo"} />
        </View>
    )
}
const styles = StyleSheet.create({
    form: {
        marginVertical: 5
    },
    input: {
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        marginBottom: 10,
        fontSize:16
    },
});
