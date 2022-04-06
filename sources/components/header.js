webix.ui({
    view: "popup",
    id: "profile_popup",
    width: 300,
    body:{
      view: "list", 
      data: [
        { 
            id: "1",
            name: "Settings",
        },
        { 
            id: "2",
            name: "Log out",
        },
      ],
      template: "#name#",
      autoheight: true,
      select: true,
    },
});

const header = {
    height: 50,
    paddingX: 10,
    view: "toolbar",
    css: "webix_dark",
    elements: [
        { 
            view: "label",
            label: "My App",
            css: "label_header",
        },
        {},
        { 
            view: "button",
            label: "Profile",
            width: 150,
            type: "icon", 
            icon: "wxi-user",
            css: "webix_transparent",
            popup: "profile_popup",
        },
    ],
};

export default header;