define(['jquery', 'openlayers'], function($, OpenLayers){
	
  	var map = new OpenLayers.Map("map", {
  		projection: new OpenLayers.Projection('EPSG:900913')
  	});
	
  	var gmap_layer = new OpenLayers.Layer.Google("Google Streets");
	var vector_layer = new OpenLayers.Layer.Vector("vector layer");
  	map.addLayers([gmap_layer, vector_layer]);
	
	var mposition_control = new OpenLayers.Control.MousePosition({
    	suffix: '<div style="width:400px"></div>'
    });
	
	map.addControls([mposition_control]);
	
	var linearring_geometry = new OpenLayers.Geometry.LinearRing([
		new OpenLayers.Geometry.Point(12120060, 4059258),
		new OpenLayers.Geometry.Point(12120110, 4059258),
		new OpenLayers.Geometry.Point(12120110, 4059308),
		new OpenLayers.Geometry.Point(12120060, 4059308)
	]);
	
	var polygon_feature = new OpenLayers.Feature.Vector(
		new OpenLayers.Geometry.Polygon([linearring_geometry]), 
		{'description': 'example polygon feature'}
	);
	
	vector_layer.addFeatures([polygon_feature]);

	map.setCenter(new OpenLayers.LonLat(12120060, 4059258));
	map.zoomTo(15);
	
	return {
		olmap: map
	}
	
});