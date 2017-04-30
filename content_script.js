$(document).ready(function() {
  console.log(1);
  var logo_url = chrome.extension.getURL("openscope-logo.png");
  var avatar1 = chrome.extension.getURL("avatar-1.png");
  var avatar2 = chrome.extension.getURL("avatar-2.png");
  var avatar3 = chrome.extension.getURL("avatar-3.png");
  var avatar4 = chrome.extension.getURL("avatar-4.png");
  var office_logo = chrome.extension.getURL("office-logo.png");
  var bar = '<div id="pin"><div id="pin-comment">you need to see this.</div><div class="avatar"><img src="' + avatar1 + '" /></div></div><div id="popup"><div class="officebar"><img src="' + office_logo + '" /></div><div class="body"><div class="collaborator"><div class="avatar"><img src="' + avatar1 + '" /></div><div class="name">Jessica Parker</div></div><textarea></textarea><div class="submit"><div id="submit-button">Add comment</div></div></div></div><div id="blocker"></div><div id="zeisshack-bar"><div id="openscope-logo"><img src="' + logo_url + '" /></div><div id="collaborators"><div class="avatar active"><div class="name"><div class="inside">Jessica</div></div><img src="' + avatar1 + '" /></div><div class="avatar active"><div class="name"><div class="inside">Jeremy</div></div><img src="' + avatar2 + '" /></div><div class="avatar"><div class="name"><div class="inside">Randolph</div></div><img src="' + avatar3 + '" /></div><div class="avatar"><div class="name"><div class="inside">Rebecca</div></div><img src="' + avatar4 + '" /></div></div><div id="meta"><div id="comment-button">Comment</div></div></div>';
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

  $(function(){
    $("#blocker").click(function(e){
        var x = e.pageX + 'px';
        var y = e.pageY + 'px';

        if($("#popup").hasClass("active")) {

        } else {
          $("#popup").css({"left": x, "top": y});
          $("#pin").css({"left": x, "top": y});
          $("#popup").addClass("active");
        }

        $(document.body).append(div);
    });
  })

  $("#submit-button").click(function(e){
    $("#popup").removeClass("active");
    $("#pin").addClass("active");
  })
});
