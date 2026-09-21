// プロフィール文の「続きを読む」開閉のみを制御するシンプルなスクリプト
document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("profile-toggle");
  var moreText = document.getElementById("profile-more");

  if (!toggleButton || !moreText) {
    return;
  }

  toggleButton.addEventListener("click", function () {
    var isHidden = moreText.hasAttribute("hidden");

    if (isHidden) {
      moreText.removeAttribute("hidden");
      toggleButton.textContent = "閉じる";
      toggleButton.setAttribute("aria-expanded", "true");
    } else {
      moreText.setAttribute("hidden", "");
      toggleButton.textContent = "続きを読む";
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
});
