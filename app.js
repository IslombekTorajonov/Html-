
  
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide',{
      type   : 'loop',
      perPage: 5,
      focus  : 'center',
      
      
      autoWidth: true,
  } );
  splide.on( 'autoplay:playing', function ( rate ) {
    } );
  
  splide.mount();
} );

document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide1',{
      type   : 'loop',
      perPage: 5,
      focus  : 'center',
      onclick:'button',
    autoWidth: true,
      autoPlay:true
  } );
  splide.on( 'autoplay:playing', function ( rate ) {
    } );
  
  splide.mount();
} ); 