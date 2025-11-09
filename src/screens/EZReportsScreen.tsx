import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const EZReportsScreen = () => {
  const navigation = useNavigation();
  const [selectedReport, setSelectedReport] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleReportSelect = (itemValue: string) => {
    setSelectedReport(itemValue);
    if (itemValue) {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require('../../assets/left-arrow.png')}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>EZ Reports</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Report Type</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={selectedReport}
              onValueChange={handleReportSelect}
              style={styles.picker}
              dropdownIconColor="#666"
            >
              <Picker.Item label="Select a report type" value="" color="#999" />
              <Picker.Item label="Sales Report" value="Sales Report" />
              <Picker.Item label="Customer Report" value="Customer Report" />
              <Picker.Item label="Inventory Report" value="Inventory Report" />
            </Picker>
          </View>
        </View>

        <View style={styles.card}>
          {selectedReport ? (
            <Text style={styles.reportText}>
              You selected: <Text style={styles.reportHighlight}>{selectedReport}</Text>
            </Text>
          ) : (
            <Text style={styles.placeholder}>Select a report type</Text>
          )}
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
           
            <Text style={styles.modalTitle}>Report Selected</Text>
            <Text style={styles.modalMessage}>
              You have selected <Text style={styles.modalHighlight}>{selectedReport}</Text>
            </Text>

            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
    marginTop: 20,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  backButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  backIcon: {
    width: 22,
    height: 22,
    tintColor: '#003366',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#003366',
  },

  contentContainer: {
    padding: 20,
  },

  dropdownContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  label: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  placeholder: {
    fontSize: 15,
  },
  reportText: {
    fontSize: 15,
    color: '#333',
  },
  reportHighlight: {
    fontWeight: '600',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 25,
    alignItems: 'center',
    elevation: 8,
  },
  modalIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#003366',
    marginBottom: 5,
  },
  modalMessage: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalHighlight: {
    color: '#6c63ff',
    fontWeight: '600',
  },
  modalButton: {
    backgroundColor: '#003366',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default EZReportsScreen;
