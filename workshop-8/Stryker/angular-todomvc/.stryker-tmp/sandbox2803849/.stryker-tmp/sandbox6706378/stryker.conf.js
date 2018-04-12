module.exports = function(config) {
  config.set({
    testRunner: "karma",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html", "baseline", "clear-text", "progress", "dashboard"],
    testFramework: "jasmine",
    coverageAnalysis: "perTest",
    karmaConfigFile: "karma.conf.js",
    mutate: ["js/**/*.js"]
  });
};
