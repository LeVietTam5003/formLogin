$(document).ready(function() {
    var Email = "";
    var Pass = "";

    $("form#in").submit(function() {
        var getEmailin = $("input#in_mail").val()
        var getPassin = $("input#in_pass").val()

        var check = 1

        if (getEmailin == "") {
            $("p.enter_mail").text("Bạn chưa nhập vào Email")
            check = 2
        } else {
            $("p.enter_mail").text("")
        }

        if (getPassin == "") {
            $("p.enter_pass").text("Bạn chưa nhập vào Pass")
            check = 2
        } else {
            $("p.enter_pass").text("")
        }

        if (getEmailin != " " && getPassin != "") {
            if (getEmailin == Email && getPassin == Pass) {
                alert("Đăng nhập thành công");
                $("input#in_mail").val("")
                $("input#in_pass").val("")
            } else {
                alert("Đăng nhập thất bại")
                check = 2
            }
        }

        if (check == 1) { return true }


        return false;
    })

    $("form#up").submit(function(event) {
        var getEmail = $("input#up_mail").val()
        var getPass = $("input#up_pass").val()
        var getpass_confirm = $("input#up_pass_confirm").val()

        var check = 1

        if (getEmail == "") {
            $("p.mail_error").text("Bạn chưa nhập vào Email")
            check = 2

        } else {
            Email = getEmail
            $("p.mail_error").text("")

        }

        if (getPass == "") {
            $("p.pass_error").text("Bạn chưa nhập vào Pass")
            check = 2

        } else {
            Pass = getPass
            $("p.pass_error").text("")

        }
        if (getpass_confirm == "") {
            $("p.confirm_error").text("Bạn chưa nhập lại Pass")
            check = 2
        } else {
            $("p.confirm_error").text("")

        }


        if (getPass != "" && getpass_confirm != "") {
            if (getpass_confirm != getPass) {
                $("p.confirm_error").text("Mật khẩu không trùng nhau")
                check = 2
            }
        }



        if (check == 1) {
            // return true
            alert("Đăng kí thành công");
            $("input#up_mail").val("");
            $("input#up_pass").val("");
            $("input#up_pass_confirm").val("")
        }



        return false;
    })
})