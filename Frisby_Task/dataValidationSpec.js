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
		"Content": "JS - New project 3"
};	

frisby.create("I have a project created in my account")
	.post('https://todo.ly/api/projects.json', newProject)
		.expectStatus(200)
		.expectJSON(newProject)
		.afterJSON(function(data){
			var projectID = data.Id
			frisby.create('Add Item')
				.post('https://todo.ly/api/items.json', {
					"Content": "New Item from frisby",
					"ProjectId": projectID
				})
				.expectStatus(200)
				.expectJSON({
					"Content": "New Item from frisby",
				})
				.afterJSON(function(data){
					var create = data.CreatedDate
					var lastUpdate = data.LastUpdatedDate
					console.log(create)
					console.log(lastUpdate)
					expect(create).toBe(lastUpdate);
				})
			.toss();
		})	
.toss();