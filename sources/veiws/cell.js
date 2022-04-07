import datatable from "./dashboardVeiws/datatable.js";
import form from "./dashboardVeiws/form.js";
import usersList from "./usersVeiws/listUsers.js";
import usersChart from "./usersVeiws/chart.js";
import usersForm from "./usersVeiws/usersForm.js";
import treeTable from "./products/treeTable.js";

const cell = {
    view: "multiview",
    cells:[
        { 
            id: "Dashboard",
            cols: [ 
                datatable,
                {
                    rows: [
                        form,
                        { },
                    ],
                },
            ],
        },
        {   
            id: "Users",
            rows: [
                usersForm,
                usersList,
                usersChart,       
            ],
        },
        { 
            id: "Products",
            treeTable,
        },
        { 
            id: "Locations",
            template: "",
        },
    ],
};

export default cell;