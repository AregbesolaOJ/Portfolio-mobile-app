import React from 'react';
import { Card } from 'react-native-paper';
import { ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { AppContainer, Heading } from '../components';
import { projectsOptions } from '../utils';

const Projects = ({ navigation }) => (
  <AppContainer
    pageTitle="Projects"
    isDashboard
    toggleDrawer={() => navigation.toggleDrawer()}
  >
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
      >
        {projectsOptions.map(project => (
          <TouchableOpacity
            key={project.id}
            onPress={() => navigation.navigate('Webview', { route: project.uri })}
          >
            <Card style={{ marginVertical: 20 }}>
              <Card.Cover source={project.img} />
              <Card.Content style={{ paddingTop: 10 }}>
                <Heading>{project.title}</Heading>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  </AppContainer>
);

export default Projects;
