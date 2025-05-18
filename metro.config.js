const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.resolverMainFields = ["react-native", "browser", "main"];
config.resolver.platforms = ["ios", "android", "native", "web"];

// Add this to ignore Node.js modules
config.resolver.blacklistRE = /node_modules\/.*\/node_modules\/react-native\/.*/;

module.exports = config;
