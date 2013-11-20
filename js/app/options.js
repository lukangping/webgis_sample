define(['jquery', 'map'], function($, Map){
	
	function addGrid(){
		Map.addGrid();
	}
	
	$(function(){
		$( ".options" ).change(function() {
			switch($(this).val()){
				case "oneGrid": addGrid();
			}
		});
	})
})