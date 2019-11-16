import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class RegisterMenuFooter extends Component {
  constructor(props) {
    super(props);
  }

  render(this) {
    return (
      <View style={{
        backgroundColor: '#FFF', paddingVertical: 15, paddingHorizontal: 30, marginHorizontal: '-13%', minWidth: '125.5%', maxWidth: '125.5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
      }}
      >
        <TouchableOpacity
          style={{ backgroundColor: 'transparent', width: '50%' }}
          onPress={() => this.props.navigation.navigate(this.props.antes)}
        >
          <Text style={{ fontWeight: 'bold', color: '#3E3E3E' }}>{'< Anterior'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'transparent', width: '50%' }}
          onPress={() => this.props.navigation.navigate(this.props.depois)}
        >
          <Text style={{ fontWeight: 'bold', color: '#3E3E3E', textAlign: 'right' }}>Próximo ></Text>
        </TouchableOpacity>
      </View>
    )
  }
}