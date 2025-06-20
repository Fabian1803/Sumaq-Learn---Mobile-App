import React from 'react';
import { Text as RNText, TextProps, TextStyle, StyleProp } from 'react-native';

type Props = TextProps & {
  style?: StyleProp<TextStyle>;
};

export const Text = ({ style, ...props }: Props) => {
  let textStyle: TextStyle = {};

  if (style) {
    const flatStyle = Array.isArray(style)
      ? Object.assign({}, ...style)
      : style;

    const weight = (flatStyle as TextStyle).fontWeight;
    const fontStyle = (flatStyle as TextStyle).fontStyle;

    textStyle.fontFamily = getFontByWeightAndStyle(weight, fontStyle);
  } else {
    textStyle.fontFamily = 'IBMPlexMono-Regular';
  }

  return <RNText {...props} style={[textStyle, style]} />;
};

const getFontByWeightAndStyle = (
  weight?: TextStyle['fontWeight'],
  fontStyle?: TextStyle['fontStyle']
): string => {
  const isItalic = fontStyle === 'italic';

  const map: Record<string, string> = {
    '100': 'Thin',
    '200': 'ExtraLight',
    '300': 'Light',
    '400': 'Regular',
    '500': 'Medium',
    '600': 'SemiBold',
    '700': 'Bold',
    '800': 'Bold',
    '900': 'Bold',
    'normal': 'Regular',
    'bold': 'Bold',
  };

  const weightKey = weight?.toString() ?? '400';
  const base = map[weightKey] || 'Regular';
  return `IBMPlexMono-${base}${isItalic ? 'Italic' : ''}`;
};
