import {expect} from "chai";
import {exaltGrade} from "../../src/exaltGrade";

export default () => {
  
  it("0 gives 0", async() => {
    const exaltedAnswer: any = exaltGrade(0);
    expect(exaltedAnswer.value).to.equal(0);
  });
  
  it("5 gives 5", async() => {
    const exaltedAnswer: any = exaltGrade(5);
    expect(exaltedAnswer.value).to.equal(5);
  });
  
  it("Grades are always better with 5 random numbers", async() => {
    // todo
    expect(1).to.equal(1);
  });
  
  it("Order is respected with 5 random numbers", async() => {
    // todo
    expect(1).to.equal(1);
  });
  
}
