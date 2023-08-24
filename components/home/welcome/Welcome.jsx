import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

import styles from "./welcome.style";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View styles={styles.container}>
        <Text style={styles.userName}>Hello world</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View styles={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
            placeholderTextColor={"lightgray"}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
