require.config({
    baseUrl: 'js',
	paths: {
		map: "app/map",
		options: "app/options",
		async: "lib/async",
		openlayers: "http://openlayers.org/api/OpenLayers",
		gmap: "lib/google_map",
		jquery: "lib/jquery"
	},
	shim: {
		openlayers: {
			deps: ['gmap'],
			exports: 'OpenLayers'
		}
	}
});

var map;
require(['map', 'options'], function(Map, Options){
	map=Map.olmap;
	
});
