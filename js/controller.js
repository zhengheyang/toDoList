angular.module('todoApp.controller', [])
    .controller('test', function ($scope) {
        $scope.usrInput = '';
        $scope.todoList = [];
        $scope.doneList = [];

        $scope.addTodo = function () {
            if(!$scope.usrInput){
                return;
            }else {
                $scope.todoList.push({
                    text: $scope.usrInput,
                    done: false
                });
                $scope.usrInput = '';
            }
        };

        $scope.doneThis = function (index) {
            var arrObj = $scope.todoList.splice(index, 1);
            $scope.doneList.push({
                text: arrObj[0].text,
                done: true
            });
        };

        $scope.cancelThis = function (index) {
            $scope.todoList.splice(index, 1);
        }


    })