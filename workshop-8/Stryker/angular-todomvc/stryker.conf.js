module.exports = function(config) {
  config.set({
    iles: [],
    testRunner: "karma",
    mutator: "javascript`",
    transpilers: [],
    reporter: ["html", "clear-text", "progress"],
    testFramework: "jasmine",
    coverageAnalysis: "perTest",
    karmaConfigFile: "test/config/karma.conf.js",
    mutate: ["js/**/*.js"]
  });
};

exports = function(config){
  config.set({
      // ...
      testRunner: 'karma',
      testFramework: 'jasmine',
      karmaConfig: { // these are the defaults
          browsers: ['PhantomJS'],
          frameworks: ['jasmine'],
          autoWatch: false,
          singleRun: false          
      },
      coverageAnalysis: 'perTest',
      plugins: ['stryker-karma-runner'] // Or leave out the plugin list entirely to load all stryker-* plugins directly
      // ...
  });
}
