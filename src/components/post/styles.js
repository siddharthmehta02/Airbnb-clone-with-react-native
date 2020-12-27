/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    description: {
        fontSize: 18,
        lineHeight: 26
    },
    bedroom: {
        marginVertical: 10,
        color: '#5b5b5b'
    },
    prices: {
        fontSize: 18,
        marginVertical:10
    },
    oldprice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',

    },
    price: {
        fontWeight: 'bold'
    },
    total: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },
});

export default styles;