import React from 'react';
import { Text } from 'react-native';
import { headingStyles, textStyles, color } from '../styles';

export const LargeHeading = ({ style, children }) => (
  <Text style={[headingStyles.largeHeading, { color: color.DARK, ...style}]}>
    {children}
  </Text>
);

export const MediumHeading = ({ style, children }) => (
  <Text style={[headingStyles.mediumHeading, { color: color.DARK, ...style }]}>
    {children}
  </Text>
);

export const Heading = ({ style, children }) => (
  <Text style={[headingStyles.heading, { color: color.DARK, ...style }]}>
    {children}
  </Text>
);

export const LargeText = ({ style, children }) => (
  <Text style={[textStyles.largeText, { color: color.DARK, ...style }]}>
    {children}
  </Text>
);

export const MediumText = ({ style, children }) => (
  <Text style={[textStyles.mediumText, { color: color.DARK, ...style }]}>
    {children}
  </Text>
);

export const SmallText = ({ style, children }) => (
  <Text style={[textStyles.smallText, { color: color.DARK, ...style }]}>
    {children}
  </Text>
);
