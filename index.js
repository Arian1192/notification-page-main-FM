const Message = document.getElementById("numberOfMessage");
const markAsRead = document.getElementById("markReadButton");
const postsNotRead = [...document.getElementsByClassName("containerPostUnread")];
const redIcons = [...document.getElementsByClassName("redIcon")];


markAsRead.addEventListener("click", () => {
    postsNotRead.forEach((post) => {
        post.classList.replace("containerPostUnread", "containerPostRead");
    });
    redIcons.forEach((icon) => {
        icon.classList.remove("redIcon");
    });
    Message.textContent = "0";
});

postsNotRead.forEach((post) => {
    post.addEventListener("click", () => {
        post.classList.replace("containerPostUnread", "containerPostRead");
        Message.textContent = parseInt(Message.textContent) - 1;
        post.querySelector(".redIcon").classList.remove("redIcon");
    });
});
