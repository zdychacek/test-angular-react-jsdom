import angular from 'angular';

angular
	.module('directives.sidebar', [])
	.directive('sidebar', () => {
		return {
			restrict: 'A',
			link (scope, $el) {
				$el.addClass('sidebar');
			},
		};
	});
