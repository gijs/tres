(function() {

  window.JST = {};

  JST['home'] = _.template($('#home-template').html());

  JST['search'] = _.template($('#search-template').html());

  JST['article'] = _.template($('#article-template').html());

}).call(this);
