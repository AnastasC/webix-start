import { categories, users } from "../../datas/collection.js";

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

const syncAdminsDatateble = () => $$("admins_datatable").sync(categories);

const syncUsersListToCollection = () => $$("users_list").sync(users);

const syncUsersChartToCollection = () => {
    $$("users_chart").sync(users, () => {
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
}

export { 
    bindDatatebele,
    registerFilterToDatateble,
    syncAdminsDatateble, 
    syncUsersListToCollection,
    syncUsersChartToCollection,
};