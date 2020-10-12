$(document).ready(function () {
    var dataset = [
        {
            q: "which one  is the most popular language in 2020?",
            c: ["Python", "C", "Java", "Javascript"],
            ans: "Python",
        },
        {
            q: "Which one is the interpreted language?",
            c: ["c", "c++", "python", "c#"],
            ans: "python",
        },
        {
            q: "What is the extension of the file contains javascript code",
            c: [".c", ".js", ".java", ".css"],
            ans: ".js",
        },
        {
            q: "Choose the suitable data type : '50.23'",
            c: ["Float", "Integer", "Character", "Boolean"],
            ans: "Float",
        },
        {
            q: "Which one is scripting language?",
            c: ["Javascript", "Java", "Ruby", "HTML"],
            ans: "HTML",
        },
    ];
    var quesno = -1;
    buthandler();
    var score = 0;

    function buthandler() {
        quesno++;
        if (quesno === dataset.length + 1) {
            location.reload();
            return;
        }
        var choosed = $("input:checked");

        if (
            quesno > 0 &&
            $('label[for="' + choosed.prop("id") + '"]').text() ===
                dataset[quesno - 1].ans
        ) {
            score++;
            choosed.prop("checked", false);
        }
        if (quesno === dataset.length) {
            $(".main")
                .addClass("end")
                .html(
                    "<b>Your score :<br><br>" +
                        score +
                        "/" +
                        dataset.length +
                        "<br><br>Thank you for attending the Questions !!!</b><br><br><button>Retry</button>"
                );
            $("button").on("click", buthandler);
            return;
        }
        $(".main .ques h3").text(dataset[quesno].q);
        var labels = $(".choices ol li label");
        for (let i = 0; i < 4; i++) {
            $(labels[i]).text(dataset[quesno].c[i]);
        }
        if (quesno === dataset.length - 1) {
            $(".main button").text("Submit");
        }
    }

    $("button").on("click", buthandler);
});
