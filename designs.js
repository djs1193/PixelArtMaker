var table=document.getElementById('pixelCanvas');

function makeGrid() {

    let heightSelected=document.getElementById('inputHeight').value;
    let widthSelected=document.getElementById('inputWidth').value;
    for (var height=0;height<heightSelected;height++){;
        var tr=document.createElement('tr');
        table.prepend(tr);
        for (var width=0;width<widthSelected;width++){
            let children=table.children;
            let child=children[0];
            let td=document.createElement('td');
            child.prepend(td);
        }
    }
}


$( '#sizePicker' ).on( 'submit', function(evt) {
    //Deleting the table we had before drawing teh new one
    let node=$('#pixelCanvas').children();
    //if (node) { $('#pixelCanvas').children().remove(); }
    $('#pixelCanvas').children().remove();
    //To make the table persistance , we need to prevent the default
    //behaivor of the Submit button in the form.The default behaivor of
    //submit button in the form , si submit teh information .As we are using it
    //to draw teh table , we need to preventDefault
    evt.preventDefault();
    //Finally we draw the table
    makeGrid();


});

// $('#pixelCanvas').on( 'click', function( evt ) {
    table.addEventListener('click',function(evt){
    let target=evt.target;
    let color=document.getElementById('colorPicker').value;
    $(target).css( 'background-color', color );
});
