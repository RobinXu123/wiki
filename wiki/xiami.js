var lib = new Array();

$(".track_list tbody tr td.song_name").each(function(){
  var musicObj = new Object();

  musicObj.name = $(this).children().filter("a:first").attr("title");
  musicObj.url = $(this).children().filter("a:first").attr("href");

  $.get(musicObj.url, {}, function(data, textStatus){
    musicObj.coverUrl = $(data).find(".cdCDcover185").attr("src");
  });

  musicObj.artist = "";
  $(this).children().filter("a.artist_name").each(function(){
    musicObj.artist += $(this).text() + " ";
  });

  lib.push(musicObj);
});

console.log(JSON.stringify(lib));
