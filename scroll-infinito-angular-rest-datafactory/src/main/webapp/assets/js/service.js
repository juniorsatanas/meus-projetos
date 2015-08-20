AppPeople.factory("$people", function($resource) {
	return $resource("services/people/:ini/:end", {}, {
		query : {
			method : "GET",
			params : {
				ini : "@ini",
				end : "@end"
			},
			isArray : true
		}
	});
});