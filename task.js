// let personDetails={
//     firstName:"xyz",
//     lastName:"opi",
//     fullName : function() {
//         return this.firstName + this.lastName;
//       }
// }

// console.log("full name",personDetails.fullName())


// const num=[7,18,65,90,23,12,45,1,8,10]

// function checkNum(num,callback)
// {
//     let addNum=[];
    
//     for(let x of num){
//         // console.log(callback(x));
//         if(callback(x)){
//             addNum.push(x);
//         }

//     }
//     return addNum;
// }

// const conNum= checkNum(num,(x)=>x >= 15);
// console.log(conNum);

// function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Snehal', callMe);
// var _ = require('lodash');
// _.mapValues({ 'a': 1, 'b': 2, 'c': 3} , function(num) { return num * 3; });
const _=require('lodash')

// var strr = _.camelCase("bjscjba wscfajfc fef")
// _.upperCase(strr)
// console.log(strr);
// console.log("how to");
// var characters = {
//     'fred': { 'name': 'fred', 'age': 40 },
//     'pebbles': { 'name': 'pebbles', 'age': 1 }
    
//   };
// //  const b= _.mapValues(characters, 'age');
//  console.log(_.mapValues(characters, 'age'));

// const $ =_.map([1, 2, 3], function(num) { return num * 3; });
// console.log($);

// const S=_.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 5; });
// console.log(S);

// var characters = [
//   { 'name': 'barney', 'age': 36 },
//   { 'name': 'fred',   'age': 40 }
// ];
// console.log(_.map(characters, 'name'));

// _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });


// import concat from 'async/concat';
// const $=require("async/concat")
// let directoryList = ['dir1','dir2','dir3'];
// let withMissingDirectoryList = ['dir1','dir2','dir3', 'dir4'];

// // Using callbacks
// async.concat(directoryList, fs.readdir, function(err, results) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(results);
//        // [ 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', file5.txt ]
//    }
// });

// const fileList = ['file1.txt','file2.txt','file3.txt'];
// const withMissingFileList = ['file1.txt','file2.txt','file3.txt', 'file4.txt'];

// async () => {
//     try {
//         let result = await async.reduce(fileList, 0, getFileSizeInBytes);
//         console.log(result);
//         // 6000
//         // which is the sum of the file sizes of the three files
//     }
//     catch (err) {
//         console.log(err);
//     }
// }


// let arr = [[1, "one", 2, "two"], [3, "three", 4, "four"]];
// for (var i = 0; i < arr.length; i++) {
//     console.log("print i iteration::::",i);
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log("print j iteration vale ::::::",j);
//     console.log("print product of i and j",arr[i][j]);
//   }
// }


// let a = _.chunk(['a', 'b', 'c', 'd'], 2);
// let b = _.chunk(a)
// console.log("how to work the chunk",a);

// var array = [1,68];
// var other = _.concat(array, 2, [3], [[4]]);
// console.log("dfefr",other);

// var users = [
//   { 'user': 'barney',  'active': false },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': true }
// ];

// let take =_.takeRightWhile(users, ["active",true]);


//let take =_.take([1, 2, 3], 2);
// let take =_.take([1, 2, 3]);

// let tail=_.tail([1, 2, 3]);
// console.log("dfre",take)


