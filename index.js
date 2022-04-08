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

// $$("edit_films_forms").bind("films_datatable");