import getRandomNumber from "../../utils/random.js";

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
        {   id: "categoryId",
            header: [ "Category", { content: "selectFilter"}, ],
            collection: [
                { "id": 1, "value": "Drama" },
                { "id": 2, "value": "Fiction" },
                { "id": 3, "value": "Comedy" },
                { "id": 4, "value": "Horror" },
            ],
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
            id: "year",
            header: "Year",
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
    scheme: {
        $init: (obj) => {
            // const { categoryId, rating, votes } = obj;
            obj.categoryId = getRandomNumber(1, 4);
            obj.rating = webix.Number.parse( obj.rating, {
                decimalSize: 2, groupSize: 3, 
                decimalDelimiter: ",", groupDelimiter: "'",
            })
            obj.votes = webix.Number.parse( obj.votes, {
                decimalSize: 2, groupSize: 3, 
                decimalDelimiter: ".", groupDelimiter: "'",
            })
        }
    },
};

export default datatable;