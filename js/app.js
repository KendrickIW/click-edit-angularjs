(function() {
  var app = angular.module('clickEditApp', []);

  app.directive('clickEdit', function() {

    function link(scope, element, attrs) {
      scope.value = "Starting value";
      scope.active = false;

      var input = element.find('input');
      var output = element.find('h2');

      input.on('keypress', function(event) {
        if(event.which === 13) {
          this.blur();
        }
      });

      output.on('click', function() {
        input[0].focus();
      });

    }
    return {
      template: "<h2 id='output' ng-bind='value' ng-hide='active' ng-click='active = true'></h2><input type='text' ng-blur='active = false' ng-model='value' ng-show='active'/>",
      link: link
    };
  });
})();
