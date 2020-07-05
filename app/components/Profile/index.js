import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color, textStyles } from '../../styles';

const ProfileSectionLinkWrapper = ({ noLink, gotoPage, children }) => (
  noLink ? (
    <View style={styles.wrapper}>
      {children}
    </View>
  ) : (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={gotoPage || null}
    >
      {children}
    </TouchableOpacity>
  )
);

export const ProfileSectionLink = ({
  title,
  gotoPage,
  toggler,
  isEnabled,
  toggleSwitch
}) => {
  return (
    <ProfileSectionLinkWrapper
      gotoPage={gotoPage}
      noLink={toggler}
    >
      <Text style={[textStyles.mediumText]}>{title}</Text>
      {toggler ? (
        <Switch
          trackColor={{ false: '#767577', true: '#38454F' }}
          thumbColor={isEnabled ? color.PRIMARY : '#E0E1E2'}
          ios_backgroundColor="rgba(56, 69, 79, 0.15)"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : (
        <Icon name="angle-right" size={15} color={color.GREY} />
      )}
    </ProfileSectionLinkWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  }
});
