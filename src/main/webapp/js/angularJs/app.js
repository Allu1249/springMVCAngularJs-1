angular.module('module1',['controllers','myDirectives','myFilters'])

angular.module('angularPersonForm',['myDirectives','myFilters'])
.controller("personFormController",function($scope,$http,spaceTypeFilter){
        $scope.master = {};
        $scope.addressList=[];
        $scope.spaceType=[];
        $scope.spaceTypeCode="Research";
        var address={addressLine1:"",addressLine2:"",city:"",state:"",pinCode:"",country:""};

         $http({method:'Get',url:'http://harshkhurana:8080/VUC/UnitGroupMaintenance.getListOfAllSpaceType.action'})
         .success(function(data){
            $scope.spaceType=data.allspaceTypes;
         })
         .error(function(data){
         });



        $scope.testValue= spaceTypeFilter.testValue;

        $scope.update = function(user) {
          $scope.master = angular.copy(user);
        };

        $scope.reset = function() {
          $scope.user = angular.copy($scope.master);
        };

        $scope.addAddress= function() {

                  $scope.addressList.push(angular.copy(address));
         };


        $scope.reset();
});