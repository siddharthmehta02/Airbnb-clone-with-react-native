/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = (props) => {
    return (
        <View>

            <ImageBackground

                source={require('../../../assets/images/wallpaper.jpg')}
                style={styles.image}>
                <Pressable style={styles.searchButton} onPress={() => console.warn('sasas')}>
                    <Fontisto name="search" size={25} color={"#f15454"} />
                    <Text style={styles.searchbuttonText}>Where are you going?</Text>
                </Pressable>

                <Text style={styles.title}>Go Near</Text>

                <Pressable style={styles.button} onPress={() => console.warn('click')}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>

            </ImageBackground>

        </View>
    );
};

export default HomeScreen;
