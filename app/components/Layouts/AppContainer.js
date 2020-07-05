import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  AppState
} from 'react-native';
import { useSelector } from 'react-redux';
// import io from 'socket.io-client';
// import { Notifications } from 'react-native-notifications';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/SimpleLineIcons';
import { textStyles, headingStyles, color } from '../../styles';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';

export const AppContainer = ({
  children,
  hasBackButton,
  pageSubTitle,
  pageTitle,
  isDashboard,
  toggleDrawer,
  style
}) => {
  const { data } = useSelector(store => store.auth);

  // useEffect(() => {
  //   const socket = io('https://telemed.summitech.ng');
  //   socket.on(data.id, msg => {
  //     console.log(msg, '>>>msg');
  //   });
  // }, []);

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = (appState) => {
    if (appState === 'background') {
      // app is in background
      // const socket = io('https://url');
      // socket.on(data.id, msg => {
      //   Notifications.postLocalNotification({
      //     title: msg.title,
      //     body: msg.description,
      //     extra: 'data'
      //   });
      // });
    }
  };

  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header
        noLeft={isDashboard}
        iosBarStyle="dark-content"
        androidStatusBarColor="#eee"
        style={{ backgroundColor: color.LIGHT_GREY, paddingLeft: 15, paddingRight: 15 }}
      >
        <Left>
          {hasBackButton && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </TouchableOpacity>
          )}
        </Left>
        <Body>
          <Title style={[headingStyles.heading, { color: color.PRIMARY }]}>{pageTitle || ''}</Title>
          {pageSubTitle && (
            <Subtitle style={[textStyles.mediumText, { color: color.PRIMARY }]}>
              {pageSubTitle}
            </Subtitle>
          )}
        </Body>
        <Right>
          {isDashboard && (
            <TouchableOpacity onPress={toggleDrawer}>
              <Icon name="menu" />
            </TouchableOpacity>
          )}
        </Right>
      </Header>
      <View style={{ flex: 1, paddingHorizontal: 15, ...style }}>
        {children}
      </View>
    </Container>
  );
};

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
  hasBackButton: PropTypes.bool,
  pageTitle: PropTypes.string,
  pageSubTitle: PropTypes.string,
  toggleDrawer: PropTypes.func,
};
