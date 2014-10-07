
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-route.d.ts" />

// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file


declare function svgPanZoom(element: any, property: any): any;
interface IPanZoom extends ng.IDirective {

}

interface IPanZoomScope extends ng.IScope {

}

class PanZoom implements IPanZoom {
    static directiveId: string = "panZoom";
    restrict: string = "A";

    constructor(private $window: ng.IWindowService) {
    }

    controller = ($scope, $element, $attrs) => {

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
            $scope.zoomIn = () => {
                panZoom.zoomIn();
                $scope.panBtnVisible =true;
            }
            //this function will invoke the zoomOut method of svg-pan-zoom library
                $scope.zoomOut = () => {
                    panZoom.zoomOut();
                    $scope.panBtnVisible = true;
            }
        }
        //this function will invoke the enablePan method of svg-pan-zoom library
        $scope.panEnable = () => {
            panZoom.enablePan();
        }

    }
}


angular.module('Application', ['ngResource', 'ngRoute']).directive(PanZoom.directiveId, ['$window', $window =>
    new PanZoom($window)
])


