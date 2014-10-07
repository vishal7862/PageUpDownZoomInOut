/// <reference path="scripts/typings/angularjs/angular.d.ts" />
/// <reference path="scripts/typings/angularjs/angular-route.d.ts" />

var PageUpDown = (function () {
    function PageUpDown($window) {
        this.$window = $window;
        this.restrict = "A";
        this.controller = function ($scope, $element, $attrs) {
            var Zooming = ($attrs.zoomEnabled == "false" ? false : true);

            $scope.pageUp = function () {
                $('body').scrollTo('#page3', { duration: 'slow', offsetTop: '50' });
            };
        };
    }
    PageUpDown.directiveId = "pageUpDown";
    return PageUpDown;
})();

angular.module('Application', ['ngResource', 'ngRoute']).directive(PageUpDown.directiveId, [
    '$window', function ($window) {
        return new PageUpDown($window);
    }
]);
//# sourceMappingURL=test.js.map
