import { categories } from "../../../datas/collection.js";

const adminsForm = {
    view: "form",
    id: "admins_forms",
    elementsConfig: { 
        margin: 10, 
    },
    cols: [
        {
            view: "text",
            name: "category",
            id: "category_text",
        },
        {
            view: "button", 
            label: "Add category",
            width: 200,
            click: () => categories.add({
                    value: $$("category_text").getValue(),
            }),
        },
    ],
};

export default adminsForm;