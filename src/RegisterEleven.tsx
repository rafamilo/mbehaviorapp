import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { TextInput, Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';
import { CheckBox } from 'react-native-elements';
import RegisterMenuFooter from './RegisterMenuFooter';


export default class RegisterEleven extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mora: 0,
      moraOutros: '',
      filhos: 0,
      filhosQuantos: '',
    };
  }

  render(this) {
    return (
      <DismissKeyboard>
        <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
          <KeyboardAvoidingView behavior="position" style={styles.alignItemsCenter}>
          <ScrollView
            directionalLockEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            keyboardDismissMode='on-drag'
            contentContainerStyle={{ paddingTop: 50 }}
          >
              <Text style={{ color: '#FFF' }}>Eu moro</Text>
              <View>
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Sozinho(a)'
                  checked={this.state.mora === 1}
                  onPress={() => this.setState({ mora: 1 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Com familiares'
                  checked={this.state.mora === 2}
                  onPress={() => this.setState({ mora: 2 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Amigos'
                  checked={this.state.mora === 3}
                  onPress={() => this.setState({ mora: 3 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Outros'
                  checked={this.state.mora === 4}
                  onPress={() => this.setState({ mora: 4 })}
                />
                {this.state.mora === 4 && (
                  <TextInput
                    style={styles.input}
                    placeholder='Quem?'
                    multiline={true}
                    placeholderTextColor='#FFF'
                    value={this.state.moraOutros}
                    onChangeText={moraOutros => this.setState({ moraOutros })}
                  />
                )}
              </View>
              <Text style={{ color: '#FFF', marginTop: 50 }}>Você tem filhos?</Text>
              <View>
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Não'
                  checked={this.state.filhos === 1}
                  onPress={() => this.setState({ filhos: 1 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Sim'
                  checked={this.state.filhos === 2}
                  onPress={() => this.setState({ filhos: 2 })}
                />
                {this.state.filhos === 2 && (
                  <TextInput
                    style={styles.input}
                    placeholder='Quantos?'
                    multiline={true}
                    placeholderTextColor='#FFF'
                    keyboardType="number-pad"
                    value={this.state.filhosQuantos}
                    onChangeText={filhosQuantos => this.setState({ filhosQuantos })}
                  />
                )}
              </View>
            </ScrollView>
            <RegisterMenuFooter navigation={this.props.navigation} antes="RegisterTen" depois="RegisterTwelve" />
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
