//-------------------CONTROLLER--------------------//
app.controller("PageOneController",["$scope","$http",function($scope,$http){
	$scope.pie;
	console.log("Loaded PageOneController!");
	$http.get("https://angular11.firebaseio.com/folderThree/.json")
	.success(function(data){
		console.log(data);
		$scope.collection = data;
	})
	.error(function(data){
		console.log(data);
	})

}]);

app.controller("PageTwoController",["$scope","$http",function($scope,$http){
	console.log("Loaded PageTwoController!");

	$scope.addToFirebase = function() {
		
	}

	$http.get("https://angular11.firebaseio.com/folderTwo/.json")
	.success(function(data){
		console.log(data);
		$scope.collection = data;
	})
	.error(function(data){
		console.log(data);
	})
}]);

app.controller("PageThreeController",["$scope","$http",function($scope,$http){
	console.log("Loaded PageThreeController!");
	$http.get("https://angular11.firebaseio.com/folderOne.json")
	.success(function(data){
		console.log(data);
		$scope.collection = data;
	})
	.error(function(data){
		console.log(data);
	})
}])

app.controller("PageFourController",["$scope","$http",function($scope,$http){
	console.log("Loaded PageFourController!");
	$http.get("https://angular11.firebaseio.com/folderFour/.json")
	.success(function(data){
		console.log(data);
		$scope.collection = data;
	})
	.error(function(data){
		console.log(data);
	})
}])