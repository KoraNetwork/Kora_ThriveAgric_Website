
const emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;

// International format +123456789012
const phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d| 2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]| 4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;

String.prototype.isEmail = function () {
  return this.match(emailRegex)
};

String.prototype.isValidPhone = function () {
  return this.match(phoneRegex)
};

window.objectHasAnyProps = function (object) {
  let hasProp = false;

  if(Object.entries(object).length > 0) {
    Object.entries(object).forEach(item => hasProp = object[item[0]])
  }

  return Boolean(hasProp)
};
