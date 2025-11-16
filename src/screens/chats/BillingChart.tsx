import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const BillingChart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.chartTitle}>
        Billing by day of the week (Last 6 months)
      </Text>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.dot, styles.dotBlue]} />
          <Text style={styles.legendText}>DTE</Text>
        </View>

        <View style={styles.legendItem}>
          <View style={[styles.dot, styles.dotGrey]} />
          <Text style={styles.legendText}>Ingresados</Text>
        </View>

        <View style={styles.legendItem}>
          <View style={[styles.dot, styles.dotGreen]} />
          <Text style={styles.legendText}>Procesados</Text>
        </View>

        <View style={styles.legendItem}>
          <View style={[styles.dot, styles.dotRed]} />
          <Text style={styles.legendText}>Rechazados</Text>
        </View>
      </View>

      <LineChart
        data={{
          labels: ['Lunes', 'Miercoles', 'Viernes', 'Domingo'],
          datasets: [
            {
              data: [0, 0, 0, 0],
              color: () => '#0D47A1',
              strokeWidth: 2,
            },
            {
              data: [0, 0, 0, 0],
              color: () => '#BDBDBD',
              strokeWidth: 2,
            },
            {
              data: [0, 0, 0, 0],
              color: () => '#388E3C',
              strokeWidth: 2,
            },
            {
              data: [0, 0, 0, 0],
              color: () => '#E57373',
              strokeWidth: 2,
            },
          ],
        }}
        width={screenWidth - 40}
        height={220}
        withDots
        fromZero
        withHorizontalLines
        withVerticalLines={false}
        withInnerLines
        yAxisInterval={0.2}
        withOuterLines={false}
        yLabelsOffset={6}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(229, 115, 115, ${opacity})`,
          labelColor: () => '#9E9E9E',
          propsForDots: {
            r: '4',
            strokeWidth: '1',
            stroke: '#E57373',
          },
          propsForBackgroundLines: {
            stroke: '#E0E0E0',
            strokeDasharray: '',
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#263238',
    marginBottom: 10,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },

  dotBlue: {
    backgroundColor: '#0D47A1',
  },
  dotGrey: {
    backgroundColor: '#BDBDBD',
  },
  dotGreen: {
    backgroundColor: '#388E3C',
  },
  dotRed: {
    backgroundColor: '#E57373',
  },

  legendText: {
    fontSize: 13,
    color: '#424242',
  },
  chart: {
    marginLeft: -12,
    borderRadius: 10,
  },
});

export default BillingChart;
