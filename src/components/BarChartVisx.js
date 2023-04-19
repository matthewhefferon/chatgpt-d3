import React from "react";
import { Bar } from "@visx/shape";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";

const data = [
  { label: "A", value: 10 },
  { label: "B", value: 20 },
  { label: "C", value: 15 },
  { label: "D", value: 25 },
];

const width = 500;
const height = 300;
const margin = { top: 20, bottom: 60, left: 60, right: 20 };

function BarChartVisx() {
  const xScale = scaleBand({
    domain: data.map((d) => d.label),
    range: [margin.left, width - margin.right],
    padding: 0.2,
  });

  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map((d) => d.value))],
    nice: true,
    range: [height - margin.bottom, margin.top],
  });

  return (
    <div style={{ position: "relative" }}>
      <svg width={width} height={height}>
        {data.map((d) => (
          <Bar
            key={d.label}
            x={xScale(d.label)}
            y={yScale(d.value)}
            height={height - margin.bottom - yScale(d.value)}
            width={xScale.bandwidth()}
            fill="#69b3a2"
            onMouseOver={(event) => {
              const left = event.pageX;
              const top = event.pageY;
            }}
          />
        ))}
        <AxisBottom
          top={height - margin.bottom}
          scale={xScale}
          tickFormat={(d) => d}
          tickStroke="#fff"
          tickLabelProps={() => ({
            textAnchor: "middle",
            fontSize: 10,
            fontFamily: "Arial",
            fill: "#fff",
          })}
          stroke="#fff"
        />
        <AxisLeft
          left={margin.left}
          scale={yScale}
          numTicks={5}
          tickStroke="#fff"
          tickLabelProps={() => ({
            textAnchor: "end",
            fontSize: 10,
            fontFamily: "Arial",
            dx: "-0.25em",
            dy: "0.25em",
            fill: "#fff",
          })}
          stroke="#fff"
        />
      </svg>
    </div>
  );
}

export default BarChartVisx;
