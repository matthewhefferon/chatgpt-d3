import React, { useState } from "react";
import * as d3 from "d3";

const Bard = () => {
  const [data, setData] = useState([
    {
      name: "January",
      value: 100,
    },
    {
      name: "February",
      value: 200,
    },
    {
      name: "March",
      value: 300,
    },
    {
      name: "April",
      value: 400,
    },
    {
      name: "May",
      value: 500,
    },
  ]);

  const svg = d3.select("svg");

  // Create the x-axis scale
  const xScale = d3.scaleBand()
    .range([0, svg.attr("width")])
    .padding(0.1);

  // Create the y-axis scale
  const yScale = d3.scaleLinear()
    .range([svg.attr("height"), 0])
    .domain([0, d3.max(data, d => d.value)]);

  // Create the bars
  const bars = svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xScale(d.name))
    .attr("y", d => yScale(0))
    .attr("width", xScale.bandwidth())
    .attr("height", d => yScale(d.value) - yScale(0));

  // Add animation to the bars
  bars.transition()
    .duration(500)
    .attr("y", d => yScale(0));

  // Add tooltips to the bars
  bars.on("mouseover", d => {
    d3.select(this)
      .attr("fill", "lightgray")
      .attr("stroke", "black")
      .attr("stroke-width", 1);
    const tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = d.name + " - " + d.value;
    tooltip.style.left = (d.x + xScale.bandwidth() / 2) + 10 + "px";
    tooltip.style.top = (d.y + yScale(d.value) / 2) + 10 + "px";
  })
    .on("mouseout", d => {
      d3.select(this)
        .attr("fill", "black")
        .attr("stroke", "none")
        .attr("stroke-width", 0);
      document.getElementById("tooltip").remove();
    });

  return (
    <div>
      <svg width="500" height="200"></svg>
      <div id="tooltip"></div>
    </div>
  );
};

export default Bard;