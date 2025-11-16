import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const DailyBillingChart: React.FC = () => {
  const data = {
    labels: [
      "2025-10-18",
      "2025-10-20",
      "2025-10-22",
      "2025-10-24",
    ],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0],
        color: () => "#E57373",
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Daily billing</Text>
        <TouchableOpacity style={styles.weekButton}>
          <Text style={styles.weekText}>Last week</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { borderColor: "#0D47A1" }]} />
          <Text style={styles.legendText}>DTE</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { borderColor: "#BDBDBD" }]} />
          <Text style={styles.legendText}>Ingresados</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { borderColor: "#388E3C" }]} />
          <Text style={styles.legendText}>Procesados</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendCircle, { borderColor: "#E57373" }]} />
          <Text style={styles.legendText}>Rechazados</Text>
        </View>
      </View>

      <BarChart
        data={data}
        width={screenWidth - 40}
        height={220}
        fromZero
        withDots
        showValuesOnTopOfBars={false}
        yAxisInterval={0.2}
        withHorizontalLines={true}
        withVerticalLines={false}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 1,
          color: () => "#90A4AE",
          labelColor: () => "#90A4AE",
          barPercentage: 0.6,
          propsForBackgroundLines: {
            stroke: "#E0E0E0",
            strokeDasharray: "",
          },
        }}
        style={styles.chart}
      />

    </View>
  );
};

export default DailyBillingChart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#29434E",
  },
  weekButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  weekText: {
    color: "#607D8B",
    fontSize: 13,
    marginRight: 3,
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 8,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 14,
  },
  legendCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    marginRight: 5,
  },
  legendText: {
    fontSize: 13,
    color: "#424242",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 10,
  },
  scrollRangeContainer: {
    alignItems: "center",
    marginTop: 8,
  },
  scrollRangeBar: {
    width: screenWidth - 80,
    height: 18,
    backgroundColor: "rgba(100,149,237,0.15)",
    borderRadius: 6,
    position: "relative",
  },
  scrollHandleLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 10,
    backgroundColor: "#BBDEFB",
    borderRadius: 4,
  },
  scrollHandleRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 10,
    backgroundColor: "#BBDEFB",
    borderRadius: 4,
  },
});
