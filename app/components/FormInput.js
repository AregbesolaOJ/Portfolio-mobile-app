import React, { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { inputStyles, headingStyles, color } from '../styles';

const Input = (props, ref) => {
  const {
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    onFocus,
    onBlur,
    editable,
    keyboardType,
    optional,
    onSubmitEditing,
    label,
    isDatePicker,
    dateValue = '01-01-2000',
    onDateChange,
    showIcon,
    icon: Icon,
    style
  } = props;

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={[headingStyles.heading, inputStyles.label]}>
        {`${label} `}
        {optional && <Text style={{ color: color.GREY }}>{`(${optional})`}</Text>}
      </Text>
      <View style={[inputStyles.wrapper, style, editable === false && { opacity: 0.5 }]}>
        {isDatePicker ? (
          <DatePicker
            style={{ flex: 2 }}
            date={dateValue}
            mode="date"
            placeholder={placeholder}
            format="DD-MM-YYYY"
            maxDate={new Date()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 5
              },
              dateInput: {
                borderWidth: 0,
                borderColor: 'transparent',
                backgroundColor: 'transparent'
              }
            }}
            onDateChange={onDateChange}
          />
        ) : (
          <>
            <TextInput
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              placeholderTextColor={color.GREY}
              autoCorrect={false}
              style={inputStyles.input}
              value={value}
              onChangeText={onChangeText}
              onFocus={onFocus}
              onBlur={onBlur}
              editable={editable}
              autoCapitalize="none"
              keyboardType={keyboardType || 'default'}
              onSubmitEditing={onSubmitEditing}
              ref={ref}
            />
            {showIcon && (
              <Icon />
            )}
          </>
        )}
      </View>
    </View>
  );
};

Input.displayName = 'Input';

export const FormInput = forwardRef(Input);
