import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { Pressable, Text } from 'react-native';

import * as Haptics from 'expo-haptics';

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  dobuleSized?: boolean;
  onPress: (label: string) => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  dobuleSized = false,
  onPress }: Props) => {

  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: dobuleSized ? 180 : 80,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress(label)
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}
      >{label} </Text>
    </Pressable>
  )
}

export default CalculatorButton