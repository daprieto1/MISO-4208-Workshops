

exports.config = {
  framework: 'jasmine',
  suites: {
    one: 'e2e/app.e2e-spec.ts' // all tests in single file
  },
  suite: 'one', // default suite to run
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec',
    slow: 5000
  },
  capabilities: {
    browserName: 'firefox', // chrome
    shardTestFiles: true,
    maxInstances: 3
  }
}