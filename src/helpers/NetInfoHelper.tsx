import { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dialog, Text, MaterialCommunityIcons } from 'react-native-design';

import type { PropsWithChildren } from 'react';

import { useNetInfo } from '../hooks';

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
  const { isNetworkDisabled, onPressEnableMobileData, onPressEnableWifi } =
    useNetInfo();

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
        hideClose={props?.hideClose}
        onDismiss={props?.onDismiss}
        transparent
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
