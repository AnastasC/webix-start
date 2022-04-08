const usersList = {
    view: "list",
    id: "usersList",
    template: `#name# from #country#  <span style="float:right;" class='webix_icon wxi-close'></span>`,
    select: true,
    editable: true,
    css: "users_list",
    url: "./datas/users.js",
    onClick: {
        "wxi-close": (e, id) => {
            webix.confirm({
                title: "Delete...",
                text: "Do you still want to delete this user?",
              }).then(
                  () => $$("usersList").remove(id),
            );
        },
    },
};

export default usersList;