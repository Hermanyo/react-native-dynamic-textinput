# react-native-dynamic-textinput
 

## Installation

```
npm i react-native-dynamic-textinput --save
```

### or

```
yarn add react-native-dynamic-textinput
``` 

## Usage
```javascript
import DynamicTextinput from 'react-native-dynamic-textinput';

<DynamicInputText
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
  disableSendButton={false}
  onPressSendButton={() => console.debug("message sent")} //add your action
  messageText={message} //Your message variable
  onChange={(msg) => console.debug(msg)}
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
keyboardType | string | check react-native   [keyboardType](https://reactnative.dev/docs/textinput#keyboardtype)
sendButtonBgColor | string | sendbutton background color 
sendButtonImage | string | send button image
textInputBgColor | string | textInput background color
backgroundColor | string | component backgroundColor
disableSendButton | bool | disable sendbutton
