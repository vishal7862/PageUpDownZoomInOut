
/// <reference path="scripts/typings/angularjs/angular.d.ts" />
/// <reference path="scripts/typings/angularjs/angular-resource.d.ts" />

/// <reference path="scripts/typings/angularjs/angular-route.d.ts" />

// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file


declare function svgPanZoom(element: any, property: any): any;
interface IPageUpDown extends ng.IDirective {

}

interface IPageUpDownScope extends ng.IScope {

}

class PageUpDown implements IPageUpDown{
    static directiveId: string = "pageUpDown";
    restrict: string = "A";

    constructor(private $window: ng.IWindowService) {
    }

    controller = ($scope, $element, $attrs) => {

        //the attributes that set the duration and offsetTop for scrollTo method
        var offsetTop = $attrs.offsetTop || 70;
        var duration = $attrs.duration || 'slow';
            

        $scope.count=1; // this value has to fetched from the data base for now it is initialized with 1


        // this block of code is to check whether there is single page or more than one page
        // so that the PageUp & PageDown button is disbled if there is only one page or
        // if there is more than one page then PageDownButton is enabled
        $scope.$pages = $element.children("svg").length;
        if ($scope.$pages > 1 ) {
            $scope.pageDownBtnDisable = false;
        }
        else {
            $scope.pageDownBtnDisable = true;
            $scope.pageUpBtnDisable = true;
        }
        if ($scope.count == 1) {
            $scope.pageUpBtnDisable = true;
        }
       
        
        //this method cause the user to scroll to the previous page
        $scope.pageUp = () => {
            
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
        }

        //this method cause the user to scroll to the next page 
        $scope.pageDown = () => {
            $scope.$pages = $element.children("svg").length;
            
            if ($scope.count < $scope.$pages) {
                ++$scope.count;
                $element.scrollTo('#page' + $scope.count, { duration: duration, offsetTop: offsetTop});

                // this code is used to disable the PageDownButton if it has reached the last page
                if ($scope.count == $scope.$pages) {
                    $scope.pageDownBtnDisable = true;
                }
            }
            

            //this code block enable the PageUpButton  if there exist previous page
            if ($scope.count > 1) {

                $scope.pageUpBtnDisable = false;
            }

        }
    
    }
}


angular.module('application', ['ngResource', 'ngRoute']).directive(PageUpDown.directiveId, ['$window', $window =>
    new PageUpDown($window)
])


