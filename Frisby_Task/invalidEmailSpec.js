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

var newUser = {
		"Email": "wrong mail",
		"FullName": "Wrong Mail"
};

frisby.create("When I attempt to create a user with invalid email address")
	.post('https://todo.ly/api/user.json', newUser)
	.expectStatus(200)
	.inspectJSON()
	.expectJSON({
		"ErrorMessage": "Invalid Email Address",
		"ErrorCode": 307
	})
.toss();



