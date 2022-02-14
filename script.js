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

const getWeapon = () => {
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

// const npc = {
//   _chars: {
//     names: [],
//     genders: [],
//     dispositions: [],
//   },

//   get names() {
//     return this._chars.names;
//   },
//   set names(data){
//     this._chars.names = data;
//   },

//   get genders(){
//     return this._chars.genders;
//   },
//   set genders(){
//     this._chars.genders = data;
//   },

//   get dispositions(){
//     return this._chars.dispositions;
//   },
//   set dispositions(){
//     this._chars.dispositions = data;
//   },

//   get chars(){
//     return {
//       names: this.names,
//       genders: this.genders,
//       dispositions: this.dispositions
//     };
//   },

//   addNpc(npcName, npcGender, npcDisposition){
//     const = npc = {
//       npcName: npcName,
//       npcGender: npcGender,
//       npcDisposition: npcDisposition,
//     };
//     return this._chars[npcName].push(npc);
//   },

//   getRandomNpc(npcName)
// };
