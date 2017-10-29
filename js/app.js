angular.module('myApp', [
    'myApp.controllers',
    'myApp.services',
    'ngRoute'
])
.config(function($routeProvider, $sceDelegateProvider)
    {
        $routeProvider
            .when()
            .when()
            .otherwise();

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://ws.audioscrobbler.com/**'
        ]);
    }
);

// angular.module('myApp', [
//     'myApp.controllers',
//     'myApp.services',
//     'ngRoute'
// ])
// .config(function($sceDelegateProvider)
// {
//     $sceDelegateProvider.resourceUrlWhitelist([
//         'self',
//         'https://ws.audioscrobbler.com/**'
//     ]);
// });