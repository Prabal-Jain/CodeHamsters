// const { exec } = require("child_process");
const childProcess = require("child_process");

// const executePy = (filepath) => {
//   return new Promise((resolve, reject) => {
//     exec(
//       `python ${filepath}`,
//       (error, stdout, stderr) => {
//         error && reject({ error, stderr });
//         stderr && reject(stderr);
//         resolve(stdout);
//       }
//     );
//   });
// };

function executePy(filepath) {

  return new Promise(function(resolve, reject) {
    try{
    childProcess.exec(`python ${filepath}`, function(error, standardOutput, standardError) {
      if (error) {
        console.log("error>>>>>>>>>>>>>>>>>",error)
        reject();
    
        return;
      }
    
      if (standardError) {
        console.log("standError",standardError)
        reject(standardError);
    
        return;
      }
    console.log("stroutput>>>>>>>>>>>>>>>",standardOutput)
      resolve(standardOutput);
    })}catch(error){
      console.log("errrrrooorrr>>>>>>>>>>>>>>>>")
    }
  })
}
module.exports = {
  executePy,
};
