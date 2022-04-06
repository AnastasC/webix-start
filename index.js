const dataList = ["Dashboard", "Users", "Products", "Locations"];
const dataFormImputs = ["Title", "Year", "Rating", "Votes"];
const inputs =   dataFormImputs.map( el => {
    return { view: "text", label: el };
});
const linkFooter = "https://webix.com/";

const header = {
    height: 50,
    paddingX: 10,
    view: "toolbar",
    css: "webix_dark",
    elements: [
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
            type: "icon", 
            icon: "wxi-user",
            css: "webix_transparent",
        },
    ],
};

const listMain = {
    view: "layout",
    rows: [
        {
            view: "list",
            width: 200,
            scroll: false,
            data: dataList,
            css: "list_main"
        },
        { },
        {  
            template: `<span class="webix_icon wxi-check"></span> Connected`,
            autoheight: true,
            css: "template_connected",
        },
    ],
};

const datatableMain = {
    view: "datatable",
    data: small_film_set,
    autoConfig: true,
    scrollX: false,
    gravity: 2.2,
          
};

const formMain = {
    rows: [
        {
            view: "form",
            elementsConfig: { 
                margin: 10, 
            },
            borderless: true,
            elements: [
                { 
                    rows: [
                            {
                                type: "section", 
                                template: "Edit films",
                            },
                            ...inputs,
                    ],
                },
                { 
                    cols: [
                        { 
                            view: "button", 
                            label: "Add new", 
                            type: "form",
                            css: "webix_primary",
                        },
                        {   view: "button",
                            label: "Clear",
                        },
                    ],
                },
            ],
        },
        { },
    ],         
};

const main = {
    cols: [
        listMain,
        { view:"resizer"},
        datatableMain,
        formMain,
    ],
};

const footer = {
    template: `The software is provided by <a href="${linkFooter}" class="footer_link" target="_blank">${linkFooter}</a>. All rights reserved (c).`,
    autoheight: true,
    css: "template_footer",
};

webix.ui({
    view: "layout",
    rows: [
        header,
        main,
        footer,
    ],
});
