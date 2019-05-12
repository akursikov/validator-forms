export const sanitize = str => (str ? str + '' : '');

export const isArray =
  Array.isArray ||
  function _isArray(val) {
    return (
      val != null &&
      val.length >= 0 &&
      Object.prototype.toString.call(val) === '[object Array]'
    );
  };
