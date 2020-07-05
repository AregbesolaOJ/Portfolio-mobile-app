import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { List } from 'react-native-paper';
import { AppContainer } from '../components';
import { skillsOptions } from '../utils';
import { color } from '../styles';

const Skills = ({ navigation }) => (
  <AppContainer
    pageTitle="Skills"
    isDashboard
    toggleDrawer={() => navigation.toggleDrawer()}
  >
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingVertical: 10 }}
    >
      <List.Section>
        {skillsOptions.map(skill => (
          <TouchableOpacity key={skill.id}>
            <List.Item
              title={skill.label}
              style={{ marginVertical: 20, borderBottomWidth: 1, borderBottomColor: color.LIGHT_GREY }}
              right={({ color: iconColor }) => (
                <Icon name={skill.icon} color={iconColor} size={30} />
              )}
            />
          </TouchableOpacity>
        ))}
      </List.Section>
    </ScrollView>
  </AppContainer>
);

export default Skills;
