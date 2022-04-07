const headerPopup = {
    view: "popup",
    id: "profile_popup",
    width: 300,
    body:{
        view: "list", 
        data: [
          { 
            id: "popup_list_settings",
            name: "Settings",
          },
          { 
            id: "popup_list_logOut",
            name: "Log out",
          },
        ],
        template: "#name#",
        autoheight: true,
        select: true,
    },
};

export default headerPopup;