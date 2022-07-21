import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 400,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
  boxGreen: {
    width: 300,
    height: 400,
    backgroundColor: 'green',
    borderRadius: 20,
  },
  animatedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
