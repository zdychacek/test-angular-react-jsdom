import angular from 'angular';

angular
	.module('directives.button', [])
	.directive('btn', () => {
		return {
			template: '<button ng-click="onClick()" class="btn" ng-transclude></button>',
			restrict: 'E',
			transclude: true,
			replace: true,
			scope: {
				onClick: '&',
			},
		};
	});
