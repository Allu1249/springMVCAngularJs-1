angular.module('myFilters',[])
.factory('spaceTypeFilter',function($http){
    var getSpaceTypeList={};

    getSpaceTypeList.spaceTypes=function(){
        return  $http({method:'Get',url:'http://harshkhurana:8080/VUC/UnitGroupMaintenance.getListOfAllSpaceType.action'});
    }
    getSpaceTypeList.testValue="This is test value";

    return getSpaceTypeList;
});