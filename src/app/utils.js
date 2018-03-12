
const emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;

// Matches 1-(123)-123-1234 | 123 123 1234 | 1-800-ALPHNUM
// Non-Matches 1.123.123.1234 | (123)-1234-123 | 123-1234
const phoneRegex = /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/;

String.prototype.isEmail = function () {
  return this.match(emailRegex)
};

String.prototype.isValidPhone = function () {
  return this.match(phoneRegex)
};
