
(function(window) {
  var _ = require("../component-underscore");
  var Backbone = require("../solutionio-backbone");

  var Achievements = function(maxTime) {
    _.extend(this, Backbone.Events);
  };

	module.exports = Achievements;
})(window);
