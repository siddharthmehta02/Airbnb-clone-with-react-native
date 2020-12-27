/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles'

const Post = (props) => {
    const post = props.post

    // console.log(props)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: post.image }} />
            <Text style={styles.bedroom}>{post.bed} bed {post.bedroom} bedroom</Text>
            <Text numberOfLines={2} style={styles.description}>{post.type}, {post.title}</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldprice}>${post.oldPrice}</Text>
                <Text style={styles.price}> ${post.newPrice} </Text>
                / night
            </Text>
            <Text style={styles.total}>${post.totalPrice} total</Text>
        </View>
    )
}
export default Post