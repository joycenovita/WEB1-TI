function link_copied(){$(".copy_url").click((function(){return $(this).children(".notif").addClass("url_copied"),setTimeout((function(){$(".notif").removeClass("url_copied")}),1500),!1}))}link_copied();