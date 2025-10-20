module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel", // Now in the 'presets' array, not 'plugins'
    ],
    // The 'plugins' array is now free for other plugins
  };
};
