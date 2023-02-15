import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Elevatedrds() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>

      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>for</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>more..</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text>😃</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: 120,
  },
  headingText: {
    fontSize: 24,
    paddingHorizontal: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 90,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
  },
});
