require('okta/underscore');
require('okta/handlebars');
require('./vendor/jasmine-jquery');
var $ = require('okta/jquery');

// Create a hidden sandbox
$('<div>').attr('id', 'sandbox').css({height: 1, overflow: 'hidden'}).appendTo('body');

function requireAll(requireContext) {
  requireContext.keys().map(requireContext);
}

// Load all the specs
requireAll(require.context('./spec', true, /.*/));
