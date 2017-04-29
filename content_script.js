$(document).ready(function() {
  console.log(1);
  var logo_url = chrome.extension.getURL("openscope-logo.png");
  var bar = '<div id="zeisshack-bar"><div id="openscope-logo"><img src="' + logo_url + '" /></div></div>';
  $("body").append(bar);
});
