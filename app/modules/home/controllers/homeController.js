define([
        '../module',
        '../namespace',
        // '../../../core/namespace',

        // '../../../core/module.require',
        // '../../root/services/angular-leaflet-directive',
        // 'async!//maps.google.com/maps/api/js?sensor=false&libraries=places',
    ],
    function(module, namespace) {
        'use strict';
        // console.log(namespaceCore)
        // console.log(namespaceCore + '.geoLocationService')

        var name = namespace + ".homeController";
        var dependencies = ['$scope', '$http', '$ionicLoading', 'glue.core.geoLocationService'];
        var controller = function($scope, $http, $ionicLoading, core) {
            
            // console.log(geoLocationService)
            // $ionicLoading.show({
            //         content: 'Loading',
            //         animation: 'fade-in',
            //         showBackdrop: true,
            //         maxWidth: 200,
            //         showDelay: 0
            // });
            // 
            
                
            // console.log(namespace + ' Controller Initialised')
            // 
        }

        module.controller(name, dependencies.concat(controller));

    });
