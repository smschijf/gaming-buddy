import React from 'react'
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
  } from 'react-native';
  import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Sander</Text>
        <Text style={styles.welcomeMessage}>Find your new game</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={() => {}} placeholder="What are you looking for?" />
        </View>
        <TouchableOpacity>
          <Image source={icons.search} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome