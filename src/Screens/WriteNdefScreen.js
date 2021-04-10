import React from 'react';
import {View, StyleSheet, SafeAreaView, Platform} from 'react-native';
import {Button, TextInput, Chip} from 'react-native-paper';
import NfcManager, {Ndef, NfcTech} from 'react-native-nfc-manager';
import AndroidPrompt from '../Components/AndroidPrompt';

function WriteNdefScreen(props) {
  const [selectedLinkType, setSelectedLinkType] = React.useState('WEB');
  const [value, setValue] = React.useState('');
  const androidPromptRef = React.useRef();

  async function writeNdef() {
    let scheme = null;
    if (selectedLinkType === 'WEB') {
      scheme = 'https://';
    } else if (selectedLinkType === 'TEL') {
      scheme = 'tel:';
    } else if (selectedLinkType === 'SMS') {
      scheme = 'sms:';
    } else if (selectedLinkType === 'EMAIL') {
      scheme = 'mailto:';
    } else {
      throw new Error('no such type');
    }
    const uriRecord = Ndef.uriRecord(`${scheme}${value}`);
    const bytes = Ndef.encodeMessage([uriRecord]);
    console.warn(bytes);

    try {
      if (Platform.OS === 'android') {
        androidPromptRef.current.setVisible(true);
      }
      await NfcManager.requestTechnology(NfcTech.Ndef);
      await NfcManager.ndefHandler.writeNdefMessage(bytes);
    } catch (ex) {
      // bypass
    } finally {
      NfcManager.cancelTechnologyRequest();
      if (Platform.OS === 'android') {
        androidPromptRef.current.setVisible(false);
      }
    }
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
      <AndroidPrompt
        ref={androidPromptRef}
        onCancelPress={() => {
          NfcManager.cancelTechnologyRequest();
        }}
      />
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
