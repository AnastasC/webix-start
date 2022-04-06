import { validateYear, validateVotes, validateRanking } from "../utils/validation.js";
import { FORM_VALIDATION_DATA as validation }  from "../../datas/data.js"

const form = {
    view: "form",
    id: "edit_films_forms",
    elementsConfig: { 
        margin: 10, 
    },
    borderless: true,
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
            invalidMessage: `Enter year between ${validation.year} and current`,
        },
        { 
            view: "text",
            label: "Rating",
            name: "rating",
            invalidMessage: `Enter rating above 0 and less than ${validation.rating}`,
        },
        { 
            view: "text",
            label: "Votes",
            name: "votes",
            invalidMessage: `Enter possitive votes and less than ${validation.votes}`,
        },
        { 
            cols: [
                { 
                    view: "button", 
                    label: "Add new",
                    css: "webix_primary",
                    click: function() {
                        const form = $$("edit_films_forms");

                        if(form.validate()) {
                            const item = form.getValues();
                            $$("films_datatable").add(item);
                            webix.message("Film was added!");
                        }
                    },
                },
                {   view: "button",
                    label: "Clear",
                    click: function() {
                        webix.confirm({
                          title: "Form is incomplete",
                          text: "Do you still want to continue?"
                        }).then(
                          function() {
                            const form = $$("edit_films_forms");

                            form.clear();
                            form.clearValidation();
                          }, 
                          function() {
                            return;
                          },
                        );
                    },
                },
            ],
        },
    ],
    rules: {
        title: webix.rules.isNotEmpty,
        year: function(value) {
            return validateYear(value);
        },
        rating: function(value) {
            return validateVotes(value);
        },
        votes: function(value) {
            return validateRanking(value);
        },
    },
};

export default form;