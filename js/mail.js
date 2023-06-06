function SendMail() {

    var body = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    var name = document.getElementById("name").value;

    window.location.href = "mailto:matheo.royez@student.hogent.be?subject="+subject+"&body=Beste Matheo Royez%0D%0A%0D%0A"+body+"%0D%0A%0D%0AMet vriendelijke groeten "+name
}
