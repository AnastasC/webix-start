const treeTable = {
    view: "treetable",
    id: "productsTreeTable",
    columns:[
        { 
            id: "id",
            header: "",
            width: 50,
        },
        { 
            id: "title",
            header: "Title",
            template:"{common.treetable()} #value#",
        },
        { 
            id: "price",
            header: "Price",
        },
    ],
    url: "../../../datas/products.js",
};

export default treeTable;