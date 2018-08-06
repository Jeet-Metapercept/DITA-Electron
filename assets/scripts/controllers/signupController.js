appName.controller('signupController', function ($rootScope, $scope, electron, ipc, $state,$timeout) {
	
	$scope.throbber = false;
	$scope.signup = function(){
		$scope.throbber = true;
		$timeout(function () {
			$scope.throbber = false;
		}, 7000);
		var user = document.querySelector("#notify");
		firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
		.then(function(){ 
			$scope.throbber = false;
			user.innerHTML = "Sign Up Successful";
            user.opened = true;
			
				$timeout(function () {
					$state.go('login'); 
				}, 2000);
			})
			
		.catch(function(error){
			if(error != null){
				//$scope.throbber = false;
				console.log(error.message);
				user.innerHTML = error.message;
				user.opened = true;
				return;
			}
		})
	};

});