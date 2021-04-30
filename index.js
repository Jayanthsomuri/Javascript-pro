function result() {


    var students = {
        Jayanth: {
            math: "95",
            physics: "89",
            Programming: "91"
        },
        Nikhil: {
            math: "98",
            physics: "89",
            Programming: "91"
        },
        Maha: {
            math: "100",
            physics: "100",
            Programming: "91"
        }
    }
    var studentname = document.getElementById('studentname').value;
    var input = studentname.toUpperCase();
    var definition = students[input];
    var output = document.getElementById('output');
    if (definition == undefined) {
        output.innerHTML = '<hr>There is no information about this student.<hr>';
    }
    else {
        output.innerHTML = "<hr>Math Score is ${definition.math}.<hr>Physics Score is ${definition.physics}.<hr>Programming Score is ${definition.programming}.<hr>";
    };

};
