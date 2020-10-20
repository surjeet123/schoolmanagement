$(document).ready(function () {
    //------code fo0r add and update class 
    $("#btnclass").click(function () {
        var subclass = {
            class: $("#class").val()
        }

        var ResultModel = classAjax("http://localhost:3000/stdclass", "POST", subclass);
        ResultModel.complete(function (result) {
            if (result.responseText == "true") {
                alert('record saved successfully')
            } else {
                alert('Record not saved');
            }
        });
        $("#class").val("")
    });
    //-------------END
})

function classAjax(url, type, data) {
    return $.ajax({
        url: url,
        type: type,
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8'
    })
}