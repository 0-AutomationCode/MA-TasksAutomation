const express = require("express");
const axios = require("axios");
const fs = require("fs");
const moment = require("moment");

const app = express();
app.use(express.json());

const allStudentsObj = require("./../C11/Data/data2").data;
const repos = require("./data/logic/dataTest").data;
/* ============================ */
const GITHUB_API = "https://api.github.com";
const OLD_TOKEN = "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";
let TESTING_MODE = false;
// ! =========== GET ALL REPOS =================
const getAllRepoForOneStudent = async (student, token = OLD_TOKEN) => {
  var options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const endpoint = `${GITHUB_API}/orgs/${student.githubORG}/repos`;

  // console.log("URL:", endpoint);
  axios
    .get(endpoint, options)
    .then((response) => {
      const resultObj = {};

      TESTING_MODE && console.log(TESTING_MODE, response.data);

      response.data.forEach((e, i) => {
        const { name, private } = e;
        resultObj[name] = private ? "YES" : "NO";
      });

      student.repos = resultObj;

      // console.log("result TRUE: ", resultObj);
      return "DONEEEEEE";
    })
    .catch((err) => {
      console.log("ERR: ", student.displayName);
      console.log("ERR: ", err.code);
      console.log("ERR: ", err.response.status, err.response.data);
      // console.log("ERR: ", err);
    });
};

const getAllRepoForAllStudents = (obj) => {
  // console.log("HEREEEEEEEEEEEEEEEEEEEE", obj);
  for (const student in obj) {
    // console.log(student);
    getAllRepoForOneStudent(obj[student]);
  }
};

// TODO ============================
app.get("/getAllReposForOne", (req, res) => {
  // const newToken = req.query.token;
  // console.log(req.query.token);
  getAllRepoForOneStudent(allStudentsObj.B01_Moharib);
  res.json(allStudentsObj);
});
app.get("/getAllRepos", (req, res) => {
  // const newToken = req.query.token;
  // console.log(req.query.token);
  getAllRepoForAllStudents(allStudentsObj);
  res.json(allStudentsObj);
});

// !- important ============================

let lastFileCreated;

app.get("/createDataFile", (req, res) => {
  lastFileCreated = getTodayDate();
  fs.writeFile(
    `./data/${lastFileCreated}.js`,
    `
  // const repos=${allStudentsObj}
  const repos=${JSON.stringify(allStudentsObj)}
  `,
    function (err) {
      if (err) throw err;
      entireDatabase = allStudentsObj;
      console.log("Saved!");
      res.json({
        message: `CREATED DATA FILE WITH THE TITLE: ${lastFileCreated}`,
        data: allStudentsObj,
      });
    }
  );
});

app.get("/showDatabase", (req, res) => {
  lastFileCreated = getTodayDate();
  const entireData = require(`./data/DONE/${lastFileCreated}.js`).data;

  console.log("GET /");
  res.json(entireData);
});

let entireDatabase;

const getTodayDate = () => {
  /*
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let todayDate = `${year}-${month}-${day}`;
  console.log(todayDate); // "2023-10-19"
  */

  // let todayDate = moment().format("YYYY-MM-DD hh-mm-ss A");
  let todayDate = moment().format("YYYY-MM-DD");

  console.log(todayDate);
  return todayDate;
};

// getTodayDate()

// remove from `allStudents` quit students
const quitStudents = [
  "A05_Anas",
  "A09_Deyaa",
  "A18_Sondos",

  "B05_IbraheemS",
  "B14_Sameer",
  "B16_Tariq",

  "G07_Maryam",
  "G08_Mahmoud",
  "G09_AbdAlRahman",
  "G11_Mousa",
];

quitStudents.forEach((studentDisplayName, i) => {
  delete allStudentsObj[studentDisplayName];
});

// Logs
// console.log(allStudentsObj);
TESTING_MODE = true;
getAllRepoForOneStudent(allStudentsObj.B01_Moharib);
// getAllRepoForAllStudents(allStudentsObj);
// console.log(allStudentsObj);

/* ============================ */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("SERVER IS WORKING ON http://localhost:" + PORT);
});
