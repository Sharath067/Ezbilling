import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const ElectronicInvoicingScreen = () => {
  const [selectedType, setSelectedType] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={require("../../../assets/left-arrow.png")}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Electronic Invoicing</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.card}>
          <Text style={styles.label}>Billing Type</Text>
          <Text style={styles.subLabel}>DTE Type</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedType}
              onValueChange={(itemValue) => setSelectedType(itemValue)}
              style={styles.picker}
              dropdownIconColor="#777"
            >
              <Picker.Item label="Select a DTE type" value="" />
              <Picker.Item label="Invoice" value="invoice" />
              <Picker.Item label="Receipt" value="receipt" />
              <Picker.Item label="Credit Note" value="credit" />
            </Picker>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cleanButton}>
              <Text style={styles.cleanText}>Clean</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.previewButton}>
              <Text style={styles.previewText}>Preview</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafc",
    marginTop: 20,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  backButton: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  backIcon: {
    width: 22,
    height: 22,
    tintColor: "#003366",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#003366",
  },

  scrollContainer: {
    alignItems: "center",
    paddingVertical: 25,
  },
  card: {
    width: width * 0.9,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2d2d2d",
    marginBottom: 15,
  },
  subLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  picker: {
    height: Platform.OS === "ios" ? 180 : 50,
    color: "#444",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cleanButton: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  cleanText: {
    color: "#444",
    fontSize: 14,
    fontWeight: "500",
  },
  previewButton: {
    backgroundColor: "#6c757d",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
  },
  previewText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default ElectronicInvoicingScreen;
