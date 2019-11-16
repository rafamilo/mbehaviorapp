import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { TextInput, Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';
import { CheckBox } from 'react-native-elements';
import RegisterMenuFooter from './RegisterMenuFooter';


export default class RegisterFour extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      quantidadeTelefones: '',
      usoPessoal: false,
      usoTrabalho: false,
      outro: false,
      qual: '',
    };
  }

  render(this) {
    return (
      <DismissKeyboard>
        <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
          <KeyboardAvoidingView behavior="padding" style={styles.alignItemsCenter}>
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
              <TextInput
                autoFocus
                style={styles.input}
                keyboardType="number-pad"
                placeholder='Quantos smartphones você possui?'
                value={this.state.quantidadeTelefones}
                onChangeText={quantidadeTelefones => this.setState({ quantidadeTelefones })}
                placeholderTextColor='#FFF'
              />
              <Text>
              </Text>
              {this.state.quantidadeTelefones && Number.parseInt(this.state.quantidadeTelefones) ?
                (<View>
                  <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ color: '#FFF' }}
                    checkedColor='#FFF'
                    uncheckedColor='#FFF'
                    title='De uso pessoal'
                    checked={this.state.usoPessoal}
                    onPress={() => this.setState({ usoPessoal: !this.state.usoPessoal })}
                  />
                  <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ color: '#FFF' }}
                    checkedColor='#FFF'
                    uncheckedColor='#FFF'
                    title='De uso para trabalho'
                    checked={this.state.usoTrabalho}
                    onPress={() => this.setState({ usoTrabalho: !this.state.usoTrabalho })}
                  />
                  <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ color: '#FFF' }}
                    checkedColor='#FFF'
                    uncheckedColor='#FFF'
                    title='Outro'
                    checked={this.state.outro}
                    onPress={() => this.setState({ outro: !this.state.outro })}
                  />
                  {this.state.outro && (
                    <TextInput
                      style={styles.input}
                      placeholder='Qual?'
                      multiline={true}
                      placeholderTextColor='#FFF'
                      value={this.state.qual}
                      onChangeText={qual => this.setState({ qual })}
                    />
                  )}
                </View>) : null}
            </ScrollView>
            <RegisterMenuFooter navigation={this.props.navigation} antes="RegisterThree" depois="RegisterFive" />
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
