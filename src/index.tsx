import { NitroModules } from 'react-native-nitro-modules';
import type { RNHNetinfo } from './RNHNetinfo.nitro';

const RNHNetinfoHybridObject =
  NitroModules.createHybridObject<RNHNetinfo>('RNHNetinfo');

export function multiply(a: number, b: number): number {
  return RNHNetinfoHybridObject.multiply(a, b);
}

export * from './helpers';
export * from './hooks';
