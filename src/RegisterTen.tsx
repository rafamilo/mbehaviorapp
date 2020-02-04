import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { TextInput, Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import RegisterMenuFooter from './RegisterMenuFooter';


export default class RegisterTen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ocupacao: 0,
      estudanteQual: '',
      funcionarioQual: '',
      autonomoQual: '',
    };
  }

  render(this) {
    return (
      <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
        <KeyboardAvoidingView behavior="padding" style={styles.alignItemsCenter}>
          <ScrollView
            directionalLockEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            keyboardDismissMode='on-drag'
            contentContainerStyle={{ paddingTop: 50 }}
          >
            <Text style={{ color: '#FFF' }}>Qual sua ocupação?</Text>
            <View>
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='Autônomo'
                checked={this.state.ocupacao === 1}
                onPress={() => this.setState({ ocupacao: 1 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='Dona(o) de casa'
                checked={this.state.ocupacao === 2}
                onPress={() => this.setState({ ocupacao: 2 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='Empresário(a)/Comerciante'
                checked={this.state.ocupacao === 3}
                onPress={() => this.setState({ ocupacao: 3 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='Estudante/Universitário(a)'
                checked={this.state.ocupacao === 4}
                onPress={() => this.setState({ ocupacao: 4 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='Funcionário de empresa privada'
                checked={this.state.ocupacao === 5}
                onPress={() => this.setState({ ocupacao: 5 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='Pensionista/Aposentado(a)'
                checked={this.state.ocupacao === 6}
                onPress={() => this.setState({ ocupacao: 6 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='Profissional liberal'
                checked={this.state.ocupacao === 7}
                onPress={() => this.setState({ ocupacao: 7 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='Atualmente desempregado(a)'
                checked={this.state.ocupacao === 8}
                onPress={() => this.setState({ ocupacao: 8 })}
              />
              {this.state.ocupacao === 4 && (
                <View>
                  <Text style={{ color: '#FFF' }}>Além de estudar, você exerce alguma atividade remunerada?</Text>
                  <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ color: '#FFF' }}
                    checkedColor='#FFF'
                    uncheckedColor='#FFF'
                    title='Não'
                    checked={this.state.estudanteTrabalha === 1}
                    onPress={() => this.setState({ estudanteTrabalha: 1 })}
                  />
                  <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ color: '#FFF' }}
                    checkedColor='#FFF'
                    uncheckedColor='#FFF'
                    title='Sim'
                    checked={this.state.estudanteTrabalha === 2}
                    onPress={() => this.setState({ estudanteTrabalha: 2 })}
                  />
                  {this.state.estudanteTrabalha === 2 && (
                    <View>
                      <TextInput
                        style={styles.input}
                        placeholder='Qual?'
                        multiline={true}
                        placeholderTextColor='#FFF'
                        value={this.state.estudanteQual}
                        onChangeText={estudanteQual => this.setState({ estudanteQual })}
                      />
                    </View>
                  )}
                </View>
              )}
              {(this.state.ocupacao === 5 || this.state.ocupacao === 6) && (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder='Qual o seu cargo atual?'
                    multiline={true}
                    placeholderTextColor='#FFF'
                    value={this.state.funcionarioQual}
                    onChangeText={funcionarioQual => this.setState({ funcionarioQual })}
                  />
                </View>
              )}
              {(this.state.ocupacao === 1 || this.state.ocupacao === 3 || this.state.ocupacao === 8) && (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder='Qual atividade você desenvolve?'
                    multiline={true}
                    placeholderTextColor='#FFF'
                    value={this.state.autonomoQual}
                    onChangeText={autonomoQual => this.setState({ autonomoQual })}
                  />
                </View>
              )}
              {(this.state.ocupacao !== 0 && this.state.ocupacao !== 2 && this.state.ocupacao !== 9) && (
                <View>
                  <Text style={{ color: '#FFF' }}>Eu trabalho</Text>
                  <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ color: '#FFF' }}
                    checkedColor='#FFF'
                    uncheckedColor='#FFF'
                    title='o dia inteiro'
                    checked={this.state.trabalhoDiaInteiro === 1}
                    onPress={() => this.setState({ trabalhoDiaInteiro: 1 })}
                  />
                  <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                    textStyle={{ color: '#FFF' }}
                    checkedColor='#FFF'
                    uncheckedColor='#FFF'
                    title='meio-período'
                    checked={this.state.trabalhoDiaInteiro === 2}
                    onPress={() => this.setState({ trabalhoDiaInteiro: 2 })}
                  />
                </View>
              )}
            </View>
          </ScrollView>
          <RegisterMenuFooter navigation={this.props.navigation} antes="RegisterNine" depois="RegisterEleven" />
        </KeyboardAvoidingView>
      </View>
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
