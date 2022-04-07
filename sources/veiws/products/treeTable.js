const treeTable = {
    view: "treetable",
    id: "productsTreeTable",
    columns:[
        { 
            id: "order",
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
};

export default treeTable;