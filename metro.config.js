const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  reporter: {
    update(event) {
      // Suppress "JavaScript logs have moved" and similar startup messages
      if (event.type === 'initialize_started' || event.type === 'initialize_done') {
        return;
      }
    },
  },
};

module.exports = mergeConfig(defaultConfig, customConfig);
