const SvgWrapper = props => {
  const { size, color, d } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" {...props}>
      <path fill={color} stroke={color} d={d} />
    </svg>
  );
};

export default SvgWrapper;
