// /**
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  * @flow strict-local
//  * @format
//  */
// 'use strict';
// import type {TurboModule} from '../../node_modules/react-native/Libraries/TurboModule/RCTExport';
// import * as TurboModuleRegistry from '../../node_modules/react-native/Libraries/TurboModule/TurboModuleRegistry';
// export type ColorSchemeName = 'light' | 'dark';
// export type AppearancePreferences = {|
//   // TODO: (hramos) T52919652 Use ?ColorSchemeName once codegen supports union
//   // types.
//   /* 'light' | 'dark' */
//   colorScheme?: ?string,
// |};
// export interface Spec extends TurboModule {
//   // TODO: (hramos) T52919652 Use ?ColorSchemeName once codegen supports union
//   // types.
//   /* 'light' | 'dark' */
//   +getColorScheme: () => ?string;
//   // RCTEventEmitter
//   +addListener: (eventName: string) => void;
//   +removeListeners: (count: number) => void;
// }
// export default (TurboModuleRegistry.get<Spec>('Appearance'): ?Spec);
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
export default get('Appearance');