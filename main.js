var typed =new Typed(".text", {
    strings: ["Fronted Developer","Web Developer"],
    typeSpeed:100,
    backDelay:1000,
    backSpeed:100,
    loop:true
});

function openWhatsApp() {
 
    const phoneNumber = "+919944026851";
    const message = "Hello, I would like to know more about your services.";

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}
