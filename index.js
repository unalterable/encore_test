$(function(){

  var URL = {url: "https://api.spotify.com/v1/artists/6futYSDVulYR2PktBjTB5W/top-tracks?country=gb"};

  $("#fetch-songs").click(function(){
    appendLoadingRow();
    expandSongsFrame();
    $.ajax( URL ).done( function(data){
      addTracksToSongList(10, data)
    });
  })

  function addTracksToSongList( amount, data ) {
    removeTrackViews();
    topTracksFromJSON( amount, data ).forEach( appendTrack );
  }

  function topTracksFromJSON( amount, data ){
    return data.tracks.slice(0, amount);
  }

  function appendTrack( track ){
    $('#song-list-table').append( views.newTrackRow( track ) );
  }

  function appendLoadingRow(){
    $('#song-list-table').append( views.loadingView() );
  }

  function removeTrackViews(){
    $('#song-list-table').empty();
  }

  function expandSongsFrame(){
    $("#song-list-frame").css("height", "260px");
  }

  appendLoadingRow();
  $.ajax( URL ).done( function(data){
    addTracksToSongList(5, data)
  });


});
