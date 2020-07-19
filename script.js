// 1.pushメソッド(配列の最後に新しい要素を追加するメソッド)
// 「定数名.push();」pushメソッドの後の()の中に追加したい要素を記述する
const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人"];
console.log(characters);
// →["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人"]

// pushメソッドを使って配列charactersに、文字列「とりずきん」を追加してください
characters.push("とりずきん");
// 配列charactersを出力してください
console.log(characters);
// →["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人", "とりずきん"]


// 2.forEachメソッド(配列の中の要素を1つずつ取り出して、全ての要素に繰り返し同じ処理を行うメソッド)
// 配列名.forEach((引数)　=> {console.log(引数);});
const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人", "とりずきん"];

// forEachメソッドを使って、配列charactersの中身をすべて出力してください
characters.forEach((character) => {
  console.log(character);
});
// →にんじゃわんこ
// →ベイビーわんこ
// →ひつじ仙人
// →とりずきん


// 3.findメソッド(条件式に合う最初の1つ目の要素を配列の中から取り出すメソッド)
// const 定数名 = 配列名.find((引数) => {retrun 条件;});
const numbers = [1, 3, 5, 7, 9];

// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入してください
// ※引数numberに値の[1, 3, 5, 7, 9]が代入されているので、retrunの後はnumberとなる
const foundNumber = numbers.find((number) => {
  return number % 3 === 0;
});

// foundNumberを出力してください
console.log(foundNumber);
// →3


const characters = [
  {id: 1, name: "にんじゃわんこ", age: 6},
  {id: 2, name: "ベイビーわんこ", age: 2},
  {id: 3, name: "ひつじ仙人", age: 100},
  {id: 4, name: "とりずきん", age: 21}
];

// 定数charactersからidが3のオブジェクトを見つけ、定数foundCharacterに代入してください
// ※引数characterに値が代入されているので、retrunの後はcharacter.idとなる
const foundCharacter = characters.find((character) => {
  return character.id === 3;
});

// foundCharacterを出力してください
console.log(foundCharacter);
// →{id: 3, name: "ひつじ仙人", age: 100}


// 4.filterメソッド(条件式に合う要素を全て取り出すメソッド)
// const 定数名 = 配列名.filter((引数) => {retrun 条件;});
const numbers = [1, 2, 3, 4];

// filterメソッドを使ってnumbersから偶数を取り出し、定数evenNumbersに代入してください
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

// evenNumbersを出力してください
console.log(evenNumbers);
// →2,4


const characters = [
  {id: 1, name:"にんじゃわんこ", age: 14},
  {id: 2, name:"ベイビーわんこ", age: 5},
  {id: 3, name:"ひつじ仙人", age: 100}
];

// charactersから20歳未満のキャラクターを取り出し、定数underTwentyに代入してください
const underTwenty = characters.filter((character) => {
  return character.age < 20;
});

// underTwentyを出力してください
console.log(underTwenty);
// →{id: 1, name:"にんじゃわんこ", age: 14},{id: 2, name:"ベイビーわんこ", age: 5}


// 5.mapメソッド(配列内のすべての要素に処理を行い、新しい配列を作成するメソッド)
// const 定数名 = 配列名.map((引数) => {retrun 条件;});
const numbers = [1, 2, 3, 4];

// 定数numbersにmapメソッドを使って配列を作り、定数doubledNumbersに代入してください
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

// 定数doubledNumbersを出力してください
console.log(doubledNumbers);
// →[2,4,6,8]


const names = [
{firstName: "Kate", lastName: "Jones"},
{firstName: "John", lastName: "Smith"},
{firstName: "Denis", lastName: "Williams"},
{firstName: "David", lastName: "Black"}
];

// 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入してください
const fullNames = names.map((name) => {
  return name.firstName + name.lastName;
});

// 定数fullNamesを出力してください
console.log(fullNames);
// →["KateJones","JohnSmith","DenisWilliams","DavidBlack"]