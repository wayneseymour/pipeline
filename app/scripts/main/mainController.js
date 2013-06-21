'use strict';

angular.module( 'rxPipelineApp' )
    .controller( 'MainCtrl', [ '$scope', 'socket', '$location', '$window', 'Pipelines', function( $scope, socket, $location, $window, Pipelines ) {
        $scope.pipelines = Pipelines.pipelineData;
        
        $scope.awesomeClientThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'jQuery',
            'UI-Bootstrap',
            'Font-Awesome',
            'Modernizr',
            'lodash',
        ];

        $scope.awesomeServerThings = [
            'Express',
            'Hogan',
            'Socket.io',
            'MongoDB'
        ];

        $scope.isCollapsed = true;

        $scope.collapseText = 'Open';

        $scope.collapseIcon = 'icon-chevron-down';

        $scope.collapse = function() {
            $scope.isCollapsed = !$scope.isCollapsed;

            if ($scope.isCollapsed) {
                $scope.collapseText = 'Open';
                $scope.collapseIcon = 'icon-chevron-down';
            } else {
                $scope.collapseText = 'Close';
                $scope.collapseIcon = 'icon-chevron-up';
            }
        };

        $scope.connectedClass = 'icon-remove';
        $scope.connected = 'Not Connected to Server';

        socket.on( 'send:onConnect', function( data ) {
            $scope.connected = data.data;
            $scope.connectedClass = 'icon-link';
        } );

        $scope.socketExample = function() {
            console.log('sending event to socket');
            socket.emit( 'send:example', {
                data: 'example'
            } );
        };

        socket.on( 'send:example', function( data ) {
            console.log('client socket on');
            console.log("> " + data);
        });

        $scope.redirect = function( path ) {
            console.log('attempting to redirect to ' + path );
//            $location.path( path );
            $window.location.href = path;
        };

    }]);
