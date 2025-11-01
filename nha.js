const nut2 = document.getElementById('lui');
        const oldText2 = nut2.innerText;                        //oldText lưu 
        const nut = document.getElementById('mo');
        const oldText = nut.innerText;
        const nut3 = document.getElementById('tien');
        const oldText3 = nut3.innerText;
        const phatl = document.getElementById('phatlai');
        const oldText1 = phatl.innerText;
        const e = document.querySelectorAll("audio:not(#nhacnen)");              //Gọi tất cả các thẻ audio = e
        const doi = document.getElementById('phattiep');
        const nhacnen =document.getElementById('nhacnen');
        let volumeLevel = 0.30; 
        let nen = 0;
        e.forEach(a => a.volume = volumeLevel);
        nhacnen.volume = nen;
        let mu = null;                                             //Lưu bài đang phát
        function lui() {
  const s1 = document.getElementById('s1');

  if (isRandom && lichsuPhat.length > 1) {
    // 🔁 Nếu random đang bật và có lịch sử → lùi về bài trước
    lichsuPhat.pop(); // bỏ bài hiện tại
    const baiTruoc = lichsuPhat.pop(); // lấy bài trước đó
    if (baiTruoc) {
      s1.value = baiTruoc;
      mo();
    }
  } else {
    // 🔙 Nếu không random → lùi bình thường
    let luii = s1.selectedIndex;
    luii--;
    if (luii <= 0) luii = s1.options.length - 1;
    s1.selectedIndex = luii;
    mo();
if (mu && !mu.paused) cheDo = "music"; // 🔊 giữ chế độ âm lượng sau khi lùi
  }
}
        function mo(){
        const luachon = document.getElementById('s1').value;
        const ten =document.getElementById('ten');
        if(!luachon){
          if(isRandom) return;
            alert("Chọn bài hát đi tk L");
            return;
        }
        const nhac = document.getElementById(luachon);
        const content = {
        "a2": "Anh Thanh Niên - HuyR x Viz",
        "a3": "Cause I love you - Noo Phước Thịnh",
        "a4": "3107 Full - Nâu, Duongg, Titie, 267, Erik, W/n",
        "a5": "Yêu Anh Em Nhé - HuyR x Viz",
        "a6": "Hơn Cả Mây Trời - Việt",
        "a7": "Buồn Thì Cứ Khóc Đi - Lynk Lee",
        "a8": "Yêu Em Dại Khờ - Lou Hoàng",
        "a9": "Răng Khôn - Phí Phương Anh",
        "a10": "Thất Tình - Trịnh Đình Quang",
        "a11": "Phụ Tình - Trịnh Đình Quang",
        "a12": "Lạc Trôi - Sơn Tùng M-TP",
        "a13": "Giai Điệu Việt Nam, Ái Nộ, Nhất Thân, Túy Âm, Vô Duyên - Masew ft Khôi Vũ",
        "a14": "Người Kế Nhiệm (后继者) - Nhậm nhiên",
        "a15": "Chạm Đáy Nỗi Đau - Erik ft Mr.Siro",
        "a16": "Vì Em Chưa Bao Giờ Khóc - Hà Nhi ft A.C Xuân Tài",
        "a17": "Lệ Lưu Ly - Vũ Phụng Tiên ft DT",
        "a18": "Chàng Trai Bất Tử - An Vũ ft Sino",
        "a19": "Đau Để Trưởng Thành - OnlyC",
        "a20": "Yêu Là Tha Thứ - OnlyC",
        "a21": "Lời Anh Chưa Thể Nói - Hàn Khởi Han",
        "a22": "Lời Anh Muốn Nói - The Men",
        "a23": "Xuôi Dòng Cửu Long - Diệu Kiên",
        "a24": "Sống Xa Anh Chẳng Dễ Dàng - Bảo Anh ft Mr Siro",
        "a25": "Dưới Những Cơn Mưa - Mr.Siro",
        "a26": "Bức Tranh Từ Nước Mắt - Mr.Siro",
        "a27": "Lắng Nghe Nước Mắt - Mr.Siro",
        "a28": "Yêu Một Người Vô Tâm - Mr.Siro",
        "a29": "Một Bước Yêu, Vạn Dặm Đau - Mr.Siro",
        "a30": "Cứ Chill Thôi - Chillies, SUNI, Rhymastic",
        "a31": "Nhắn Nhủ - Ronboogz",
        "a32": "Buồn Hay Vui x Please Tell Me Why - Vsoul x MCK x OBITO x Ronboogz",
        "a33": "Kho Báu (with Rhymastic) - (S)TRONG x Rhymastic",
        "a34": "Kém Duyên - RUM X NIT X MASEW",
        "a35": "Bán Duyên - Đình Dũng",
        "a36": "Chạnh Lòng Thương Cô - Huy Vạc X NON HANTA",
        "a37": "Chạnh Lòng Thương Cô 2 - Huy Vạc",
        "a38": "Chạnh Lòng Thương Cô 4 - Huy Vạc",
        "a39": "Kiếp má hồng - TLong - Tú Na - Tiểu Nhi",
        "a40": "Kiếp Tơ Tằm - Nguyễn Phi Hải",
        "a41": "Tình Đầu - Tăng Duy Tân",
        "a42": "Yêu Một Người Có Lẽ - Lou Hoàng - Miêu Lê",
        "a43": "Giá Như Anh Lặng Im - OnlyC, Lou Hoàng, Quang Hùng",
        "a44": "Đếm Ngày Xa Em - OnlyC ft Lou Hoang",
        "a45": "Ôm Trọn Nỗi Nhớ - RUM",
        "a46": "Chuyện Đôi Ta - Emcee L (Da LAB) ft Muộii",
        "a47": "Não Cá Vàng - OnlyC ft Lou Hoàng",
        "a48": "Cuối Cùng Thì - TAMA cover",
        "a49": "Công Chúa Bong Bóng - An Vũ cover",
        "a50": "Boss Mode - Phonk Racing Drift Sigma By Infraction",
        "a51": "Tình Ca Tình Ta - (Kis)",
        "a52": "Yêu Thương Chẳng Là Mãi Mãi (Lofi Ver.) - DC Tâm",
        "a53": "Yêu Thương Nhau Gì Đâu - Du Thiên",
        "a54": "Đêm Trắng - Khắc Việt _ Quang Quý Cover 「Lofi Version」",
        "a55": "Tuyệt Sắc (Orinn Remix) - NamDuc",
        "a56": "Đoạn Tuyệt Nàng Đi (Lofi Ver.) - Phát Huy T4",
        "a57": "Vòng Suy Nghĩ (Think Of You) - Mai Âm Nhạc",
        "a58": "Sẽ Lại Đau Thôi - Linh Linh, NAhy",
        "a59": "Nửa Vầng Trăng - NTD",
        "a60": "Chẳng Còn Thời Gian Ấy - Bem ft. Nguyen, ImPoe (speed up & lyrics by zịt)",
        "a61": "Ôm Em Lần Cuối ( Lofi Ver ) - Nit X Sing X Zeaplee",
        "a62": "Đông Miên (Lofi Ver) - Tư Nam",
        "a63": "Đông Miên - Tư Nam",
        "a64": "Tình Yêu Diệu Kỳ - Bùi Công Nam",
        "a65": "Đóa Quỳnh Lan - Htrol Remix [ H2k ft Yuni Boo ]",
        "a66": "Đóa Phù Dung Cuối Cùng - Đức Phúc, Hùng Huỳnh",
        "a67": "Từ Em Mà Ra (Whisky x Freak D Lofi Ver) - Lil Z Poet ft Đức Anh",
        "a68": "Thay Thế - Hồ Gia Hùng",
        "a69": "Giả Vờ Thương Anh Được Không - Chu Bin",
        "a70": "Nếu Là Anh - The Men",
        "a71": "Người Con Trai Ấy - Nguyễn Đình Vũ",
        "a72": "Chạy Về Nơi Phía Anh (Lofi Ver) - Khắc Việt X Thảo Bebe",
        "a73": "Níu Duyên (Lofi Ver) - Lê Bảo Bình x Vux",
        "a74": "Ép Duyên - Long Nón Lá Ft KAYDEE Cover",
        "a75": "Suy Nghĩ Trong Anh (Lofi Ver) - Chu Duyên X Ness",
        "a76": "Có Duyên Không Nợ Remix - Tina Ho Cover X H2O",
        "a77": "Vô Duyên - Suzie, Dr A",
        "a78": "Duyên Mộng Vỡ Tan - Qiti (Quyết Trịnh)",
        "a79": "Khuê Mộc Lang - Hương Ly ft Jombie",
        "a80": "Người Thay Thế Em - Hoàng Lan",
        "a81": "Thay Lòng (Lofi By NH4T) DIMZ x TVk x WindV",
        "a82": "Như Anh Đã Thấy Em - PhucXP",
        "a83": "Thay Tôi Yêu Cô Ấy - Thanh Hưng",
        "a84": "Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp",
        "a85": "Bông Hoa Nở Muộn - Tú Na cover",
        "a86": "Way Back Home (Lời Việt) - Huy Vạc, Shaun ft Freak D",
        "a87": "Way Back Home (feat. Conor Maynard) - 숀 (SHAUN)",
        "a88": "Gương Mặt Lạ Lẫm - Mr.Siro",
        "a89": "Ngắm Hoàng Hôn Từ Tầng 3 - Nàng Kay Châu Anh Cover",
        "a90": "Dối lừa (Lofi Ver) - Nguyễn Đình Vũ",
        "a91": "Em Còn Nhớ Anh Không (Lofi Ver) - Hoàng Tôn",
        "a92": "Hoa Son Vàng - H-Kray",
        "a93": "Không Lấy Được Vợ Remix - Hồ Gia Khánh x H2O",
        "a94": "Anh Nhớ Em Nhiều Lắm - Cao Tùng Anh",
        "a95": "Về Bên Anh (Lofi Ver) - Jack",
        "a96": "Muốn Nói Với Em (Lofi Ver) - TTeam, Black Bi",
        "a97": "Cảm Ơn Vì Đã Yêu x Tháng Năm - Darki x SOOBIN",
        "a98": "Cry For Me - Michita ft. Ami (愛海)",
        "a99": "Đáy Biển - Nhất Chi Lựu Liên (Bản Gốc)-[海底一支榴莲]",
        "a100": "Bầu Trời Mới - Da LAB",
        "a101": "Nếu những Tiếc nuối - Vũ",
        "a102": "Mất Kết Nối - Dương Domic (Whisky Rmx)",
        "a103": "Bắt Cóc Con Tim (Lofi Ver) - Lou Hoàng ft. OnlyC  x Quanvrox",
        "a104": "Ngày Đẹp Trời Để Nói Chia Tay - Lou Hoàng",
        "a105": "Đi Để Trở Về - Soobin Hoàng Sơn",
        "a106": "Đi Để Trở Về 2 (Chuyến Đi Của Năm) - Soobin Hoàng Sơn",
        "a107": "Nơi Pháo Hoa Rực Rỡ (Đi Để Trở Về 8) - Orange x Hoàng Dũng x Cẩm Vân x Hứa Kim Tuyền",
        "a108": "Công Chúa Bong Bóng - An Vũ cover",
        "a109": "Công Chúa Bong Bóng - An Vũ cover",
        "a110": "Công Chúa Bong Bóng - An Vũ cover",
        "a111": "Công Chúa Bong Bóng - An Vũ cover",
        "a112": "Công Chúa Bong Bóng - An Vũ cover",
        "a113": "Công Chúa Bong Bóng - An Vũ cover",
        "a114": "Công Chúa Bong Bóng - An Vũ cover",
        "a115": "Công Chúa Bong Bóng - An Vũ cover",
        "a116": "Công Chúa Bong Bóng - An Vũ cover",
        "a117": "Công Chúa Bong Bóng - An Vũ cover",
        "a118": "Công Chúa Bong Bóng - An Vũ cover",
        "a119": "Công Chúa Bong Bóng - An Vũ cover",
        "a120": "Công Chúa Bong Bóng - An Vũ cover",
        "a121": "Công Chúa Bong Bóng - An Vũ cover",
        };
        e.forEach(a => {                                        //Ẩn thanh tua âm nhạc khi đổi bài
            a.pause();
            a.style.display = "none";
        });
        if(mu && mu !== nhac){
            mu.pause();                                             //Dừng phát: pause
            mu.currentTime = 0;                                     //Dừng lại khi phát bài khác: currentTime
        } 
        // Nếu bấm lại cùng bài → tắt nhạc
        if (mu === nhac) {
    nhac.pause();
    nut.innerText = "▶️";
    ten.innerText = content[luachon];
    nhacnen.play();
    mu = null;
    return;
        }

  // Nếu chưa phát → phát nhạc mới
    nhac.play();

    // ✅ Đồng bộ trạng thái phát lại khi chuyển bài
if (isLooping) {
  nhac.loop = true;
  phatl.innerText = "Tắt 🔁";
} else {
  nhac.loop = false;
  phatl.innerText = "Bật 🔁";
}

    if (!lichsuPhat.includes(luachon)) {
  lichsuPhat.push(luachon); // lưu lại bài vừa phát
}
    ten.innerText = content[luachon];
    nut.innerText = "⏸️";
    nhac.style.display = " block",
    nhacnen.pause()
    mu = nhac;
  // Khi phát xong tự reset
    nhac.onended = function () {
      //nếu bật chế dộ random thì bỏ qua reset giao diện
      if(isRandom) return;
      //khi hết nhạc trở về giao diện cũ
    ten.innerHTML = "-- Chọn bài hát --";
    nut.innerText = "▶️";
    nhac.style.display = "none";
    nhacnen.play();
    mu = null;
        }
        }
        function tien() {
  const s1 = document.getElementById('s1');

  if (isRandom) {
    // 🔀 Nếu bật random thì phát bài ngẫu nhiên
    const randomIndex = Math.floor(Math.random() * (s1.options.length - 1)) + 1;
    s1.selectedIndex = randomIndex;
    mo();
  } else {
    // ▶ Nếu tắt random thì phát bài tiếp theo như bình thường
    let tienn = s1.selectedIndex;
    tienn++;
    if (tienn >= s1.options.length) tienn = 1;
    s1.selectedIndex = tienn;
    mo();
    if (mu && !mu.paused) cheDo = "music"; // 🔊 giữ chế độ âm lượng sau khi tới bài

  }
}
    function phatlai() {
  const luachon = document.getElementById('s1').value;
  const ten = document.getElementById('ten');
  const nhac = document.getElementById(luachon);

  if (!nhac) {
    alert("Chưa có bài hát nào được phát!");
    return;
  }

  if (nhac.loop) {
    nhac.loop = false;
    isLooping = false; // ❌ Tắt trạng thái lặp toàn cục
    phatl.innerText = "Bật 🔁";
  } else {
    nhac.loop = true;
    isLooping = true; // ✅ Ghi nhớ trạng thái lặp toàn cục
    phatl.innerText = "Tắt 🔁";

    // 🔁 Khi bật phát lại → tắt ngẫu nhiên
    isRandom = false;
    const nutPhatTiep = document.getElementById("Phattiep");
    nutPhatTiep.textContent = "Bật 🔀";
    nutPhatTiep.style.background = "";
  }

  ten.innerHTML = content[luachon];
  nut.innerText = "Tắt nhạc";
  nhac.style.display = "block";
}


