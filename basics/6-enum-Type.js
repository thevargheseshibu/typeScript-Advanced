// Numeric Enums
// PascalCase
// camelCase
var RollNumbers;
(function (RollNumbers) {
    RollNumbers[RollNumbers["John"] = 0] = "John";
    RollNumbers[RollNumbers["Kelly"] = 1] = "Kelly";
    RollNumbers[RollNumbers["Sandra"] = 2] = "Sandra";
    RollNumbers[RollNumbers["Joseph"] = 3] = "Joseph";
    RollNumbers[RollNumbers["Samantha"] = 4] = "Samantha";
})(RollNumbers || (RollNumbers = {}));
// console.log(RollNumbers);
// enum RollNumbers {
//   John = 1,
//   Kelly,
//   Sandra,
//   Joseph,
//   Samantha,
// }
// const enum RollNumbers {
//   John = 1,
//   Kelly,
//   Sandra,
//   Joseph,
//   Samantha,
// }
// let studentRollNumber1: RollNumbers = RollNumbers.Sandra;
// let studentRollNumber2: RollNumbers = RollNumbers.Samantha;
// console.log(studentRollNumber1);
// console.log(studentRollNumber2);
// String Enum Types
// const enum StudentDetails {
//   Name = "John",
//   Major = "Arts",
// }
// let studentName: StudentDetails = StudentDetails.Name;
// let studentMajor: StudentDetails = StudentDetails.Major;
// console.log(studentName, studentMajor);
// Heterogeneous Enums
// const enum StudentDetails {
//   ID = 1,
//   Name = "John",
//   Major = "Arts",
// }
// let studentID: StudentDetails = StudentDetails.ID;
// let studentName: StudentDetails = StudentDetails.Name;
// let studentMajor: StudentDetails = StudentDetails.Major;
// console.log(`${studentID}- ${studentName} has a major in ${studentMajor}`);
