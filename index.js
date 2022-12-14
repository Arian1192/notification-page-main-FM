const Message = document.getElementById("numberOfMessage");
const markAsRead = document.getElementById("markReadButton");
const postsNotRead = [...document.getElementsByClassName("containerPostUnread")];
const redIcons = [...document.getElementsByClassName("redIcon")];

const alertNotification = "You don't have any unread messages";

markAsRead.addEventListener("click", () => {
    if(Message.textContent === "0") return alert(alertNotification);
    postsNotRead.forEach((post) => {
        post.classList.replace("containerPostUnread", "containerPostRead");
        post.querySelector(".redIcon").classList.remove("redIcon");
        Message.textContent = "0";
    });
});

postsNotRead.forEach((post) => {
   post.addEventListener("click", () => {
        if(Message.textContent === "0") return alert(alertNotification);
        post.classList.replace("containerPostUnread", "containerPostRead");
        Message.textContent = parseInt(Message.textContent) - 1;
        post.querySelector(".redIcon").classList.remove("redIcon");
    });
    
});
