const testString = "<div>I own a {{animal}}.</div>";
const testContext = {animal: "dog", age: 7};

function replaceString(string, key, value){
	const searchTerm = "{{"+key+"}}";
	return string.replace(searchTerm, value);
}

function processTemplate(template, context){
	Object.keys(context).forEach(function(key){
		template = replaceString(template, key, context[key]);
	});
	return template;
}

function getTemplate(template, context){
	return $(processTemplate(template, context));
	// return $("I own a dog");
}