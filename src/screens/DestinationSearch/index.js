/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import search from '../../../assets/data/search'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo';


const DestinationScreen = () => {
    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}

            />
            <FlatList
                data={search}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name='location-pin' size={30} color={"black"} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default DestinationScreen
