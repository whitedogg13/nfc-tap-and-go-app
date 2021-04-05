import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Button, TextInput, Chip} from 'react-native-paper';

function WriteNdefScreen(props) {
  const [selectedLinkType, setSelectedLinkType] = React.useState('WEB');
  const [value, setValue] = React.useState('');

  async function writeNdef() {
    console.warn(selectedLinkType, value);
  }

  return (
    <View style={styles.wrapper}>
      <SafeAreaView />
      <View style={[styles.wrapper, styles.pad]}>
        <View style={styles.linkType}>
          {['WEB', 'TEL', 'SMS', 'EMAIL'].map(linkType => (
            <Chip
              key={linkType}
              style={styles.chip}
              selected={linkType === selectedLinkType}
              onPress={() => setSelectedLinkType(linkType)}>
              {linkType}
            </Chip>
          ))}
        </View>
        <TextInput
          label="TARGET"
          value={value}
          onChangeText={setValue}
          autoCapitalize={false}
        />
      </View>

      <View style={[styles.bottom, styles.bgLight]}>
        <Button onPress={writeNdef}>WRITE</Button>
      </View>
      <SafeAreaView style={styles.bgLight} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  pad: {
    padding: 20,
  },
  chip: {
    marginRight: 10,
    marginBottom: 10,
  },
  linkType: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottom: {
    padding: 10,
    alignItems: 'center',
  },
  bgLight: {
    backgroundColor: 'lightblue',
  },
});

export default WriteNdefScreen;
