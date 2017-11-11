var casper = require('casper').create();

casper.start('http://casperjs.org/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run();



// casper.test.begin('Hello, Test!', 1, function(test) {
//     test.assert(true);
//     test.done();
// });