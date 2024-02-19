import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadfunc } from "./services/service.js";
import router from "./services/Router.js";

import { Menupage } from "./components/MenuPage.js";
import { detailspage } from "./components/DetailsPage.js";
import  orderpage  from "./components/OrderPage.js";
import productitem from "./components/ProductItem.js";
import cartitem  from "./components/CartItem.js";
import { addToCart,removeFromCart } from "./services/cart.js";

window.addEventListener("DOMContentLoaded",() => {
    window.app={};
    app.store=Store;
    app.router=router;

    loadfunc();    
    router.init();

});

window.addEventListener("appcartchange",() => {
    const badge=document.getElementById("badge");
    const qynt=app.store.cart.reduce((acc,ele) =>acc+ele.quantity,0);
    badge.textContent=qynt;
    badge.hidden=qynt==0;
})