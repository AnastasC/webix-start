import categories from "../../../datas/variables.js";
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
            header: "Category",
            collection: categories.categories,
        },
        { 
            id: "year",
            header: "Year",
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
    // gravity: 2.2,
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