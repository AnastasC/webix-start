import { validatePrice } from "../../utils/validation.js";

const treeTable = {
    view: "treetable",
    id: "products_treeTable",
    columns:[
        { 
            id: "id",
            header: "",
            width: 50,
        },
        { 
            id: "title",
            header: "Title",
            template:"{common.treetable()} #title#",
            fillspace: true,
            editor: "text",
        },
        { 
            id: "price",
            header: "Price",
            fillspace: true,
            editor: "text",
        },
    ],
    scrollX: false,
    select: "cell",
    editable: true,
    url: "./datas/products.js",
    ready: () => $$("products_treeTable").openAll(),
    rules: {
        title: webix.rules.isNotEmpty,
        price: (value) => validatePrice(value),
    }
};

export default treeTable;