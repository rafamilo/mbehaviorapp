import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';
import { CheckBox } from 'react-native-elements';
import RegisterMenuFooter from './RegisterMenuFooter';


export default class RegisterTwelve extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transporte: 0,
    };
  }

  render(this) {
    return (
      <DismissKeyboard>
        <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
          <KeyboardAvoidingView behavior="padding" style={styles.alignItemsCenter}>
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text style={{ color: '#FFF' }}>Qual tipo de transporte você mais utiliza no seu dia-a-dia?</Text>
              <View>
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Público'
                  checked={this.state.transporte === 1}
                  onPress={() => this.setState({ transporte: 1 })}
                />
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                  textStyle={{ color: '#FFF' }}
                  checkedColor='#FFF'
                  uncheckedColor='#FFF'
                  title='Privado'
                  checked={this.state.transporte === 2}
                  onPress={() => this.setState({ transporte: 2 })}
                />
              </View>
            </ScrollView>
            <RegisterMenuFooter navigation={this.props.navigation} antes="RegisterEleven" depois="RegisterThirteen" />
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