const s1 = document.getElementById("s1");
const songs = Array.from(s1.options);
    // 👉 Hàm loại bỏ dấu tiếng Việt và chuyển sang chữ thường
function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}
let isRandom = false; // Trạng thái phát ngẫu nhiên
let lichsuPhat = []; // Lưu id các bài đã phát
let isLooping = false; // 🔁 Trạng thái phát lại toàn cục
// Gọi tới nút phát tiếp của bạn
const nutPhatTiep = document.getElementById("Phattiep");
// Thay đổi chức năng của nút phát tiếp
nutPhatTiep.addEventListener("click", () => {
  isRandom = !isRandom; // Đổi trạng thái
  if (isRandom) {
    nutPhatTiep.textContent = "Tắt 🔀";
    nutPhatTiep.style.background = "background: linear-gradient(135deg, #d89bbb, #d8eaff);";

    // 🔀 Khi bật ngẫu nhiên → tắt phát lại
    const luachon = document.getElementById('s1').value;
    const nhac = document.getElementById(luachon);
    if (nhac) nhac.loop = false;
    phatl.innerText = "Bật 🔁";
  } else {
    nutPhatTiep.textContent = "Bật 🔀";
    nutPhatTiep.style.background = "";
  }
});

// Khi bài hát kết thúc -> nếu bật random thì phát bài khác ngẫu nhiên
e.forEach(a => {
  a.addEventListener("ended", () => {
    if (isRandom) {
      const s1 = document.getElementById("s1");
      const randomIndex = Math.floor(Math.random() * s1.options.length);
      s1.selectedIndex = randomIndex;
      mo(); // Gọi lại hàm mo() để phát bài vừa chọn
    } else {
      // Nếu tắt random thì phát tiếp bài sau bình thường
      doitudong();
    }
  });
})
        // Đồng bộ âm lượng: khi chỉnh 1 bài thì tất cả cùng thay đổi
  e.forEach(audio => {
    audio.addEventListener("volumechange", () => {                 //
      volumeLevel = audio.volume;
      e.forEach(a => a.volume = volumeLevel);
    });
});

