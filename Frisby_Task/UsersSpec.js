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

var editUser = {
		FullName: "Vania Test"

};

frisby.create('Is authenticated, Todo.ly')
	.get('https://todo.ly/api/authentication/isauthenticated.json')
		.expectStatus(200)
		.afterJSON(function(data){
			expect(data).toBe(true);
		})
.toss();
frisby.create('Update user created, Todo.ly')
	.post('https://todo.ly/api/user/0.json', editUser)
		.expectStatus(200)
		.expectJSON({
			Email:"mel.ania867@gmail.com",
			FullName: "Vania Test"
		})
		.afterJSON(function(data){
			expect(data.IsProUser).toBe(false);
		})
		.inspectJSON()

.toss();