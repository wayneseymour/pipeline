angular.module('rxPipelineApp')
    .controller('PipelineShowCtrl', function ($scope, $routeParams, $location, Pipeline, Build) {
        Pipeline.get({id: $routeParams.id}, function (data) {
            $scope.pipeline = data;
        }, function (error) {
            console.info(error);
            alert('Error fetching Pipeline');
            $location.path('/home');
        });

        $scope.builds = Build.list();
    });