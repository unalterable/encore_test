var views = {

  newTrackRow: function( track ){
    var cells = [ this.newImage(),
                  track.name,
                  track.album.name,
                  this.formatMilliseconds( track.duration_ms ) ];
    var onclick = "window.open('"+ track.preview_url +"', 'Preview', 'width=200,height=100');";
    var tr = '<tr onclick="'+ onclick +'" >';
    return tr + cells.map( this.newCell ).join('') +'</tr>';
  },

  newImage: function ( imgSrc = "play.png" ){
    return '<img src="'+ imgSrc +'" />';
  },

  formatMilliseconds: function ( ms ){
    var m = parseInt( ms / 60000 );
    var s = ('0' + parseInt((ms%60000)/1000)).slice(-2)
    return m +':'+ s;
  },

  newCell: function ( cell ){
    return '<td>' + cell + '</td>';
  },

  loadingView: function (){
    return "<tr class='loading-row'><td colspan=4>... Loading Songs ...</td></tr>";
  },
};
