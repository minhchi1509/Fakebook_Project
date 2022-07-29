const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Navigation bar homepage, friend, watch, group,... control
const homePageChildrenList = document.getElementById("Homepage").children;
for (let x of homePageChildrenList) {
    x.onclick = function () {
        for (let y of homePageChildrenList) {
            y.classList.remove("before:content-['']", "before:absolute", "before:bottom-[-6px]", "before:bg-[#1B74E4]", "before:w-full", "before:h-[5px]");
            if (!y.classList.contains("hover:bg-[#F2F2F2]")) { //Khong active
                y.classList.add("hover:bg-[#F2F2F2]");
                if (y.children[0].src) {
                    if (y.children[0].src.includes("Filled"))
                        y.children[0].src = y.children[0].src.replace("Filled", "Rounded");
                }
            }
        }
        if (x.id != "listHomepageButton" && x.id != "listHomepagePopup" && x.id != "leftMenuControlButton") {
            x.classList.add("before:content-['']", "before:absolute", "before:bottom-[-6px]", "before:bg-[#1B74E4]", "before:w-full", "before:h-[5px]");
            x.classList.remove("hover:bg-[#F2F2F2]");
            if (x.children[0].src) {
                if (x.children[0].src.includes("Rounded"))
                    x.children[0].src = x.children[0].src.replace("Rounded", "Filled");
            }
        }
    }
}

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
            y.classList.remove("before:content-['']", "before:absolute", "before:bottom-[-6px]", "before:bg-[#1B74E4]", "before:w-full", "before:h-[5px]", "text-[#1B74E4]");
            if (!y.classList.contains("hover:bg-[#F2F2F2]")) { //Khong active
                y.classList.add("hover:bg-[#F2F2F2]");
            }
        }
        storyReelsTitleList[i].classList.add("before:content-['']", "before:absolute", "before:bottom-[-6px]", "before:bg-[#1B74E4]", "before:w-full", "before:h-[5px]", "text-[#1B74E4]");
        storyReelsTitleList[i].classList.remove("hover:bg-[#F2F2F2]");
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
    post.classList.add("w-full", "bg-white", "rounded-xl", "shadow-md", "mb-[16px]", "px-[16px]", "pb-[4px]", "pt-[12px]", "relative");
    post.innerHTML = `
    <div class="flex align-items-center">
    <img src="img/leftMenuImage/avarta.jpg" alt=""
        class="h-[40px] w-[40px] rounded-full cursor-pointer mr-[8px]">
    <div>
        <p class="font-[600] text-[15px] text-[#050505]">Nguyễn Minh Chí</p>
        <p class="font-[400] text-[13px] text-[#65676b]">${timeInner}</p>
    </div>
</div>
<button class="btn btn-danger absolute right-[16px] top-[12px]" onclick = "this.parentElement.remove()">Xóa</button>
<p class="mt-[5px] mb-[10px] text-black break-words">${postContent}</p>
<div class="grid grid-cols-2 gap-[5px] w-full h-[44px] border-bottom border-top py-[3px]">
    <div class="flex align-items-center justify-content-center rounded-lg hover:bg-[#F2F2F2] duration-300 cursor-pointer relative"
        id="emotionalControl" onmouseenter="setTimeout(() => {
            $('#emotionalControl').children[1].classList.toggle('hidden');
        }, 500);" onmouseleave = "$('#emotionalControl').children[1].classList.toggle('hidden');">
        <div class="flex align-items-center">
            <img src="img/uploadPostControl/thumpup.png" class="h-[25px] w-[25px]">
            <p class="font-[600] text-[15px] ml-[10px]" style="color: #65676b">Thích</p>
        </div>
        <div
            class="flex align-items-center absolute h-[50px] w-[260px] left-0 rounded-[30px] px-[15px] bottom-100 bg-white border-2 shadow-xl hidden">
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
        class="flex align-items-center justify-content-center rounded-lg hover:bg-[#F2F2F2] duration-300 cursor-pointer">
        <div class="flex align-items-center">
            <i class="fa-regular fa-message text-[20px] text-[#65676B]"></i>
            <p class="font-[600] text-[15px] text-[#65676b] ml-[10px]">Bình luận</p>
        </div>
    </div>
</div>
<div>
    <div class="flex align-items-center w-full h-[36px] mt-[8px]">
        <img src="img/leftMenuImage/avarta.jpg" alt="" class="h-[32px] w-[32px] rounded-full mr-[6px]">
        <div class="flex align-items-center flex-1 h-full bg-[#F0F2F5] rounded-[30px] px-[10px]">
            <input type="text" class="bg-transparent outline-none w-9/12"
                placeholder="Viết bình luận...">
            <img src="img/uploadPostControl/emoji.png" alt=""
                class="h-[20px] w-[20px] ml-[5px] cursor-pointer" data-bs-toggle="tooltip"
                data-bs-placement="top" title="Chèn biểu tượng cảm xúc">
            <img src="img/uploadPostControl/camera.png" alt=""
                class="h-[20px] w-[20px] ml-[10px] cursor-pointer" data-bs-toggle="tooltip"
                data-bs-placement="top" title="Đính kèm ảnh/video">
            <img src="img/uploadPostControl/gif.png" alt=""
                class="h-[20px] w-[20px] ml-[10px] cursor-pointer" data-bs-toggle="tooltip"
                data-bs-placement="top" title="Chèn file gif">
            <img src="img/uploadPostControl/sticker.png" alt=""
                class="h-[20px] w-[20px] ml-[10px] cursor-pointer" data-bs-toggle="tooltip"
                data-bs-placement="top" title="Chèn nhãn dán">
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
        if (event.target === value || event.target === value.children[0]) {
            value.children[1].classList.toggle("hidden");
        }
    }
})