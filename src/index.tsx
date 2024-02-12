import React, { useEffect, useState } from 'react';
import { Linking, Platform, StyleSheet, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dialog from '@react-native-ui-design/dialog';

interface NetInfoHelperProps {
  testID?: string;
  title?: string;
  message?: string;
  acceptText?: string;
  rejectText?: string;
}

function NetInfoHelper(props: NetInfoHelperProps) {
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
    <>
      <Dialog
        testID={`${props?.testID}.netInfoHelper.noInternetConnection`}
        visible={isNetworkDisabled}
        title={props?.title ?? 'No Internet Connection'}
        message={
          props?.message ??
          'Please ensure that you are connected to the internet'
        }
        acceptText={props?.acceptText ?? 'Enable Wifi'}
        onAccept={onPressEnableWifi}
        rejectText={props?.rejectText ?? 'Enable Mobile data'}
        onReject={onPressEnableMobileData}
        actionContainerStyle={styles?.netInfoActionContainer}
      >
        <View
          testID={`${props?.testID}.netInfoHelper.icon.container`}
          style={styles?.netInfoChildContainer}
        >
          <MaterialCommunityIcons
            testID={`${props?.testID}.netInfoHelper.icon`}
            name="wifi-strength-off-outline"
            size={120}
            color={'#808080'}
          />
        </View>
      </Dialog>
    </>
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

export default NetInfoHelper;
