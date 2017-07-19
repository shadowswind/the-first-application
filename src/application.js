/**
 * Created by root on 7/18/17.
 */
function grades(collection) {
    var gradelist = "";
    collection.map(function (x) {
        for(var i =0;i<students.length;i++){
            if (x === students[i].number){
                 gradelist = gradelist+students[i].name + "|"+students[i].math + "|"+students[i].chinese + "|"+students[i].english + "|"+students[i].programming + "|"+students[i].average + "|"+students[i].total + "\n";
                 return gradelist;
            }
        }
    });return gradelist;
}
var students = [];
var main = "1. 添加学生\n2. 生成成绩单\n3. 退出请输入你的选择（1～3）：";
var arr;
var readlineSync = require("readline-sync");

function chooice_1() {
    var information = readlineSync.question("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：");
    arr = information.split(",");
    if (typeof arr[0] === "string" && typeof arr[1] === "string" && typeof arr[2] === "string" && typeof arr[3] === "string") {
        console.log("学生" + arr[0] + "的成绩被添加");
    }
    else {
        console.log("请按正确的格式输入（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...）：");
    }
    students.push({
        name: arr[0],
        number: arr[1],
        kind: arr[2],
        class: [3],
        math: arr[5],
        chinese: arr[7],
        english: arr[9],
        programming: arr[11],
        average: (Number(arr[5]) + Number(arr[7]) + Number(arr[9]) + Number(arr[11])) / 4,
        total: Number(arr[5]) + Number(arr[7]) + Number(arr[9]) + Number(arr[11])
    });
    return information;
}

function chooice_2() {
    var information1 = readlineSync.question("请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
    arr = information1.split(",");
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].length !== arr[i + 1].length) {
            console.log("请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
            break;
        }
        else if (arr[arr.length - 2].length === arr[arr.length - 1].length) {
            console.log("成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n========================\n" + grades(arr) + "========================\n" + "全班总分平均数：xxx\n" + "全班总分中位数：xxx");
        }
    }
    return {information1: information1, i: i};
}
while(true) {
    var selection = readlineSync.questionInt(main);
    if (selection === 1) {
        var information = chooice_1();
    }
    else if (selection ===2){
        var __ret = chooice_2();
        var information1 = __ret.information1;
        var i = __ret.i;
    }
    else if (selection ===3){
        break;
    }
}

