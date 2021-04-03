import {Platform} from 'react-native';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

class NfcProxy {
  readTag = async () => {
    let tag = null;
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      tag = await NfcManager.getTag();

      await NfcManager.cancelTechnologyRequest();
    } catch (ex) {
      console.warn(ex);
    }

    return tag;
  };

  writeNdef = async ({type, value}) => {
    let result = false;
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      let bytes = null;
      if (type === 'TEXT') {
        console.warn(type, value);
        bytes = Ndef.encodeMessage([Ndef.textRecord(value)]);
      } else if (type === 'URI') {
        bytes = Ndef.encodeMessage([Ndef.uriRecord(value)]);
      }

      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);

        if (Platform.OS === 'ios') {
          await NfcManager.setAlertMessageIOS('Successfully write NDEF');
        }
      }

      result = true;

      await NfcManager.cancelTechnologyRequest();
    } catch (ex) {
      console.warn(ex);
    }

    return result;
  };
}

export default new NfcProxy();
