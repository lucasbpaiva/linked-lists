import { LinkedList } from './LinkedList.js';

const kre = new LinkedList();

kre.append("Jiwoo");
kre.append("Chaeyeon");
kre.append("Soomin");
kre.prepend("Seoyeon");

console.log(kre.toString());
console.log(`last member of kre: ${kre.at(-1).val}`);
console.log(`position 2 of kre: ${kre.at(2).val}`);

kre.pop();
console.log(kre);

// ----------------------------------------------------------------------------

// const aaa = new LinkedList();
// aaa.append("Hyerin");
// aaa.append("Yooyeon");
// aaa.append("Nakyoung");
// aaa.append("Yubin");

// console.log(aaa.toString());

// console.log(`Yooyeon in aaa? ${aaa.contains("Yooyeon")}`);
// console.log(`Kotone in aaa? ${aaa.contains("Kotone")}`);

// console.log(`Position of Yooyeon in aaa: ${aaa.find("Yooyeon")}`);
// console.log(`Position of Jiwoo in aaa: ${aaa.find("Jiwoo")}`);

// ----------------------------------------------------------------------------

// const lovelution = new LinkedList();

// lovelution.insertAt("Kaede", 13);
// console.log(lovelution.toString());

// lovelution.insertAt("Yubin", 0);
// console.log(lovelution.toString());

// lovelution.insertAt("Hyerin", -2);
// console.log(lovelution.toString());

// lovelution.insertAt("Seoyeon", -9);
// console.log(lovelution.toString());

// lovelution.append("Nien");
// lovelution.insertAt("Sohyun", 14);
// console.log(lovelution.toString());

// lovelution.insertAt("Xinyu", 6);
// console.log(lovelution.toString());

// lovelution.insertAt("Dahyun", 4);
// console.log(lovelution.toString());

// ----------------------------------------------------------------------------

// const evolution = new LinkedList();

// evolution.append("Jiwoo");
// evolution.append("Chaeyeon");
// evolution.append("Yooyeon");
// evolution.append("Soomin");
// evolution.append("Nakyoung");
// evolution.append("Kotone");
// evolution.append("Yeonji");
// evolution.append("Mayu");

// console.log(evolution.toString() + "\n");

// // remove Mayu
// evolution.removeAt(132);
// console.log(evolution);
// console.log("\n");
// console.log(evolution.toString() + "\n");

// // remove Yeonji
// evolution.removeAt(evolution.size - 1);
// console.log(evolution);
// console.log("\n");
// console.log(evolution.toString() + "\n");

// // remove Kotone
// evolution.removeAt(-1);
// console.log(evolution);
// console.log("\n");
// console.log(evolution.toString() + "\n");

// // remove Yooyeon
// evolution.removeAt(2);
// console.log(evolution);
// console.log("\n");
// console.log(evolution.toString() + "\n");

// // remove Jiwoo
// evolution.removeAt(0);
// console.log(evolution);
// console.log("\n");
// console.log(evolution.toString() + "\n");

// // remove Chaeyeon
// evolution.removeAt(-1 * (evolution.size));
// console.log(evolution);
// console.log("\n");
// console.log(evolution.toString() + "\n");

// // remove Soomin
// evolution.removeAt(-999);
// console.log(evolution);
// console.log("\n");
// console.log(evolution.toString() + "\n");

// // remove Nakyoung
// evolution.removeAt(0);
// console.log(evolution);
// console.log("\n");
// console.log(evolution.toString() + "\n");

// evolution.removeAt(7);
// console.log(evolution);
// console.log("\n");
// console.log(evolution.toString() + "\n");