import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type DocumentItem = {
  id: string;
  status: string;
  documentType: string;
  client: string;
  issuer: string;
  controlNumber: string;
  issueDate: string;
  document: string;
};

const DocumentScreen = () => {
  const navigation = useNavigation();

  const [data] = useState<DocumentItem[]>([
    {
      id: '1',
      status: 'Approved',
      documentType: 'Invoice',
      client: 'ABC Pvt Ltd',
      issuer: 'XYZ Ltd',
      controlNumber: 'CN123',
      issueDate: '2025-11-03',
      document: 'INV-4567',
    },
    {
      id: '2',
      status: 'Pending',
      documentType: 'Report',
      client: 'LMN Corp',
      issuer: 'OPQ Ltd',
      controlNumber: 'CN124',
      issueDate: '2025-11-02',
      document: 'RPT-8901',
    },
    {
      id: '3',
      status: 'Approved',
      documentType: 'Invoice',
      client: 'ABC Pvt Ltd',
      issuer: 'XYZ Ltd',
      controlNumber: 'CN125',
      issueDate: '2025-11-01',
      document: 'INV-7890',
    },
  ]);

  const columnWidths = {
    state: 100,
    documentType: 130,
    client: 150,
    issuer: 150,
    controlNumber: 130,
    issueDate: 120,
    document: 120,
  };

  const renderItem = ({ item, index }: { item: DocumentItem; index: number }) => (
    <View
      style={[
        styles.tableRow,
        { backgroundColor: index % 2 === 0 ? '#f9fbff' : '#ffffff' },
      ]}
    >
      <Text style={[styles.cell, { width: columnWidths.state }]}>{item.status}</Text>
      <Text style={[styles.cell, { width: columnWidths.documentType }]}>{item.documentType}</Text>
      <Text style={[styles.cell, { width: columnWidths.client }]}>{item.client}</Text>
      <Text style={[styles.cell, { width: columnWidths.issuer }]}>{item.issuer}</Text>
      <Text style={[styles.cell, { width: columnWidths.controlNumber }]}>{item.controlNumber}</Text>
      <Text style={[styles.cell, { width: columnWidths.issueDate }]}>{item.issueDate}</Text>
      <Text style={[styles.cell, styles.highlightText, { width: columnWidths.document }]}>
        {item.document}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/left-arrow.png')}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.screenTitle}>Electronic Invoicing</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Image source={require('../../../assets/filter.png')} style={styles.icon} />
            <Text style={styles.headerText}>Filters (0)</Text>
          </View>
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../../../assets/search.png')}
              style={styles.searchIcon}
              resizeMode="contain"
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#999"
            />
          </View>

          <TouchableOpacity style={styles.exportButton}>
            <Image
              source={require('../../../assets/download.png')}
              style={styles.exportIcon}
            />
            <Text style={styles.exportText}>Export</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerCell, { width: columnWidths.state }]}>STATE</Text>
              <Text style={[styles.headerCell, { width: columnWidths.documentType }]}>DOCUMENT TYPE</Text>
              <Text style={[styles.headerCell, { width: columnWidths.client }]}>CUSTOMER</Text>
              <Text style={[styles.headerCell, { width: columnWidths.issuer }]}>TRANSMITTER</Text>
              <Text style={[styles.headerCell, { width: columnWidths.controlNumber }]}>CONTROL NUMBER</Text>
              <Text style={[styles.headerCell, { width: columnWidths.issueDate }]}>ISSUE DATE</Text>
              <Text style={[styles.headerCell, { width: columnWidths.document }]}>DOCUMENT</Text>
            </View>

            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={<Text style={styles.noData}>No records found</Text>}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: Platform.OS === 'ios' ? 55 : 20,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    zIndex: 2,
  },
  backIcon: {
    width: 25,
    height: 25,
    tintColor: '#003366',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 40,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#003366',
  },

  content: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: { width: 18, height: 18, marginRight: 6 },
  headerText: { fontSize: 16, fontWeight: '600', color: '#333' },
  updateButton: {
    backgroundColor: '#003366',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  updateButtonText: { color: '#fff', fontWeight: '600' },

  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 40,
    flex: 0.7,
    elevation: 1,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    tintColor: '#666',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  exportButton: { flexDirection: 'row', alignItems: 'center' },
  exportIcon: { width: 18, height: 18, marginRight: 5 },
  exportText: { fontSize: 14, fontWeight: '600', color: '#003366' },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f3f6fa',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#d0d7de',
  },
  headerCell: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#003366',
    fontSize: 13,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccd6e0',
    paddingVertical: 12,
  },
  cell: {
    textAlign: 'center',
    color: '#333',
    fontSize: 13,
  },
  highlightText: {
    color: '#003366',
    fontWeight: '600',
  },
  noData: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 14,
  },
});

export default DocumentScreen;
