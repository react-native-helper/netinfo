import React, { Fragment } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, colors, Text } from 'react-native-design';
import { NetInfoHelper } from '@react-native-helper/netinfo';
import { responsive } from '@rnpack/utils';

export default function App() {
  function onPressHello() {
    Alert.alert('Hello!');
  }

  return (
    <Fragment>
      <View style={styles?.container}>
        <View style={styles?.header}>
          <Text variant="title">@react-native-helper/netinfo</Text>
        </View>
        <View style={styles?.content}>
          <View style={styles?.instruction}>
            <Text variant="label" style={styles?.instructionTitle}>
              Usage:
            </Text>
            <View style={styles?.description}>
              <Text>1. Turn off you internet</Text>
              <Text>2. Then it will show an alert windows</Text>
              <Text>
                3. In that alert window there is an option to enable mobile data
                and wifi
              </Text>
            </View>
          </View>
          <Button title="Hello!" onPress={onPressHello} />
        </View>
      </View>
      <NetInfoHelper hideClose />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: responsive?.height(20),
    paddingBottom: responsive?.height(10),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors?.white?.normal?.main,
    rowGap: responsive?.height(30),
  },
  instruction: {
    paddingHorizontal: responsive?.size(10),
    rowGap: responsive?.height(10),
  },
  instructionTitle: {
    textDecorationLine: 'underline',
  },
  description: {},
});
