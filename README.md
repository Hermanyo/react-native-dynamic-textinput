# react-native-dynamic-textinput
 
## Demo

![](https://raw.githubusercontent.com/Hermanyo/react-native-dynamic-textinput/main/dynamic-textInput.gif)

## Installation

```
npm i react-native-dynamic-textinput --save
npm i react-native-vector-icons --save
```

### or

```
yarn add react-native-dynamic-textinput
yarn add react-native-vector-icons
``` 

## Usage
```javascript
import DynamicTextinput from 'react-native-dynamic-textinput';

<DynamicTextinput
  backgroundColor={'black'}
  borderTopColor={'black'}
  placeholderText={'Write a message here'}
  placeholderTextColor="#CFD1DE"
  messageTextColor={'#000'}
  textInputBgColor={'#f5f5f5'}
  editable={true}
  multiline={true}
  keyboardType={'default'}
  sendButtonDisableColor={'#f5f5f0'}
  sendButtonEnableColor={'#0C0A6C'}
  textInputProps={{autoFocus: true}} //TextInput props
  disableSendButton={false}
  onPressSendButton={() => console.debug("message sent")} //add your action
  messageText={message} //Your message variable
  onChange={(msg) => console.debug(msg)}
  sendButtonIcon={<image style={{width: 20, height: 20}} tintColor={'#fff'} source={url('../../icon')} />}
  heightInput={45}
/>
```

## Props
Prop | type | description
-- | -- | --
editable | boolean | define if user can edit the typed text
multiline | boolean | enable multiple lines 
sendButtonDisableColor | string | sendbutton disabled color
sendButtonEnableColor | string | sendbutton enabled color 
borderTopColor | string | component borderTopColor
placeholderText | string | textinput placeholder value
placeholderTextColor | string | textInput placeholder color
messageTextColor | string | typed text color
keyboardType | string | check react-native [keyboardType](https://reactnative.dev/docs/textinput#keyboardtype)
sendButtonBgColor | string | sendbutton background color  
textInputBgColor | string | textInput background color
backgroundColor | string | component backgroundColor
disableSendButton | bool | disable sendbutton
howManyLeftButtons | number | number of buttons on left from the textInput
leftButtons | React-native View | add buttons on left from the textInput 
sendColorIcon | string | sendColor default icon
heightInput | number | height input 
sendButtonIcon | React-native component | change icon send button
textInputProps | React-native TextInput | TextInput props
