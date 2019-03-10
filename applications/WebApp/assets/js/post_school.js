	function startDiscussion(cat_id){
		var html_id = "#cat_new_discussion_1"
		if($(html_id).css("display")=="block"){
			$(html_id).css("display", "none");
		}
		else{
			$(html_id).css("display","block");
		}
	}