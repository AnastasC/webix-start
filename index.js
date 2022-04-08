import footer from './sources/components/footer.js';
import main from './sources/components/main.js';
import header from './sources/components/header.js';


webix.ui({
    view: "layout",
    rows: [
        header,
        main,
        footer,
    ],
});


$$("films_datatable").load("./datas/dashdoard.js");
$$("usersList").load("./datas/users.js");
$$("usersChart").load("./datas/users.js");
// $$("productsTreeTable").load("./datas/products.js");