const usersForm = {
    view: "form",
    id: "users_form",
    elementsConfig: { 
        margin: 10, 
    },
    borderless: true,
    elements: [
        {
            cols: [
                { 
                    view: "text",
                    id: "list_input",
                    name: "name",
                    on: {
                        onTimedKeyPress: () => {
                            const item = $$("users_form").getValue().toLowerCase();

                            $$("usersList").filter((obj) => obj.name.toLowerCase().indexOf(item) !== -1); 
                        },
                    },
                },
                { 
                    view: "button", 
                    label: "Sort asc",
                    width: 100,
                    //i have no idea what to sort
                    click: () => console.log('sort'),
                },
                { 
                    view: "button", 
                    label: "Sort desc",
                    width: 100,
                    //i have no idea what to sort
                    click: () => console.log('sort'),
                },
            ],
        },
    ],
};

export default usersForm;