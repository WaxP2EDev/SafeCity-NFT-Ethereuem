$(document).ready(() => {
    // buy item price
    const atags = document.querySelectorAll('a');
    let itemlink = [];

    for (let i = 0; i < atags.length; i++) {
        if ((atags[i].getAttribute('href') === '#modal-asset' || atags[i].getAttribute('href') === 'item.html') && atags[i].innerText !== "Item style 1") {
            atags[i].classList.add('item-html');
            atags[i].setAttribute('id', itemlink.length)
            itemlink.push(atags[i]);
        }
    }
    itemlink = itemlink.splice(1, itemlink.length)
    let card_price = document.querySelectorAll('.card__price span');
    let prices = [];
    for (let i = 0; i < card_price.length; i++) {
        const p = card_price[i].innerHTML;
        if (p.includes('ETH'))
            prices.push(card_price[i].innerHTML);
    }
    $('body .item-html').click((e) => {
        e.preventDefault();
        let id = e.currentTarget.id;
        id = Number(id);
        id /= 2;
        id = parseInt(id);

        let price = prices[id];
        let mprice = "";
        for(let i = 0;i<price.length;i++){
            if(price[i]==='.') {
                mprice+=price[i];
                continue;
            }
            if(price[i]<='9' && price[i]>='0' ){
                mprice+=price[i];
                continue;
            }
            if(price[i]==='B'){
                mprice = Number(mprice);
                mprice*=1000000000;
                break;
            }
            if(price[i]==='M'){
                mprice = Number(mprice);
                mprice*=1000000;
                break;
            }
            if(price[i]==='K'){
				mprice = Number(mprice);
				mprice*=1000;
				break;
			}

            break;

        }
        // alert(mprice)
        sessionStorage.setItem('PrIcE', mprice);
        window.location = "item.html";
    });

})