import footer from './sources/components/footer.js';
import main from './sources/components/main.js';
import header from './sources/components/header.js';
import { bindDatatebele,
    registerFilterToDatateble,
    syncAdminsDatateble,
    syncUsersListToCollection,
    syncUsersChartToCollection } from "./sources/actions/actions.js";

webix.protoUI({
    name: "editablelist"
}, webix.EditAbility, webix.ui.list);

webix.ui({
    view: "layout",
    rows: [
        header,
        main,
        footer,
    ],
});

bindDatatebele();
registerFilterToDatateble();
syncAdminsDatateble();
syncUsersListToCollection();
syncUsersChartToCollection();