$('.like-btn').on('click', function() {
   $(this).toggleClass('is-active');
});

$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value = 10) {
        value = value - 5;
    } else {
        value = '';
    }
 
  $input.val(value);

  });
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if ( value = 5) {
       value = value + 5;


        
    } else {
        value  = 5;
    }
 
    $input.val(value);
});