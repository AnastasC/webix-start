import datatable from "./dashboardVeiws/datatable.js";
import form from "./dashboardVeiws/form.js";
import usersList from "./usersVeiws/usersList.js";
import usersChart from "./usersVeiws/chart.js";
import usersForm from "./usersVeiws/usersForm.js";
import treeTable from "./productsVeiws/treeTable.js";
import tabbar from './dashboardVeiws/tabbar.js';
import adminsDatatable from "./adminsVeiws/adminsDatatable.js";
import adminsForm from "./adminsVeiws/adminsForm.js";

const cell = {
    view: "multiview",
    cells:[
        { 
            id: "Dashboard",
            cols: [ 
                {
                    rows: [
                        tabbar,
                        datatable,
                    ],
                },
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
            rows: [
                treeTable,
            ],
        },
        { 
            id: "Admin",
            rows: [
                adminsForm,
                adminsDatatable,
            ],
        },
    ],
};

export default cell;