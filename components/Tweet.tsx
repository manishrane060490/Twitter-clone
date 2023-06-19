import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TweetType } from '../types'

type tweetProps = {
    tweet: TweetType
}

const Tweet = ({tweet}: tweetProps) => {
  return (
    <View style={styles.container}>
      <Image 
        src={tweet.user.image}
        style={styles.userImage}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  )
}

export default Tweet

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: 'lightGray'
    },
    userImage: {
      width: 50, 
      height: 50, 
      borderRadius: 50
    },
    mainContainer: {
      marginLeft: 10,
      flex: 1
    },
    name: {
      fontWeight: '600'
    },
    content: {
  
    }
});
  