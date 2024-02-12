import React from 'react';
import { Provider, Text } from 'react-native-paper';
import NetInfoHelper from '@react-native-helper/netinfo';
import { StyleSheet, View } from 'react-native';
import {
  responsiveHeight,
  responsiveSize,
} from 'react-native-responsive-helper';

export default function App() {
  return (
    <Provider>
      <NetInfoHelper />
      <View style={styles?.container}>
        <View style={styles?.header}>
          <Text variant="headlineMedium">@react-native-helper/netinfo</Text>
        </View>
        <View style={styles?.content}>
          <View style={styles?.instruction}>
            <Text variant="headlineSmall" style={styles?.instructionTitle}>
              Usage:
            </Text>
            <View style={styles?.description}>
              <Text variant="bodyLarge">1. Turn off you internet</Text>
              <Text variant="bodyLarge">
                2. Then it will show an alert windows
              </Text>
              <Text variant="bodyLarge">
                3. In that alert window there is an option to enable mobile data
                and wifi
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: responsiveHeight(20),
    paddingBottom: responsiveHeight(10),
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
  },
  instruction: {
    paddingHorizontal: responsiveSize(10),
    rowGap: responsiveHeight(10),
  },
  instructionTitle: {
    textDecorationLine: 'underline',
  },
  description: {},
});
