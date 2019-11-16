import React, { Component } from 'react';
import { ScrollView, View, KeyboardAvoidingView, StyleSheet } from 'react-native';

export default class Body extends Component {
  render({ children }) {
    return (
      <View style={[styles.body, styles.alignItemsCenter, styles.justifyContentCenter]}>
        <KeyboardAvoidingView behavior="position" style={styles.alignItemsCenter}>
          <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </View >
    )
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
})