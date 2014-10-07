/// <reference path="../../scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />



//describe('panZoomSpec', () => {
//    var scope,$controllerConstructor,directiveController,element,attr;

//    beforeEach(angular.mock.module("Application"));

//    beforeEach(inject(($controller: ng.IControllerService,
//        $rootScope: ng.IRootScopeService,
//        $q: ng.IQService,$compile:ng.ICompileService
//        )  => {
//        $controllerConstructor = $controller;
//        scope = $rootScope.$new();
//        element = '<svg pan-zoom width="700" height"700">';

//        element = $compile(element)(scope);
       
//       // directiveController = $controllerConstructor({ $scope: scope,$element:element,$attr:attr });
//      //  spyOn(svgPanZoom(element, {zoomEnabled:true}), 'svgPanZoom').and.callFake(function () { return "hello"; });
//        scope.$digest();

//    }));

  
//    it("should contain a svg tag", () => {
//        expect(element[0].attr('height')).toBe('700');
//        expect(element[0].attr('width')).toBe('700');        
//    });

   

//}) 


describe('panZoomSpec', () => {
    var scope, $controllerConstructor, directiveController, element, attr;

    beforeEach(angular.mock.module("Application"));

    beforeEach(inject(($controller: ng.IControllerService,
        $rootScope: ng.IRootScopeService,
        $q: ng.IQService, $compile: ng.ICompileService,$window :ng.IWindowService
         ) => {

        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        element = ' <svg height="700" width="700" pan-zoom  ">';
        //svgPanZoom.setCTM();

        element = $compile(element)(scope);
        scope.$digest();

    }));


    it("should contain svg height 700 and width 700", () => {
        expect(element.attr('height')).toBe('700');
        expect(element.attr('width')).toBe('700');
     
    })

    it("should define zoomIn and zoomOut", () => {

        expect(scope.zoomIn).toBeDefined();
       
        expect(scope.zoomOut).toBeDefined();

    }); 

    it("should not call zoomIn method if chkZoomEnabled = false ", () => {

        // var panZoom = svgPanZoom(element[0], { zoomEnabled: scope.chkZoomEnabled });
        // spyOn(scope, 'zoomIn').and.callFake(function () { return "hello"; });
        scope.chkZoomEnabled = false;
        //scope.zoomIn();
        expect(scope.zoomIn()).wasNotCalled();

    }); 

  


});