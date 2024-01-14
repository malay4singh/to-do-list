button=$("button");
list=$('.list');
input=$('input');

//add card
button.on('click', ()=>{
    if(!input.val()){
        input.attr("placeholder", "Please Enter Task...");
        setTimeout(() => {
            input.removeAttr("placeholder");
        }, 1000);
    }
    else{
        text=input.val();
        input.val('');
        let newCard=$(`<div class="card">
        <div class="content">
            <input type="checkbox" class="tick">
            <div class="text">
                ${text}
            </div>
        </div>
        <div class="controls">
            <img src="up.png" class="up" width="20px">
            <img src="delete.png" class="delete" width="20px">
            <img src="down.png" class="down" width="20px">
        </div>
    </div>`);

        newCard.css('display', 'none');
        list.append(newCard);
        newCard.slideDown(200);
    }
})

//delete
list.on('click', (e)=>{
    if ($(e.target).hasClass('delete')){
        $(e.target).parent().parent().slideUp(200);
        setTimeout(() => {
            $(e.target).parent().parent().remove();
        }, 200);
    }
})

//checkbox check-uncheck
list.on('click', (e)=>{
    if ($(e.target).hasClass('tick') && $(e.target).prop("checked")){
        $(e.target).parent().parent().addClass('check');
    }
    else if ($(e.target).hasClass('tick') && !$(e.target).prop("checked")){
        $(e.target).parent().parent().removeClass('check');
    }
})

//move down
list.on('click', (e)=>{
    if ($(e.target).hasClass('down')){
        first=$(e.target).parent().parent();
        second=$(e.target).parent().parent().next();

        second.after(first);
    }
})

//move up
list.on('click', (e)=>{
    if ($(e.target).hasClass('up')){
        first=$(e.target).parent().parent();
        second=$(e.target).parent().parent().prev();

        second.before(first);
    }
})