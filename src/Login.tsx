import 'react-native-gesture-handler'
import React from 'react';
import { Text, ScrollView, KeyboardAvoidingView, TextInput, StyleSheet, View, Alert, TouchableOpacity } from 'react-native';
import Logo from './Logo';
import DismissKeyboard from './DismissKeyboard';

export default function Login({ navigation }) {
  return (
    <DismissKeyboard>
      <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <KeyboardAvoidingView behavior="position" style={styles.alignItemsCenter}>
            <Logo/>
            <View style={[styles.alignItemsCenter, styles.form]}>
              <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='#3E3E3E'
              />
              <TextInput
                style={styles.input}
                placeholder='Senha'
                placeholderTextColor='#3E3E3E'
              />
              <View style={styles.formSubmit}>
                <TouchableOpacity
                  style={[styles.formSubmitButton, { backgroundColor: 'transparent' }]}
                  onPress={() => navigation.navigate('RegisterRouter')}
                >
                  <Text style={styles.formSubmitText}>Não tenho cadastro.</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.formSubmitButton}
                  onPress={() => Alert.alert('Simple Button pressed')}
                >
                  <Text style={{ color: '#FFF' }}>Login</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{ backgroundColor: 'transparent', width: '100%', marginTop: 20, height: 35 }}
              >
                <Text style={[styles.formSubmitText, { textAlign: 'center' }]}>Esqueci a senha.</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </DismissKeyboard >
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
