import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { TextInput, Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';
import { CheckBox } from 'react-native-elements';
import RegisterMenuFooter from './RegisterMenuFooter';


export default class RegisterSeven extends Component {

  constructor(props) {
    super(props);
    this.state = {
      genero: 0,
      qual: '',
    };
  }

  render(this) {
    return (
      <DismissKeyboard>
        <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
          <KeyboardAvoidingView behavior="padding" style={styles.alignItemsCenter}>
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text style={{ color: '#FFF' }}>Qual seu gênero?</Text>
                <View>
                  <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ color: '#FFF' }}
                    checkedColor='#FFF'
                    uncheckedColor='#FFF'
                    title='Feminino'
                    checked={this.state.genero === 1}
                    onPress={() => this.setState({ genero: 1})}
                  />
                  <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ color: '#FFF' }}
                    checkedColor='#FFF'
                    uncheckedColor='#FFF'
                    title='Masculino'
                    checked={this.state.genero === 2}
                    onPress={() => this.setState({ genero: 2})}
                  />
                  <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ color: '#FFF' }}
                    checkedColor='#FFF'
                    uncheckedColor='#FFF'
                    title='Não binário'
                    checked={this.state.genero === 3}
                    onPress={() => this.setState({ genero: 3})}
                  />
                  {this.state.genero === 3 && (
                    <TextInput
                      style={styles.input}
                      placeholder='Qual?'
                      multiline={true}
                      placeholderTextColor='#FFF'
                      value={this.state.qual}
                      onChangeText={qual => this.setState({ qual })}
                    />
                  )}
                </View>
            </ScrollView>
            <RegisterMenuFooter navigation={this.props.navigation} antes="RegisterSix" depois="RegisterEight" />
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
    paddingVertical: 5,
    minHeight: 40,
    paddingHorizontal: 20,
    marginBottom: 22,
    backgroundColor: 'transparent',
    color: '#FFF'
  },
});
