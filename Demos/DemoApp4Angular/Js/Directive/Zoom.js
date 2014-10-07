angular.module("MyApp",['ngRoute']).directive('zoom', function () {
    return {
        
        controller: function ($scope, $element, $attrs, $rootScope) {
            var checkZoomEnabled=null;
                if ($attrs.zoomEnabled == "true") {

                    checkZoomEnabled = true;
                }
                else {

                    checkZoomEnabled = false;
                }
            
                var checkPanEnabled = null;
                if ($attrs.panEnabled == "true") {

                    checkPanEnabled = true;
                }
                else {

                    checkPanEnabled = false;
                }

            var zoomEnabled = checkZoomEnabled ;
            var panEnabled = checkPanEnabled;
            var zoomScaleSensitivity = $attrs.zoomScaleSensitivity || 0.075;
            var minZoom = $attrs.minZoom || 0;
            var maxZoom = $attrs.maxZoom || 10;

            var x = false;

            var panZoom=svgPanZoom($element[0], {
                zoomEnabled: zoomEnabled,
                panEnabled:panEnabled,
                minZoom:minZoom,
                maxZoom:maxZoom,
                zoomScaleSensitivity:zoomScaleSensitivity

            });

          


            var chkZoomEnabled = panZoom.isZoomEnabled(); // for checking Document Mode (i.e. if it is in EndlessMode chkZoomEnabled is true )
            if (chkZoomEnabled) {
                $scope.zoomIn = function () {
                    panZoom.zoomIn();
                }

                $scope.zoomOut = function () {
                    panZoom.zoomOut();
                }
            }

            
        }
       }
});

