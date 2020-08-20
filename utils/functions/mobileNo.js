class MobileNo {
  validate(mobileNo) {
    //case null
    if (mobileNo == null) {
      return "mobileNo is incorrect";
    }
    //case space
    if (mobileNo == "") {
      return "mobileNo is incorrect";
    }
    for (let index in mobileNo) {
      if (mobileNo[0] != "0") {
        //case mobileNo[0] ≠ 0
        return "mobileNo is incorrect";
      } else if (
        (mobileNo[index] >= "a" && mobileNo[index] <= "z") ||
        (mobileNo[index] >= "A" && mobileNo[index] <= "Z")
      ) {
        //case character
        return "mobileNo is incorrect";
      } else if (mobileNo[index] >= "0" && mobileNo[index] <= "9") {
        continue;
      } else {
        //case special character
        return "mobileNo is incorrect";
      }
    }
    //case length ≠ 10
    if (mobileNo.length != 10) {
      return "mobileNo is incorrect";
    }
    //case success
    if (mobileNo == "0812345678") {
      return "success";
    }
  }
}

module.exports = MobileNo;
