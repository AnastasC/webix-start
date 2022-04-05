var dataList = ["Dashboard", "Users", "Products", "Locations"];
var dataFormImputs = ["Title", "Year", "Rating", "Votes"];
var inputs =   dataFormImputs.map( el => {
    return { view: "text", label: el };
});
var linkFooter = "https://webix.com/";

var header = {
    height: 50,
    paddingX: 10,
    view:"toolbar",
    elements:[
        { 
            view: "label",
            label: "My App",
            css: "label_header",
        },
        {},
        { 
            view: "button",
            label: "Profile",
            width: 150,
            type:"icon", 
            icon:"wxi-user",
            css: "button_header",
        },
    ],
};

var listMain = {
    rows: [
        {
            view: "list",
            width: 200,
            autoheight: true,
            scroll: false,
            data: dataList,
        },
        { },
        { 
            view: "label", 
            label: `<span class="webix_icon wxi-check"></span> Connected`,
            css: "label_connected",
            align: "center",
        }
    ],
};

var datatableMain = {
    view: "datatable",
    data: small_film_set,
    autoConfig: true,
    scrollX: false,
    gravity: 2.2,
          
};

var formMain = {
    rows: [
        {
            view: "form",
            elementsConfig: { margin: 10 },
            elements: [
                { 
                    view: "fieldset", 
                    label: "edit films", 
                    body: { rows: inputs },
                },
                { 
                    cols: [
                        { 
                            view:"button", 
                            label: "add new", 
                            type:"form",
                            css: "button_form-green",
                        },
                        {   view:"button",
                            label: "clear",
                            css: "button_form-red",
                        },
                    ],
                },
            ],
        },
        { },
    ],
            
};

var main = {
    cols: [
        listMain,
        { view:"resizer"},
        datatableMain,
        formMain,
    ],
};

var footer = {
    template: `The software is provided by <a href="${linkFooter}" class="footer_link" target="_blank">${linkFooter}</a>. All rights reserved (c).`,
    autoheight: true,
};

webix.ui({
    view: "layout",
    rows: [
        header,
        main,
        footer,
    ],
});