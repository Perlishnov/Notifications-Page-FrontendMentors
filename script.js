"use strict";

const UnreadNotifications = document.querySelectorAll(
  ".Notification[data-unread]"
);
const unreadNotificationsCounter = document.getElementById("unread-count");
const markAsReadBtn = document.getElementById("mark-read");

console.log(UnreadNotifications);

markAsReadBtn.addEventListener("click", () => {
  UnreadNotifications.forEach(
    (notification) => delete notification.dataset.unread
  );
  unreadNotificationsCounter.textContent = ` 0 `;
});
