export function Background() {
  return (
    <div aria-hidden className="site-bg">
      <svg
        className="site-rings"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="var(--c-ring)" strokeWidth="1">
          {Array.from({ length: 20 }, (_, index) => (
            <circle key={index} cx="600" cy="944" r={56 * (index + 1)} vectorEffect="non-scaling-stroke" />
          ))}
        </g>
      </svg>
    </div>
  );
}
