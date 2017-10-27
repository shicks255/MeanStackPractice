angular.module('myApp', [
    'myApp.controllers',
    'myApp.services'
])
.config(function($sceDelegateProvider)
{
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://ws.audioscrobbler.com/**'
    ]);
});