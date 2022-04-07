const usersChart = {
    view:"chart",
    type:"bar",
    id: "usersChart",
    width:600,
    height:250,
    value:"#age#",
    gradient:"falling",
    color:"#b9a8f9",
    radius:0,
    alpha:0.5,
    border:true,
    barWidth:70,
    xAxis:{
      template:"#age#",
    },
    // yAxis:{
    //   start:0,
    //   end:100,
    //   step:10,
    //   template:function(obj){
    //     return (obj%20?"":obj)
    //   }
    // },
};

export default usersChart;