# Android DeepLinking Setup

First, confirm your `packageName` in following places:

* `android/app/build.gradle`
* `android/app/src/main/AndroidManifest.xml`
* `android/app/src/main/java/<your.pkg.name>`
* `android/app/src/main/java/<your.pkg.name>/MainApplication.java`
* `android/app/src/main/java/<your.pkg.name>/MainActivity.java`

> It's better to use the same string as iOS's bundle ID, so we don't need to write 2 NFC tags. 

Second, go back to `android/app/src/main/AndroidManifest.xml`, to add following `intent filters`:

```xml
        <intent-filter>
            <action android:name="android.nfc.action.NDEF_DISCOVERED"/>
            <category android:name="android.intent.category.DEFAULT"/>
            <data android:scheme="<your.pkg.name>"
                  android:host="*" />
        </intent-filter>

        <intent-filter>
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data android:scheme="<your.pkg.name>"
                  android:host="*" />
        </intent-filter>
```

The first one is for NFC only. Once Android system scans a NDEF message with `RTD_URI`, it will fire a `NDEF_DISCOVERED` intent, with the custom scheme as the data. 

The second one is for general purpose deep-linking, for example, when an `<a/>` tag with `href` is clicked in web browser, or, in our use case, when we call `Linking.openURL()` in `TagDetailScreen`.