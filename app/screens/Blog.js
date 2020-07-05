import * as React from 'react';
import { Card } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native';
import { AppContainer, Heading } from '../components';
import { blogPostOptions } from '../utils';

const Blog = ({ navigation }) => (
  <AppContainer
    pageTitle="Blog"
    isDashboard
    toggleDrawer={() => navigation.toggleDrawer()}
  >
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingVertical: 10 }}
    >
      {blogPostOptions.map(blog => (
        <TouchableOpacity key={blog.id} onPress={() => navigation.navigate('Webview', { route: blog.uri })}>
          <Card style={{ marginVertical: 20 }}>
            <Card.Cover source={blog.img} />
            <Card.Content style={{ paddingTop: 10 }}>
              <Heading>{blog.title}</Heading>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </AppContainer>
);

export default Blog;
