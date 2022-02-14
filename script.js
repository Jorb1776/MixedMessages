const getNames = () => {
  let fs = require("fs");
  let text = fs.readFileSync("./namelist.txt", "utf-8");
  let textByLine = text.split(",");

  return textByLine[Math.floor(Math.random() * textByLine.length)];
};

const getGender = () => {
  let gender = [
    "Male",
    "Female",
    "Agender",
    "Bigender",
    "Gender Fluid",
    "Intersex",
  ];

  return gender[Math.floor(Math.random() * gender.length)];
};

const getDisposition = () => {
  let disposition = [
    "Indifferent",
    "Friendly",
    "Hostile",
    "Bored",
    "Secretive",
    "Lonesome",
    "Snobbish",
    "Uncomfortable",
    "Unsteady",
    "Suspicious",
    "Angry",
    "Amused",
    "Bitter",
    "Desperate",
    "Drowsy",
    "Short-tempered",
    "Stoned",
    "Happy",
    "Busy",
    "Angry",
  ];
  return disposition[Math.floor(Math.random() * disposition.length)];
};
const npcFactory = (npcName, npcGender, npcDisposition) => {
  return {
    npcName: npcName,
    npcGender: npcGender,
    npcDisposition: npcDisposition,
  };
};

let npcArray = [];
for (let i = 0; i < 10; i++) {
  npcArray.push(npcFactory(getNames(), getGender(), getDisposition()));
}
for (let i = 0; i < npcArray.length; i++) {
  console.log(
    npcArray[i].npcName +
      " is a " +
      npcArray[i].npcGender +
      " who is " +
      npcArray[i].npcDisposition
  );
}
