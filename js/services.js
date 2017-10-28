angular.module('myApp.services', [])
.factory('lastFmAPIservice', function($http)
{
    var lastFM_API = {};

    lastFM_API.getTracks = function()
    {
        return $http({
            method: 'JSONP',
            url: 'https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=shicks255&api_key=c349ab1fcb6b132ffb8d842e982458db&limit=500&format=json'
        });
    }

    lastFM_API.getArtists = function()
    {
        return $http({
            method: 'JSONP',
            url: 'https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=shicks255&api_key=c349ab1fcb6b132ffb8d842e982458db&limit=500&format=json'
        });
    }

    lastFM_API.getAlbums = function()
    {
        return $http({
            method: 'JSONP',
            url: 'https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=shicks255&api_key=c349ab1fcb6b132ffb8d842e982458db&limit=500&format=json'
        });
    }

    return lastFM_API;
});