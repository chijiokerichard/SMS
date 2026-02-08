"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import "chart.js/auto";
import styled from "styled-components";

interface LineChartProps {
  data: {
    labels: string[];
    income: number[];
    // outcome?: number[];
  };
}

function LineChart({ data }: LineChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  const dashedGridLinesPlugin = {
  id: 'dashedGridLines',
  beforeDatasetsDraw(chart: any) {
    const { ctx, chartArea: { left, right }, scales: { y } } = chart;
    ctx.save();
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';

    y.ticks.forEach((_: any, index: number) => {
      const yPos = y.getPixelForTick(index);
      ctx.beginPath();
      ctx.moveTo(left, yPos);
      ctx.lineTo(right, yPos);
      ctx.stroke();
    });

    ctx.restore();
  }
};

  useEffect(() => {
    const chartCanvas = chartRef.current?.getContext("2d");

    if (chartCanvas) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const chartData: ChartData = {
        labels: data.labels,
        datasets: [
          
          {
            label: "Total Income",
            data: data.income,

            backgroundColor: "#000", // For fill color
            borderColor: "#000", // for wave line
            borderWidth: 2,
            pointRadius: 0,
            // pointBackgroundColor: "#6246E5",
            pointBorderColor: "#fff",

            tension: 0.4,
          },
            {
              label: "Total Outcome",
              data: [100,700, 400, 800,1000,380, 700,900,300,1002.3,1100,300.29],
              backgroundColor: "#151518b5", // For fill color
              // borderColor: "#D8B4FE",     // For line color
              // borderWidth: 2,
              pointRadius: 5,
              pointBackgroundColor: "#606061",
              pointBorderColor: "#120b0b",
            },
        ],
      };

      const chartOptions: ChartOptions = {
        responsive: true,
        borderColor: "transparent",
        scales: {
          x: {
            type: "category",

            grid: {
              display: false,
              color: "#13326f",
            },

            border: {
              display: true,
              dash: [3, 3],
            },
            ticks: {
              padding: 4,
              color: "#333",
              font: {
                weight: 500,
                size: 12,
                // family: `${plusJakata.className}`,
              },
            },
            offset: true,
          },
          y: {
            grid: {
              display: false,
              
            },
            position: "left", // Corrected to 'left'
            border: {
              display: false,
            },
            beginAtZero: true,
            ticks: {
              // padding: 2,
              stepSize: 300, //contring the line spacing
            },
          },
        },
        layout: {
          padding: {
            left: 20, // increase this for more space between Y labels and chart
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            // position: "bottom",
            // align: "center",
            display: false, //for label thick circle
            // labels: {
            //   boxHeight: 20,
            //   boxWidth: 20,
            //   useBorderRadius: true,
            //   borderRadius: 10,
            //   color: "#191919",
            //   textAlign: "center",
            //   font: {
            //     weight: 600,
            //     size: 12,
            //     lineHeight: "100%",
            //     // family: `${plusJakata.className}`,
            //   },

            // },
          },
          tooltip: {
            enabled: true,
          },
        },
      };

      chartInstance.current = new Chart(chartCanvas, {
        type: "bar",
        data: chartData,
        options: chartOptions,
        plugins:[dashedGridLinesPlugin]
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);
  const ChartStyle = styled.div`
    width: 100%;
    opacity: 1;
  `;
  return (
    <ChartStyle className="flex items-end mx-auto  justify-center flex-col">
      {/* <div className="w-full h-fit"> */}
      <canvas ref={chartRef} className="h-[400px] w-fit " />
      {/* </div> */}
    </ChartStyle>
  );
}

export default LineChart;