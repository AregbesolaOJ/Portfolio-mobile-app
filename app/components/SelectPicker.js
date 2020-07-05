import React from 'react';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, TextInput, Text } from 'react-native';
import { color, headingStyles, inputStyles } from '../styles';

export const SelectPicker = ({
  items,
  label,
  placeholder,
  onDropdownChange,
  dropdownValue,
  pickerStyle,
  optional,
  wrapperStyle
}) => (
  <View
    style={{
      marginVertical: 10,
      ...wrapperStyle
    }}
  >
    <RNPickerSelect
      onValueChange={onDropdownChange}
      items={items || []}
    >
      <Text style={[headingStyles.heading, inputStyles.label]}>
        {`${label} `}
        {optional && <Text style={{ color: color.GREY }}>{`(${optional})`}</Text>}
      </Text>
      <View style={[inputStyles.wrapper, pickerStyle]}>
        <TextInput
          style={[inputStyles.input, inputStyles.dropdown]}
          placeholder={placeholder}
          placeholderTextColor={color.GREY}
          disabled
          value={dropdownValue}
        />
        <Icon name="angle-down" size={15} color={color.GREY} />
      </View>
    </RNPickerSelect>
  </View>
);

SelectPicker.propTypes = {
  items: PropTypes.array,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  dropdownValue: PropTypes.string,
  onDropdownChange: PropTypes.func,
};
