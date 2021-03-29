# TapAndGo 

## react-navigation setup

```
react-native-reanimated 
react-native-gesture-handler 
react-native-screens 
react-native-safe-area-context 
@react-native-community/masked-view
@react-navigation/native
@react-navigation/stack
```

```bash
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/native @react-navigation/stack
```

## react-native-vector-icons / react-native-paper

```
react-native-vector-icons 
react-native-paper
```

```bash
npm install react-native-vector-icons react-native-paper
```

After installation, we will need to setup icons,
* (ios): Edit `Info.plist`, add key `Fonts provided by application` (UIAppFonts), with value `MaterialCommunityIcons.ttf`
* (android): add `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"` into `android/app/build.gradle`

