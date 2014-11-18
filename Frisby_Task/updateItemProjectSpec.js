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

frisby.create('create new project')
	.post('https://todo.ly/api/projects.json', newProject)
		.expectJSON(newProject)
		.expectStatus(200)
		.afterJSON(function(data){
			var projectID = data.Id
			
			frisby.create('add new item')
			.post('https://todo.ly/api/items.json', 
				{
					"Content": "New Item from frisby",
					"ProjectId": projectID
				}
				, request)
				.inspectJSON()
				.expectStatus(200)
				.afterJSON(function(data){
					var itemID= data.Id
					frisby.create('Update item')
						.put('https://todo.ly/api/items/'+ itemID +'.json',
						{
						"Content": "Item updated from frisby"
						})
						.inspectJSON()
						.expectStatus(200)
					.toss();
					frisby.create('Update item')
						.delete('https://todo.ly/api/items/'+ itemID +'.json', {})
						.inspectJSON()
						.expectStatus(200)
					.toss();
				})
			.toss();
			
		})
.toss();