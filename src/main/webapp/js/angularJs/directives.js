angular.module('myDirectives',[])
.directive('myDirective',function(){
    return {
        template : 'Name {{person.name}} of Address {{person.address}}'
    };

})
.directive('addAddress',function(){
    return {
        restrict: 'E',
        templateUrl: 'personAddress.html'}
});