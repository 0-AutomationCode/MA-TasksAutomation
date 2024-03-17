// import { CohortNumber } from "./../CHANGES";
// console.log(CohortNumber)
// TODO CHANGE HERE
COHORT_NUMBER = "C11-";
const studentsStr = `
A01_Hasan	AhmadAzmii
A02_Abu_Al_Kheir	AhmadAbulkhairr
A03_Ibrahim	ibbrahimsakijha
A04_Suliman	jehadsuliman
A06_Khaled	KhaledOdehh
A07_Mahmoud	MahmoudNaserAldeen
A08_Mohtaseb	MohammedMohtaseb
A09_Natali	NataliTawalbehh
A10_Omar	OmarrJaser
A11_Rawan	Rawankhattab
B03_Abu_Ghoush	ahmadabughoush
B04_Smadi	ahmadalsmadii
B05_Bashar	Bashar-zakarneh
B06_Basheer	BasheerBino
B07_Emad	emadnahhas
B08_Hamam	HamammAlshamii
B09_Hisham	HishambassamB
B10_Kareem	KareemNabulsi
B11_Loai	LoaiMaher
B12_Jabr	MohammedJabrr
B13_Montaser	montaserhatamleh
B14_Motaz	MotazAlfarran
B15_Osama	OsamaAlrwajbeh
B16_Randa	Randarawashdeh
B17_Yaser	yaseralakhras
B18_Yazan	YazanAlshoubakii
`;

const studentsArray = [
  "A01_Hasan	AhmadAzmii",
  "A02_Abu_Al_Kheir	AhmadAbulkhairr",
  "A03_Ibrahim	ibbrahimsakijha",
  "A04_Suliman	jehadsuliman",
  "A06_Khaled	KhaledOdehh",
  "A07_Mahmoud	MahmoudNaserAldeen",
  "A08_Mohtaseb	MohammedMohtaseb",
  "A09_Natali	NataliTawalbehh",
  "A10_Omar	OmarrJaser",
  "A11_Rawan	Rawankhattab",
  "B03_Abu_Ghoush	ahmadabughoush",
  "B04_Smadi	ahmadalsmadii",
  "B05_Bashar	Bashar-zakarneh",
  "B06_Basheer	BasheerBino",
  "B07_Emad	emadnahhas",
  "B08_Hamam	HamammAlshamii",
  "B09_Hisham	HishambassamB",
  "B10_Kareem	KareemNabulsi",
  "B11_Loai	LoaiMaher",
  "B12_Jabr	MohammedJabrr",
  "B13_Montaser	montaserhatamleh",
  "B14_Motaz	MotazAlfarran",
  "B15_Osama	OsamaAlrwajbeh",
  "B16_Randa	Randarawashdeh",
  "B17_Yaser	yaseralakhras",
  "B18_Yazan	YazanAlshoubakii",
];

const studentsObj = {};
const studentsArray2 = [];
const studentsArray3 = studentsArray.forEach((student) => {
  const [displayName, githubUsername] = student.split("\t");

  studentsArray2.push({
    displayName,
    githubORG: COHORT_NUMBER + githubUsername,
    githubUsername,
  });
  studentsObj;
});

// console.log("AAA", studentsArray3);
// console.log("AAA", studentsArray2);
// !--- final data

//  TODO ============================

const createStudents = (type, names, usernames) => {
  let result;

  if (type == "obj") {
    result = {};
    names.forEach((student, i) => {
      result[student] = {
        displayName: student,
        githubORG: COHORT_NUMBER + usernames[i],
        githubUsername: usernames[i],
      };
    });
  } else {
    result = [];
    names.forEach((student, i) => {
      result.push({
        displayName: student,
        githubORG: COHORT_NUMBER + usernames[i],
        githubUsername: usernames[i],
      });
    });
  }
  return result;
};

const studentsDisplayNames = [
  "A01_Hasan",
  "A02_Abu_Al_Kheir",
  "A03_Ibrahim",
  "A04_Suliman",
  "A05_Al_Eassa",
  "A06_Khaled",
  "A07_Mahmoud",
  "A08_Mohtaseb",
  "A09_Natali",
  "A10_Omar",
  "A11_Rawan",
  "B01_Moharib",
  "B02_Abdullah",
  "B03_Abu_Ghoush",
  "B04_Smadi",
  "B05_Bashar",
  "B06_Basheer",
  "B07_Emad",
  "B08_Hamam",
  "B09_Hisham",
  "B10_Kareem",
  "B11_Loai",
  "B12_Jabr",
  "B13_Montaser",
  "B14_Motaz",
  "B15_Osama",
  "B16_Randa",
  "B17_Yaser",
  "B18_Yazan",
  "B19_Yahia",
];

const githubUsernames = [
  "AhmadAzmii",
  "AhmadAbulkhairr",
  "ibbrahimsakijha",
  "jehadsuliman",
  "jihadaleassa",
  "KhaledOdehh",
  "MahmoudNaserAldeen",
  "MohammedMohtaseb",
  "NataliTawalbehh",
  "OmarrJaser",
  "Rawankhattab",
  "abdalrahmanmhareb",
  "Abdullahrbabah",
  "ahmadabughoush",
  "ahmadalsmadii",
  "Bashar-zakarneh",
  "BasheerBino",
  "emadnahhas",
  "HamammAlshamii",
  "HishambassamB",
  "KareemNabulsi",
  "LoaiMaher",
  "MohammedJabrr",
  "montaserhatamleh",
  "MotazAlfarran",
  "OsamaAlrwajbeh",
  "Randarawashdeh",
  "yaseralakhras",
  "YazanAlshoubakii",
  "yahiaalsaarhan",
];

const allStudents = createStudents(
  "obj",
  studentsDisplayNames,
  githubUsernames
);
console.log("BBB", allStudents);
