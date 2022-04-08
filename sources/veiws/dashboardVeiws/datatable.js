const datatable = {
    view: "datatable",
    id: "films_datatable",
    columns: [
        { 
            id: "id",
            header: "",
            width: 50,
        },
        { 
            id: "title",
            header: [ "Filt title", { content: "textFilter" }, ],
            sort:"string",
            fillspace: true,
        },
        { 
            id: "year",
            header: [ "Year",  { content: "numberFilter" }, ],
            sort:"int",
        },
        { 
            id: "rating",
            header: [ "Rating", { content: "numberFilter" }, ],
            sort:"int",
        },
        { 
            id: "votes",
            header: [ "Votes", { content: "numberFilter" }, ],
            sort:"int",
        },
        { 
            id: "delete",
            header: "",
            template: "{common.trashIcon()}",
        },
    ],
    scrollX: false,
    select: true,
    editable: true,
    hover: "myhover",
    gravity: 2.2,
    url: "./datas/dashboard.js",
    onClick: {
        "wxi-trash": (e, id) => {
            webix.confirm({
                title: "Delete...",
                text: "Do you still want to delete this film?",
              }).then(
                  () => $$("films_datatable").remove(id),
            );
        },
    },
    on: {
        onAfterSelect: (id) => {
            const itemValues = $$("films_datatable").getItem(id);

            $$("edit_films_forms").setValues(itemValues);
        },
    },
};

export default datatable;