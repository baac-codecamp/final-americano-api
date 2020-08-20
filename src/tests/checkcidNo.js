import chai from "chai";
import cidNo from "../functions/CIDNO";
const expect = chai.expect;

describe("Check MobileNo", function () {
  //test case null
  it("fail when cid = null, expect return cid is null", function () {
    let cid = null;
    let result = new cidNo().validate(cid);
    expect(result).to.equal("cid is null");
  });
  //test case space
  it('fail when cid = "", expect return cid is space', function () {
    let cid = "";
    let result = new cidNo().validate(cid);
    expect(result).to.equal("cid is incorrect");
  });
  //test case length ≠ 13
  it("fail when cid = 12345678901, expect return cid <> 13", function () {
    let cid = "12345678901";
    let result = new cidNo().validate(cid);
    expect(result).to.equal("cid is incorrect");
  });
  //test case charector
  it("fail when cid = 1099887784Abc, expect return mobileNo is a-z,A-Z", function () {
    let cid = "1099887784Abc";
    let result = new cidNo().validate(cid);
    expect(result).to.equal("cid is incorrect");
  });
  //test case special character
  it("fail when cid = 1809987888#&@, expect return cid is specual string", function () {
    let cid = "1809987888#&@";
    let result = new cidNo().validate(cid);
    expect(result).to.equal("cid is incorrect");
  });
  //test case success
  it("success when cid = 1809912221457, expect return success", function () {
    let cid = "1809912221457";
    let cidno = new cidNo().validate(cid);
    expect(cidno).to.equal("success");
  });
});
