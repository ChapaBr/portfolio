(function($) {
$('.creativity').circleProgress({
    value: .70,
    fill: {gradient: ['#311d3f', '#e23e57'], gradientAngle: Math.PI / 10}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(70 * progress) + '<i>%<i>');
  });

$('.project').circleProgress({
    value: .65,
    fill: {gradient: ['#311d3f', '#e23e57'], gradientAngle: Math.PI / 10}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(65 * progress) + '<i>%<i>');
  });

$('.team-work').circleProgress({
    value: .60,
    fill: {gradient: ['#311d3f', '#e23e57'], gradientAngle: Math.PI / 10}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(60 * progress) + '<i>%<i>');
  });

$('.communication').circleProgress({
    value: .35,
    fill: {gradient: ['#311d3f', '#e23e57'], gradientAngle: Math.PI / 10}
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(35 * progress) + '<i>%<i>');
  });
})(jQuery);
