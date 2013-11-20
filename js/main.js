require.config({
    baseUrl: 'js',
	paths: {
		map: "app/map",
		options: "app/options",
		rightPanel: 'app/right_panel',
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

require(['map', 'options'], function(Map, Options){
	Map.init();
});
