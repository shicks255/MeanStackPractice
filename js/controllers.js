angular.module('myApp.controllers', [])
.controller('controller', function($scope, lastFmAPIservice)
{
    $scope.balls = 'balls';
    $scope.artists = ["billy"];

    lastFmAPIservice.getTracks().then(function(response)
    {
        console.log(response.data.toptracks.track);
        $scope.topTracks = response.data.toptracks.track;
    });

    lastFmAPIservice.getArtists().then(function(response)
    {
        console.log(response.data);
        $scope.topArtists = response.data;
    });

    lastFmAPIservice.getAlbums().then(function(response)
    {
        console.log(response.data);
        $scope.topAlbums = response.data;
    });


});