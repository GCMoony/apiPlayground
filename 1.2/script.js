async function getData() {
  const res = await fetch("../assets/FalloutNVSteamStats.csv");
  const data = await res.text();
  const header = data.split("\r\n").slice(0, 1).toString().split(",");
  const rows = data.split("\r\n").slice(1);
  // console.log(header);
  const table = {
    theader: header,
    trows: [],
  };
  for (let row of rows) {
    let columns = stringHelper(row.toString());
    table.trows.unshift(columns);
  }
  createGraph(table);
}

function createGraph(aTable) {
  const ctx = document.getElementById("statChart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: aTable.trows.map((x) => x[0]),
      datasets: [
        {
          label: "Peak Amount of Players this Month",
          data: aTable.trows.map((y) => {
            // console.log(y[4]);
            return y[4];
          }),
        },
        {
          label: "Average Amount of Players this Month",
          data: aTable.trows.map((z) => {
            // console.log(z[1]);
            return z[1];
          }),
          type: "line",
          order: 1,
        },
      ],
    },
  });
}

function stringHelper(aString) {
  /*
        A helper method to split the CSV data into columns without splitting within quotation marks
    */
  //  console.log(aString);
  let words = [];
  let word = "";
  let inQuotes = false;
  for (let i = 0; i < aString.length; i++) {
    let aChar = aString[i];
    if (aChar != ",") {
      if (aChar == '"') {
        inQuotes = !inQuotes;
      } else {
        word += aChar;
      }
    } else {
      if (inQuotes) {
        if (aChar != ",") {
          word += aChar;
        }
      } else {
        words.push(word);
        word = "";
      }
    }
  }
  words.push(word);
  // console.log("In stringHelper: ");
  // console.log(words)
  return words;
}

let myTable = getData().catch((err) => {
  console.error(err);
});
