import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { TextInput, Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';
import { CheckBox } from 'react-native-elements';
import RegisterMenuFooter from './RegisterMenuFooter';


export default class RegisterEight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      estadoCivil: 0
    };
  }

  render(this) {
    return (
      <DismissKeyboard>
        <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
          <KeyboardAvoidingView behavior="padding" style={styles.alignItemsCenter}>
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text style={{ color: '#FFF' }}>Qual seu estado civil?</Text>
              <View>
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Solteiro(a)'
                  checked={this.state.estadoCivil === 1}
                  onPress={() => this.setState({ estadoCivil: 1 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Namorando'
                  checked={this.state.estadoCivil === 2}
                  onPress={() => this.setState({ estadoCivil: 2 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Casado(a)/mora junto'
                  checked={this.state.estadoCivil === 3}
                  onPress={() => this.setState({ estadoCivil: 3 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Separado(a)/Divorciado(a)'
                  checked={this.state.estadoCivil === 4}
                  onPress={() => this.setState({ estadoCivil: 4 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Viúvo(a)'
                  checked={this.state.estadoCivil === 5}
                  onPress={() => this.setState({ estadoCivil: 5 })}
                />
              </View>
            </ScrollView>
            <RegisterMenuFooter navigation={this.props.navigation} antes="RegisterSeven" depois="RegisterNine" />
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
