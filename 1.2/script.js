async function getData() {
    const res = await fetch("../assets/FalloutNVSteamStats.csv");
    const data = await res.text();
    const header = data.split("\r\n").slice(0, 1).toString().split(",");
    const rows = data.split("\r\n").slice(1);
    console.log(header);
    for(let row of rows) {
        let parsedRow = stringHelper(row.toString())
        let month = parsedRow[0];
        let avgPlayers = parsedRow[1];
        let playersGained = parsedRow[2];
        let percentGained = parsedRow[3];
        let peakPlayers = parsedRow[4];
        
    }
    
}

function stringHelper(aString) {
    /*
        A helper method to split the CSV data into columns without splitting within quotation marks
    */
    //  console.log(aString);
    let words = [];
    let word = "";
    let inQuotes = false;
    for(let i = 0; i < aString.length; i++) {
        let aChar = aString[i];
         if(aChar != ',') {
            if(aChar == "\"") {
                inQuotes = !inQuotes;
            }
            else{
                word += aChar;
            }
            
         }
         else {
            if(inQuotes) {
                word += aChar;
            }
            else {
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

getData()
    .catch(err => {
        console.error(err);
    })