function emailSend()
{
    var userName = document.getElementById('foodiebooking_name').value;
    var email = document.getElementById('foodiebooking_email').value;
    var phone = document.getElementById('foodiebooking_phone').value;
    var console = document.getElementById('foodiebooking_console').value;
    var date = document.getElementById('reservationbooking_date').value;
    var time = document.getElementById('foodiebooking_time').value;

    var messageeBody=       "Name    : " + userName+
                      "<br/> Email   : " + email +
                      "<br/> Phone   : " + phone +
                      "<br/> Console : " + console +
                      "<br/> Date    : " + date +
                      "<br/> Time    : " + time ;



    Email.send({
                  Host : "smtp.elasticemail.com",
                  Username : "webwork.dg@gmail.com",
                  Password : "53D9AF28276ADC1D9F0D4F11155B4E3D787C",
                  To : 'webwork.dg@gmail.com',
                  From : "webwork.dg@gmail.com",
                  Subject : "Confirm The booking",
                  Body : messageeBody
                }).then(
      message => {
        
                    swal("Successful", "You'll Receive an call after confirmation!", "success");             
                }
    );
}