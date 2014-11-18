var frisby = require('frisby');

frisby.globalSetup({
	request: {
		proxy: '',
		headers: {
			Token: 'fee9787b3fb24573be80bbd505f9557b'
		},
		json: true,
		inspectOnFailure: true
	}
	
});

var newProject = {
		"Content": "JS - New project with Done and not-Done items"
};	

frisby.create("I have a project with done and not-done items")
	.post('https://todo.ly/api/projects.json', newProject)
		.expectStatus(200)
		.expectJSON(newProject)
		.afterJSON(function(data){
			var projectID = data.Id
			frisby.create('Add Done Item')
				.post('https://todo.ly/api/items.json', {
					"Content": "New Item from frisby",
					"ProjectId": projectID
				})
				.expectStatus(200)
				.expectJSON({
					"Content": "New Item from frisby"
				})
				.afterJSON(function(data){
					var itemID = data.Id
					frisby.create('Update Item to Done')
						.put('https://todo.ly/api/items/'+ itemID +'.json',
						{
						"Content": "Done Item from frisby",
						"Checked": true
						}
						)
						.expectStatus(200)
						.expectJSON({
							"Content": "Done Item from frisby",
							"Checked": true
						})
					.toss();	
				})
			.toss();
			
			frisby.create('Add not-done Item')
				.post('https://todo.ly/api/items.json', {
					"Content": "New Item from frisby",
					"ProjectId": projectID
				})
				.expectStatus(200)
				.expectJSON({
					"Content": "New Item from frisby",
				})
			.toss();
		})
		.afterJSON(function(data){
			var projectID = data.Id
			frisby.create('List all items for the project created')
				.get('https://todo.ly/api/projects/'+ projectID +'/items.json')
				.expectStatus(200)
				.inspectJSON()
			.toss();
		})
		.afterJSON(function(data){
			var projectID = data.Id
			frisby.create('List done items for the project created')
				.get('https://todo.ly/api/projects/'+ projectID +'/doneitems.json')
				.expectStatus(200)
				.inspectJSON()
			.toss();
		})
.toss();



