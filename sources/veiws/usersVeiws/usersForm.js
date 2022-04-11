import getRandomNumber from "../../utils/random.js";
import { RANDOM_NAME, RANDOM_COUNTRY } from "../../../datas/data.js";

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
                    const item = $$("list_input").getValue().toLowerCase();

                    $$("users_list").filter((obj) => obj.name.toLowerCase().indexOf(item) !== -1); 
                },
            },
        },
        { 
            view: "button", 
            label: "Sort asc",
            width: 100,
            click: () => $$("users_list").sort("#name#", "asc"),
        },
        { 
            view: "button", 
            label: "Sort desc",
            width: 100,
            click: () => $$("users_list").sort("#name#", "desc"),
        },
        {
            view: "button",
            value: "Add user",
            id: "addUser",
            width: 100,
            click: () => 
                $$("users_list").add({ 
                    name: RANDOM_NAME[getRandomNumber(0, RANDOM_NAME.length - 1)],
                    age: getRandomNumber(18, 100),
                    country: RANDOM_COUNTRY[getRandomNumber(0, RANDOM_COUNTRY.length - 1)], 
                }, 0),        
        },
    ],
};

export default usersForm;