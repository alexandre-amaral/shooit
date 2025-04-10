import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Profile: { userId: string };
  Camera: undefined;
  Feed: undefined;
  Notifications: undefined;
  Search: undefined;
  Upload: undefined;
  // Add any other screens your app might have
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  Profile: { userId?: string };
};

export type MainStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  Camera: undefined;
  // Add other main stack screens here
}; 