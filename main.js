tailwind.config = {
    darkMode: "class",
}

function toggleDarkMode() {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Navigation bar homepage, friend, watch, group,... control
const middleNavbarList = Array.from(document.getElementById("middleNavbarList").querySelectorAll("a")).slice(0, 5);
const underlineNavbar = document.getElementById("underlineNavbar");
middleNavbarList.forEach((value) => {
    value.onclick = function () {
        for (let activeItem of middleNavbarList)
            activeItem.children[0].classList.remove("fill-[#1B74E4]", "dark:fill-[#1B74E4]");
        value.children[0].classList.add("fill-[#1B74E4]", "dark:fill-[#1B74E4]");
        underlineNavbar.style.left = value.offsetLeft + 'px';
    }
})

//Searching Popup Control
const searchingPopup = document.getElementById("searchingPopup");
document.getElementById("searchingBar").onclick = function () {
    searchingPopup.style.visibility = "visible";
}

document.getElementById("searchingPopup").getElementsByTagName("img")[0].onclick = function () {
    document.getElementById("searchingBar").getElementsByTagName("input")[0].value = document.getElementById("searchingPopup").getElementsByTagName("input")[0].value;
    searchingPopup.style.visibility = "hidden";
}

function hiddenSearchingPopup(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let l = searchingPopup.offsetLeft, r = searchingPopup.offsetLeft + searchingPopup.offsetWidth;
    let t = searchingPopup.offsetTop, b = searchingPopup.offsetTop + searchingPopup.offsetHeight;
    if (mouseX < l || mouseX > r || mouseY < t || mouseY > b) {
        document.getElementById("searchingBar").getElementsByTagName("input")[0].value = document.getElementById("searchingPopup").getElementsByTagName("input")[0].value;
        searchingPopup.style.visibility = "hidden";
    }
}
document.addEventListener("click", hiddenSearchingPopup);

//Control homepage, friend, watch, group in small screen
const listHomepagePopup = document.getElementById("listHomepagePopup");
document.getElementById("listHomepageButton").onclick = function () {
    listHomepagePopup.classList.toggle("hidden");
}

//Watch more menu items on leftMenu
document.getElementById("watchMoreTopButton").onclick = function () {
    document.getElementById("leftMenuTopMore").classList.toggle("hidden");
    document.getElementById("watchMoreTopButton").classList.toggle("hidden");
}

document.getElementById("hiddenLeftMenuTop").onclick = function () {
    document.getElementById("leftMenuTopMore").classList.toggle("hidden");
    document.getElementById("watchMoreTopButton").classList.toggle("hidden");
}

document.getElementById("watchMoreBottomButton").onclick = function () {
    document.getElementById("leftMenuBottomMore").classList.toggle("hidden");
    document.getElementById("watchMoreBottomButton").classList.toggle("hidden");
}

document.getElementById("hiddenLeftMenuBottom").onclick = function () {
    document.getElementById("leftMenuBottomMore").classList.toggle("hidden");
    document.getElementById("watchMoreBottomButton").classList.toggle("hidden");
}

//Control leftMenu in small screen
document.getElementById("leftMenuControlButton").onclick = function () {
    let leftMenu = document.getElementById("leftMenu");
    let newFeeds = document.getElementsByClassName("newFeeds")[0];
    leftMenu.classList.toggle("hidden");
    newFeeds.classList.toggle("hidden");
}

//Story, Reels, Room meeting control
const storyReelsTitleList = document.getElementById("storyReelsTitle").children;
const storyReelsContentList = document.getElementById("storyReelsContent").children;
for (let i = 0; i < storyReelsTitleList.length; i++) {
    storyReelsTitleList[i].onclick = function () {
        for (let y of storyReelsTitleList) {
            y.classList.remove("before:content-['']", "before:absolute", "before:bottom-[-6px]", "before:bg-[#1B74E4]", "before:w-full", "before:h-[5px]");
            y.children[0].classList.remove("text-[#1B74E4]", "dark:text-[#1B74E4]");
        }
        storyReelsTitleList[i].classList.add("before:content-['']", "before:absolute", "before:bottom-[-6px]", "before:bg-[#1B74E4]", "before:w-full", "before:h-[5px]");
        storyReelsTitleList[i].children[0].classList.add("text-[#1B74E4]", "dark:text-[#1B74E4]");
        for (let x of storyReelsContentList)
            x.style.visibility = "hidden";
        storyReelsContentList[i].style.visibility = "visible";
    }
}

document.getElementById("postContent").oninput = function () {
    if (this.value.length == 0)
        document.getElementById("uploadStatusBtn").classList.add("disabled");
    else
        document.getElementById("uploadStatusBtn").classList.remove("disabled");
}


//Posting Handle:
$("#uploadStatusBtn").onclick = function () {
    let postContent = $("#postContent").value;
    let currentTime = new Date();
    let curDate = String(currentTime.getDate());
    if (curDate.length == 1)
        curDate = "0" + curDate;
    let curMonth = String(currentTime.getMonth() + 1);
    if (curMonth.length == 1)
        curMonth = "0" + curMonth;
    let curYear = String(currentTime.getFullYear());
    let curHour = String(currentTime.getHours());
    if (curHour.length == 1)
        curHour = "0" + curHour;
    let curMinute = String(currentTime.getMinutes());
    if (curMinute.length == 1)
        curMinute = "0" + curMinute;
    let curSecond = String(currentTime.getSeconds());
    if (curSecond.length == 1)
        curSecond = "0" + curSecond;
    let timeInner = curDate + "/" + curMonth + "/" + curYear + " lúc " + curHour + ":" + curMinute + ":" + curSecond;
    let post = document.createElement("div");
    post.classList.add("w-full", "bg-[white]", "rounded-xl", "shadow-md", "mb-[16px]", "px-[16px]", "pb-[4px]", "pt-[12px]", "relative", "dark:border-[#3E4042]", "border-[1px]", "dark:bg-[#242526]", "duration-500");
    post.innerHTML = `
    <div class="flex align-items-center">
    <img src="img/leftMenuImage/avarta.jpg" alt=""
        class="h-[40px] w-[40px] rounded-full cursor-pointer mr-[8px]">
    <div>
        <p class="font-[600] text-[15px] text-[#050505] dark:text-[#e4e6eb]">Nguyễn Minh Chí</p>
        <p class="font-[400] text-[13px] text-[#65676b] dark:text-[#b0b3b8]">${timeInner}</p>
    </div>
</div>
<button class="btn btn-danger absolute right-[16px] top-[12px]" onclick = "this.parentElement.remove()">Xóa</button>
<p class="mt-[5px] mb-[10px] text-[black] dark:text-[#e4e6eb] break-words">${postContent}</p>
<div class="grid grid-cols-2 gap-[5px] w-full h-[44px] border-b-[1px] border-t-[1px] py-[3px] dark:border-t-[#3E4042] dark:border-b-[#3E4042]">
    <div class="flex align-items-center justify-content-center rounded-lg hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] duration-300 cursor-pointer relative"
        id="emotionalControl" onmouseenter="setTimeout(() => {
            $('#emotionalControl').children[1].classList.toggle('hidden');
        }, 500);" onmouseleave = "$('#emotionalControl').children[1].classList.toggle('hidden');">
        <div class="flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 478.2 478.2" class="w-[25px] h-[25px] fill-[#65676b] dark:fill-[#b0b3b8]">
                <path d="M457.575,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5   c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1   c14-42.6,13.2-75.2-2.6-97c-16.6-22.9-43.1-24.7-50.9-24.7c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7   c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61   c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3   c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3   c19.9-18,23.4-37.9,22.7-51.9C461.275,337.1,459.475,330.2,457.575,325.1z M48.275,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1   c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6h-61V447.3z M431.975,313.4   c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8   c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2   c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9   c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7   c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3   c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3   C444.875,295.3,440.675,304.4,431.975,313.4z"/>
            </svg>
            <p class="font-[600] text-[15px] ml-[10px] text-[#65676b] dark:text-[#b0b3b8]">Thích</p>
        </div>
        <div
            class="flex align-items-center absolute h-[50px] w-[260px] left-0 rounded-[30px] px-[15px] bottom-100 bg-[white] dark:bg-[#3A3B3C] border-1 shadow-xl hidden">
            <img src="img/emotional/like.png" alt=""
                class="h-[30px] w-[30px] hover:scale-125 duration-300" data-bs-toggle="tooltip"
                data-bs-placement="top" title="Thích">
            <img src="img/emotional/love.png" alt=""
                class="h-[30px] w-[30px] ml-[10px] hover:scale-125 duration-300"
                data-bs-toggle="tooltip" data-bs-placement="top" title="Yêu thích">
            <img src="img/emotional/haha.png" alt=""
                class="h-[30px] w-[30px] ml-[10px] hover:scale-125 duration-300"
                data-bs-toggle="tooltip" data-bs-placement="top" title="Haha">
            <img src="img/emotional/wow.png" alt=""
                class="h-[30px] w-[30px] ml-[10px] hover:scale-125 duration-300"
                data-bs-toggle="tooltip" data-bs-placement="top" title="Wow">
            <img src="img/emotional/sad.png" alt=""
                class="h-[30px] w-[30px] ml-[10px] hover:scale-125 duration-300"
                data-bs-toggle="tooltip" data-bs-placement="top" title="Buồn">
            <img src="img/emotional/angry.png" alt=""
                class="h-[30px] w-[30px] ml-[10px] hover:scale-125 duration-300"
                data-bs-toggle="tooltip" data-bs-placement="top" title="Phẫn nộ">
        </div>
    </div>
    <div
        class="flex align-items-center justify-content-center rounded-lg hover:bg-[#F2F2F2] dark:hover:bg-[#3A3B3C] duration-300 cursor-pointer">
        <div class="flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-[25px] h-[25px] fill-[#65676b] dark:fill-[#b0b3b8]">
                <path fill-rule="evenodd" d="M12.0867962,18 L6,21.8042476 L6,18 L4,18 C2.8954305,18 2,17.1045695 2,16 L2,4 C2,2.8954305 2.8954305,2 4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.0867962,18 Z M8,18.1957524 L11.5132038,16 L20,16 L20,4 L4,4 L4,16 L8,16 L8,18.1957524 Z"/>
            </svg>
            <p class="font-[600] text-[15px] text-[#65676b] dark:text-[#b0b3b8] ml-[10px]">Bình luận</p>
        </div>
    </div>
</div>
<div>
    <div class="flex align-items-center w-full h-[36px] mt-[8px]">
        <img src="img/leftMenuImage/avarta.jpg" alt="" class="h-[32px] w-[32px] rounded-full mr-[6px]">
        <div class="flex align-items-center flex-1 h-full bg-[#F0F2F5] dark:bg-[#3A3B3C] hover:bg-[#E4E6E9] dark:text-[white] rounded-[30px] px-[10px] duration-500">
            <input type="text" class="bg-transparent outline-none w-9/12"
                placeholder="Viết bình luận...">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" class="h-[20px] w-[20px] ml-[5px] cursor-pointer fill-[#65676b] dark:fill-[#b0b3b8]">
	            <path id="XMLID_93_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300   c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>
	            <path id="XMLID_104_" d="M205.306,205.305c-22.226,22.224-58.386,22.225-80.611,0.001c-5.857-5.858-15.355-5.858-21.213,0   c-5.858,5.858-5.858,15.355,0,21.213c16.963,16.963,39.236,25.441,61.519,25.441c22.276,0,44.56-8.482,61.519-25.441   c5.858-5.857,5.858-15.355,0-21.213C220.661,199.447,211.163,199.448,205.306,205.305z"/>
	            <path id="XMLID_105_" d="M115.14,147.14c3.73-3.72,5.86-8.88,5.86-14.14c0-5.26-2.13-10.42-5.86-14.14   c-3.72-3.72-8.88-5.86-14.14-5.86c-5.271,0-10.42,2.14-14.141,5.86C83.13,122.58,81,127.74,81,133c0,5.26,2.13,10.42,5.859,14.14   C90.58,150.87,95.74,153,101,153S111.42,150.87,115.14,147.14z"/>
	            <path id="XMLID_106_" d="M229,113c-5.26,0-10.42,2.14-14.141,5.86C211.14,122.58,209,127.73,209,133c0,5.27,2.14,10.42,5.859,14.14   C218.58,150.87,223.74,153,229,153s10.42-2.13,14.14-5.86c3.72-3.72,5.86-8.87,5.86-14.14c0-5.26-2.141-10.42-5.86-14.14   C239.42,115.14,234.26,113,229,113z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" class="h-[20px] w-[20px] ml-[10px] cursor-pointer fill-[#65676b] dark:fill-[#b0b3b8]">
		        <path d="M0,167.85v216.2c0,33,26.8,59.8,59.8,59.8h370.4c33,0,59.8-26.8,59.8-59.8v-216.2c0-31.4-25.5-56.9-56.9-56.9h-79.6    l-1.9-8.3c-7.7-33.3-37-56.5-71.2-56.5h-70.9c-34.1,0-63.4,23.2-71.2,56.5l-1.9,8.3H56.9C25.5,110.95,0,136.55,0,167.85z     M146.2,135.45c5.7,0,10.6-3.9,11.9-9.5l4.1-17.8c5.2-22.1,24.6-37.5,47.3-37.5h70.9c22.7,0,42.1,15.4,47.3,37.5l4.1,17.8    c1.3,5.5,6.2,9.5,11.9,9.5H433c17.9,0,32.4,14.5,32.4,32.4v216.2c0,19.5-15.8,35.3-35.3,35.3H59.8c-19.5,0-35.3-15.8-35.3-35.3    v-216.2c0-17.9,14.5-32.4,32.4-32.4H146.2z"/>
		        <circle cx="82.9" cy="187.75" r="16.4"/>
		        <path d="M245,380.95c56.7,0,102.9-46.2,102.9-102.9s-46.2-102.9-102.9-102.9s-102.9,46.1-102.9,102.9S188.3,380.95,245,380.95z     M245,199.65c43.2,0,78.4,35.2,78.4,78.4s-35.2,78.4-78.4,78.4s-78.4-35.2-78.4-78.4S201.8,199.65,245,199.65z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-[20px] w-[20px] ml-[10px] cursor-pointer fill-[#65676b] dark:fill-[#b0b3b8]">
                <path fill="none" d="M0 0L24 0 24 24 0 24z"/>
                <path d="M16 2l5 5v13.993c0 .556-.445 1.007-.993 1.007H3.993C3.445 22 3 21.545 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16zm-1 2H5v16h14V8h-4V4zm-2 6v5h-1v-5h1zm-2 0v1H9c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h1v-1H9v-1h2v2c0 .552-.448 1-1 1H9c-1.105 0-2-.895-2-2v-1c0-1.105.895-2 2-2h2zm6 0v1h-2v1h2v1h-2v2h-1v-5h3z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-labelledby="stickerIconTitle" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" class="h-[20px] w-[20px] ml-[10px] cursor-pointer fill-[#65676b] dark:fill-[#b0b3b8]"> <path d="M21,3 L21,11 C21,16.5228475 16.5228475,21 11,21 L3,21 L3,3 L21,3 Z"/> <path d="M9,21 C11.6666667,21 13,19.6666667 13,17 C13,17 13,15.6666667 13,13 L17,13 C19.6666667,13 21,11.6666667 21,9"/>
            </svg>
        </div>
    </div>
</div>
    `
    $(".newFeeds").insertBefore(post, $(".newFeeds").lastElementChild)
    $("#postContent").value = "";
}

//Messenger, Notification popup handle:
const navBarRightList = Array.from($("#navBarRight").getElementsByTagName("button"));
navBarRightList.forEach((value) => {
    value.onclick = function (event) {
        if (event.target == value || event.target == value.children[0].children[0] || event.target == value.children[0]) {
            value.children[1].classList.toggle("hidden");
        }
    }
})



function changeMode() {
    document.querySelector("html").classList.toggle("dark");
    const closeBtnList = Array.from(document.querySelectorAll(".btn-close"));
    closeBtnList.forEach((value) => {
        value.classList.toggle("btn-close-white");
    })
}