// let input = [
//   { _id: "6139b8455fe29d0011dae5e2",found:true },
//   { _id: "6139b8cb5fe29d0011dae5e7" ,found:true},
//   { _id: "6139beb75fe29d0011dae5f2" },
//   { _id: "6139bf165fe29d0011dae600" },
//   { _id: "6139bf175fe29d0011dae603" },
//   { _id: "6139bf725fe29d0011dae60c" },
//   { _id: "6139bfc15fe29d0011dae611" },
//   { _id: "6139c06f5fe29d0011dae61e" },
//   { _id: "6139c0f35fe29d0011dae623" },
//   { _id: "6139dfe65fe29d0011dae630" },
//   { _id: "6139ec625fe29d0011dae637" },
//   { _id: "6139ee9d5fe29d0011dae63c" },
//   { _id: "6139ef115fe29d0011dae63f" },
//   { _id: "6139f0775fe29d0011dae64a" },
//   { _id: "6139fdab5fe29d0011dae653" },
//   { _id: "6139fe3f5fe29d0011dae658" },
//   { _id: "6141e7f75fe29d0011dae67d" },
//   { _id: "6150d7885fe29d0011dae68a" },
//   { _id: "6150d78f5fe29d0011dae68d" },
//   { _id: "6150d7945fe29d0011dae690" },
//   { _id: "6150d79a5fe29d0011dae697" },
//   { _id: "6150d7a35fe29d0011dae69e" },
//   { _id: "6150d7a75fe29d0011dae6a1" },
//   { _id: "6150d7aa5fe29d0011dae6a4" },
//   { _id: "61544f30332789001172f93d" },
//   { _id: "61544f33332789001172f940" },
//   { _id: "61544f38332789001172f943" },
//   { _id: "6156af2e4b50110012142897" },
//   { _id: "615ff23a4b501100121428a0" },
//   { _id: "616000984b501100121428a7" },
//   { _id: "616000a14b501100121428aa" },
//   { _id: "61600cac4b501100121428b5" },
//   { _id: "616017f44b501100121428bc" },
//   { _id: "616018d84b501100121428c1" },
//   { _id: "61601ff14b501100121428ca" },
//   { _id: "6160210e4b501100121428cf" },
//   { _id: "616032794b501100121428d8" },
//   { _id: "6162d9284b501100121428f1" },
//   { _id: "6162d93d4b501100121428f6" },
//   { _id: "6162d9414b501100121428fb" },
//   { _id: "6162d97e4b50110012142900" },
//   { _id: "61642d484b50110012142905" },
//   { _id: "61657dab4b5011001214290c" },
//   { _id: "616c25151ba82600117b3a96" },
//   { _id: "616d3c031ba82600117b3a9d" },
//   { _id: "616d3c161ba82600117b3aa2" },
//   { _id: "616d4eed1ba82600117b3aab" },
//   { _id: "616d4ef31ba82600117b3aae" },
//   { _id: "616d7f4c1ba82600117b3ab9" },
//   { _id: "616fb67b1ba82600117b3ad4" }
// ]

// _.each(input,(id) =>{
// // console.log("hjksh",id)
// let game = id
// console.log("dsaf",game)
// })

// input.map(function (id) {
//   console.log("dsfefgtrh",id)
//  let game = id
//   console.log("dsfefgtrh",id)
// });
// let game =_.map(input,function(num){
//   let as =num
//   console.log("dfge",as)
// } )
// console.log("hjksfuxwx",game)
// _.map(input,function(num){return num + "s"})

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
// console.log("outer loop ::::::::::::")
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
// 	console.log("inner loop  colum:::::::::::")
//   }
//   // newline after each row
//   string += "\n";
//   console.log("rows",string)
// }
// // printing the string
// console.log(string);


// const a=require("async")
// const fs =require("fs")

// const fileList = [ 'dir1/file2.txt', 'dir2/file3.txt', 'dir/file5.txt'];
// const withMissingFileList = ['dir1/file1.txt', 'dir4/file2.txt'];

// // asynchronous function that deletes a file
// const deleteFile = function(file, callback) {
//     fs.unlink(file, callback);
// };

// // Using callbacks
// a.each(fileList, deleteFile, function(err) {
//     if( err ) {
//         console.log(err);
//     } else {
//         console.log('All files have been deleted successfully');
//     }
// });


// const as=_.difference([1, 2, 3, 4, 5,11], [5, 2, 10]);
// console.log("bddfytwec",as);


// let input = [
//       { _id: "1"},
//       { _id: "2" },
//       { _id: "3" },
//       { _id: "4" },
//       { _id: "6" }]


//      let input2= [{ _id: "7"},
//       { _id: "0" },
//       { _id: "1" },
//       { _id: "2" },
//       { _id: "4" },
//        { _id: "6" },
//   { _id: "9" },
//   { _id: "12" },
//   { _id: "18" },
//   { _id: "91" },
//   { _id: "78" },
//   { _id: "90" }]

// const aa=_.differenceWith(input, input2, _.isEqual);
// console.log("aaadewf3r",aa);


// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   console.log("external loop print::",i);
//   for(let j = 0; j < n; j++) { // internal loop
//     console.log("internal loop print::",j)
//     string += "*";
//     console.log("log jj::",j);
//   }
//   // newline after each row
//   string += "\n";
//   console.log("log print * j",i);
// }
// // printing the string
// console.log("ccc",string);



let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
      console.log("string",string);
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
        console.log("string:::",string);
      }
      else {
        string += " ";
        console.log("String",string)
      }
    }
  }
  // newline after each row
  string += "\n";
}
printing the string
console.log(string);
// const moment =require("moment")
// var timestring1 = "2013-05-09T00:00:00Z";
// var timestring2 = "2013-05-09T02:00:00Z";
// var startdate = moment(timestring1);
// var expected_enddate = moment(timestring2);
// var returned_endate = startdate.add(moment.duration(2, 'hours'));
// returned_endate == expected_enddate  // false
// returned_endate  // Moment {_i: "2013-05-09T00:00:00Z", _f: "YYYY-MM-DDTHH:mm:ss Z", _l: undefined, _isUTC: false, _a: Array[7]…}



