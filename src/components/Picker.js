import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerComponent = ({ selectedValue, onValueChange, data, defaultValue }) => {
    return (
        <View style={styles.input}>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}>
                <Picker.Item color="#707070" label={defaultValue} value="" />
                {data.map(element => (
                    <Picker.Item color="#707070" label={element.label} value={element.value} />
                ))}
            </Picker>
        </View>
    );
}

export default PickerComponent;

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        alignSelf: 'center',
        width: '90%',
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 5
    }
})