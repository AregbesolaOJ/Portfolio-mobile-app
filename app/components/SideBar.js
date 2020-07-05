/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  Avatar,
  Title,
  Caption,
  Drawer
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { drawerOptions } from '../utils';
import { color as globalColors, fonts, sideBarStyles } from '../styles';
import { logout } from '../redux/actions/auth.actions';

const SideBar = props => {
  const {
    state: { index: currentScreenIndex }
  } = props;
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={sideBarStyles.drawerContent}>
          <View style={sideBarStyles.info}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
              <Avatar.Image
                source={require('../assets/images/avatar.jpeg')}
                size={60}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={[sideBarStyles.title, { fontFamily: fonts.family._MONTSERRAT_SEMIBOLD }]}>
                  Aregbesola O. John
                </Title>
                <Caption style={[sideBarStyles.caption, { fontFamily: fonts.family._MONTSERRAT_LIGHT }]}>
                  aregbesolajohn@gmail.com
                </Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={sideBarStyles.drawerSection}>
            {drawerOptions.map(route => (
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name={route.icon} color={color} size={size} />
                )}
                key={route.id}
                style={{
                  backgroundColor:
                    currentScreenIndex + 1 === route.id
                      ? globalColors.LIGHT_GREY
                      : 'transparent'
                }}
                label={route.label}
                onPress={() => props.navigation.navigate(route.screen)}
              />
            ))}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={sideBarStyles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Icon name="logout" color={globalColors.RED} size={size} />
          )}
          label="Logout"
          labelStyle={{ color: globalColors.RED }}
          onPress={() => dispatch(logout())}
        />
      </Drawer.Section>
    </View>
  );
};

export default SideBar;
