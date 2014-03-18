angular.module('controllers',[])
.controller('controller1', function($scope){
    $scope.person={name:'NameOne',
                   address:'Address One'
                   };
})
.controller('controller2', function($scope){
    $scope.person={name:'NameTwo',
                   address:'Address Two'
                   };
});