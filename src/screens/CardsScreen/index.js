import React, {useRef} from 'react';
import {View, PanResponder, Animated} from 'react-native';
import Container from '../../components/Container';
import {styles} from './style';

const CardsScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(0.9)).current;
  const translateY = useRef(new Animated.Value(44)).current;

  const transformValue = {
    transform: [{scale: scale}, {translateY: translateY}],
  };

  const panResponder = useRef(
    PanResponder.create({
      onPanResponderGrant: () => {
        Animated.spring(scale, {toValue: 1, useNativeDriver: false}).start();
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      },
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        const positionY = pan.y.__getValue();

        if (positionY > 200) {
          Animated.timing(pan, {
            toValue: {x: pan.x, y: 1000},
            useNativeDriver: false,
          }).start();
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
          Animated.spring(scale, {
            toValue: 0.9,
            useNativeDriver: false,
          }).start();
          Animated.spring(translateY, {
            toValue: 44,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <Container>
      <Animated.View
        style={{transform: [{translateX: pan.x}, {translateY: pan.y}]}}
        {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
      <Animated.View style={[styles.animatedContainer, transformValue]}>
        <View style={styles.boxGreen} />
      </Animated.View>
    </Container>
  );
};

export default CardsScreen;
