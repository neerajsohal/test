define([
        '../module',
        '../namespace'
    ],
    function (module, namespace) {
        'use strict';


        var name = namespace + ".geoLocationService";
        console.log("name = " + name);
        var dependencies = ['$q', '$window', '$rootScope'];
        var service = function ($q, $window, $rootScope) {
            console.log(name + ' started');
            return function () {
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
            }
        };

        return module.factory(name, dependencies.concat(service));
    });

console.log('geoLocationService included')