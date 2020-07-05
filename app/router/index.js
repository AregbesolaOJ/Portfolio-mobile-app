import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PageLoader } from '../components';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { Dashboard } from '../screens/Dashboard';
import Blog from '../screens/Blog';
import Skills from '../screens/Skills';
import Projects from '../screens/Projects';
import SideBar from '../components/SideBar';
import { ExternalWebview } from '../screens/ExternalWebview';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardRoutes = () => (
  <Drawer.Navigator
    drawerContent={props => <SideBar {...props} />}
    drawerStyle={{ width: 300 }}
    drawerContentOptions={{
      activeTintColor: '#e91e63',
      itemStyle: { marginVertical: 5 },
    }}
  >
    <Drawer.Screen
      name="Home"
      options={{ drawerLabel: 'Home' }}
      component={Dashboard}
    />
    <Drawer.Screen
      name="Blog"
      options={{ drawerLabel: 'My Blog' }}
      component={Blog}
    />
    <Drawer.Screen
      name="Skills"
      options={{ drawerLabel: 'My Skills' }}
      component={Skills}
    />
    <Drawer.Screen
      name="Projects"
      options={{ drawerLabel: 'My Projects' }}
      component={Projects}
    />
  </Drawer.Navigator>
);

const AppRouter = () => {
  const { auth, inProgress } = useSelector((state) => state);

  return (
    <NavigationContainer>
      <PageLoader loading={inProgress} />
      {!auth.isLoggedIn ? (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Dashboard" component={DashboardRoutes} />
          <Stack.Screen name="Webview" component={ExternalWebview} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default AppRouter;
