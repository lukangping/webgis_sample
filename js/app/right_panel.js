define([], function(){
	
	function renderGrid(gridFeature){
		
		$("#right .id").text(gridFeature.data.id);
		$("#right .desc").text(gridFeature.data.description);
	}
	
	return {
		renderGrid: renderGrid
	}
});