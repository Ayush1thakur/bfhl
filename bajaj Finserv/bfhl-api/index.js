const express = require("express");
const app = express();

app.use(express.json());

function isAlpha(char) {
  return /^[a-zA-Z]+$/.test(char);
}

function isNum(str) {
  return !isNaN(str);
}

function isSpecial(char) {
  return !isAlpha(char) && !isNum(char);
}

function toAlternatingCaps(str) {
  let result = "";
  let useUpper = true;
  for (let ch of str) {
    result += useUpper ? ch.toUpperCase() : ch.toLowerCase();
    useUpper = !useUpper;
  }
  return result;
}

app.route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ status_code: 200 });
  })
  .post((req, res) => {
    const data = req.body.data || [];

    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];
    const special_characters = [];

    let totalSum = 0;
    let alphabetString = "";

    for (const item of data) {
      if (isNum(item)) {
        const num = parseInt(item);
        totalSum += num;
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
      } else if (isAlpha(item)) {
        alphabets.push(item.toUpperCase());
        alphabetString += item;
      } else {
        special_characters.push(item);
      }
    }

    const reversedAlphabet = alphabetString.split("").reverse().join("");
    const concat_string = toAlternatingCaps(reversedAlphabet);

    res.status(200).json({
      is_success: true,
      user_id: "ayush_thakur_05042005",
      email: "ayush205.be22@chitkara.edu.in",
      roll_number: "2210990205",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: totalSum.toString(),
      concat_string,
    });
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