let currentFocus = -1;
let currentItems = [];

function updateHighlight(items) {
  items.forEach((item, index) => {
    if (index === currentFocus) {
      item.classList.add("active-item");
      // Cuộn đến item đang được chọn
      item.scrollIntoView({ block: "nearest" });
    } else {
      item.classList.remove("active-item");
    }
  });
}
// 🧠 Thông báo âm lượng hiện giữa màn hình
function showVolumeNotification(level) {
  // Xóa thông báo cũ (nếu có)
  const old = document.getElementById("volumeNotice");
  if (old) old.remove();

  // Tạo thông báo mới
  const notice = document.createElement("div");
  notice.id = "volumeNotice";
  notice.textContent = `🔊: ${(level * 100).toFixed(0)}%`;
  Object.assign(notice.style, {
    position: "fixed",
    bottom: "0px",
    right: "0px",
    transform: "translate(-50%, -50%)",
    background: "rgba(0,0,0,0.7)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "12px",
    fontSize: "20px",
    zIndex: 9999,
    transition: "opacity 0.5s ease",
    opacity: 1
  });
  document.body.appendChild(notice);

  // Ẩn sau 1 giây
  setTimeout(() => {
    notice.style.opacity = 0;
    setTimeout(() => notice.remove(), 500);
  }, 1000);
}

