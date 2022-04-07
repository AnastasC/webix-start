const usersList = {
    view: "list",
    id: "usersList",
    template: "#name# from #country# {common.trashIcon()}",
    select: true,
    editable: true,
    onClick: {
        "wxi-trash": (e, id) => $$("usersList").remove(id),
    },
};

export default usersList;