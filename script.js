var lastHeight = 0;
$('.bg-portrait').each(function() {
  $(this).css('background-position', '0 -' + lastHeight + 'px');
  var currentHeight = $(this).outerHeight();
  var newPosition = currentHeight + lastHeight;
  lastHeight = lastHeight + currentHeight;
});