/**
 * This file contains metric values that are global to the application.
 */

import {Dimensions} from 'react-native';

// Examples of metrics you can define:
export const tiny = 5;
export const small = tiny * 2; // 10
export const normal = tiny * 3; // 15
export const medium = normal * 2; // 30

export default {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  
};
