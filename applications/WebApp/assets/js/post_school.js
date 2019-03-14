function write_post(){

	var new_post_table = document.getElementById('postTable');
	var row = new_post_table.insertRow(-1);
	var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	var cell3 = row.insertCell(2);
	var title = document.getElementById('newDiscussionTitle');
	var content = document.getElementById('newDiscussionText');
	
	cell1.innerHTML = title.value ;
  	cell2.innerHTML = "User";
  	cell3.innerHTML = "0";

 	var para = document.createElement("p");
	var node = document.createTextNode("Title: "+ title.value);
	para.appendChild(node);
	var element = document.getElementById("posts");
	element.appendChild(para);

	var para_2 = document.createElement("p");
	var node_2= document.createTextNode("Post: "+content.value);
	para_2.appendChild(node_2);
	var element_2 = document.getElementById("posts");
	element_2.appendChild(para_2);

}




function view_post(postTitle, postContent){
	console.log("check");
	var opened = window.open("");
	opened.document.write("<html><head><title>MyTitle</title></head><body><h1>"+postTitle+"</h1><p>"+postContent+"</p></body></html>");

}


function startDiscussion(cat_id){
	var html_id = "#cat_new_discussion_1"
	if($(html_id).css("display")=="block"){
		$(html_id).css("display", "none");
	}
	else{
		$(html_id).css("display","block");
	}
}