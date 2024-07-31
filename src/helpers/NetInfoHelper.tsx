import React, { Fragment, useEffect, useState } from 'react';
import { Linking, Platform, StyleSheet, View } from 'react-native';
import { Dialog, Text } from 'react-native-design';
import NetInfo from '@react-native-community/netinfo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import type { PropsWithChildren } from 'react';

interface NetInfoHelperProps {
  testID?: string;
  title?: string;
  message?: string;
  acceptText?: string;
  rejectText?: string;
  hideClose?: boolean;
  onDismiss?: () => void;
}

function NetInfoHelper(props: PropsWithChildren<NetInfoHelperProps>) {
  const [isNetworkDisabled, setIsNetworkDisabled] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribeNetInfoListener = startNetInfoListener();

    return () => {
      if (unsubscribeNetInfoListener) {
        unsubscribeNetInfoListener();
      }
    };
  }, []);

  function startNetInfoListener() {
    return NetInfo.addEventListener((state) => {
      if (state.isConnected && state.isInternetReachable) {
        setIsNetworkDisabled(false);
      } else {
        setIsNetworkDisabled(true);
      }
    });
  }

  async function onPressEnableWifi() {
    if (Platform.OS === 'ios') {
      Linking.openURL('App-Prefs:WIFI');
    }

    if (Platform.OS === 'android') {
      Linking.sendIntent('android.settings.WIFI_SETTINGS');
    }
  }

  async function onPressEnableMobileData() {
    if (Platform.OS === 'ios') {
      Linking.openURL('App-Prefs:MOBILE_DATA_SETTINGS_ID');
    }

    if (Platform.OS === 'android') {
      Linking.sendIntent('android.settings.NETWORK_OPERATOR_SETTINGS');
    }
  }

  return (
    <Fragment>
      <Dialog
        testID={`${props?.testID}.netInfoHelper.noInternetConnection`}
        isVisible={isNetworkDisabled}
        title={props?.title ?? 'No Internet Connection'}
        acceptText={props?.acceptText ?? 'Enable Wifi'}
        onPressAccept={onPressEnableWifi}
        rejectText={props?.rejectText ?? 'Enable Internet'}
        onPressReject={onPressEnableMobileData}
        actionContainerStyle={styles?.netInfoActionContainer}
        transparent
        hideClose={props?.hideClose}
        onDismiss={props?.onDismiss}
      >
        <View
          testID={`${props?.testID}.netInfoHelper.icon.container`}
          style={styles?.netInfoChildContainer}
        >
          {props?.children ?? (
            <>
              <MaterialCommunityIcons
                testID={`${props?.testID}.netInfoHelper.icon`}
                name="wifi-strength-off-outline"
                size={120}
                color={'#808080'}
              />
              <Text variant="label">
                {props?.message ??
                  'Please ensure that you are connected to the internet'}
              </Text>
            </>
          )}
        </View>
      </Dialog>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  netInfoActionContainer: {
    justifyContent: 'center',
  },
  netInfoChildContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});

export type { NetInfoHelperProps };
export { NetInfoHelper };
