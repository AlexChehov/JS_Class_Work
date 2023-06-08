import fs from "fs";

fs.mkdirSync("folder");

fs.writeFileSync("folder/text.txt","Hello fron node.js!!!");
fs.writeFileSync("text2.txt","Hello fron node.js2!!!");

fs.writeFile("Text3.txt", "Hello 3", () => {
    console.log("File was created!!!")
});
