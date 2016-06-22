(function(){

	"use strict";

	angular.module('ngpress.views.post').directive('postView', PostViewDirective);

	function PostViewDirective(){
		var directive = {
			scope: {},
			templateUrl: '/js/views/post/templates/post.template.html',
			restrict: 'E',
			controllerAs: 'vc',
			bindToController: true,
			controller: 'PostController'
		};
		return directive;
	}
	
})();
