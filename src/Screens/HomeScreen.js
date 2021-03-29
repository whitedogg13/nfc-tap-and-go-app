import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
        <Text style={styles.bannerText}>Tap-And-Go</Text>
      </View>
      <View style={styles.bottom}>
        <Button mode="contained" style={[styles.btn]}>
          TAP
        </Button>
        <Button mode="contained" style={styles.btn}>
          LINK
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    fontSize: 42,
    textAlign: 'center',
  },
  bottom: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  btn: {
    width: 250,
    marginBottom: 15,
  },
});

export default HomeScreen;
