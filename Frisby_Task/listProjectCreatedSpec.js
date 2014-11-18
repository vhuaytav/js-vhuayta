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
		"Content": "1 - New project created"
};

frisby.create("When I create a project")
	.post('https://todo.ly/api/projects.json', newProject)
		.expectStatus(200)
		.expectJSON(newProject)
		.afterJSON(function(data){
			var projectID= data.Id
			frisby.create('List all projects for my account')
				.get('https://todo.ly/api/projects.json')
				.expectStatus(200)
				.expectJSON('?',{
					"Id": projectID
				})
				.inspectJSON()
			.toss();
		})
.toss();