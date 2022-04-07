const usersList = {
    view: "list",
    id: "usersList",
    template: `#name# from #country#  <span style="float:right;" class='webix_icon wxi-close'></span>`,
    select: true,
    editable: true,
    onClick: {
        "wxi-close": (e, id) => $$("usersList").remove(id),
    },
};

export default usersList;