// 🎧 Điều khiển âm lượng bằng phím , / .
document.addEventListener("keydown", function (e) {
  if (!mu) return; // Không có bài đang phát thì bỏ qua
  if (e.key === ",") {
    mu.volume = Math.max(0, mu.volume - 0.05);
    showVolumeNotification(mu.volume);
  } else if (e.key === ".") {
    mu.volume = Math.min(1, mu.volume + 0.05);
    showVolumeNotification(mu.volume);
  }
});

function timkiem() {
  const input = search.value.toLowerCase().trim();
  ketqua.innerHTML = "";

  if (input === "") {
    ketqua.style.display = "none";
    currentFocus = -1;
    currentItems = [];
    return;
  }

  const matched = songs.filter(opt =>
    removeVietnameseTones(opt.textContent).includes(removeVietnameseTones(input))
  );

  if (matched.length > 0) {
    ketqua.style.display = "block";
    matched.forEach(opt => {
      const div = document.createElement("div");
      div.textContent = opt.textContent;
      div.dataset.value = opt.value;

      // Khi click chọn bài hát
      div.onclick = () => {
        s1.value = opt.value;
        ketqua.style.display = "none";
        search.value = "";
        currentFocus = -1;
        mo();
      };

      ketqua.appendChild(div);
    });
    currentItems = ketqua.querySelectorAll("div");
  } else {
    ketqua.style.display = "none";
    currentFocus = -1;
    currentItems = [];
  }
}

