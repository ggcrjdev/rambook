requirejs.config({
  basePath: './',
  paths: {
    'socketio': '/socket.io/socket.io',
    'jquery': '../bower_components/jquery/dist/jquery.min', 
    'mustache': '../bower_components/mustache.js/mustache.min'
  },
  shim: {
    mustache: {
      exports: 'Mustache'
    }
  }
});

require(['view'], function(view) {
});
