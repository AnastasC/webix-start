const tabbar = {
    view: "tabbar",
    id: "films_tabbar",
    value: "all",
    options: [
        { 
            id: "all",
            value: "All",
        },
        { 
            id: "old",
            value: "Old",
        },
        { 
            id: "modern",
            value: "Modern",
        },
        { 
            id: "new",
            value: "New",
        }
    ],
    on: {
        onChange: () => $$("films_datatable").filterByAll(),
    }
};

export default tabbar;