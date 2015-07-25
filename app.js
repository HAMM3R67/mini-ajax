$('#getUSerrs').on('click', function(){
	return $.ajax({
		method: 'GET',
		url: 'http://reqr.es/api/users?page=1',
		success: console.log("Yeah Baby!")
	})
})