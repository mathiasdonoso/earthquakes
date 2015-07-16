"use strict";var app=angular.module("earthquakeApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngMap"]);app.config(["$routeProvider",function(a){a.when("/earthquakes",{templateUrl:"views/earthquakes/index.html"}).when("/earthquakes/:earthquakeId",{templateUrl:"views/earthquakes/show.html"}).otherwise({redirectTo:"/earthquakes"})}]),app.controller("EarthquakesCtrl",["$scope","$filter","Earthquake",function(a,b,c){a.today=new Date,a.earthquakesParams=[],a.earthquakesParams.minMagnitude=0,a.magnitudes=[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}],a.getEarthquakes=function(){var d=b("date")(Date.now(),"yyyy-MM-dd");a.earthquakes=c.get({format:"geojson",minmagnitude:a.earthquakesParams.minMagnitude,starttime:d,limit:10})},a.getEarthquakes()}]),app.controller("EarthquakedetailCtrl",["$scope","$routeParams","Earthquake",function(a,b,c){a.getEarthquakeDetail=function(){a.earthquake=c.get({format:"geojson",eventid:b.earthquakeId})},a.getEarthquakeDetail()}]),app.factory("Earthquake",["$resource",function(a){return a("http://earthquake.usgs.gov/fdsnws/event/1/query")}]);