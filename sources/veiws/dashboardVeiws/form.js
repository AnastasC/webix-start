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
                        const table = $$("films_datatable");

                        if( form.validate() ) {
                            const formValues = form.getValues();
                            let message = "Film was added!";
                            
                            if( formValues.id ) {
                                table.updateItem(formValues.id, formValues);
                                message = "Film was updated!";
                            }
                            else {
                                table.add(formValues); 
                            };
                            form.clear();
                            webix.message(message);
                        };
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