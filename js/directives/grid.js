define(['app/geo_app'], function(geoApp){
	
	geoApp.directive('grid', function(){
		
		function link($scope) {
			$scope.templateName="grid";
		};
		
		return {
            link: link,
            restrict: 'E',
            transclude: true,
            scope: false,
            templateUrl: 'grid.html',
            replace: true
        }
		
	});
	
});