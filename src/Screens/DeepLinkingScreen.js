import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DeepLinkingScreen(props) {
  const {route} = props;
  const {msg} = route.params;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.msg}>{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  msg: {
    fontSize: 30,
  },
});

export default DeepLinkingScreen;
