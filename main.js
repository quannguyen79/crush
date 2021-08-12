const CONFIG = {
  mobileTitle: "Dùng máy tính để thấy hay hơn 😁😁",
  mobileDesc: "Vì cái này toi chưa làm cho điện thoại á kìa 🤣",
  mobleBtn: "Thế nhá 😉",
  introTitle: "Hello babe à!",
  introDesc: `Trái đất vốn lạ thường,
  Mà sao em cứ đi nhầm đường,
  Lạc vào tim anh lẻ loi,
  Đằng sau chữ yêu đây là thương`,
  btnIntro: "HiHi",
  title: "Phải chăng anh đã yêu ngay từ cái nhìn đầu tiên 😙",
  desc: "Phải chăng anh đã say ngay từ lúc thấy nụ cười ấy ",
  btnYes1: "Vẫn cứ là thích anh iuiu ❤💕❤",
  btnYes2: "K chịu sao được ❤💕❤",
  btnYes3: "Điều tuyệt vời chỉ hiện khi e click ❤💕❤",
  btnNo1: "Không, Anh à 😢😢😢",
  btnNo2: "Chạy đâu cho trời hết nắng 😢😢😢",
  btnNo3: "Số trời đã định rồi 😢😢😢",
  question: "Trên thế giới hơn 7 tỉ người mà sao anh lại yêu mỗi em nhỉ ❤",
  placeholderInput: "Em có muốn gửi anh lời gì không 😁😁",
  reply: "Yêu thì yêu mà không yêu thì yêu <33 và anh vẫn sẽ chờ em mở lòng",
  mess: "Anh biết mà 🥰. Yêu em nhiều nhiều 😘😘😘",
  btnAccept: "Gửi nhóoo 💕💕💕",
  afterAccept:
    "Ta daaa, tin nhắn chưa có gởi đâu 😁😁\nNói chung là a sẽ chờ e, a muốn nhận được lời này do e tự viết ra\nCòn cảm động quá thì giờ gửi a lun cũng được 😁",
  messLink: "https://www.facebook.com/messages/t/3560755054001297/",
  videoLink: "",
  soundYes: "sound/tick.mp3",
  soundNo: "sound/Swish1.mp3",
  bubble_sound: "sound/bubble.wav",
  shortSad_sound: "sound/short-sad.wav",
  applaud_sound: "sound/applaud.wav",
  SoundchangeBtnContext: "sound/tick.mp3",
  _30times:
    "E vẫn chưa mỏi tay ah 😌😌😌\nGiờ chỉ có 1 lựa chọn thoi ....\nMà nếu chưa mỏi tay thì..... a chờ được 😉 \nA chờ e 1 đời còn được mà 😁",
};

const body = document.querySelector("body");
const preLoader = document.querySelector(".pre-loader");
const bg = document.querySelector(".bg");
const buttonNo = document.getElementById("no");
const buttonYes = document.getElementById("yes");
let Count = 0; //Đếm số lần mouseover vào btnNo
let flag; //Đặt cờ flag để code chỉ chạy 1 lần Content Loaded
const IsMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

window.addEventListener("DOMContentLoaded", (event) => {
  // is mobile..
  if (IsMobile.test(navigator.userAgent)) {
    document.querySelector(".modals").classList.remove("d-none");
    document.querySelector(".modal-content label").textContent =
      CONFIG.mobileTitle;
    document.querySelector(".modal-content input").value = CONFIG.mobileDesc;
    document.querySelector(".modal-content button").textContent =
      CONFIG.mobleBtn;
    document
      .querySelector(".modal-content button")
      .addEventListener("click", (event) => {
        document.querySelector(".modals").classList.add("d-none");
      });
  } else {
    flag = false;
    //Đặt cờ flag để code chỉ chạy 1 lần Loaded
    body.addEventListener("click", async (event) => {
      if (!body.contains(document.querySelector("video")) && !flag) {
        flag = true;
        $(".pre-loader").delay(350).fadeOut("slow");
        let audio = await new Audio("sound/sound.mp3");
        audio.play();
        audio.loop = true;
      }
    });
  }
});

function init() {
  buttonNo.textContent = CONFIG.btnNo1;
  buttonYes.textContent = CONFIG.btnYes1;
}

document.getElementById("hihi").addEventListener("click", async (event) => {
  let audio = await new Audio("sound/tick.mp3");
  audio.play();
  event.preventDefault();
  document.querySelector(".content").classList.add("d-none");
  buttonNo.classList.remove("d-none");
  buttonYes.classList.remove("d-none");

  //Video Background
  const videoBackground = document.createElement("video");
  videoBackground.src = CONFIG.videoLink;
  videoBackground.autoplay = true;
  videoBackground.muted = true;
  videoBackground.loop = true;
  document
    .querySelector(".container")
    .insertBefore(videoBackground, document.querySelector(".bg"));
  // document.querySelector(".bg").remove();

  document.getElementById("title").textContent = CONFIG.title;
  document.getElementById("desc").textContent = CONFIG.desc;
});

