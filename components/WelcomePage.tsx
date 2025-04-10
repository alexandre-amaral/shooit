import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, Platform, Dimensions, StyleSheet, Image, SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

export const WelcomePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const buttonWidth = Math.min(280, windowWidth * 0.8);
  
  // Adaptar posicionamento para telas menores
  const isMobile = windowWidth < 768;
  
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
        
        {/* Movie tickets at sides - only show on larger screens */}
        {!isMobile && (
          <>
            <View style={styles.ticketLeft}>
              <View style={styles.ticketBody}>
                <View style={styles.ticketHole} />
                <View style={styles.ticketHole} />
                <View style={styles.ticketHole} />
              </View>
            </View>
            
            <View style={styles.ticketRight}>
              <View style={styles.ticketBody}>
                <View style={styles.ticketHole} />
                <View style={styles.ticketHole} />
                <View style={styles.ticketHole} />
              </View>
            </View>
          </>
        )}

        {/* Spotlight effect */}
        <View style={styles.spotlightEffect} />

        {/* Projector beam */}
        <View style={styles.projectorBeam} />

        {/* Cinema elements - positioned differently on mobile */}
        <View style={styles.cinemaElements}>
          {/* Camera decoration */}
          <View style={[
            styles.cameraIcon, 
            isMobile && { top: '15%', right: '10%', transform: [{scale: 0.7}] }
          ]}>
            <View style={styles.cameraBody} />
            <View style={styles.cameraLens} />
          </View>
          
          {/* Film reel decoration */}
          <View style={[
            styles.filmReelIcon, 
            isMobile && { bottom: '20%', left: '10%', transform: [{scale: 0.7}] }
          ]}>
            <View style={styles.filmReelOuter} />
            <View style={styles.filmReelInner} />
            <View style={styles.filmReelCenter} />
          </View>
          
          {/* Clapperboard decoration */}
          <View style={[
            styles.clapperboardIcon, 
            isMobile && { top: '25%', left: '10%', transform: [{scale: 0.7}] }
          ]}>
            <View style={styles.clapperboardTop} />
            <View style={styles.clapperboardBottom} />
            <View style={styles.clapperboardStripe} />
            <View style={{
              position: 'absolute',
              top: 8,
              left: 5,
              width: 30,
              height: 1,
              backgroundColor: '#f97316',
            }} />
          </View>

          {/* Director's megaphone */}
          <View style={[
            styles.megaphoneIcon, 
            isMobile && { bottom: '25%', right: '15%', transform: [{scale: 0.7}] }
          ]}>
            <View style={styles.megaphoneBody} />
            <View style={styles.megaphoneHandle} />
          </View>
          
          {/* Popcorn decoration */}
          <View style={[
            styles.popcornIcon, 
            isMobile && { top: '40%', right: '12%', transform: [{scale: 0.7}] }
          ]}>
            <View style={styles.popcornBox} />
            <View style={{
              position: 'absolute',
              width: 10,
              height: 10,
              backgroundColor: '#fff',
              borderRadius: 5,
              left: 5,
              top: -8,
            }} />
            <View style={{
              position: 'absolute',
              width: 10,
              height: 10,
              backgroundColor: '#fff',
              borderRadius: 5,
              left: 12,
              top: -10,
            }} />
            <View style={{
              position: 'absolute',
              width: 10,
              height: 10,
              backgroundColor: '#fff',
              borderRadius: 5,
              left: 8,
              top: -12,
            }} />
          </View>
        </View>

        {/* Content container with safe padding for mobile */}
        <View style={[styles.contentContainer, isMobile && styles.contentContainerMobile]}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>
              shoo<Text style={styles.logoTextWhite}>it</Text>
            </Text>
          </View>

          {/* Main headline */}
          <View style={styles.headlineContainer}>
            <Text style={[styles.headlineText, isMobile && styles.headlineTextMobile]}>
              Connect. Create.
            </Text>
            <Text style={[styles.headlineText, isMobile && styles.headlineTextMobile]}>
              Collaborate.
            </Text>
            <Text style={[styles.subtitleText, isMobile && styles.subtitleTextMobile]}>
              The ultimate platform for filmmakers and creatives to bring visions to life.
            </Text>
          </View>

          {/* CTA Buttons */}
          <View style={styles.buttonContainer}>
            <Pressable 
              style={styles.primaryButton}
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={styles.primaryButtonText}>
                Join the Scene
              </Text>
            </Pressable>
            
            <Pressable 
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.secondaryButtonText}>
                Already have an account?
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Film strip decoration at bottom */}
        <View style={[styles.filmStrip, isMobile && styles.filmStripMobile]}>
          {Array(isMobile ? 6 : 8).fill(0).map((_, i) => (
            <View key={i} style={styles.filmHole} />
          ))}
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
  contentContainerMobile: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    paddingTop: 60,
    paddingBottom: 100,
  },
  cinemaElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
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
  spotlightEffect: {
    position: 'absolute',
    top: 0,
    left: '25%',
    width: '50%',
    height: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    transform: [{scaleX: 2}],
    opacity: 0.6,
  },
  projectorBeam: {
    position: 'absolute',
    top: 0,
    left: '30%',
    width: '40%',
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    transform: [{scaleX: 1.5}],
    opacity: 0.7,
  },
  cameraIcon: {
    position: 'absolute',
    top: '10%',
    right: '5%',
    width: 40,
    height: 30,
    opacity: 0.8,
    zIndex: 1,
  },
  cameraBody: {
    width: 40,
    height: 30,
    backgroundColor: '#333',
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
      },
    }),
  },
  cameraLens: {
    position: 'absolute',
    width: 18,
    height: 18,
    backgroundColor: '#222',
    borderWidth: 2,
    borderColor: '#444',
    borderRadius: 9,
    left: 10,
    top: 5,
  },
  filmReelIcon: {
    position: 'absolute',
    bottom: '15%',
    left: '5%',
    width: 40,
    height: 40,
    opacity: 0.8,
    zIndex: 1,
  },
  filmReelOuter: {
    width: 40,
    height: 40,
    backgroundColor: '#444',
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
      },
    }),
  },
  filmReelInner: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: '#333',
    borderRadius: 15,
    left: 5,
    top: 5,
  },
  filmReelCenter: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#222',
    borderRadius: 5,
    left: 15,
    top: 15,
  },
  clapperboardIcon: {
    position: 'absolute',
    top: '25%',
    left: '10%',
    width: 40,
    height: 35,
    opacity: 0.8,
    zIndex: 1,
  },
  clapperboardTop: {
    width: 40,
    height: 15,
    backgroundColor: '#333',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0 0 6px rgba(0, 0, 0, 0.5)',
      },
    }),
  },
  clapperboardBottom: {
    width: 40,
    height: 20,
    backgroundColor: '#222',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    top: 15,
  },
  clapperboardStripe: {
    position: 'absolute',
    top: 4,
    left: 5,
    width: 30,
    height: 1,
    backgroundColor: '#f97316',
  },
  megaphoneIcon: {
    position: 'absolute',
    bottom: '25%',
    right: '10%',
    width: 35,
    height: 35,
    opacity: 0.8,
    zIndex: 1,
  },
  megaphoneBody: {
    width: 25,
    height: 20,
    backgroundColor: '#f97316',
    transform: [{rotate: '45deg'}],
    borderTopRightRadius: 15,
    borderBottomRightRadius: 5,
    left: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#f97316',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0 0 8px rgba(249, 115, 22, 0.5)',
      },
    }),
  },
  megaphoneHandle: {
    position: 'absolute',
    width: 8,
    height: 15,
    backgroundColor: '#333',
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  popcornIcon: {
    position: 'absolute',
    top: '50%',
    right: '15%',
    width: 25,
    height: 30,
    opacity: 0.8,
    zIndex: 1,
  },
  popcornBox: {
    width: 25,
    height: 20,
    backgroundColor: '#f97316',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    top: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#f97316',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: '0 0 8px rgba(249, 115, 22, 0.5)',
      },
    }),
  },
  popcornPiece: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
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
    textShadowColor: 'rgba(255, 255, 255, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  headlineTextMobile: {
    fontSize: 28,
  },
  subtitleText: {
    color: '#9ca3af',
    textAlign: 'center',
    width: '90%',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 10,
    textShadowColor: 'rgba(156, 163, 175, 0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  subtitleTextMobile: {
    fontSize: 14,
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 280,
    marginTop: 8,
    marginBottom: 30,
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
  primaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
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
  filmReelTop: {
    position: 'absolute',
    top: 20,
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
  ticketLeft: {
    position: 'absolute',
    left: 5, 
    top: '45%',
    transform: [{ rotate: '90deg' }],
  },
  ticketRight: {
    position: 'absolute',
    right: 5,
    top: '45%',
    transform: [{ rotate: '-90deg' }],
  },
  ticketBody: {
    width: 100,
    height: 30,
    backgroundColor: '#f97316',
    opacity: 0.6,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ticketHole: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
});