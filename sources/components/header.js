import headerPopup from "../veiws/headerPopup.js"

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
        { },
        { 
            view: "button",
            label: "Profile",
            width: 150,
            type: "icon", 
            icon: "wxi-user",
            css: "webix_transparent",
            popup: headerPopup,
        },
    ],
};

export default header;