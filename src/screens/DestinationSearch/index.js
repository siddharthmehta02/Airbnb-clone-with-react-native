/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import search from '../../../assets/data/search'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native'

const DestinationScreen = () => {
    const navigation = useNavigation()
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
                    <Pressable style={styles.row} onPress={() => navigation.navigate('GuestScreen')}>
                        <View style={styles.iconContainer}>
                            <Entypo name='location-pin' size={30} color={"black"} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default DestinationScreen
