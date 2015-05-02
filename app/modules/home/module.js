define([
        'angular',
        './namespace',
        '../../core/namespace',
        'ng-cordova',        
    ],
    function(angular, namespace, namespaceCore) {
        'use strict';
        return angular.module(namespace, ['ngCordova', namespaceCore]);

    });
