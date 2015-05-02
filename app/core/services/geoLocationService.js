define([
        '../module',
        '../namespace'
    ],
    function (module, namespace) {
        'use strict';
        console.log(module);
        var name = namespace + ".geoLocationService";
        var dependencies = ['$q', '$window', '$rootScope'];
        var service = function ($q, $window, $rootScope) {

            return {

                getLocation: function () {
                    var deferred = $q.defer();
    
                    if (!$window.navigator) {
                        $rootScope.$apply(function() {
                            deferred.reject(new Error("Geolocation is not supported"));
                        });
                    } else {
                        $window.navigator.geolocation.getCurrentPosition(function (position) {
                            $rootScope.$apply(function() {
                                deferred.resolve(position);
                            });
                        }, function (error) {
                            $rootScope.$apply(function() {
                                deferred.reject(error);
                            });
                        });
                    }
    
                    return deferred.promise;
                }}
        };
        console.log(name);
        console.log(dependencies.concat(service));
        module.factory(name, dependencies.concat(service));
    });