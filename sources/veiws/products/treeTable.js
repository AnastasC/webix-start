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
            template:"{common.treetable()} #title#",
            fillspace: true,
        },
        { 
            id: "price",
            header: "Price",
            fillspace: true,
        },
    ],
    scrollX: false,
    select: true,
    url: "./datas/products.js",
    ready: () => $$("productsTreeTable").openAll(),
};

export default treeTable;