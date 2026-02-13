"use client";

import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";
import styled from "styled-components";

interface PieChartProps {
  datas?: {
    labels?: string[];
    income: number[];
    colors?: string[];
  };
}

const ChartWrapper = styled.div`
  width: 100%;
`;

export default function PieChart({ datas }: PieChartProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const chartData: ChartData<"pie"> = {
      labels: datas?.labels,

      datasets: [
        {
          data: datas?.income ?? [],
          backgroundColor: datas?.colors,
        },
      ],
    };

    const chartOptions: ChartOptions<any> = {
      responsive: true,

      plugins: {
        legend: {
          display: true, //for shoing labels
          position: "top" as const,
        },
        tooltip: {
          enabled: true,
        },
      },
    };

    chartInstance.current = new Chart(chartRef.current, {
      type: "pie",
      data: chartData,
      options: chartOptions,
    });

    return () => {
      chartInstance.current?.destroy();
    };
  }, [datas]);

  return (
    <ChartWrapper className="flex justify-center h-60 w-70">
      <canvas ref={chartRef} className="" />
    </ChartWrapper>
  );
}
