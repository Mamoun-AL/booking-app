$(document).ready(function(){
      $('#signform input[data-validate="true"]').on('input change focusout', function(e){
          validate_field($(this).attr('name'), $(this).val())
      })
    })
  function validate_field($field="", $value=""){
      $field = $field.trim();
      $value = $value.trim();

      // console.log($(`[name="${$field}"]`).siblings('.input-field')[0])


     
  
      $.ajax({
          url:'/ajax',
          method:'POST',
          data:{field:$field,value:$value},
          dataType:'json',
          error: err=>{
              console.error(err)
              $(`[name="${$field}"]`).addClass('is-invalid')
              $(`[name="${$field}"]`).closest('.err_msg').text("An error occurred while validating the data.")
              $(`[name="${$field}"]`).closest('.input-field').addClass('d-none')
          },
          success:function(resp){
              if(resp.status == 'success'){
                  $(`[name="${$field}"]`).addClass('is-valid')
                  $(`[name="${$field}"]`).siblings('.err_msg').text('');
              }else if(resp.status == 'failed'){
                  $(`[name="${$field}"]`).addClass('is-invalid')
                  if(!!resp.error)
                      $(`[name="${$field}"]`).siblings('.err_msg').text(resp.error);
                  else
                      $(`[name="${$field}"]`).siblings('.err_msg').text("The given value is invalid.");
              }else{
                  $(`[name="${$field}"]`).addClass('is-invalid')
              }
              $(`[name="${$field}"]`).siblings('.input-loader').addClass('d-none')
              check_form_validity()
          }
      })
      
  }
  
  function check_form_validity(){
      if($('#signform .is-invalid').length > 0){
          $("#submit").attr('disabled', fasle)
      }else{
          $("#submit").attr('disabled', true)
      }
      $('#signform input[data-validate="true"]').each(function(){
          if($(this).hasClass('is-invalid'))
          return false;
      })
      if($('#signform   input[data-validate="true"]').length == $('#signform .is-valid').length){
            $("#submit").attr('disabled', false)
      }
  }
  
  