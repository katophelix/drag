// initialize Packery
var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  // columnWidth helps with drop positioning
  columnWidth: 100
});

// make all items draggable
var $items = $grid.find('.grid-item').draggable();
// bind drag events to Packery
$grid.packery( 'bindUIDraggableEvents', $items );

var $grid = $('.grid');
$grid.packery({
  itemSelector: '.grid-item', 
  // gutter: 0,
  // columnWidth: 90,
  // rowHeight: 90
})
  .imagesLoaded( function() {
    // trigger packery layout after images have loaded
    grid.packery();
  });

// bind draggabilly events to item elements
$container.find('.item').each( makeEachDraggable );

var $draggable = $('.draggable').draggabilly({
  // options...
})

function makeEachDraggable( i, itemElem ) {
  // make element draggable with Draggabilly
  var draggie = new Draggabilly( itemElem );
  // bind Draggabilly events to Packery
  $container.packery( 'bindDraggabillyEvents', draggie );
}

// jQuery
function listener(/* parameters */) {
  // get Draggabilly instance
  var draggie = $(this).data('draggabilly');
  console.log( 'eventName happened', draggie.position.x, draggie.position.y );
}
// bind event listener
$draggable.on( 'eventName', listener );
// unbind event listener
$draggable.off( 'eventName', listener );
// bind event listener to trigger once. note ONE not ON
$draggable.one( 'eventName', function() {
  console.log('eventName happened just once');
});