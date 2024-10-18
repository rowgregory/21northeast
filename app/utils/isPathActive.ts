const isPathActive = (path: string, segment: string) => {
  const segments = segment.split("/").filter(Boolean);
  return segments.some((seg) => path.includes(seg));
};

export default isPathActive;
