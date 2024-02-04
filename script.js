function showMessage(response) {
  const yesMessage = document.getElementById("yes-message");
  const noMessage = document.getElementById("no-message");

  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent =
      "Just click the yes!!!";
    document.getElementById("name").style.display = "none";

    // Show the no-message and hide the yes-message
    noMessage.style.display = "block";
    yesMessage.style.display = "none";
  }

  if (response === "Yes") {
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesText = "YEHEY! see you on 14th Love😘😘";
    document.getElementById("question").textContent = yesText;
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    document.getElementById("yesButton").remove();

    // Show the yes-message and hide the no-message
    yesMessage.style.display = "block";
    noMessage.style.display = "none";
  }
}
