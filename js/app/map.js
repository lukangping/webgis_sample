define(['jquery', 'openlayers', 'rightPanel'], function($, OpenLayers, RightPanel){
	
	var map;
	
	function initialize(){
		map = new OpenLayers.Map("map", {
	  		projection: new OpenLayers.Projection('EPSG:900913'),
			center: new OpenLayers.LonLat(12120060, 4059258),
			zoom: 15
	  	});
		
		var gmap_layer = new OpenLayers.Layer.Google("Google Streets");
		map.addLayers([gmap_layer]);
		
		var mposition_control = new OpenLayers.Control.MousePosition({
	    	suffix: '<div style="width:400px"></div>'
	    });
	
		map.addControls([mposition_control]);
	}
	
	function addGrid(){
		var vector_layer = new OpenLayers.Layer.Vector("vector layer");
  		map.addLayers([vector_layer]);
		
		var linearring_geometry = new OpenLayers.Geometry.LinearRing([
			new OpenLayers.Geometry.Point(12120060, 4059258),
			new OpenLayers.Geometry.Point(12120110, 4059258),
			new OpenLayers.Geometry.Point(12120110, 4059308),
			new OpenLayers.Geometry.Point(12120060, 4059308)
		]);
	
		var polygon_feature = new OpenLayers.Feature.Vector(
			new OpenLayers.Geometry.Polygon([linearring_geometry]), 
			{'id': '001', 'description': 'this is one grid.'}
		);
	
		vector_layer.addFeatures([polygon_feature]);
		
		//selectFeature control
	    var selectFeature_control =	new OpenLayers.Control.SelectFeature(vector_layer);
		map.addControl(selectFeature_control);
		selectFeature_control.activate();
		
		function handleFeatureSelected(event){
			RightPanel.renderGrid(event.feature);
		};
	
		vector_layer.events.register('featureselected',this,handleFeatureSelected);
	}

	return {
		map: map,
		init: initialize,
		addGrid: addGrid
	}
	
});