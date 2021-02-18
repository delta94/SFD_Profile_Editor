// Original code: https://stackoverflow.com/a/6573119/9449426
// If you changes _Rixits, make sure the characters won't be encoded in url params
// https://stackoverflow.com/questions/1455578/characters-allowed-in-get-parameter
// prettier-ignore
const _Rixits =
  //   0       8       16      24      32      40      48      56     63
  //   v       v       v       v       v       v       v       v      v
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY~+/";
// You have the freedom, here, to choose the glyphs you want for
// representing your base-64 numbers. The ASCII encoding guys usually
// choose a set of glyphs beginning with ABCD..., but, looking at
// your update #2, I deduce that you want glyphs beginning with
// 0123..., which is a fine choice and aligns the first ten numbers
// in base 64 with the first ten numbers in decimal.

// This cannot handle negative numbers and only works on the
//     integer part, discarding the fractional part.
// Doing better means deciding on whether you're just representing
// the subset of javascript numbers of twos-complement 32-bit integers
// or going with base-64 representations for the bit pattern of the
// underlying IEEE floating-point number, or representing the mantissae
// and exponents separately, or some other possibility. For now, bail

export const radix64 = {
  fromNumber: function (number: number) {
    if (
      isNaN(Number(number)) ||
      number === null ||
      number === Number.POSITIVE_INFINITY
    )
      throw new Error("The input is not valid");
    if (number < 0) throw new Error("Can't represent negative numbers now");

    let result = "";
    let rixit; // like 'digit', only in some non-decimal radix
    let residual = Math.floor(number);

    while (true) {
      rixit = residual % 64;
      result = _Rixits.charAt(rixit) + result;
      residual = Math.floor(residual / 64);

      if (residual === 0) break;
    }
    return result;
  },

  toNumber: function (rixits: string) {
    let result = 0;
    const rixitsArr = rixits.split("");
    for (let e = 0; e < rixitsArr.length; e++) {
      result = result * 64 + _Rixits.indexOf(rixitsArr[e]);
    }
    return result;
  },
};