// Xử lý khi nhấn phím mũi tên & Enter
const search = document.getElementById("search");
const ketqua = document.getElementById("ketqua");
search.addEventListener("keydown", function (e) {
  if (!currentItems.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    currentFocus++;
    if (currentFocus >= currentItems.length) currentFocus = 0;
    updateHighlight(currentItems);
  } 
  else if (e.key === "ArrowUp") {
    e.preventDefault();
    currentFocus--;
    if (currentFocus < 0) currentFocus = currentItems.length - 1;
    updateHighlight(currentItems);
  } 
  else if (e.key === "Enter") {
  e.preventDefault();

  // Nếu có bài đang chọn bằng mũi tên
  if (currentFocus > -1) {
    const selected = currentItems[currentFocus];
    s1.value = selected.dataset.value; // gán giá trị cho select
    mo(); // 🔊 phát nhạc
  }
  // Nếu chưa chọn gì, phát bài đầu tiên trong kết quả
  else if (currentItems.length > 0) {
    const first = currentItems[0];
    s1.value = first.dataset.value;
    mo();
  }
  ketqua.style.display = "none"; // ẩn khung kết quả
  search.value = ""; // xóa chữ trong ô tìm
  currentFocus = -1;
  search.blur(); // thoát khỏi ô tìm kiếm
}
});

