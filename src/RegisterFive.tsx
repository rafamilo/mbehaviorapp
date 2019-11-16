import 'react-native-gesture-handler'
import React from 'react';
import { TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';
import { CheckBox } from 'react-native-elements';


export default function RegisterFive({ navigation }) {
  this.state = { checked: true }

  return (
    <DismissKeyboard>
      <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
        <KeyboardAvoidingView behavior="position" style={styles.alignItemsCenter}>
          <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
            <CheckBox
              containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
              textStyle={{ color: '#FFF' }}
              checkedColor='#FFF'
              uncheckedColor='#FFF'
              title='De uso pessoal'
              checked={this.state.checked}
            />
            <CheckBox
              containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
              textStyle={{ color: '#FFF' }}
              checkedColor='#FFF'
              uncheckedColor='#FFF'
              title='De uso para trabalho'
              checked={!this.state.checked}
            />
            <CheckBox
              containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
              textStyle={{ color: '#FFF' }}
              checkedColor='#FFF'
              uncheckedColor='#FFF'
              title='Outro'
              checked={this.state.checked}
            />
            <TextInput
              style={styles.input}
              placeholder='Qual?'
              multiline={true}
              placeholderTextColor='#FFF'
            />
          </ScrollView>
          <View style={{ backgroundColor: '#FFF', paddingVertical: 15, paddingHorizontal: 30, marginHorizontal: '-13%', minWidth: '125.5%', maxWidth: '125.5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity
              style={{ backgroundColor: 'transparent', width: '50%' }}
              onPress={() => navigation.navigate('RegisterThree')}
            >
              <Text style={{ fontWeight: 'bold', color: '#3E3E3E' }}>{'< Anterior'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: 'transparent', width: '50%' }}
              onPress={() => navigation.navigate('RegisterFive')}
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
    paddingHorizontal: 20,
    marginBottom: 22,
    backgroundColor: 'transparent',
    color: '#FFF'
  },
});
