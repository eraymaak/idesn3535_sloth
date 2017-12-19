// const binID = "11tx57";
const binID = "a282bf00-e0d6-11e7-8b56-59b3a0764930";

function getRatings(){
	let ratings;
	$.ajax({
		url: "https://jsonblob.com/api/jsonBlob/"+binID,
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
    	url:"https://jsonblob.com/api/jsonBlob/"+binID,
   		type:"PUT",
    	data:JSON.stringify(newRatings),
    	contentType:"application/json; charset=utf-8",
    	dataType:"json",
    	async: false,
   		success: function(data, textStatus, jqXHR){

    	}
	});    
}