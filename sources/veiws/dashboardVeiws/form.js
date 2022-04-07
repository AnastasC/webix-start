import { validateYear, validateVotes, validateRating } from "../../utils/validation.js";
import { FORM_VALIDATION_DATA as validation }  from "../../../datas/data.js"

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
            cols: [
                { 
                    view: "button", 
                    label: "Add new",
                    css: "webix_primary",
                    click: function() {
                        const form = $$("edit_films_forms");

                        if( form.validate() ) {
                            const item = form.getValues();

                            $$("films_datatable").add(item);
                            form.clear();
                            webix.message("Film was added!");
                        };
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
            return validateRating(value);
        },
        votes: function(value) {
            return validateVotes(value);
        },
    },
};

export default form;