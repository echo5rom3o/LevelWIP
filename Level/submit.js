var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyIL8qHVpc-o08FQCMjQB028_w8I_Q7X4UGGcBaRFimInm47sM/exec'


$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
