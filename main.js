
$("document").ready(function() {

    $("input").on("input", composeMailContent);

});

function composeMailContent() {

    console.log(">>> composeMailContent");

    var mailTO = "mailto:" + $("#id_mail").val() +
        "?body=";

    var mailBody =
        "## Why check in:\n => " + $("#id_why").val() + "\n\n" +
        "## Which branch:\n  => " + $("#id_branch").val() + "\n\n" +
        "## Description of the code change:\n => " + $("#id_description").val() + "\n\n" +
        "## Changed module(s)/app:\n => " + $("#id_module").val() + "\n\n" +
        "## Code reviewed by:\n =>" + $("#id_review").val() + "\n\n" +
        "## Self-testing results:\n =>" + $("#id_test").val() + "\n\n" +
        "## Notes to QA:\n =>" + $("#id_note").val();

    $("#id_sendmail").attr('href', mailTO + encodeURIComponent(mailBody));
}
