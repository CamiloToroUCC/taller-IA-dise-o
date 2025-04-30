"use client"

import { useEffect, useRef } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const StatisticsChart = () => {
  const chartRef = useRef<any>(null)

  const data = {
    labels: ["Oct 17", "Oct 18", "Oct 19", "Oct 20", "Oct 21"],
    datasets: [
      {
        label: "Income",
        data: [3200, 3300, 3450, 3650, 3600],
        borderColor: "#10b981",
        backgroundColor: "transparent",
        tension: 0.4,
        pointBackgroundColor: "#10b981",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
      },
      {
        label: "Expenses",
        data: [1100, 1300, 1200, 1280, 1350],
        borderColor: "#ef4444",
        backgroundColor: "transparent",
        tension: 0.4,
        pointBackgroundColor: "#ef4444",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
      },
    ],
  }

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [5, 5],
          color: "#f3f4f6",
        },
        ticks: {
          callback: (value) => "$" + value,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "white",
        titleColor: "#6b7280",
        bodyColor: "#111827",
        borderColor: "#e5e7eb",
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: $${context.parsed.y}`,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  }

  useEffect(() => {
    // Highlight the current point (Oct 20)
    if (chartRef.current) {
      const chart = chartRef.current

      // Add a custom point for Oct 20 (index 3)
      if (chart.data.datasets[0].pointRadius instanceof Array) {
        chart.data.datasets[0].pointRadius[3] = 6
      } else {
        chart.data.datasets[0].pointRadius = [0, 0, 0, 6, 0]
      }

      chart.update()
    }
  }, [])

  return <Line ref={chartRef} data={data} options={options} />
}

export default StatisticsChart
