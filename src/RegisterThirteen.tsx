import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { TextInput, Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import RegisterMenuFooter from './RegisterMenuFooter';


export default class RegisterTen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rendaFamiliar: 0,
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
                title='Até R$ 998'
                checked={this.state.rendaFamiliar === 1}
                onPress={() => this.setState({ rendaFamiliar: 1 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='De R$ 999 a R$ 1.996'
                checked={this.state.rendaFamiliar === 2}
                onPress={() => this.setState({ rendaFamiliar: 2 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='De R$ 1.997 a R$ 3.992'
                checked={this.state.rendaFamiliar === 3}
                onPress={() => this.setState({ rendaFamiliar: 3 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='De R$ 3.993 a R$ 6.986'
                checked={this.state.rendaFamiliar === 4}
                onPress={() => this.setState({ rendaFamiliar: 4 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='De R$ 6.987 a R$ 9.980'
                checked={this.state.rendaFamiliar === 5}
                onPress={() => this.setState({ rendaFamiliar: 5 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='De R$ 9.981 a R$ 14.970'
                checked={this.state.rendaFamiliar === 6}
                onPress={() => this.setState({ rendaFamiliar: 6 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='De R$ 14.971 a R$ 19.960'
                checked={this.state.rendaFamiliar === 7}
                onPress={() => this.setState({ rendaFamiliar: 7 })}
              />
              <CheckBox
                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                textStyle={{ color: '#FFF' }}
                checkedColor='#FFF'
                uncheckedColor='#FFF'
                title='Mais de R$ 19.961'
                checked={this.state.rendaFamiliar === 8}
                onPress={() => this.setState({ rendaFamiliar: 8 })}
              />
            </View>
          </ScrollView>
          <RegisterMenuFooter navigation={this.props.navigation} antes="RegisterTen" depois="Congratulations" />
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
