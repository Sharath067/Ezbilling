import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const { width } = Dimensions.get('window');

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    width: '100%',
    maxWidth: 800,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  // logoSection: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  formSection: {
    flex: 1,
    backgroundColor: Colors.inputBg,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.35,
    height: width * 0.35,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
    fontSize: Fonts.sizeMedium,
    color: Colors.textGray,
  },
  button: {
    backgroundColor: Colors.buttonBlue,
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
    marginTop: 5,
  },
  buttonText: {
    color: Colors.white,
    fontSize: Fonts.sizeMedium,
    fontFamily: Fonts.bold,
  },
  linkText: {
    color: Colors.linkBlue,
    textAlign: 'center',
    fontSize: Fonts.sizeSmall,
  },
});

export default GlobalStyles;
