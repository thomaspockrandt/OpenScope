$(document).ready(function() {
  console.log(1);
  var logo_url = chrome.extension.getURL("openscope-logo.png");
  var avatar1 = chrome.extension.getURL("avatar-1.png");
  var avatar2 = chrome.extension.getURL("avatar-2.png");
  var avatar3 = chrome.extension.getURL("avatar-3.png");
  var avatar4 = chrome.extension.getURL("avatar-4.png");
  var bar = '<div id="zeisshack-bar"><div id="openscope-logo"><img src="' + logo_url + '" /></div><div id="collaborators"><div class="avatar active"><img src="' + avatar1 + '" /></div><div class="avatar active"><img src="' + avatar2 + '" /></div><div class="avatar"><img src="' + avatar3 + '" /></div><div class="avatar"><img src="' + avatar4 + '" /></div></div><div id="meta"><div id="comment-button">Comment</div></div></div>';
  $("body").append(bar);
});
