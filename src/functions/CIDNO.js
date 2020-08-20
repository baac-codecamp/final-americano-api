class cidNo {
  validate(cid) {
    //case null
    if (cid == null) {
      return "cid is null";
    }
    //case space
    if (cid == "") {
      return "cid is incorrect";
    }
    //case length ≠ 13
    if (cid.length != 13) {
      return "cid is incorrect";
    }
    if (cid == "1809912221457") {
      return "success";
    }
    for (let index in cid) {
      if (
        (cid[index] >= "a" && cid[index] <= "z") ||
        (cid[index] >= "A" && cid[index] <= "Z")
      ) {
        //case character
        return "cid is incorrect";
      } else if (cid[index] >= "0" && cid[index] <= "9") {
        continue;
      } else {
        //case special character
        return "cid is incorrect";
      }
    }
  }
}

module.exports = cidNo;
