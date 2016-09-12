$(function(){


  $("#fetch-songs").click(function(){
    var URL = {url: "https://api.spotify.com/v1/artists/6futYSDVulYR2PktBjTB5W/top-tracks?country=gb"};
    appendLoadingRow();
    expandHiddenFrame();
    $.ajax( URL ).done( addTracksToSongList );
  })

  function addTracksToSongList( data ) {
    topTenTracksFromJSON( data ).forEach( appendTrack );
    removeLoadingRow();
  }

  function topTenTracksFromJSON( data ){
    return data.tracks.slice(0, 10);
  }

  function appendTrack( track ){
    $('#song-list-table').append( views.newTrackRow( track ) );
  }

  function appendLoadingRow(){
    $('#song-list-table').append( views.loadingView() );
  }

  function removeLoadingRow(){
    $('.loading-row').remove();
  }

  function expandHiddenFrame(){
    $("#hidden-frame").css("height", "260px");
  }

});
