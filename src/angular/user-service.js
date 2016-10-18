import angular from 'angular';

angular
	.module('services.user', [])
	.factory('UserService', ($http) => {
		return {
			getUsers () {
				return $http.get('/api/users').then((response) => response.data);
			},
			getUser () {
				return $http.get('/api/users/me').then((response) => response.data);
			},
		};
	});
