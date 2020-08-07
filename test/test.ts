import exaltGradeDefault from "./exaltGradeDefault";


before(()=>{});

beforeEach(()=>{});

after(()=>{});

describe(getTestTitle("Test default grades exaltation"), () => {
  describe("Positive conditions for the package to pass", exaltGradeDefault);
  describe("Negative conditions for the package to pass", exaltGradeDefault);
});

describe(getTestTitle("Test grades exaltation for custom values"), () => {
  describe("Positive conditions for the package to pass", exaltGradeDefault);
  describe("Negative conditions for the package to pass", exaltGradeDefault);
});

function getTestTitle(title: string) {
  const size = 75;
  return `${'='.repeat(size)}\n  --- ${title} ${'-'.repeat(size - (title.length + 5))}\n  ${'-'.repeat(size)}`;
}