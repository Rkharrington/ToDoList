function newItem(){
    // Adds new item to the list
    let li= $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }
    
    // Cross item out when user double clicks
    function crossOut() {
        li.toggleClass('strike');
    }
    li.on('dblclick', function crossOut () {
        li.toggleClass('strike');
    });

    // Add 'X' delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton = $('<crossOutButton></crossOutButton>');
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);
    function deleteListItem(){
        li.addClass('delete')
    }
    
    // Sort list
    $('#list').sortable()
}