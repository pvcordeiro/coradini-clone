function toggleMode() {
    const html = document.documentElement;
    const isToggleModeActive = html.classList.toggle("toggle");

    updateEyeStyle();
}

function toggleEye() {
    const eyeElement = document.querySelector(".eye");
    eyeElement.classList.toggle("eyeToggle");

    updateEyeStyle();

    const passwordInput = document.querySelector(".passwordInput"); 
    passwordInput.type = eyeElement.classList.contains("eyeToggle")
        ? "text"
        : "password";
}

function updateEyeStyle() {
    const eyeElement = document.querySelector(".eye");
    const isOpen = eyeElement.classList.contains("eyeToggle");
    const html = document.documentElement;
    const isToggleModeActive = html.classList.contains("toggle");

    if (isToggleModeActive) {
        eyeElement.style.backgroundImage = isOpen
            ? "var(--eye-open-color-dark)"
            : "var(--eye-closed-color-dark)";
    } else {
        eyeElement.style.backgroundImage = isOpen
            ? "var(--eye-open-color-light)"
            : "var(--eye-closed-color-light)";
    }
}
