const usersChart = {
  view: "chart",
  id: "users_chart",
  type: "bar",
  value: "#usersCount#",
  // value: "count",
  xAxis: {
    template: "#country#",
    title: "Country"
  },
  yAxis: {
    start: 0,
    end: 10,
    step: 2,
  },
};

export default usersChart;