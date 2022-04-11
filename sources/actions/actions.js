const bindDatatebele = () => $$("edit_films_forms").bind("films_datatable");

 const registerFilterToDatateble = () => {
    $$("films_datatable").registerFilter(
        $$("films_tabbar"), 
        { 
            columnId: "year",
            compare: (value, filter) => {
                if( filter === "all" ) return value;
                if( filter === "old" ) return value < 1970;
                if( filter === "modern" ) return value > 1990;
                if( filter === "new" ) return value > 2010;
            }
        },
        { 
          getValue: (node) => node.getValue(),
          setValue: (node, value) => node.setValue(value),
        }
    )
};

const syncUsersList = () => {
    $$("users_chart").sync($$("users_list"), () => {
        $$("users_chart").group({
            by: "country",
            map: {
                usersCount: [ "country", "count" ],
            },
        });
        $$("users_chart").sort({
            by: "usersCount",
            as: "int",
            dir: "desc",
        });
    })
};



export { bindDatatebele, registerFilterToDatateble, syncUsersList };