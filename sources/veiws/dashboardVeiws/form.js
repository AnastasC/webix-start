import { validateYear, validateVotes, validateRating } from "../../utils/validation.js";
import { FORM_VALIDATION_DATA as validation }  from "../../../datas/data.js"
import { categories } from "../../../datas/collection.js";

const form = {
    view: "form",
    id: "edit_films_forms",
    elementsConfig: { 
        margin: 10, 
    },
    borderless: true,
    width: 400,
    elements: [
        {
            type: "section", 
            template: "Edit films",
        },
        { 
            view: "text",
            label: "Title",
            name: "title",
            invalidMessage: "Enter film title",
        },
        { 
            view: "text",
            label: "Year",
            name: "year",
            invalidMessage: `Enter year between ${validation.minYear} and current`,
        },
        { 
            view: "text",
            label: "Rating",
            name: "rating",
            invalidMessage: `Enter rating above 0 and less than ${validation.maxRating}`,
        },
        { 
            view: "text",
            label: "Votes",
            name: "votes",
            invalidMessage: `Enter possitive votes and less than ${validation.maxVotes}`,
        },
        {
            view: "richselect",
            label: "Category",
            name: "categoryId",
            options: categories,
        },
        { 
            cols: [
                { 
                    view: "button", 
                    label: "Save",
                    css: "webix_primary",
                    click: () => {
                        const form = $$("edit_films_forms");
                        
                        if( !form.validate() ) return false;

                        form.save();
                        form.clear();
                        $$("films_datatable").clearSelection();
                        webix.message("Film was updated!");
                    },
                },
                {   view: "button",
                    label: "Clear",
                    click: function() {
                        webix.confirm({
                          title: "Form is incomplete",
                          text: "Do you still want to continue?",
                        }).then(
                            function() {
                                const form = $$("edit_films_forms");

                                form.clear();
                                form.clearValidation();
                                $$("films_datatable").clearSelection();
                            },
                        );
                    },
                },
            ],
        },
    ],
    rules: {
        title: webix.rules.isNotEmpty,
        year: (value) => validateYear(value),
        rating: (value) => validateRating(value),
        votes: (value) => validateVotes(value),
    },
};

export default form;