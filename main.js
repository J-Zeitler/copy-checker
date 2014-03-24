function textCheck() {

  console.log("running text check");
  
  sequenceLength = $("#seqLength")[0].value;

  var text1 = $("#text1")[0].value.toLowerCase();
  var text2 = $("#text2")[0].value.toLowerCase();

  var tokenized1 = text1.split(" ");
  var tokenized2 = text2.split(" ");

  var resTok1 = [];
  var resTok2 = [];

  var resContainer = $("#res");
  resContainer.html("");

  // text 1 vs text 2
  for (var begin = 0; begin < tokenized1.length - sequenceLength; ++begin) {
    for (var i = 0; i < tokenized2.length - sequenceLength; ++i) {

      // buffers aligned -> compare words
      for (var word = 0; word < sequenceLength; ++word) {
        if (tokenized1[begin+word] == tokenized2[i+word]) {
          resTok1.push(tokenized1[begin+word]);
        }
      }

      if (resTok1.length == sequenceLength) {
        var match = "";
        for (var word = 0; word < sequenceLength; ++word) {
          match += resTok1[word] + " ";
        }
        console.log("match: " + match);
        resContainer.append("<p>" + match + "<p>");
      }

      resTok1 = [];

    }
  }
}