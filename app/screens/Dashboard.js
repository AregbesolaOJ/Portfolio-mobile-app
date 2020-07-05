import React from 'react';
import { ScrollView } from 'react-native';
import { AppContainer, MediumHeading, SmallText } from '../components';

export const Dashboard = ({ navigation }) => {
  return (
    <AppContainer
      pageTitle="Overview"
      isDashboard
      toggleDrawer={() => navigation.toggleDrawer()}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <MediumHeading style={{ marginTop: 40, marginBottom: 20 }}>
          Nice to Have you here!
        </MediumHeading>
        <SmallText style={{ marginBottom: 15 }}>
          Aregbesola O. John is a versatile Software Developer with a good command
          of the English language both in speaking and writing,
          fluent and articulate, good with numbers and excellent human relation.
        </SmallText>
        <SmallText style={{ marginBottom: 15 }}>
          In Addition, I am highly skilled with HTML5, CSS3 and JAVASCRIPT as
          I have a handsome experience over them having worked on a handful of
          web applications with easy-to-use, cross-platform compatible and user-friendly features.
          Always willing and ready to undergo any extensive training needed to acquire the level
          of competencies required to be in line with the ethics of any organization.
        </SmallText>
        <SmallText style={{ marginBottom: 15 }}>
          As a seasoned frontend developer, I have a keen sense of aesthetics and interaction,
          with about 2 years frontend industry experience and passion for scalable and responsive
          websites/web applications. A big fan of abstraction, keeping it simple and
          mobile-first approach. I love gaming, traveling and swimming.
        </SmallText>
        <SmallText style={{ marginBottom: 45 }}>
          With these brief overview and welcome note, I very much hope that you’d reach out to us
          to help bring out your app idea to life and I look forward to hearing from you
          in due course.
        </SmallText>
        <SmallText style={{ marginBottom: 25 }}>
          Thank you and Welcome!
        </SmallText>
      </ScrollView>
    </AppContainer>
  );
};
