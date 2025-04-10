import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, Platform, Dimensions, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRef, useEffect } from 'react';

export const WelcomePage = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const buttonWidth = Math.min(280, windowWidth * 0.8);
  
  const cameraAnimation = useRef<LottieView>(null);
  const filmRollAnimation = useRef<LottieView>(null);
  const clapperboardAnimation = useRef<LottieView>(null);

  useEffect(() => {
    // Play animations when component mounts
    if (cameraAnimation.current) {
      cameraAnimation.current.play();
    }
    if (filmRollAnimation.current) {
      filmRollAnimation.current.play();
    }
    if (clapperboardAnimation.current) {
      clapperboardAnimation.current.play();
    }

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
    <View style={styles.rootContainer}>
      <StatusBar style="light" backgroundColor="#000000" />
      <LinearGradient 
        colors={['#000000', '#121212', '#000000']} 
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Filmmaking animations */}
        <View style={styles.animationContainer}>
          {/* Camera animation */}
          <View style={styles.cameraAnimation}>
            <LottieView
              ref={cameraAnimation}
              source={{
                uri: 'https://assets6.lottiefiles.com/packages/lf20_iwhieqle.json',
              }}
              autoPlay
              loop
              style={{ width: 120, height: 120 }}
            />
          </View>
          
          {/* Film roll animation */}
          <View style={styles.filmRollAnimation}>
            <LottieView
              ref={filmRollAnimation}
              source={{
                uri: 'https://assets2.lottiefiles.com/packages/lf20_ceirffui.json',
              }}
              autoPlay
              loop
              style={{ width: 100, height: 100 }}
            />
          </View>
          
          {/* Clapperboard animation */}
          <View style={styles.clapperboardAnimation}>
            <LottieView
              ref={clapperboardAnimation}
              source={{
                uri: 'https://assets3.lottiefiles.com/packages/lf20_zlkwuino.json',
              }}
              autoPlay
              loop
              style={{ width: 80, height: 80 }}
            />
          </View>
        </View>

        <View style={styles.contentContainer}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>
              SHOO<Text style={styles.logoTextWhite}>IT</Text>
            </Text>
          </View>

          {/* Main headline */}
          <View style={styles.headlineContainer}>
            <Text style={styles.headlineText}>
              Connect. Create.
            </Text>
            <Text style={styles.headlineText}>
              Collaborate.
            </Text>
            <Text style={styles.subtitleText}>
              The ultimate platform for filmmakers and creatives to bring visions to life.
            </Text>
          </View>

          {/* CTA Buttons */}
          <View style={styles.buttonContainer}>
            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>
                Join the Scene
              </Text>
            </Pressable>
            
            <Pressable style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>
                Log In
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Film strip decoration at bottom */}
        <View style={styles.filmStrip}>
          {Array(8).fill(0).map((_, i) => (
            <View key={i} style={styles.filmHole} />
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
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
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
    ...(Platform.OS === 'web' && {
      width: '100%',
      height: '100%',
    }),
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  animationContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
  cameraAnimation: {
    position: 'absolute',
    top: '10%',
    right: '5%',
    opacity: 0.8,
  },
  filmRollAnimation: {
    position: 'absolute',
    bottom: '15%',
    left: '5%',
    opacity: 0.8,
  },
  clapperboardAnimation: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    opacity: 0.8,
  },
  logoContainer: {
    marginBottom: 48,
    alignItems: 'center',
  },
  logoText: {
    color: '#f97316',
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  logoTextWhite: {
    color: 'white',
  },
  headlineContainer: {
    alignItems: 'center', 
    marginBottom: 48,
    width: '100%',
  },
  headlineText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    width: '100%',
  },
  subtitleText: {
    color: '#9ca3af',
    textAlign: 'center',
    width: '90%',
    fontSize: 16,
    marginTop: 16,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 280,
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: '#f97316',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: '#f97316',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0 4px 8px rgba(249, 115, 22, 0.3)',
      },
    }),
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: '#f97316',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  secondaryButtonText: {
    color: '#f97316',
    fontWeight: 'bold',
    fontSize: 18,
  },
  filmStrip: {
    position: 'absolute',
    bottom: 20,
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
  filmHole: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#222',
    borderWidth: 1,
    borderColor: '#333',
  },
});