/// <reference path="scripts/typings/angularjs/angular.d.ts" />
/// <reference path="scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="scripts/typings/angularjs/angular-route.d.ts" />

var PageUpDown = (function () {
    function PageUpDown($window) {
        this.$window = $window;
        this.restrict = "A";
        this.controller = function ($scope, $element, $attrs) {
            //the attributes that set the duration and offsetTop for scrollTo method
            var offsetTop = $attrs.offsetTop || 70;
            var duration = $attrs.duration || 'slow';

            $scope.count = 1; // this value has to fetched from the data base for now it is initialized with 1

            // this block of code is to check whether there is single page or more than one page
            // so that the PageUp & PageDown button is disbled if there is only one page or
            // if there is more than one page then PageDownButton is enabled
            $scope.$pages = $element.children("svg").length;
            if ($scope.$pages > 1) {
                $scope.pageDownBtnDisable = false;
            } else {
                $scope.pageDownBtnDisable = true;
                $scope.pageUpBtnDisable = true;
            }
            if ($scope.count == 1) {
                $scope.pageUpBtnDisable = true;
            }

            //this method cause the user to scroll to the previous page
            $scope.pageUp = function () {
                //this code block enable the PageDownButton  if there exist next page
                if ($scope.count <= $scope.$pages) {
                    $scope.pageDownBtnDisable = false;
                }

                if ($scope.count > 1) {
                    --$scope.count;
                    $element.scrollTo('#page' + ($scope.count), { duration: 'slow' });

                    // this code is used to disable the PageUpButton if there is no page above the
                    // current page.
                    if ($scope.count == 1) {
                        $scope.pageUpBtnDisable = true;
                    }
                }
            };

            //this method cause the user to scroll to the next page
            $scope.pageDown = function () {
                $scope.$pages = $element.children("svg").length;

                if ($scope.count < $scope.$pages) {
                    ++$scope.count;
                    $element.scrollTo('#page' + $scope.count, { duration: duration, offsetTop: offsetTop });

                    // this code is used to disable the PageDownButton if it has reached the last page
                    if ($scope.count == $scope.$pages) {
                        $scope.pageDownBtnDisable = true;
                    }
                }

                //this code block enable the PageUpButton  if there exist previous page
                if ($scope.count > 1) {
                    $scope.pageUpBtnDisable = false;
                }
            };
        };
    }
    PageUpDown.directiveId = "pageUpDown";
    return PageUpDown;
})();

angular.module('application', ['ngResource', 'ngRoute']).directive(PageUpDown.directiveId, [
    '$window', function ($window) {
        return new PageUpDown($window);
    }
]);
//# sourceMappingURL=PageUpDown.js.map
