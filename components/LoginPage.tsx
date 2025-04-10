import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, Platform, Dimensions, StyleSheet, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import Svg, { Path, G, Circle } from 'react-native-svg';

type LoginPageProps = {
  onBackPress?: () => void;
} & NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginPage = ({ onBackPress, navigation }: LoginPageProps) => {
  const windowWidth = Dimensions.get('window').width;
  const isMobile = windowWidth < 768;
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For demo purposes - just log the values
    console.log('Login with:', email, password);
    // Actual implementation would validate and make API call
  };

  const handleGoogleLogin = () => {
    console.log('Google login pressed');
    // Implement Google OAuth here
  };

  const handleAppleLogin = () => {
    console.log('Apple login pressed');
    // Implement Apple Sign In here
  };

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    // Add web-specific styling to fix border issues
    if (Platform.OS === 'web') {
      // Apply full width styling to document body and html
      const style = document.createElement('style');
      style.textContent = `
        html, body, #root, #root > div {
          margin: 0 !important;
          padding: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          overflow: hidden !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar style="light" backgroundColor="#000000" />
      
      {/* Film grain overlay */}
      <View style={styles.filmGrainOverlay} />
      
      <LinearGradient 
        colors={['#000000', '#121212', '#000000']} 
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Film reel decoration at top */}
        <View style={[styles.filmReelTop, isMobile && styles.filmReelTopMobile]}>
          {Array(isMobile ? 8 : 12).fill(0).map((_, i) => (
            <View key={i} style={styles.filmSprocket} />
          ))}
        </View>

        {/* Back button */}
        <Pressable 
          style={styles.backButton}
          onPress={handleBackPress}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>

        {/* Film strip decoration at bottom */}
        <View style={[styles.filmStrip, isMobile && styles.filmStripMobile]}>
          {Array(isMobile ? 6 : 8).fill(0).map((_, i) => (
            <View key={i} style={styles.filmHole} />
          ))}
        </View>

        {/* Content container with safe padding for mobile */}
        <View 
          style={[styles.contentContainer, isMobile && styles.contentContainerMobile]}
        >
          {/* Form container */}
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Log In</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput 
                style={styles.textInput}
                placeholder="Enter your email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput 
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#666"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            
            <View style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </View>

            <Pressable 
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>
                Log In
              </Text>
            </Pressable>
            
            <View style={styles.orContainer}>
              <View style={styles.divider} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.divider} />
            </View>
            
            <View style={styles.socialButtonsContainer}>
              <Pressable 
                style={styles.googleButton}
                onPress={handleGoogleLogin}
              >
                <View style={styles.socialIconContainer}>
                  <Svg width="20" height="20" viewBox="0 0 24 24">
                    <G>
                      <Path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <Path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <Path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <Path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </G>
                  </Svg>
                </View>
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </Pressable>
              
              <Pressable 
                style={styles.appleButton}
                onPress={handleAppleLogin}
              >
                <View style={styles.socialIconContainer}>
                  <Svg width="18" height="22" viewBox="0 0 170 170" fill="white">
                    <Path
                      d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71 0.12 1.083 0.17 2.166 0.17 3.24z"
                    />
                  </Svg>
                </View>
                <Text style={styles.appleButtonText}>Continue with Apple</Text>
              </Pressable>
            </View>
            
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>
                Don't have an account? <Text style={styles.signupLink} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    position: 'relative',
    ...(Platform.OS === 'web' && {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    }),
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
    ...(Platform.OS === 'web' && {
      width: '100%',
      height: '100%',
    }),
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  contentContainerMobile: {
    paddingHorizontal: 16,
  },
  filmGrainOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9,
    pointerEvents: 'none',
    backgroundColor: '#000000',
    opacity: 0.05,
  },
  logoContainer: {
    marginBottom: 36,
    alignItems: 'center',
  },
  logoText: {
    color: '#f97316',
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 2,
    textShadowColor: 'rgba(249, 115, 22, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  logoTextWhite: {
    color: 'white',
    textShadowColor: 'rgba(255, 255, 255, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  formContainer: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgba(18, 18, 18, 0.7)',
    borderRadius: 16,
    padding: 20,
    paddingVertical: 24,
    marginTop: 20,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
      },
    }),
  },
  formTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 255, 255, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  inputContainer: {
    marginBottom: 12,
    width: '100%',
  },
  inputLabel: {
    color: '#f0f0f0',
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  textInput: {
    backgroundColor: '#222',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,
    color: 'white',
    height: 45,
    padding: 10,
    fontSize: 16,
    width: '100%',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: '#f97316',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#f97316',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#f97316',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
      },
      android: {
        elevation: 12,
      },
      web: {
        boxShadow: '0 0 25px rgba(249, 115, 22, 0.8), 0 0 40px rgba(249, 115, 22, 0.4)',
      },
    }),
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  signupContainer: {
    alignItems: 'center',
  },
  signupText: {
    color: '#9ca3af',
    fontSize: 14,
  },
  signupLink: {
    color: '#f97316',
    fontWeight: '600',
  },
  filmReelTop: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 30,
    width: '100%',
    left: 0,
    right: 0,
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    opacity: 0.5,
    margin: 0,
    padding: 0,
  },
  filmReelTopMobile: {
    height: 20,
    top: 10,
  },
  filmSprocket: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#333',
  },
  filmStrip: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 30,
    width: '100%',
    left: 0,
    right: 0,
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    opacity: 0.5,
    margin: 0,
    padding: 0,
    zIndex: 5,
  },
  filmStripMobile: {
    height: 20,
    bottom: 10,
  },
  filmHole: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#333',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 50,
    left: 20,
    zIndex: 10,
    padding: 8,
  },
  backButtonText: {
    color: '#f97316',
    fontSize: 16,
    fontWeight: '600',
    textShadowColor: 'rgba(249, 115, 22, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },
  orText: {
    color: '#9ca3af',
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  socialButtonsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 255, 255, 0.05)',
      },
    }),
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 14,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 255, 255, 0.05)',
      },
    }),
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  appleButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  socialIconContainer: {
    marginRight: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: 18,
    height: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 9,
    overflow: 'hidden',
  },
  googleIconPart: {
    width: 9,
    height: 9,
  },
  appleIcon: {
    width: 18,
    height: 22,
    alignItems: 'center',
  },
  appleIconBody: {
    width: 12,
    height: 14,
    backgroundColor: 'white',
    borderRadius: 3,
    ...Platform.select({
      web: {
        boxShadow: '0 0 2px rgba(255, 255, 255, 0.4)',
      },
    }),
  },
  appleIconStem: {
    width: 6,
    height: 6,
    backgroundColor: 'white',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    top: -16,
    ...Platform.select({
      web: {
        boxShadow: '0 0 2px rgba(255, 255, 255, 0.4)',
      },
    }),
  },
}); 