// 🌈 Tự động đổi nền mỗi 10 giây
const danhSachNen = [
  "url('reshiram.jpg')",
  "url('zekrom.jpg')",
];

let viTriNen = 0;
setInterval(() => {
  viTriNen = (viTriNen + 1) % danhSachNen.length;
  document.body.style.backgroundImage = danhSachNen[viTriNen];
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
}, 10000); // ⏰ đổi nền mỗi 10 giây
// 🎵 Danh sách nhạc nền
const danhSachNhacNen = [
  "soundcloudaud.com_Call of Silence.mp3", 
   "soundcloudaud.com_Thiếu Niên Hoa Hồng Ver Violin -《玫瑰少年 Womxnly》.mp3",
];

let viTriNhacNen = 0;
const nhacNen = document.getElementById("nhacnen");
nhacNen.src = danhSachNhacNen[viTriNhacNen];
nhacNen.volume = 0.1;
nhacNen.play();

// 🔁 Khi nhạc nền kết thúc → chuyển sang bài tiếp theo
nhacNen.addEventListener("ended", () => {
  viTriNhacNen = (viTriNhacNen + 1) % danhSachNhacNen.length;
  nhacNen.src = danhSachNhacNen[viTriNhacNen];
  nhacNen.play();
});

// 🎹 Bấm phím P hoặc L để bật/tắt chế độ 🔀 và 🔁, đồng thời chuyển ô sáng
document.addEventListener("keydown", function (e) {
  // Nếu đang gõ trong ô tìm kiếm thì bỏ qua
  if (document.activeElement.id === "search") return;

  // 🔁 Phím L
  if (e.key.toLowerCase() === "l") {
    current = "phatlai"; // chuyển ô sáng sang nút 🔁
    updateFocus(); // cập nhật hiệu ứng sáng

    const nutPhatLai = document.getElementById("phatlai");
    nutPhatLai.click(); // bật/tắt phát lại

    // Thông báo nhỏ trên góc phải
    const msg = document.createElement("div");
    msg.textContent = nutPhatLai.innerText.includes("Tắt")
  }

  // 🔀 Phím P
  if (e.key.toLowerCase() === "p") {
    current = "phattiep"; // chuyển ô sáng sang nút 🔀
    updateFocus(); // cập nhật hiệu ứng sáng

    const nutPhatTiep = document.getElementById("Phattiep");
    nutPhatTiep.click(); // bật/tắt phát ngẫu nhiên
  }
   // 🔘 Phím N → chuyển ô sáng sang Option
  if (e.key.toLowerCase() === "n") {
    current = "option";
    updateFocus();
    const optionEl = document.getElementById("option");
    optionEl.focus();

    // Thêm hiệu ứng nhỏ báo chuyển ô
    const msg = document.createElement("div");
    msg.textContent = "🎚️ Đang chọn: OPTION";
}
});




