import 'react-native-gesture-handler'
import React from 'react';
import { Text, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput, ScrollView, StyleSheet, View, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function RegisterThree({ navigation }) {
  return (
    <DismissKeyboard>
      <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
        <KeyboardAvoidingView behavior="position" style={styles.alignItemsCenter}>
          <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
              style={styles.input}
              placeholder='Páis'
              placeholderTextColor='#3E3E3E'
            />
            <TextInput
              style={styles.input}
              placeholder='Estado'
              placeholderTextColor='#3E3E3E'
            />
            <TextInput
              style={styles.input}
              placeholder='Cidade'
              placeholderTextColor='#3E3E3E'
            />
            <TextInput
              style={styles.input}
              placeholder='Confirmar e-mail'
              placeholderTextColor='#3E3E3E'
            />
          </ScrollView>
          <View style={{ backgroundColor: '#FFF', paddingVertical: 15, paddingHorizontal: 30, marginHorizontal: '-13%', minWidth: '125.5%', maxWidth: '125.5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity
              style={{ backgroundColor: 'transparent', width: '50%' }}
              onPress={() => navigation.navigate('RegisterTwo')}
            >
              <Text style={{ fontWeight: 'bold', color: '#3E3E3E' }}>{'< Anterior'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: 'transparent', width: '50%' }}
              onPress={() => navigation.navigate('RegisterFour')}
            >
              <Text style={{ fontWeight: 'bold', color: '#3E3E3E', textAlign: 'right' }}>Próximo ></Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 10,
    marginBottom: 22,
    backgroundColor: '#FFF',
  },
  formSubmit: {
    maxWidth: '100%',
    minWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  formSubmitText: {
    maxWidth: '100%',
    minWidth: '100%',
    fontSize: 13,
    fontWeight: '500',
    color: '#FFF',
  },
  formSubmitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87AB58',
    width: '50%',
    height: 34
  }
});
