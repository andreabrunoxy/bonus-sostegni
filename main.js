$("#runner").on("mouseover", function () {
  var offset = $(this).offset();
  var goX = Math.random() < 0.5 ? -1 : 1;
  var goY = Math.random() < 0.5 ? -1 : 1;
  $(this).css("top", offset.top + 45 * goY);
  $(this).css("left", offset.left + 120 * goX);
});
