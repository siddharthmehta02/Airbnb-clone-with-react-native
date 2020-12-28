/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        // alignItems:'center',
        justifyContent: 'center',


    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#ffffff',
        width: '70%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: '#ffffff',
        width: 200,
        marginLeft: 25,
        marginTop: 25,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: '#ffffff',
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        height: 60,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 50,
        zIndex: 1,
        elevation: (Platform.OS === 'android') ? 1 : 0

    },
    searchbuttonText: {

        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;