// 🎮 DANH SÁCH CÁC NÚT CHÍNH
const controls = {
  lui: document.getElementById("lui"),        // ⏮️
  mo: document.getElementById("mo"),          // ▶️ / ⏸️
  tien: document.getElementById("tien"),      // ⏭️
  phatlai: document.getElementById("phatlai"),// 🔁
  phattiep: document.getElementById("Phattiep"), // 🔀
  option: document.getElementById("s1"),      // danh sách bài hát
  search: document.getElementById("search"),  // ô tìm kiếm
};

// 🌈 CSS hiệu ứng sáng khi được chọn
const style = document.createElement("style");
document.head.appendChild(style);

// Thứ tự điều hướng
const order = ["lui", "mo", "tien", "phatlai", "phattiep"];
let current = "mo"; // bắt đầu ở ▶️

// 🔹 Cập nhật hiệu ứng sáng
function updateFocus() {
  Object.values(controls).forEach(el => el?.classList?.remove("focus-tv"));
  controls.option.blur();

  if (current !== "search" && controls[current]) {
    controls[current].classList.add("focus-tv");
  }

  if (current === "option") controls.option.classList.add("focus-tv");

  if (current === "search") {
    controls.search.focus();
  } else {
    controls.search.blur(); // ẩn dấu nháy khi rời ô
  }
}
updateFocus();

