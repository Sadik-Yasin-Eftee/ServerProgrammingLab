const fs = require("fs");

const getCV = (req, res) => {
  
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  languages = fs.readFileSync("data/language",{ encoding: "utf-8"});
  skills = fs.readFileSync("data/skill",{ encoding: "utf-8"});
  experiences = fs.readFileSync("data/skill", { encoding: "utf-8"});
  
  educations = JSON.parse(String(educations));
  languages = JSON.parse(String(languages));
  skills = JSON.parse(String(skills));
  experiences = JSON.parse(String(experiences));


  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  lang = [];
  
  for (let key in languages){
    lang.push(languages[key])
  }

  skill = [];
  
  for (let key in skills){
    skill.push(skills[key])
  }

  experience = [];
  
  for (let key in experiences){
    experience.push(experiences[key])
  }

  res.render("cv", { name: "Sadik Yasin", educations: edus, languages: lang, skills: skill, experiences: experience});
};

module.exports = { getCV: getCV };
