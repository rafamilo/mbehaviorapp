import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { TextInput, Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';
import { CheckBox } from 'react-native-elements';
import RegisterMenuFooter from './RegisterMenuFooter';


export default class RegisterNine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      escolaridade: 0,
    };
  }

  render(this) {
    return (
      <DismissKeyboard>
        <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
          <KeyboardAvoidingView behavior="padding" style={styles.alignItemsCenter}>
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text style={{ color: '#FFF' }}>Qual sua escolaridade?</Text>
              <View>
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Ensino Fundamental 1 – 1ª a 5ª'
                  checked={this.state.escolaridade === 1}
                  onPress={() => this.setState({ escolaridade: 1 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Ensino Fundamental 2 – 6ª a 9ª'
                  checked={this.state.escolaridade === 2}
                  onPress={() => this.setState({ escolaridade: 2 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Ensino Médio – 1º a 3º ano do 2º grau'
                  checked={this.state.escolaridade === 3}
                  onPress={() => this.setState({ escolaridade: 3 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Nível técnico'
                  checked={this.state.escolaridade === 4}
                  onPress={() => this.setState({ escolaridade: 4 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Superior(completo)'
                  checked={this.state.escolaridade === 5}
                  onPress={() => this.setState({ escolaridade: 5 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Pós-graduação 1 – Especialização/Mestrado'
                  checked={this.state.escolaridade === 6}
                  onPress={() => this.setState({ escolaridade: 6 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Pós-graduação 2 – Doutorado'
                  checked={this.state.escolaridade === 7}
                  onPress={() => this.setState({ escolaridade: 7 })}
                />
              </View>
            </ScrollView>
            <RegisterMenuFooter navigation={this.props.navigation} antes="RegisterEight" depois="RegisterTen" />
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
