//here is a function for adding items
function addItem() {
    $('js-shopping-list-form').submit(event => {
      event.preventDefault();
      const listItem = $('.js-shopping-list-entry').val();
      listItem.push($("shopping-list-entry").closest("li"));
      });
  } 
  $(addItem);
//here is one for checking items
  function checkOff() {
    $('shopping-item-toggle').on('click', event => {
      event.preventDefault();
      $('shopping-item').toggleClass('shopping-item__checked');
    });
  }
  $(checkOff);
//here is one for unchecking items
  function justKidding() {
    $('shopping-item-toggle').on('click', event => {
      event.preventDefault();
      $('shopping-item').removeClass('shopping-item__checked');
    });
  }
  $(justKidding);
//here is one for removing items
  function begone() {
    $('shopping-item-delete').on('click', event => {
      event.stopPropogation();
      $('shopping-list-entry').remove("li");
    });
  }
  $(begone);