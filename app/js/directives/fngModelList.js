'use strict';

var fng = angular.module('formsAngular');

fng.directive( 'fngModelList',
[
    'ModelsService', 'urlService'
,
function (ModelsService, urlService) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'partials/model-list.html',
        scope: {},
        link: {
            pre: function preLink(scope, iElement, iAttrs) {
                scope.models = [];

                ModelsService.getAll()
                    .success(function (data) {
                        scope.models = data;
                    }).error(function () {
                        location.path("/404");
                    });

                scope.newUrl = function(model) {
                    return urlService.buildUrl(model + '/new');
                };

                scope.listUrl = function(model) {
                    return urlService.buildUrl(model);
                };
            },
            post: function postLink(scope, iElement, iAttrs) {
            }
        }
    };
}]);