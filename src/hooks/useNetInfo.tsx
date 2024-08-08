import { useEffect, useRef, useState } from 'react';
import { Linking, Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

import type { NetInfoSubscription } from '@react-native-community/netinfo';

interface UseNetInfoReturns {
  isNetworkDisabled: boolean;
  onPressEnableWifi: () => Promise<void>;
  onPressEnableMobileData: () => Promise<void>;
  startNetInfoListener: () => NetInfoSubscription;
}

function useNetInfo(): UseNetInfoReturns {
  const unsubscribeNetInfoListener = useRef<NetInfoSubscription>();

  const [isNetworkDisabled, setIsNetworkDisabled] = useState<boolean>(false);

  useEffect(() => {
    unsubscribeNetInfoListener.current = startNetInfoListener();

    return () => {
      if (unsubscribeNetInfoListener?.current) {
        unsubscribeNetInfoListener?.current();
      }
    };
  }, []);

  function startNetInfoListener(): NetInfoSubscription {
    return NetInfo.addEventListener((state) => {
      if (
        state.isConnected &&
        (state.isInternetReachable || state.isInternetReachable === null)
      ) {
        setIsNetworkDisabled(false);
      } else {
        setIsNetworkDisabled(true);
      }
    });
  }

  async function onPressEnableWifi(): Promise<void> {
    if (Platform.OS === 'ios') {
      Linking.openURL('App-Prefs:WIFI');
    }

    if (Platform.OS === 'android') {
      Linking.sendIntent('android.settings.WIFI_SETTINGS');
    }
  }

  async function onPressEnableMobileData(): Promise<void> {
    if (Platform.OS === 'ios') {
      Linking.openURL('App-Prefs:MOBILE_DATA_SETTINGS_ID');
    }

    if (Platform.OS === 'android') {
      Linking.sendIntent('android.settings.NETWORK_OPERATOR_SETTINGS');
    }
  }

  return {
    isNetworkDisabled,
    onPressEnableWifi,
    onPressEnableMobileData,
    startNetInfoListener,
  };
}

export type { UseNetInfoReturns };
export { useNetInfo };
