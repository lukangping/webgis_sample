require.config({
    baseUrl: 'js',
	paths: {
		async: "lib/async",
		openlayers: "http://openlayers.org/api/OpenLayers",
		gmap: "lib/google_map",
		jquery: "lib/jquery",
		'angular': "lib/angular.min"
	},
	shim: {
		'openlayers': {
			deps: ['gmap'],
			exports: 'OpenLayers'
		},
		'angular': {
			exports: 'angular'
		}
	}
});

require(['jquery', 'app/map', 'controllers/header_controller'], function($, Map){

	$(function(){
		Map.init();
	});
	
});
