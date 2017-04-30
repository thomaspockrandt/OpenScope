$(document).ready(function() {
  console.log(1);
  var logo_url = chrome.extension.getURL("openscope-logo.png");
  var avatar1 = chrome.extension.getURL("avatar-1.png");
  var avatar2 = chrome.extension.getURL("avatar-2.png");
  var avatar3 = chrome.extension.getURL("avatar-3.png");
  var avatar4 = chrome.extension.getURL("avatar-4.png");
  var bar = '<div id="blocker"></div><div id="zeisshack-bar"><div id="openscope-logo"><img src="' + logo_url + '" /></div><div id="collaborators"><div class="avatar active"><div class="name"><div class="inside">Jessica</div></div><img src="' + avatar1 + '" /></div><div class="avatar active"><div class="name"><div class="inside">Jeremy</div></div><img src="' + avatar2 + '" /></div><div class="avatar"><div class="name"><div class="inside">Randolph</div></div><img src="' + avatar3 + '" /></div><div class="avatar"><div class="name"><div class="inside">Rebecca</div></div><img src="' + avatar4 + '" /></div></div><div id="meta"><div id="comment-button">Comment</div></div></div>';
  $("body").append(bar);

  $(".avatar").on("click", function() {
    console.log(3);
  });

  $("#comment-button").on("click", function() {
    var blocker = document.getElementById("blocker");

    if (blocker.classList.contains("active")) {
      blocker.classList.remove("active");
    } else {
      blocker.classList.add("active");
    }

    console.log(4);
  })
});
