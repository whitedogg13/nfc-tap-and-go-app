import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TagDetailScreen(props) {
  const {route} = props;
  const {tag} = route.params;
  return (
    <View style={styles.wrapper}>
      <Text>{JSON.stringify(tag, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TagDetailScreen;
