define([
        '../module',
        '../namespace'
    ],
    function (module, namespace) {
        'use strict';

        module.factory('foteAPIservice', function($http) {

            var foteAPI = {};

            foteAPI.getDatasets = function() {
              return $http({
                method: 'JSONP',
                url: 'http://localhost:8080/datasets?callback=JSON_CALLBACK'
              });
            }

            return foteAPI;
          });
        
    });