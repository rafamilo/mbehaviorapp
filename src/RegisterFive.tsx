import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { TextInput, Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';
import { CheckBox } from 'react-native-elements';
import RegisterMenuFooter from './RegisterMenuFooter';


export default class RegisterFive extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantoTempo: 0,
      quantos: '',
      outrasPessoasMexem: 0,
    };
  }

  render(this) {
    return (
      <DismissKeyboard>
        <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
          <KeyboardAvoidingView behavior="padding" style={styles.alignItemsCenter}>
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text style={{ color: '#FFF' }}>
                A quanto tempo você já usa aplicativos para smartphone?
              </Text>
              <View>
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Menos de um ano'
                  checked={this.state.quantoTempo === 1}
                  onPress={() => this.setState({ quantoTempo: 1 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Entre um a dois anos'
                  checked={this.state.quantoTempo === 2}
                  onPress={() => this.setState({ quantoTempo: 2 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Mais de três anos'
                  checked={this.state.quantoTempo === 3}
                  onPress={() => this.setState({ quantoTempo: 3 })}
                />
                {this.state.quantoTempo === 3 && (
                  <TextInput
                    style={styles.input}
                    placeholder='Quantos?'
                    multiline={true}
                    placeholderTextColor='#FFF'
                    value={this.state.quantos}
                    onChangeText={quantos => this.setState({ quantos })}
                  />
                )}
              </View>
              <Text style={{ color: '#FFF' }}>
                Você deixa outras pessoas mexerem/usarem seu smartphone?
              </Text>
              <View>
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Não'
                  checked={this.state.outrasPessoasMexem === 1}
                  onPress={() => this.setState({ outrasPessoasMexem: 1 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Raramente'
                  checked={this.state.outrasPessoasMexem === 2}
                  onPress={() => this.setState({ outrasPessoasMexem: 2 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Sim, de vez em quando'
                  checked={this.state.outrasPessoasMexem === 3}
                  onPress={() => this.setState({ outrasPessoasMexem: 3 })}
                />
              </View>
            </ScrollView>
            <RegisterMenuFooter navigation={this.props.navigation} antes="RegisterFour" depois="RegisterSix" />
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
