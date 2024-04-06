import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// TODO: Use Typescript
// TODO: Use Typescript Enum
// TODO: Extract
const DEFAULT_COLOR = 'white';
const COLOR_ENUM = ['blue', 'green', 'yellow'];
const COLOR_LIST = {
    blue: '#294CBE',
    green: '#0bda51',
    yellow: '#ffff66',
    white: '#ffffff'
}

export default function App() {
    const [color, setColor] = useState('white')

    const backgroundColor = {
        backgroundColor: COLOR_LIST[color]
    }

    return (
        <View style={[styles.container, backgroundColor]}>
            {/* TODO: Extract in it's own component */}
            <Text>Button to be changed to use web service to push update to the app</Text>
            {COLOR_ENUM.map((colorName) => <Button onPress={() => setColor(colorName)} title={colorName} />)}
            <Button onPress={() => setColor(DEFAULT_COLOR)} title='Reset' color="red" />
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#fff`,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
