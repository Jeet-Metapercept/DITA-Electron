appName.controller('loginController', function ($rootScope, $scope, electron, ipc, $state, $timeout) {
	
	$scope.throbber = false;
	
	$scope.signup = function(){
		$state.go('signup');
	};
	
	$scope.login = function(){
		$scope.throbber = true;
		$timeout(function () {
			$scope.throbber = false;
		}, 7000);
		var user = document.querySelector("#notify");
		firebase.auth().signInWithEmailAndPassword($scope.user.email, $scope.user.password)
		.then(function(){
			$scope.throbber = false;			
			user.innerHTML = "Login Successful";
            user.opened = true;
			
				$timeout(function () {
					$state.go('auth.main');
				}, 2000);
			})
		.catch(function(error){
			if(error != null){			
				console.log(error.message);
				user.innerHTML = error.message;
				user.opened = true;
				return;
			}

		})
	};

});


