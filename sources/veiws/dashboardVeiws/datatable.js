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
            header: ["Filt title", {content:"textFilter"}],
            sort:"string",
            fillspace: true,
        },
        { 
            id: "year",
            header: ["Year",  {content:"textFilter"}],
            sort:"int",
        },
        { 
            id: "rating",
            header: ["Rating", {content:"textFilter"}],
            sort:"int",
        },
        { 
            id: "votes",
            header: ["Votes",  {content:"textFilter"}],
            sort:"int",
        },
        { 
            id: "delete",
            header: "",
            template: "{common.trashIcon()}",
        },
    ],
    scrollX: false,
    hover: "myhover",
    gravity: 2.2,
    onClick: {
        "wxi-trash": (e, id) => $$("films_datatable").remove(id),
    },
};

export default datatable;