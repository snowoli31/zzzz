function changeMessage() {
    // Cambiar el mensaje
    document.getElementById("message").textContent = "⭐Las estrellas brillan más en la oscuridad, así que recuerda que tu luz es más brillante cuando los tiempos son difíciles.⭐";
    
    // Ocultar el botón
    document.getElementById("happyButton").style.display = "none"; 

    // Reproducir la música
    const audio = document.getElementById("audio");
    audio.play(); // Reproducir la música automáticamente
}
