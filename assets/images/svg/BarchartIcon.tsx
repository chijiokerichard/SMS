type BarChartIconProps = {
  size?: number
  color?: string
  className?: string
}

const BarChartIcon = ({
  size = 24,
  color = "currentColor",
  className,
}: BarChartIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {[
      8, 6, 10, 5, 9,
      7, 12, 6, 10, 7,
      9, 5, 11, 6, 8,
    ].map((h, i) => (
      <rect
        key={i}
        x={1 + i * 1.5}
        y={24 - h - 3}   // 👈 pushes bars down slightly
        width={1}
        height={h}
        rx={0.5}
      />
    ))}
  </svg>
)
export default BarChartIcon