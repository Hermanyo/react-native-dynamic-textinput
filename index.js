/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {View, TextInput, Animated, Keyboard, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Proptypes from 'prop-types';

DynamicInputText.prototype = {
  messageText: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  onPressSendButton: Proptypes.func.isRequired,
  editable: Proptypes.bool.isRequired,
  multiline: Proptypes.bool.isRequired,
  leftButtons: Proptypes.node.isRequired,
  placeholderText: Proptypes.string.isRequired,
  howManyLeftButtons: Proptypes.number.isRequired,
};
DynamicInputText.defaultProps = {
  editable: false,
  multiline: false,
  placeholderText: '',
  leftButtons: null,
  howManyLeftButtons: 0,
};
function DynamicInputText({
  editable,
  multiline,
  keyboardType,
  placeholderText,
  messageTextColor,
  sendButtonEnableColor,
  sendButtonDisableColor,
  textInputBgColor,
  borderTopColor,
  backgroundColor,
  leftButtons,
  placeholderTextColor,
  messageText,
  onChange,
  disableSendButton,
  onPressSendButton,
  howManyLeftButtons,
  sendColorIcon = '#FFF',
  sendButtonIcon = null,
  heightInput = 30,
}) {
  const [_height, setheight] = useState(0);
  const keyboardOffset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', _keyboardWillShow);
    Keyboard.addListener('keyboardDidHide', _keyboardWillHide);
    return () => {
      Keyboard.removeListener('keyboardWillShow', _keyboardWillShow);
      Keyboard.removeListener('keyboardWillHide', _keyboardWillHide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function _keyboardWillShow(e) {
    Animated.spring(keyboardOffset, {
      toValue: e.endCoordinates.height,
      friction: 8,
      useNativeDriver: false,
    }).start();
  }

  function _keyboardWillHide(e) {
    Animated.spring(keyboardOffset, {
      toValue: 0,
      friction: 8,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Animated.View style={{marginBottom: keyboardOffset}}>
      <View
        style={[
          styles.textInputParentView,
          {
            borderTopColor: borderTopColor,
            backgroundColor: backgroundColor,
            paddingHorizontal: howManyLeftButtons > 0 ? 15 - howManyLeftButtons * 5 : 15,
          },
        ]}>
        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
          {howManyLeftButtons > 0 && <View style={[styles.leftButtonPosition, {flex: howManyLeftButtons / 10}]}>{leftButtons}</View>}
          <View style={[styles.textInputView, {flex: howManyLeftButtons > 0 ? 1 - howManyLeftButtons / 8 : 1}]}>
            <TextInput
              editable={editable}
              multiline={multiline}
              placeholder={placeholderText}
              placeholderTextColor={placeholderTextColor}
              placeholderStyle={[styles.placeholderStyle, {color: placeholderTextColor}]}
              underlineColorAndroid="transparent"
              keyboardType={keyboardType}
              value={messageText}
              onChange={event => {
                event.target.value;
              }}
              onChangeText={editedText => {
                onChange(editedText);
              }}
              onContentSizeChange={event => setheight(messageText.length > 0 ? event.nativeEvent.contentSize.height : 0)}
              style={[
                styles.textInputStyle,
                {
                  height: Math.min(120, Math.max(heightInput, _height)),
                  backgroundColor: textInputBgColor,
                  color: messageTextColor,
                },
              ]}
            />
          </View>
          <TouchableOpacity
            disabled={disableSendButton}
            onPress={() => {
              setheight(0);
              onPressSendButton();
            }}>
            <View style={[styles.rightButtonPosition, {paddingLeft: howManyLeftButtons <= 0 ? 15 : 5}]}>
              <View
                style={[
                  styles.sendButtonStyle,
                  {
                    backgroundColor: disableSendButton === true ? sendButtonDisableColor : sendButtonEnableColor,
                  },
                ]}>
                {sendButtonIcon ? sendButtonIcon : <Icon name="send" style={{fontSize: 15, color: sendColorIcon, alignSelf: 'center'}} />}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  textInputParentView: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderTopWidth: 1,
    paddingVertical: 5,
  },
  textInputView: {
    flex: 1,
    justifyContent: 'center',
  },
  textInputStyle: {
    fontSize: 14,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 8,
    textAlign: 'left',
    borderRadius: 10,
  },
  leftButtonPosition: {
    justifyContent: 'flex-end',

    ...Platform.select({android: {marginVertical: 1}}),
  },
  rightButtonPosition: {
    justifyContent: 'flex-end',
    paddingLeft: 5,
    flex: 1,
    ...Platform.select({android: {marginVertical: 1}}),
    right: 5,
  },
  sendButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  placeholderStyle: {
    fontSize: 12,
    textAlignVertical: 'center',
  },
});

export default DynamicInputText;
