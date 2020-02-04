import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';


export default class Congratulations extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     estadoCivil: 0
  //   };
  // }

  render(this) {
    return (
      <DismissKeyboard>
        <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
          <KeyboardAvoidingView behavior="padding" style={styles.alignItemsCenter}>
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text style={{ color: '#FFF', textAlign: 'center' }}>
                “Parabéns!!! Agora você já está colaborando com a ciência! Permaneça conosco pelos próximos 3 meses.”
              </Text>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </DismissKeyboard>
    );
  }
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
