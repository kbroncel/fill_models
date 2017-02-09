app.controller('joinController', function($scope) {

    $('.male').hide()
            
    $('input[type=radio][name=sex]').change(function(){

        if ($('input[type=radio][value=male]').is(":checked")){
            $('.female').hide()
            $('.male').show()
        }
        else {
            $('.female').show()
            $('.male').hide()
        }
    });

    $("#formDataContainer").hide();
    $scope.formData = {}
    $scope.showFormData = function(){
          $("#formDataContainer").show();
          $("#joinForm").hide();
        
      }
});
