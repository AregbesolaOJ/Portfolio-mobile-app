import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import bg from '../assets/images/destructuring.jpeg';
import { LargeHeading, MediumText, CustomButton } from '../components';
import { color, cardStyles } from '../styles';
import { login } from '../redux/actions/auth.actions';

export const WelcomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      <View style={styles.shadow} />
      <View style={styles.container}>
        <Card style={[cardStyles.welcomeStyle, { width: '100%', paddingVertical: 20, }]}>
          <CardItem header>
            <LargeHeading style={{ color: color.DARK }}>{`Hi! I'm John`}</LargeHeading>
          </CardItem>
          <CardItem>
            <Body>
              <MediumText style={{ marginVertical: 20, color: color.DARK }}>
                A frontend developer (web and mobile) - who builds rich UX,
                accessible and performant websites and mobile applications
              </MediumText>
            </Body>
          </CardItem>
          <CardItem footer style={{ alignSelf: 'center' }}>
            <CustomButton
              onPress={() => dispatch(login(navigation))}
              text="Get in to know more"
            />
          </CardItem>
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: -5,
    left: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  shadow: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: color.BLACK,
    opacity: 0.5,
  },
});
