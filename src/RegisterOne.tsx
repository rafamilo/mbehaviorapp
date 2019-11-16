import 'react-native-gesture-handler'
import React from 'react';
import { Text, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView, StyleSheet, View } from 'react-native';
import Logo from './Logo';
import DismissKeyboard from './DismissKeyboard';

export default function Login({ navigation }) {
  return (
    <DismissKeyboard>
      <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
        <KeyboardAvoidingView behavior="position" style={styles.alignItemsCenter}>
          <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Logo/>
            <TextInput
              style={styles.input}
              placeholder='Nome'
              placeholderTextColor='#3E3E3E'
            />
            <TextInput
              style={styles.input}
              placeholder='Sobrenome'
              placeholderTextColor='#3E3E3E'
            />
            <TextInput
              style={styles.input}
              placeholder='E-mail'
              placeholderTextColor='#3E3E3E'
            />
            <TextInput
              style={styles.input}
              placeholder='Confirmar e-mail'
              placeholderTextColor='#3E3E3E'
            />
          </ScrollView>
          <View style={{ backgroundColor: '#FFF', paddingVertical: 15, paddingHorizontal: 30, marginHorizontal: '-13%', minWidth: '125.5%', maxWidth: '125.5%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <TouchableOpacity
              style={{ backgroundColor: 'transparent', width: '50%' }}
              onPress={() => navigation.navigate('RegisterTwo')}
            >
              <Text style={{ fontWeight: 'bold', color: '#3E3E3E' }}>Próximo ></Text>
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
});
