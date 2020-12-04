// A $( document ).ready() block.
$(document).ready(function () {
  //console.log( "Lauren Beck Testing!" );
  //alert('test');
  
  $(document).on("change","#t-shirt", chkTshirt);
  
  //begin chkTshirt
  function chkTshirt() {
   
    var tshirt = $('#t-shirt').val();
    
    //alert("tshirt");
    
    //begin if tshirt
    if (tshirt == 'CUSTOM'){
      //alert('works');
      $('#custom').removeAttr('disabled'); //remove disable
      $("#custom").attr('required', true); //required
    }//end if tshirt
    else{
      $("#custom").attr('disabled', true); //disable again
      $("#custom").val(""); //set value to empty
       $("#custom").removeAttr("required"); //remove required
    }
    
  }//end of function
  
});
