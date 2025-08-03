 // ✅ Initialisation avec une clé publique fictive
    (function() {
      emailjs.init("x3GQXpAH05Lum3pbF"); // 🔑 à remplacer par ta vraie clé publique
    })();

    // 🎯 Envoi du formulaire
    document.getElementById("formulaire").addEventListener("submit", function(e) {
      e.preventDefault();

      emailjs.sendForm("service_uz2xl58", "template_gu2b3sn", this)
        .then(function(response) {
          	swal("Good job!", "Nous vous réponderons au plus vite !", "success");

          console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
          	swal("Erreur", "Une erreur s'est produite", "error");
          console.log("FAILED...", error);
        });
    });