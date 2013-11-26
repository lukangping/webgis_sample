define(['app/geo_app'], function(geoApp){
	
	geoApp.controller('HeaderController', function HeaderController($scope){
		$scope.categories=[
			{'value': 'category1'},
			{'value': 'category2'}
		];
		$scope.category=$scope.categories[0];
		
		$scope.topics=[
			{'value': 'topic1'},
			{'value': 'topic2'}
		]
		$scope.topic=$scope.topics[0];
		
		$scope.$watch("category", function(){
			if($scope.category==$scope.categories[1]){
				$scope.topics=[
					{'value': 'topic3'},
					{'value': 'topic4'}
				]
				$scope.topic=$scope.topics[0];
			}
		});
		
		$scope.query=function(){
			//调用service查询栅格，并通知上层处理器进行地图更新
			$scope.$emit("NEW_QUERY",{});
		}
	});
	
});