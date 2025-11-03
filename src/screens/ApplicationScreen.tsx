import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ApplicationScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Applications</Text>

        <View style={styles.userSection}>
          <Image source={require('../../assets/world.png')} style={styles.flag} />
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

      <ScrollView
        contentContainerStyle={styles.main}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={() => setPopupVisible(true)}
        >
          <Image
            source={require('../../assets/smart-insight-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>EZBilling</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/smart-insight-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>Restaurant</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.footer}>© Smart Insight Solutions 2025</Text>
      <Modal
        visible={popupVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setPopupVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setPopupVisible(false)}>
          <View style={styles.popupOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.popupBox}>
                <View style={styles.popupHeader}>
                  <Text style={styles.popupTitle}>Select the below options</Text>
                  <TouchableOpacity onPress={() => setPopupVisible(false)}>
                    <Image
                      source={require('../../assets/circle-with-x.png')}
                      style={styles.closeIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.optionButton}
                onPress={() => {
                  setPopupVisible(false);
                  navigation.navigate('Dashboard');
                }}>
                  <Text style={styles.optionText}>Cloud</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionButton}>
                  <Text style={styles.optionText}>uat-hstgr-1</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default ApplicationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafa',
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  flag: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  userBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    elevation: 2,
  },
  userIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
    tintColor: '#000',
  },
  userName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  overlay: {
    position: 'absolute',
    top: 50,
    right: 10,
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
  main: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    gap: 40,
  },
  card: {
    width: width * 0.45,
    height: width * 0.55,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  logo: {
    width: 130,
    height: 100,
  },
  appName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#003366',
  },
  footer: {
    textAlign: 'center',
    fontSize: 13,
    color: '#444',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
  },

  popupOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupBox: {
    backgroundColor: '#fff',
    width: width * 0.8,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 10,
  },
  popupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  optionButton: {
    backgroundColor: '#f0f6ff',
    borderRadius: 10,
    paddingVertical: 12,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#003366',
  },
  closeIcon: {
    width: 26,
    height: 26,
  },
});
