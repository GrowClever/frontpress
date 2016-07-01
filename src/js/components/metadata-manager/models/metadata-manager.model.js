(function(){
	
	"use strict";

	angular.module('frontpress.components.metadata-manager').factory('MetadataManagerModel', MetadataManagerModel);

	function MetadataManagerModel(){
		var model = {
			pageTitle: null,
			pageDescription: null,
			setPageTitle: setPageTitle,
			setPageDescription: setPageDescription,
			isIndex: true,
			isFollow: true,
			setIsIndex: setIsIndex,
			setIsFollow: setIsFollow,
			pageRobots: null,		
			init: init	
		};

		function setPageTitle(pageTitle){
			model.pageTitle = pageTitle;
		}

		function setPageDescription(pageDescription){
			model.pageDescription = pageDescription;
		}

		function setIsIndex(isIndex){
			model.isIndex = isIndex;
			_setPageRobots();
		}

		function setIsFollow(isFollow){
			model.isFollow = isFollow;
			_setPageRobots();
		}

		// TODO: descobrir melhor jeito de adicionar essa função em um value do angular
		if (!String.prototype.format) {
			String.prototype.format = function() {
				var args = arguments;
				return this.replace(/{(\d+)}/g, function(match, number) {
					return typeof args[number] != 'undefined' ? args[number] : match;
				});
			};
		}

		function _setPageRobots(){
        	var isIndexString = model.isIndex ? 'index' : 'noindex';
        	var isFollowString = model.isFollow ? 'follow' : 'nofollow';
        	model.pageRobots = '{0}, {1}'.format(isIndexString, isFollowString);					
		}

		function init(){
			_setPageRobots();
		}


		return model;
	}

})();