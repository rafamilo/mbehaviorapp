import 'react-native-gesture-handler'
import React from 'react';
import { KeyboardAvoidingView, TextInput, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';
import RegisterMenuFooter from './RegisterMenuFooter';

export default function RegisterThree({ navigation }) {
  return (
    <DismissKeyboard>
      <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
        <KeyboardAvoidingView behavior="padding" style={styles.alignItemsCenter}>
          <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
              autoFocus
              style={styles.input}
              placeholder='Páis'
              placeholderTextColor='#FFF'
            />
            <TextInput
              style={styles.input}
              placeholder='Estado'
              placeholderTextColor='#FFF'
            />
            <TextInput
              style={styles.input}
              placeholder='Cidade'
              placeholderTextColor='#FFF'
            />
            <TextInput
              style={styles.input}
              placeholder='Confirmar e-mail'
              placeholderTextColor='#FFF'
            />
          </ScrollView>
          <RegisterMenuFooter navigation={navigation} antes="RegisterTwo" depois="RegisterFour" />
        </KeyboardAvoidingView>
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  alignItemsCenter: {
    alignItems: 'center'
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    paddingHorizontal: '10%',
    backgroundColor: '#889BFF',
  },
  image: {
    marginBottom: 100,
  },
  form: {
    maxWidth: '100%',
    minWidth: '100%',
    backgroundColor: '#889BFF',
    justifyContent: 'space-around',
  },
  input: {
    maxWidth: '100%',
    minWidth: '100%',
    paddingVertical: 5,
    minHeight: 40,
    paddingHorizontal: 20,
    marginBottom: 22,
    backgroundColor: 'transparent',
    color: '#FFF'
  },
});
