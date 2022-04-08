const usersForm = {
    view: "form",
    id: "users_form",
    elementsConfig: { 
        margin: 10, 
    },
    borderless: true,
    cols: [
        { 
            view: "text",
            id: "list_input",
            name: "name",
            on: {
                onTimedKeyPress: () => {
                    const item = $$("users_form").getValues().name.toLowerCase();

                    $$("usersList").filter((obj) => obj.name.toLowerCase().indexOf(item) !== -1); 
                },
            },
        },
        { 
            view: "button", 
            label: "Sort asc",
            width: 100,
            click: () => $$("usersList").sort("#name#", "asc"),
        },
        { 
            view: "button", 
            label: "Sort desc",
            width: 100,
            click: () => $$("usersList").sort("#name#", "desc"),
        },
    ],
};

export default usersForm;