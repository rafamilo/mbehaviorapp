import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import DismissKeyboard from './DismissKeyboard';
import { Slider } from 'react-native-elements';
import RegisterMenuFooter from './RegisterMenuFooter';


export default class RegisterFive extends Component {

  constructor(props) {
    super(props);
    this.state = {
      importante: 0.5,
      desinteressante: 0.5,
      relevante: 0.5,
      estimulante: 0.5,
      nada: 0.5,
      atraente: 0.5,
      fascinante: 0.5,
      semValor: 0.5,
      envolvente: 0.5,
      desnecessário: 0.5,
    };
  }

  render(this) {
    return (
        <View style={styles.body}>
            <ScrollView style={{ flex: 1 }}>
              <Text style={{ color: '#FFF', marginTop: 20, marginBottom: 20 }} >O uso de aplicativos para smartphone é:</Text>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text> 1. importante para mim </Text>
                <Slider
                  value={this.state.importante}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text> 2. desinteressante para mim </Text>
                <Slider
                  value={this.state.desinteressante}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text> 3. relevante para mim </Text>
                <Slider
                  value={this.state.relevante}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text> 4. estimulante para mim </Text>
                <Slider
                  value={this.state.estimulante}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text> 5. não significa nada para mim </Text>
                <Slider
                  value={this.state.nada}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text> 6. atraente para mim </Text>
                <Slider
                  value={this.state.atraente}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text> 7. fascinante para mim </Text>
                <Slider
                  value={this.state.fascinante}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text> 8. sem valor para mim </Text>
                <Slider
                  value={this.state.semValor}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text> 9. envolvente para mim </Text>
                <Slider
                  value={this.state.envolvente}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
              <View style={{ width: '100%', paddingVertical: 10 }}>
                <Text> 10. desnecessário para mim </Text>
                <Slider
                  value={this.state.desnecessário}
                  onValueChange={value => this.setState({ value })}
                />
              </View>
            </ScrollView>
            <RegisterMenuFooter navigation={this.props.navigation} antes="RegisterFive" depois="RegisterSeven" />
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
});
