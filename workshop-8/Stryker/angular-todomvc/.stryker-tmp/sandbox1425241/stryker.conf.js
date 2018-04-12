module.exports = function(config) {
  config.set({
    iles: [],
    testRunner: "karma",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html", "clear-text", "progress"],
    testFramework: "jasmine",
    coverageAnalysis: "perTest",
    karmaConfigFile: "test/config/karma.conf.js",
    mutate: ["js/**/*.js"]
  });
};
