const largeOrangeUpChevron = `
  before:absolute before:content-[''] 
  before:-top-[16px] before:left-1/2 
  before:h-1 before:w-2.5 before:-ml-2.5 
  before:bg-orange-400 before:skew-y-[150deg]
  after:absolute after:content-[''] 
  after:-top-[16px] after:left-1/2 
  after:h-1 after:w-2.5 
  after:bg-orange-400 after:skew-y-[-150deg]`;

const largeLeftOrangeUpChevron = `
  before:absolute before:content-[''] 
  before:-top-[16px] before:left-2.5
  before:h-1 before:w-2.5 before:-ml-2.5 
  before:bg-orange-400 before:skew-y-[150deg]
  after:absolute after:content-[''] 
  after:-top-[16px] after:left-2.5
  after:h-1 after:w-2.5 
  after:bg-orange-400 after:skew-y-[-150deg]`;

const orangeUnderline = `
  after:absolute after:content-[''] 
  after:border-orange-500 after:border-2 
  after:w-28 after:left-0 after:bottom-0`;

const logoOrangeLines = `
  before:absolute before:content-[''] before:bg-orange-500
  before:w-1 before:h-[65px] 990:before:h-[70px] before:-top-3.5 before:-left-2
  after:absolute after:content-[''] after:bg-orange-500 
  after:w-[65px] 990:after:w-[70px] after:h-1 after:-top-2 after:-left-3.5`

export { largeOrangeUpChevron, orangeUnderline, logoOrangeLines, largeLeftOrangeUpChevron };
