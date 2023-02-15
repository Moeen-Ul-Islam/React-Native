import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending People</Text>
      {/* person 1 */}
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://www.tinyurl.com/5bvt6bry'}}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Minion</Text>
          <Text style={styles.cardLabel}>The Boss</Text>
          <Text style={styles.cardDescription}>
            Find the boss that will lead us to the dream heist!
          </Text>
          <Text style={styles.cardFooter}></Text>
        </View>
      </View>
      {/* person 2 */}
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://www.tinyurl.com/4pppprfe'}}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Zombie</Text>
          <Text style={styles.cardLabel}>The Kiler</Text>
          <Text style={styles.cardDescription}>
            The killer of the killers, the one and only baba ZOMBIE!
          </Text>
          <Text style={styles.cardFooter}></Text>
        </View>
      </View>
    </View>
  );
}


// Styles for the screen
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 18,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1
  },
  cardFooter: {},
});
