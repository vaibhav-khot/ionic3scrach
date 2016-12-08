'use strict'
var
_api:any = {}; // any Object

_api.mock = {};

_api.mock.getProductCategories = function () {
    var _d = { status: 200, message: "Successful", data: [] ,user_msg:"Categories" };

    _d.data.push({ name: "Tables", product_images: "assets/categories/category1.jpg", link: "", product_category_id: 1 });
    _d.data.push({ name: "Chairs", product_images: "assets/categories/category2.jpg", link: "", product_category_id: 2 });
    _d.data.push({ name: "Sofas", product_images: "assets/categories/category3.jpg", link: "", product_category_id: 3 });
    _d.data.push({ name: "Beds", product_images: "assets/categories/category4.jpg", link: "", product_category_id: 4 });
    _d.data.push({ name: "Dining Set", product_images: "assets/categories/category5.jpg", link: "", product_category_id: 5 });
    // _d.data.push({ name: "Dining Set", product_images: "assets/categories/category5.jpg", link: "", product_category_id: 5 });
    // _d.data.push({ name: "Dining Set", product_images: "assets/categories/category5.jpg", link: "", product_category_id: 5 });
    // _d.data.push({ name: "Dining Set", product_images: "assets/categories/category5.jpg", link: "", product_category_id: 5 });
    // _d.data.push({ name: "Dining Set", product_images: "assets/categories/category5.jpg", link: "", product_category_id: 5 });
    // _d.data.push({ name: "Dining Set", product_images: "assets/categories/category5.jpg", link: "", product_category_id: 5 });

  return _d;
}

export var Default = {
    API: _api
}
