var app = angular.module("musicLib", ['ngRoute', 'route-segment', 'view-segment']);

app.config(function ($routeSegmentProvider, $routeProvider, $locationProvider, $provide) {
    $locationProvider.hashPrefix("");
    // $provide.decorator("$sniffer", function($delegate) {
    //     $delegate.history = false;
    //     return $delegate;
    // });

    $routeSegmentProvider
        .when("/login", "login")
        .when("/", "music")
        .when("/dashboard", "music.dashboard")
        .when("/titles", "music.titles")

        .segment("login", {
            templateUrl: "login.htm",
            controller: "login"
        })

        .segment("music", {
            templateUrl: "musiclib.htm"
        })

        .within()

        .segment("dashboard", {
            templateUrl: "dashboard.htm",
            default: true
        })

        .segment("titles", {
            templateUrl: "titles.htm",
            controller: "musicTitles"
        })

        .up();

    // .segment("dashboard", {
    //     templateUrl: "musiclib.htm",
    //     default: true
    // })
    // .segment("titles", )

    $routeProvider.otherwise({redirectTo: "/dashboard"})
});

app.controller("musicTitles", function ($scope) {
    $scope.songs = [
        {
            "name": "Test Song",
            "artist": "Yamakaja",
            "duration": 120
        },
        {
            "name": "Second Test Song",
            "artist": "Yamakaja",
            "duration": 180
        }
    ]
});

app.controller("login", function($scope) {

    $scope.email = "hi";

    $scope.login = function() {
        console.log($scope)
    }

});
