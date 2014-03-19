angular.module("bootstrapSite",[])
.controller("bootstrapController", function($scope){
        $scope.selection='defaultView';
})
.directive('addHome',function(){
     return {
         restrict: 'E',
         templateUrl: 'home.html'}
 })
 .directive('addAbout',function(){
     return {
         restrict: 'E',
         templateUrl: 'aboutUs.html'}
 })
 .directive('addContact',function(){
     return {
         restrict: 'E',
         templateUrl: 'contact.html'}
 })
 .directive('addDefault',function(){
     return {
         restrict: 'E',
         templateUrl: 'default.html'}
 });