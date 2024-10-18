const pagesToExcludeForHeader = (pathname: string) =>
  [""].some((a: string) => pathname?.includes(a));

const pagesToExcludeForFooter = (pathname: string) =>
  [""].some((a: string) => pathname?.includes(a));

export { pagesToExcludeForHeader, pagesToExcludeForFooter };
