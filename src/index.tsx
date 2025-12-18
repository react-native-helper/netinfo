import { NitroModules } from 'react-native-nitro-modules';
import type { RNHNetInfo } from './RNHNetInfo.nitro';

const RNHNetInfoHybridObject =
  NitroModules.createHybridObject<RNHNetInfo>('RNHNetInfo');

export function multiply(a: number, b: number): number {
  return RNHNetInfoHybridObject.multiply(a, b);
}

export * from './helpers';
