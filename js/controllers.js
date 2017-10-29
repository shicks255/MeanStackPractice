angular.module('myApp.controllers', [])
.controller('controller', function($scope, lastFmAPIservice)
{
    $scope.artists = [];
    $scope.searchFilter = function(song)
    {
        var keyword = new RegExp($scope.textFilter, 'i');
        console.log(song);
        return !$scope.textFilter || keyword.test(song.name) || keyword.test(song.artist.name) || keyword.test(song.playcount);
    }

    lastFmAPIservice.getTracks().then(function(response)
    {
        // console.log(response.data.toptracks.track);
        $scope.topTracks = response.data.toptracks.track;
    });

    lastFmAPIservice.getArtists().then(function(response)
    {
        // console.log(response.data);
        $scope.topArtists = response.data;
    });

    lastFmAPIservice.getAlbums().then(function(response)
    {
        // console.log(response.data);
        $scope.topAlbums = response.data;
    });


});