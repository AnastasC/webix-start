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
$$("usersList").load("./datas/users.js").then(
    //i was trying to add class to the first 5 items of te list, but cant get them
    console.log($$("usersList").data)
);
$$("usersChart").load("./datas/users.js");

//treetable is underfined and i dont know why
$$("productsTreeTable").load("./datas/dashdoard.js");