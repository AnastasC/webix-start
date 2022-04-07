import { DATA_LIST } from "../../datas/data.js";

const list = {
    view: "list",
    width: 200,
    scroll: false,
    data: DATA_LIST,
    css: "list_main",
    select: true,
    on: {
        onAfterSelect: function(id) { 
          $$(id).show();
        },
    },
};

export default list;