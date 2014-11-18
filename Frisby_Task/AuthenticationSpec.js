var frisby = require('frisby');

frisby.create('Get token, Todo.ly')
	.get('https://todo.ly/api/authentication/token.json',{
		headers: {
			Authorization: 'Basic bWVsLmFuaWE4NjdAZ21haWwuY29tOmNvbnRyb2wqODg='
		},
		json: true
	})
		.expectStatus(200)
		.expectJSON({
			UserEmail: "mel.ania867@gmail.com"
		})
		.afterJSON(function(data){
			var newToken = data.TokenString
			frisby.create('Is authenticated, Todo.ly')
				.get('https://todo.ly/api/authentication/isauthenticated.json',{
					headers: {
						Token: newToken
					},
					json: true
				})
				.expectStatus(200)
				.afterJSON(function(data){
					expect(data).toBe(true);
				})
			.toss();

		})
		.inspectJSON()
.toss();