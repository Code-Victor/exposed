module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "tamagui.config": "./tamagui.config.ts",
            "@": "./src",
          },
        },
      ],
    ],
  };
};