function switchButton() {
  const xNo = buttonNo.style.left;
  const yNo = buttonNo.style.top;
  if (xNo && yNo) {
    buttonYes.style.position = "absolute";
    buttonYes.style.zIndex = "100";
    buttonYes.style.left = xNo;
    buttonYes.style.top = yNo;
  }
}

async function moveButton() {
  let audio = await new Audio(CONFIG.soundNo);
  const playPromise = audio.play();
  if (playPromise !== null) {
    playPromise.catch(() => {
      audio.play();
    });
  }

  const container = document.querySelector(".container");
  const widthBySide = (window.innerWidth - container.clientWidth) / 2;
  let minX = widthBySide,
    minY = 100,
    maxX = minX + container.clientWidth;
  maxY = window.innerHeight;

  const xYes = buttonYes.style.left;
  const yYes = buttonYes.style.top;
  let x, y;
  do {
    x = (maxX - buttonNo.clientWidth) * Math.random(0, 1);
    y = (maxY - buttonNo.clientHeight) * Math.random(0, 1);
  } while (x < minX || y < minY || x > maxX || y > maxY);

  if (x === xYes || y === yYes) {
    x = x * Math.random(0, 1);
    y = y * Math.random(0, 1);
  }
  if (x && y) {
    buttonNo.style.position = "absolute";
    buttonNo.style.zIndex = "99";
    buttonNo.style.left = `${x}px`;
    buttonNo.style.top = `${y}px`;
  }
}

buttonNo.addEventListener(
  IsMobile.test(navigator.userAgent) ? "touchstart" : "mouseover",
  async (event) => {
    event.preventDefault();
    moveButton();
    switchButton();
    Count++;
    let times_1 = 6;
    let time_2 = 12;
    let time_3 = 20;
    let audio = new Audio(CONFIG.bubble_sound);
    if (Count >= times_1 && Count < time_2) {
      if (Count === times_1) audio.play();
      buttonNo.textContent = CONFIG.btnNo2;
      buttonYes.textContent = CONFIG.btnYes2;
      buttonNo.style.color = "aqua";
      buttonYes.style.color = "aqua";
    } else if (Count >= time_2) {
      if (Count === time_2) audio.play();
      buttonNo.textContent = CONFIG.btnNo3;
      buttonYes.textContent = CONFIG.btnYes3;
      buttonNo.style.color = "khaki";
      buttonYes.style.color = "khaki";
    }
    if (Count === time_3) {
      audio = new Audio(CONFIG.shortSad_sound);
      await audio.play(CONFIG.shortSad_sound);
      alert(`${CONFIG._30times}`);
    }
  }
);

buttonYes.addEventListener("click", (event) => {
  console.log("She says YES!");
  let audio = new Audio(CONFIG.soundYes);
  audio.play();
  document.querySelector(".modals").classList.remove("d-none");
  document.querySelector(".modal-content label").textContent = CONFIG.question;
  document.querySelector(".modal-content input").placeholder =
    CONFIG.placeholderInput;
  // document.querySelector(".modal-content a").href = CONFIG.messLink;
  document.querySelector(".modal-content button").textContent =
    CONFIG.btnAccept;
  document.getElementById("question").addEventListener("keyup", (event) => {
    event.preventDefault();
    event.stopPropagation();
    CreatText("question");
  });
});

document.querySelector(".modal-content").addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
});

document.querySelector(".modals").addEventListener("click", (event) => {
  event.target.classList.add("d-none");
});

document
  .querySelector(".btn-accept")
  .addEventListener("click", async (event) => {
    if (document.getElementById("question").value && flag) {
      let audio = await new Audio(CONFIG.applaud_sound).play();
      alert(CONFIG.afterAccept);
      window.open(CONFIG.messLink, "_blank");
    }
  });

const CreatText = (idInput) => {
  let needAdd = CONFIG.reply.split("");
  let strResult = "";
  const inputValue = document.getElementById(idInput).value;
  let newArr = inputValue.split("");
  if (inputValue) {
    let lengStr = newArr.length;
    if (lengStr <= needAdd.length) {
      for (let i = 0; i < lengStr; i++) {
        strResult += needAdd[i];
      }
    } else {
      strResult = CONFIG.reply;
      document.getElementById(idInput).value = strResult;
      document.getElementById(idInput).readOnly = true;
    }
  }
  document.getElementById(idInput).value = strResult;
  return strResult;
};

init();

console.log(navigator.userAgent);
