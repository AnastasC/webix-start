import cell from "../veiws/cell.js";
import list from "../veiws/list.js";

const main = {
    cols: [
        {
            view: "layout",
            css: "list_layout_main",
            rows: [
                list,
                { },
                {  
                    template: `<span class="webix_icon wxi-check"></span> Connected`,
                    autoheight: true,
                    css: "template_connected",
                },
            ],
        },
        { view:"resizer"},
        cell,
    ],
};

export default main;