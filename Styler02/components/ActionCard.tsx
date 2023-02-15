import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headText}>BlogCard</Text>
      <View style={[styles.card]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in JS 21- ES12</Text>
        </View>
        <Image
          source={{
            uri: 'https://tinyurl.com/5dbsd8my',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eum quidem corrupti deserunt repellat neque culpa et cumque tempore
            molestias.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://moeen.hashnode.dev')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://hashnode.com/@moeenulislam')}>
            <Text style={styles.socialLinks}>Follow For More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headText: {},
  card: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 180,
  },
  bodyContainer: {},
  footerContainer: {},
  socialLinks:{}
});
