'use strict';

var _api: any = {};

_api.HOSTNAME = "http://localhost";
_api.PORT = "3000";
_api.WSPATH = _api.HOSTNAME + ":" + _api.PORT;


_api.URI = {};
_api.URI.Slides = _api.WSPATH + "/slides/offers";


/** ********** --------- MOCK DATA STARTS ----------- */

_api.mock = {};
_api.mock.getOffersSlide = function () {
    var _d = { success: true, result: "Successful", data: [] };

    _d.data.push({ title: "Electronic Offers", imgURI: "assets/offers/offers0.jpg", link: "", _id: 1 });
    _d.data.push({ title: "Diwali Dhamaka", imgURI: "assets/offers/offers1.jpg", link: "", _id: 2 });
    _d.data.push({ title: "Get flat Rs.150 off on watches", imgURI: "assets/offers/offers2.jpg", link: "", _id: 3 });
    _d.data.push({ title: "Womens offers", imgURI: "assets/offers/offers0.jpg", link: "", _id: 4 });
    _d.data.push({ title: "Mens Offers", imgURI: "assets/offers/offers1.jpg", link: "", _id: 5 });
    _d.data.push({ title: "50% off on all branded shoes", imgURI: "assets/offers/offers2.jpg", link: "", _id: 6 });
    return _d;
}
_api.mock.getCategories = function () {
    var _d = { success: true, result: "Successful", data: [] };

    _d.data.push({ title: "Electronics", imgURI: "", link: "", _id: 11 });
    _d.data.push({ title: "Ethnic Wear", imgURI: "", link: "", _id: 12 });
    _d.data.push({ title: "Footwear", imgURI: "", link: "", _id: 13 });
    _d.data.push({ title: "Watches", imgURI: "", link: "", _id: 14 });
    _d.data.push({ title: "Automobiles", imgURI: "", link: "", _id: 15 });
    _d.data.push({ title: "Home Appliances", imgURI: "", link: "", _id: 16 });
    return _d;
}
_api.mock.getTrending = function () {
    var _d = { success: true, result: "Successful", data: [] };

    _d.data.push({ title: "Electronics", imgURI: "assets/icon/electronics.png", link: "", _id: 11 });
    _d.data.push({ title: "Ethnic Wear", imgURI: "assets/icon/womenwear.png", link: "", _id: 12 });
    _d.data.push({ title: "Footwear", imgURI: "assets/icon/footwear.png", link: "", _id: 13 });
    _d.data.push({ title: "Watches", imgURI: "assets/icon/watches.png", link: "", _id: 14 });
    _d.data.push({ title: "Home Appliances", imgURI: "assets/icon/appliances.png", link: "", _id: 16 });
    return _d;
}


_api.mock.getProducts = function () {
    var _d = { success: true, result: "Successful", data: [] };

    _d.data.push({ product_name: "Peter England Formal A2B", current_price: 250, actual_price: 0, discount: 0, product_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", imgURI: "assets/tmp_product/peter1.jpg", link: "", product_id: 210 });
    _d.data.push({ product_name: "Buffalo t-shirt Brown BK200", current_price: 250, actual_price: 0, discount: 0, product_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", imgURI: "assets/tmp_product/buf1.jpg", link: "", product_id: 211 });
    _d.data.push({ product_name: "Peter England Formal A4B", current_price: 250, actual_price: 0, discount: 0, product_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", imgURI: "assets/tmp_product/peter2.jpg", link: "", product_id: 212 });
    _d.data.push({ product_name: "Buffalo t-shirt Brown BK100", current_price: 250, actual_price: 0, discount: 0, product_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", imgURI: "assets/tmp_product/buf2.jpg", link: "", product_id: 213});
    _d.data.push({ product_name: "Woodland WD100", current_price: 250, actual_price: 0, discount: 0, product_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", imgURI: "assets/tmp_product/peter4.jpg", link: "", product_id: 214 });
    _d.data.push({ product_name: "Woodland WD500", current_price: 250, actual_price: 0, discount: 0, product_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", imgURI: "assets/tmp_product/peter5.jpg", link: "", product_id: 215 });
    _d.data.push({ product_name: "Ethnic ET002", current_price: 250, actual_price: 0, discount: 0, product_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", imgURI: "assets/tmp_product/peter5.jpg", link: "", product_id: 216 });
    _d.data.push({ product_name: "Peter England Formal A3B", current_price: 250, actual_price: 0, discount: 0, product_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", imgURI: "assets/tmp_product/peter1.jpg", link: "", product_id: 217 });
    return _d;
}

_api.mock.getProduct = function (pid) {


    return new Promise(resolve => {
        var _d: any = {};
        _d = _api.mock.getProducts();

        _d.data.forEach(function (v, k) {
            if (v.product_id === pid) {
                resolve(v);
            }
        });

    });
}

/** ********** --------- MOCK DATA ENDS ----------- */



export var Defaults = Object.freeze({
    APP_NAME: "Shop App",
    APP_AUTHOR: "Rafique Mohammed",
    APP_DESC: "An Online shopping app.",
    API: _api
});