// 🎮 Điều khiển bàn phím
document.addEventListener("keydown", function (e) {
  const searchHasText = controls.search.value.trim().length > 0;

  // ✅ Nếu đang ở ô tìm kiếm và có chữ → cho phép dùng mũi tên trái/phải để di chuyển con trỏ
  if (current === "search" && searchHasText && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
    return; // không chặn hành vi mặc định
  }

  switch (e.key) {
    // 🔼
    case "ArrowUp":
      if (current === "phatlai") {
        current = "option"; // 🔁 → option
        controls.option.focus();
      } else if (current === "phattiep") {
        current = "tien"; // 🔀 → ⏭️
      } else if (["lui", "mo", "tien"].includes(current)) {
        current = "search"; // ⏮️▶️⏭️ → tìm kiếm
        controls.search.focus();
      } else if (current === "option") {
        if (controls.option.selectedIndex > 0)
          controls.option.selectedIndex -= 1;
        else
          controls.option.selectedIndex = controls.option.options.length - 1;
      } else if (current === "search") {
        if (searchHasText) {
          // có chữ → điều khiển kết quả tìm kiếm
        } else {
          // không có chữ → sang 🔀
          current = "phattiep";
        }
      }
      updateFocus();
      break;

    // 🔽
    case "ArrowDown":
      if (current === "lui") {
        current = "phatlai"; // ⏮️ → 🔁
      } else if (current === "mo" || current === "tien") {
        current = "phattiep"; // ▶️ hoặc ⏭️ → 🔀
      } else if (current === "phattiep" || current === "phatlai") {
        current = "search"; // 🔀 hoặc 🔁 → tìm kiếm
        controls.search.focus();
      } else if (current === "option") {
        if (controls.option.selectedIndex < controls.option.options.length - 1)
          controls.option.selectedIndex += 1;
        else
          controls.option.selectedIndex = 0;
      } else if (current === "search" && !searchHasText) {
        current = "mo"; // trống → xuống ▶️
      }
      updateFocus();
      break;

    // ⬅️
    case "ArrowLeft":
      if (current === "option") {
        current = "tien"; // option → ⏭️
      } else if (current === "lui") {
        current = "option"; // ⏮️ → option
        controls.option.focus();
      } else if (current === "search" && !searchHasText) {
        current = "lui"; // trống → sang ⏮️
      } else {
        const idx = order.indexOf(current);
        current = order[(idx - 1 + order.length) % order.length];
      }
      updateFocus();
      break;

    // ➡️
    case "ArrowRight":
      if (current === "option") {
        current = "lui"; // option → ⏮️
      } else if (current === "phattiep") {
        current = "option"; // 🔀 → option
        controls.option.focus();
      } else if (current === "tien") {
        current = "option"; // ⏭️ → option
        controls.option.focus();
      } else if (current === "search" && !searchHasText) {
        current = "tien"; // trống → sang ⏭️
      } else {
        const idx = order.indexOf(current);
        current = order[(idx + 1) % order.length];
      }
      updateFocus();
      break;

    // ⏎ Enter
    case "Enter":
      if (current === "option") {
        mo(); // phát bài đang chọn
      } else if (current === "search") {
        controls.search.focus();
        controls.search.select();
      } else {
        controls[current].click();
      }
      break;
  }
});



// 🎵 Phím dài (Space) để mở / tắt phát nhạc hoặc cách chữ
document.addEventListener("keydown", function (e) {
  // Nếu đang ở trong ô tìm kiếm => cho phép cách chữ
  if (document.activeElement.id === "search") return;

  // Nếu không trong ô tìm kiếm → xử lý như nút ▶️
  if (e.key === " ") {
    e.preventDefault(); // chặn scroll trang
    current = "mo";
    updateFocus();

    // Nếu đang phát nhạc thì dừng
    if (mu && !mu.paused) {
      mu.pause();
      controls.mo.innerText = "▶️";
      nhacnen.play();
      mu = null;
    } 
    // Nếu đang dừng thì phát
    else {
      controls.mo.click();
    }
  }
});


// 🎵 Phím ; và ' để tua đúng 5 giây (chính xác, không cộng dồn)
document.addEventListener("keydown", function (e) {
  // chỉ xử lý 1 lần mỗi khi nhấn
  if (e.repeat) return;

  // lấy bài đang phát (biến mu)
  if (!mu) return; // nếu chưa chọn bài thì bỏ qua

  // ⏪ Lùi 5 giây
  if (e.key === ";") {
    mu.currentTime = Math.max(0, mu.currentTime - 5);
    hienThongBao("⏪5s");
  }

  // ⏩ Tiến 5 giây
  if (e.key === "'") {
    mu.currentTime = Math.min(mu.currentTime + 5, mu.duration - 0.1);
    hienThongBao("⏩ 5s");
  }
});

// 🧩 Hiện popup báo góc phải
function hienThongBao(text) {
  const msg = document.createElement("div");
  msg.textContent = text;
  Object.assign(msg.style, {
    position: "fixed",
    bottom: "60px",
    right: "10px",
    background: "rgba(0,0,0,0.7)",
    color: "white",
    padding: "8px 16px",
    borderRadius: "10px",
    fontSize: "18px",
    zIndex: 9999,
    transition: "opacity 0.5s ease",
    opacity: 1
  });
  document.body.appendChild(msg);
  setTimeout(() => {
    msg.style.opacity = 0;
    setTimeout(() => msg.remove(), 500);
  }, 100);
}