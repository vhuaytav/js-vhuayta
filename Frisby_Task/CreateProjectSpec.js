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
var projectID;

var newProject = {
		"Content": "0 - New project created from Frisby"
};	
frisby.create('Is authenticated, Todo.ly')
	.get('https://todo.ly/api/authentication/isauthenticated.json')
		.expectStatus(200)
		.afterJSON(function(data){
			expect(data).toBe(true);
		})
.toss();
frisby.create("Creating an empty project, Todo.ly")
	.post('https://todo.ly/api/projects.json', newProject)
		.expectStatus(200)
		.expectJSON(newProject)
		.afterJSON(function(data){
			expect(data.ItemsCount).toBe(0);
		})
.toss();

frisby.create("Update a project, Todo.ly")
	.get('https://todo.ly/api/projects.json')
		.inspectJSON()
		.expectStatus(200)
		.afterJSON(function(data){
			projectID = data[0].Id
			frisby.create('Add first Item')
				.post('https://todo.ly/api/items.json', {
					"Content": "New Item from frisby 1",
					"ProjectId": projectID
				})
				.expectStatus(200)
				.expectJSON({
					"Content": "New Item from frisby 1",
					"ProjectId": projectID
				})
			.toss();
			frisby.create('Add second Item')
				.post('https://todo.ly/api/items.json', {
					"Content": "New Item from frisby 2",
					"ProjectId": projectID
				})
				.expectStatus(200)
				.expectJSON({
					"Content": "New Item from frisby 2",
					"ProjectId": projectID
				})
			.toss();
			frisby.create('Items should have the same projectID')
				.get('https://todo.ly/api/projects/'+ projectID +'/items.json')
				.expectStatus(200)
				.expectJSON('*',{
					"ProjectId": projectID
				})
				.inspectJSON()
			.toss();
		})
.toss();
