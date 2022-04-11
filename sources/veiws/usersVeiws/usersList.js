import { users } from "../../../datas/collection.js";

const usersList = {
    view: "editablelist",
    id: "users_list",
    template: `#name#, #age#, from #country#  <span style="float:right;" class='webix_icon wxi-close'></span>`,
    select: true,
    editable: true,
    editor: "text",
    editValue: "name",
    editaction: "dblclick",
    onClick: {
        "wxi-close": (e, id) => {
            webix.confirm({
                title: "Delete...",
                text: "Do you still want to delete this user?",
              }).then(
                  () => users.remove(id),
            );
        },
    },
    scheme: {
        $init: (obj) => obj.$css = obj.age < 26 ? "row_background" : "",
    },
    rules: {
        name: webix.rules.isNotEmpty,
    },
};

export default usersList;