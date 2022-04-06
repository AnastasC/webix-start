import filmsSet from "../../datas/filmsSet.js"

const datatableMain = {
    view: "datatable",
    id: "films_datatable",
    data: filmsSet,
    autoConfig: true,
    scrollX: false,
    gravity: 2.2,     
};

export default datatableMain;