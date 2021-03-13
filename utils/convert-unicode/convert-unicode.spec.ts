import { convertUnicode } from ".";

describe("convert-unicode", () => {
  it("should return the string ", () => {
    const str = "Vinayak Hegde";
    expect(convertUnicode(str)).toBe(str);
  });
  it("should return the string with html tags included", () => {
    const str = "<b>ABC Company US/ABC Company Worldwide<\\b>";
    expect(convertUnicode(str)).toBe(str);
  });
  it("should convert the unicode string", () => {
    const str = "Leitet mich zu der Seite f\\u00fcr {0} weiter.";
    expect(convertUnicode(str)).toBe(
      "Leitet mich zu der Seite für {0} weiter."
    );
  });
  it("should convert the unicode string with html tags included", () => {
    const str = "\\u00a9 {0} <span>Vinayak Hegde Licensing LLC.</span>";
    expect(convertUnicode(str)).toBe(
      "© {0} <span>Vinayak Hegde Licensing LLC.</span>"
    );
  });
  it("should convert russian letters", () => {
    const str =
      "\\u041f\\u0440\\u0438\\u043d\\u044f\\u0442\\u044c \\u0423\\u0441\\u043b\\u043e\\u0432\\u0438\\u044f \\u0438 \\u043f\\u043e\\u043b\\u043e\\u0436\\u0435\\u043d\\u0438\\u044f";
    expect(convertUnicode(str)).toBe("Принять Условия и положения");
  });
  it("should convert uppercased HTML entities", () => {
    const str = "HEY! WE THINK YOU&APOS;RE IN HET VERENIGD KONINKRIJK.";
    expect(convertUnicode(str)).toBe(
      "HEY! WE THINK YOU'RE IN HET VERENIGD KONINKRIJK."
    );
  });
  it("should convert the pipe character", () => {
    const str = " Clothing &#124; footware &#124; Vinayak Hegde";
    expect(convertUnicode(str)).toBe(" Clothing | footware | Vinayak Hegde");
  });
  it("should convert the & character", () => {
    const str = " Clothing &amp; footware &amp; Vinayak Hegde";
    expect(convertUnicode(str)).toBe(" Clothing & footware & Vinayak Hegde");
  });
  it("should convert the apos character", () => {
    const str = " Clothing &#x27; footware &#x27; Vinayak Hegde";
    expect(convertUnicode(str)).toBe(" Clothing ' footware ' Vinayak Hegde");
  });
});
