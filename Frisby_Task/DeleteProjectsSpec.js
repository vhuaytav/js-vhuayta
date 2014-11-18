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

frisby.create("Delete all projects created before, Todo.ly")
	.get('https://todo.ly/api/projects.json')
	.expectStatus(200)
	.afterJSON(function(data){
		var dataLength = data.length
		if (dataLength > 0){
			for (var i=0;i< dataLength;i++){
				var projectID = data[i].Id
				console.log(projectID)
				frisby.create('Delete Project')
					.delete('https://todo.ly/api/projects/'+ projectID +'.json', {})
					.expectStatus(200)
				.toss();
			}
		}else{
			console.log('There are no projects created')
		}	
	})
.toss();