import "./message.scss";
function message(msg, tag = false) {
  if (tag === 200) tag = "success";
  else if (tag === 400) tag = "error";
  var infoWindow = document.querySelector(".info-window");
  if (tag) infoWindow.classList.add(tag);
  infoWindow.textContent = msg;
  infoWindow.classList.add("show-info");
  infoWindow.classList.remove("hidden");
  setTimeout(function () {
    infoWindow.classList.remove("show-info");
    setTimeout(() => {
      infoWindow.classList.add("hidden");
      if (tag) infoWindow.classList.remove(tag);
    }, 1000);
  }, 1500);
}

export default message;
