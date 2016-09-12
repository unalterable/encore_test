$(function(){
  function topTenTracksFromSpotify( data ){
    return data.tracks.slice(0, 10);
  }

  function formatMilliseconds( ms ){
    var m = parseInt( ms / 60000 );
    var s = ('0' + parseInt((ms%60000)/1000)).slice(-2)
    return m +':'+ s;
  }

  function createNewCell( cell ){
    return '<td>' + cell + '</td>';
  }

  function createLink( content, url ){
    return '<a href="'+ url +'">'+ content +'</a>';
  }

  function createImg( imgSrc ){
    return '<img src="'+ imgSrc +'" />';
  }

  function createTrackPreviewLink( url, imgSrc = "play.png" ){
    return createLink( createImg(imgSrc) , url);
  }

  function newTrackView( track ){
    var cells = [ createTrackPreviewLink( track.preview_url ),
                  track.name,
                  track.album.name,
                  formatMilliseconds( track.duration_ms ) ];
    return '<tr>'+ cells.map( createNewCell ).join('') +'</tr>';
  }

  function appendTrack( track ){
    $('#song-list').append( newTrackView( track ));
  }

  function addTracksToSongList( data ) {
    topTenTracksFromSpotify( data ).forEach( appendTrack )
  }

  $("#fetch-songs").click(function(){
    var URL = {url: "https://api.spotify.com/v1/artists/6futYSDVulYR2PktBjTB5W/top-tracks?country=gb"}
    $("#hidden-frame").css("height", "300px");
    $.ajax( URL ).done( addTracksToSongList );
  })
});
