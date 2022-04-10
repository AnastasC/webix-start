const categories = new webix.DataCollection({
    url: "./datas/categories.js",
});

const countries = new webix.DataCollection({
    url: "./datas/countries.js",
})

export default { categories,countries };