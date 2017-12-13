const binID = "11tx57";

function getRatings(){
	let ratings;
	$.ajax({
		url: "https://api.myjson.com/bins/"+binID,
		async: false,
		success: function(data){
			ratings = data;
		}
	});
	return ratings;
}

function addRatings(rating){
	const newRatings = this.getRatings();
	newRatings.ratings.push(rating);
	$.ajax({
    	url:"https://api.myjson.com/bins/"+binID,
   		type:"PUT",
    	data:JSON.stringify(newRatings),
    	contentType:"application/json; charset=utf-8",
    	dataType:"json",
    	async: false,
   		success: function(data, textStatus, jqXHR){

    	}
	});    
}