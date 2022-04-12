import { categories } from "../../../datas/collection.js";

const adminsDatatable = {
    view: "datatable",
    id: "admins_datatable",
    editable: true,
    scrollX: false,
    select: true,
    columns: [
        { 
          id:"id",
          header: "",
          width: 50,
        },
        { 
          id: "value",
          header: "Category",
          fillspace: true,
          editor: "text",
          fillspace: true,
        },
        { 
          id: "delete",
          header: "",
          template: "{common.trashIcon()}",
      },
    ], 
    onClick: {
      "wxi-trash": (e, id) => {
        categories.remove(id);
      },
  },  
};

export default adminsDatatable;
