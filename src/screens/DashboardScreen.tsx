import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

const { width } = Dimensions.get('window');

const SIDE_PADDING = 18;

const Colors = {
  background: '#f9fafa',
  card: '#fff',
  primary: '#003366',
  mutedText: '#6b7280',
  accentGreen: '#2fa360',
  accentRed: '#e0526b',
  lightGray: '#eef2f5',
  shadow: '#00000022',
};

const DashboardScreen: React.FC = () => {
    const navigation = useNavigation<any>();
  const [drawerOpen, setDrawerOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const drawerAnim = React.useRef(new Animated.Value(-width * 0.72)).current;

  const handleStart = () => {
    console.log('Start clicked');
    setMenuVisible(false);
  };

  const handleLogout = () => {
    console.log('Log out clicked');
    setMenuVisible(false);
    setTimeout(() => {
    navigation.navigate('Login');
  }, 300);
  };

  const toggleDrawer = () => {
    if (drawerOpen) {
      Animated.timing(drawerAnim, {
        toValue: -width * 0.72,
        duration: 250,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start(() => setDrawerOpen(false));
    } else {
      setDrawerOpen(true);
      Animated.timing(drawerAnim, {
        toValue: 0,
        duration: 250,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      {drawerOpen && (
        <TouchableOpacity style={styles.drawerOverlay} activeOpacity={1} onPress={toggleDrawer} />
      )}
      <Animated.View style={[styles.drawer, { left: drawerAnim }]}>
        <View style={styles.drawerHeader}>
          <Image source={require('../../assets/ezbillinglogo.png')} style={styles.drawerLogo} resizeMode="contain" />
        </View>

        <View style={styles.drawerSection}>
          <TouchableOpacity style={styles.drawerItem}>
            <Image source={require('../../assets/home.png')} style={styles.sideBarIcons} />
            <Text style={styles.drawerItemText}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerItem}>
            <Image source={require('../../assets/payment.png')} style={styles.sideBarIcons} />
            <Text style={styles.drawerItemText}>EZ Billing Lite</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.drawerItem}>
            <Image source={require('../../assets/google-docs.png')} style={styles.sideBarIcons} />
            <Text style={styles.drawerItemText}>EZ Reports</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.drawerFooter}>
          <Text style={styles.versionText}>Version 2.4.0</Text>
        </View>
      </Animated.View>

      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.hamburger}>
          <Image source={require('../../assets/web.png')} style={styles.toggle} resizeMode="cover" />
        </TouchableOpacity>

        <View style={styles.headerTitleWrap}>
          <Text style={styles.headerGreeting}>Good evening,</Text>
          <Text style={styles.headerUser}>BS Testing</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconWrap}>
            <Image source={require('../../assets/world.png')} style={styles.flag} resizeMode="cover" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconWrap}>
            <Image source={require('../../assets/bell.png')} style={styles.toggle} resizeMode="cover" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
            <View style={styles.userBadge}>
              <Image
                source={require('../../assets/user.png')}
                style={styles.userIcon}
              />
              <Text style={styles.userName}>BS Testing</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
      {menuVisible && (
              <View style={styles.overlay}>
                <View style={styles.dropdownMenu}>
                  <TouchableOpacity style={styles.menuItem} onPress={handleStart}>
                    <Image
                      source={require('../../assets/home.png')}
                      style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Start</Text>
                  </TouchableOpacity>
      
                  <View style={styles.divider} />
      
                  <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                    <Image
                      source={require('../../assets/turn-off.png')}
                      style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Log out</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Overview</Text>

          <View style={styles.overviewGrid}>
            <View style={styles.statCard}>
              <View style={styles.statLeft}>
                <Image source={require('../../assets/google-docs.png')} style={styles.userIcon} />
                <Text style={styles.statLabel}>DTE sent</Text>
                <Text style={styles.statMain}>0/0 (0.00%)</Text>
              </View>
              <Text style={styles.statFooter}>0.00%</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statLeft}>
                <Image source={require('../../assets/email.png')} style={styles.userIcon} />
                <Text style={styles.statLabel}>Admitted</Text>
                <Text style={styles.statMain}>0</Text>
              </View>
              <Text style={styles.statFooter}>0.00%</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statLeft}>
                <Image source={require('../../assets/check.png')} style={styles.userIcon} />
                <Text style={styles.statLabel}>Processed</Text>
                <Text style={[styles.statMain, { color: Colors.accentGreen }]}>0 (0.00%)</Text>
              </View>
              <Text style={styles.statFooter}>0.00%</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statLeft}>
                <Image source={require('../../assets/restrict.png')} style={styles.userIcon} />
                <Text style={styles.statLabel}>Rejected</Text>
                <Text style={[styles.statMain, { color: Colors.accentRed }]}>0 (0.00%)</Text>
              </View>
              <Text style={styles.statFooter}>0.00%</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statLeft}>
                <Image source={require('../../assets/reload.png')} style={styles.userIcon} />
                <Text style={styles.statLabel}>Re-attempts</Text>
                <Text style={styles.statMain}>0 (0.00%)</Text>
              </View>
              <Text style={styles.statFooter}>0.00%</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statLeft}>
                <Image source={require('../../assets/profile.png')} style={styles.userIcon} />
                <Text style={styles.statLabel}>Forced</Text>
                <Text style={styles.statMain}>0 (0.00%)</Text>
              </View>
              <Text style={styles.statFooter}>0.00%</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.statLeft}>
                <Image source={require('../../assets/pause-play.png')} style={styles.userIcon} />
                <Text style={styles.statLabel}>Automatic</Text>
                <Text style={styles.statMain}>0 (0.00%)</Text>
              </View>
              <Text style={styles.statFooter}>0.00%</Text>
            </View>

          </View>
        </View>

        <View>
          <View style={styles.chartCard}>
            <Text style={styles.cardTitle}>Billing by day of the week (Last 6 months)</Text>
            <Image source={require('../../assets/world.png')} style={styles.chartImage} resizeMode="contain" />
          </View>

          <View style={styles.chartCard}>
            <Text style={styles.cardTitle}>Daily Billing</Text>
            <Image source={require('../../assets/world.png')} style={styles.chartImage} resizeMode="contain" />
          </View>
        </View>

        <View style={{ height: 24 }} />

        <View style={styles.footerCard}>
          <Text style={styles.footerText}>© Smart Insight Solutions 2025</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
    marginTop: 50,
  },
  drawerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00000033',
    zIndex: 30,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width * 0.55,
    backgroundColor: '#fff',
    zIndex: 40,
    elevation: 12,
    shadowColor: Colors.shadow,
  },
  drawerHeader: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    alignItems: 'flex-start',
  },
  drawerLogo: {
    width: 170,
    height: 65,
  },
  drawerSection: {
    padding: 12,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 5,
  },
  drawerItemText: {
    color: '#374151',
    marginLeft: 8,
    fontSize: 15,
  },
  drawerFooter: {
    marginTop: 'auto',
    padding: 12,
  },
  versionText: {
    color: '#9ca3af',
    fontSize: 12,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f2f4',
  },
  hamburger: {
    padding: 6,
    marginRight: 12,
  },
  headerTitleWrap: {
    flex: 1,
  },
  headerGreeting: {
    color: Colors.mutedText,
    fontSize: 14,
  },
  headerUser: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconWrap: {
    marginHorizontal: 6,
    padding: 6,
    borderRadius: 6,
  },
  flag: {
    width: 25,
    height: 25,
    borderRadius: 15,
  },
  userBadge: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  userIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  sideBarIcons: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },

  container: {
    paddingHorizontal: SIDE_PADDING,
    paddingVertical: 18,
    paddingBottom: 60,
  },

  sectionCard: {
    backgroundColor: Colors.card,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 5,
    shadowColor: Colors.shadow,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },

  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
  },

  statCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    elevation: 3,
    shadowColor: Colors.shadow,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  statLeft: {
    alignItems: 'flex-start',
  },
  statLabel: {
    color: '#475569',
    marginTop: 6,
    fontSize: 13,
  },
  statMain: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 6,
    color: '#0f172a',
  },
  statFooter: {
    textAlign: 'right',
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 8,
  },

  chartCard: {
    flex: 1,
    backgroundColor: Colors.card,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    marginHorizontal: 6,
    elevation: 4,
    shadowColor: Colors.shadow,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  chartImage: {
    width: '100%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 6,
  },

  footerCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 18,
    alignItems: 'center',
    marginTop: 6,
    elevation: 3,
    shadowColor: Colors.shadow,
  },
  footerText: {
    color: '#6b7280',
    fontSize: 13,
  },
  toggle: {
    width: 23,
    height: 23,
  },
  overlay: {
    position: 'absolute',
    top: 50,
    right: 10,
    zIndex: 50,
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: 130,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#333',
  },
  menuText: {
    fontSize: 15,
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
});

export default DashboardScreen;
