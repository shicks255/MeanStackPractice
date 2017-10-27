angular.module('myApp.controllers', [])
.controller('controller', function($scope, lastFmAPIservice)
{
    $scope.balls = 'balls';
    $scope.artists = ["billy"];

    lastFmAPIservice.getArtists().then(function(response)
    {
        console.log(response.data.toptracks.track);
        $scope.artists = response.data.toptracks.track;
    });
});