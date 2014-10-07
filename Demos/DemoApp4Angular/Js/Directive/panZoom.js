/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

var PanZoom = (function () {
    function PanZoom($window) {
        this.$window = $window;
        this.restrict = "A";
        this.controller = function ($scope, $element, $attrs) {
            //Here the value of attribute comes in string so we have to convert it into boolean and pass it.
            //if the attibute is not passed then it will take default value.
            var Panning = ($attrs.panEnabled == "true" ? true : false);
            var Zooming = ($attrs.zoomEnabled == "false" ? false : true);

            $scope.panBtnVisible = Panning;

            //We can set property to the svgPanZoom
            var panZoom = svgPanZoom($element[0], {
                zoomEnabled: Zooming,
                panEnabled: false,
                minZoom: 0,
                maxZoom: 10,
                zoomScaleSensitivity: 0.075
            });

            $scope.chkZoomEnabled = panZoom.isZoomEnabled(); //tentative will change as per document mode,just checking condition here for future use
            if ($scope.chkZoomEnabled) {
                //this function will invoke the zoomIn method of svg-pan-zoom library
                $scope.zoomIn = function () {
                    panZoom.zoomIn();
                    $scope.panBtnVisible = true;
                };

                //this function will invoke the zoomOut method of svg-pan-zoom library
                $scope.zoomOut = function () {
                    panZoom.zoomOut();
                    $scope.panBtnVisible = true;
                };
            }

            //this function will invoke the enablePan method of svg-pan-zoom library
            $scope.panEnable = function () {
                panZoom.enablePan();
            };
        };
    }
    PanZoom.directiveId = "panZoom";
    return PanZoom;
})();

angular.module('Application', ['ngResource', 'ngRoute']).directive(PanZoom.directiveId, [
    '$window', function ($window) {
        return new PanZoom($window);
    }
]);
//# sourceMappingURL=panZoom.js.map
