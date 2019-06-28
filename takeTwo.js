//this is for adding an item
$(function addItem(){
    $('#js-shopping-list-form').submit(event => {
      event.preventDefault();
      const listItem = $('.js-shopping-list-entry').val();
      $('#shopping-list-entry').val("");
      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
//this is for checking or unchecking an item
     $('.shopping-list').on('click', '.shopping-item-toggle', event => {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
     });
  
  });
//this is for removing an item
     $('.shopping-list').on('click', '.shopping-item-delete', event => {
        $(this).closest('li').remove();
     });