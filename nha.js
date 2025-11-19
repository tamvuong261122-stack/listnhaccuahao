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
        let volumeLevel = 1; 
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
            alert("Chọn bài hát đi tk L 😏");
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
        "a101": "Nếu những Tiếc nuối - Vũ.",
        "a102": "Mất Kết Nối - Dương Domic (Whisky Rmx)",
        "a103": "Bắt Cóc Con Tim (Lofi Ver) - Lou Hoàng ft. OnlyC  x Quanvrox",
        "a104": "Ngày Đẹp Trời Để Nói Chia Tay - Lou Hoàng",
        "a105": "Đi Để Trở Về - Soobin Hoàng Sơn",
        "a106": "Đi Để Trở Về 2 (Chuyến Đi Của Năm) - Soobin Hoàng Sơn",
        "a107": "Nơi Pháo Hoa Rực Rỡ (Đi Để Trở Về 8) - Orange x Hoàng Dũng x Cẩm Vân x Hứa Kim Tuyền",
        "a108": "Lao Tâm Khổ Tứ - Thanh Hưng",
        "a109": "10 Nghàn Năm - PC",
        "a110": "Thức Giấc - Da LAB",
        "a111": "Bạc Phận (Piano Ver) - Jack x Liam",
        "a112": "Sóng Gió (Lofi Ver) - Jack x K-ICM",
        "a113": "Hoa Hải Đường - Jack (J97)",
        "a114": "Hoa Vô Sắc - Jack x K-ICM",
        "a115": "Ngày Này Năm Ấy (Lofi Ver) - Việt Anh",
        "a116": "Nếu Ngày Ấy (Lofi Ver) - Soobin Hoàng Sơn",
        "a117": "Những Lời Hứa Bỏ Quên - Vũ. - Dear Jane",
        "a118": "Bình Yên - Vũ. - Binz",
        "a119": "Vì Anh Đâu Có Biết - Madihu - Vũ.",
        "a120": "Yên Bình Có Quá Đắt Không - KHIEM",
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
    alert("Chưa có bài hát sao phát lại dc tk L 😏");
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
  // Nếu đang gõ trong ô tìm kiếm thì bỏ qua
  if (document.activeElement.id === "search") return;

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
  const coChu = search.value.trim() !== "";

  // Khi có chữ trong ô tìm → chặn mũi tên trái/phải
  if (coChu && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
    return; 
  }

  // Khi có chữ trong ô tìm → mũi tên lên/xuống để chọn kết quả
  if (coChu && ["ArrowUp", "ArrowDown", "Enter"].includes(e.key)) {
    e.preventDefault();

    if (e.key === "ArrowDown") {
      if (currentItems.length > 0) {
        currentFocus = (currentFocus + 1) % currentItems.length;
        updateHighlight(currentItems);
      }
    } else if (e.key === "ArrowUp") {
      if (currentItems.length > 0) {
        currentFocus = (currentFocus - 1 + currentItems.length) % currentItems.length;
        updateHighlight(currentItems);
      }
    } else if (e.key === "Enter") {
      if (currentItems.length > 0) {
        if (currentFocus > -1) {
          const selected = currentItems[currentFocus];
          s1.value = selected.dataset.value;
          mo();
        } else {
          const first = currentItems[0];
          s1.value = first.dataset.value;
          mo();
        }
      } else {
        timkiem();
        const first = ketqua.querySelector("div");
        if (first) {
          s1.value = first.dataset.value;
          mo();
        }
      }

      ketqua.style.display = "none";
      search.value = "";
      currentFocus = -1;
      search.blur();
    }
    return; // kết thúc xử lý trong ô tìm
  }

  // Nếu ô tìm trống thì reset danh sách
  if (!coChu) {
    currentFocus = -1;
    currentItems = [];
    ketqua.style.display = "none";
  }
});

// 🌈 Tự động đổi nền mỗi 10 giây
const danhSachNen = [
  "url('./image/reshiram.jpg')",
  "url('./image/zekrom.jpg')",
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
  "./sound2/cos.mp3", 
  "./sound5/hieunhh.mp3",
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
    //nếu đang trong ô tìm kiếm sẽ không có tác dụng tua
    if (document.activeElement.id === "search") return;

    mu.currentTime = Math.max(0, mu.currentTime - 5);
    hienThongBao("⏪5s");
  }

  // ⏩ Tiến 5 giây
  if (e.key === "'") {
    //nếu đang trong ô tìm kiếm sẽ không có tác dụng tua
    if (document.activeElement.id === "search") return;
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
// 🧭 Thanh tua nhạc thủ công
const soundBar = document.querySelector(".sound-bar");
const soundProgress = document.querySelector(".sound-progress");

// Cập nhật tiến trình khi phát nhạc
setInterval(() => {
  if (mu && !mu.paused && mu.duration) {
    const value = (mu.currentTime / mu.duration) * 100;
    soundProgress.style.width = value + "%";
    soundBar.style.display = "block";
  } else {
    soundBar.style.display = "none";
  }
}, 200);

// Cho phép click tua
soundBar.addEventListener("click", (e) => {
  if (mu && mu.duration) {
    const rect = soundBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left; // vị trí click
    const newTime = (offsetX / rect.width) * mu.duration;
    mu.currentTime = newTime; // tua đến vị trí mới
  }
});

//Ngày và giờ
function updateClock() {
    const now = new Date();

    // Giờ và phút
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById("time").innerText = `${hours}:${minutes}`;

    // Hiển thị dạng "Th 3, 4 thg 11, 2025"
    const days = ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    document.getElementById("date").innerText =
      `${day}, ${date} thg ${month}, ${year}`;
  }

  updateClock();
  setInterval(updateClock, 1000);

  // 💖 Hiệu ứng nổ emoji (trái tim và pháo hoa)
let heartExplosionInterval = null;

function batDauNoIcon() {
  const icons = ["❤️", "💖", "🎉", "🎈", "✨", "🌟"];
  heartExplosionInterval = setInterval(() => {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.className = "emoji-effect";
      heart.textContent = icons[Math.floor(Math.random() * icons.length)];

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
      heart.style.opacity = Math.random() * 0.8 + 0.2;

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1200);
    }
  }, 500);
}

function dungNoIcon() {
  clearInterval(heartExplosionInterval);
  document.querySelectorAll(".emoji-effect").forEach(e => e.remove());
}

// 🎂 Hiệu ứng mưa bánh kem
let muaBanhKemInterval = null;

function batDauMuaBanhKem() {
  const icons = ["🎂", "🍰", "🧁", "🎊"];
  const soLuong = 1;
  muaBanhKemInterval = setInterval(() => {
    for (let i = 0; i < soLuong; i++) {
      const icon = document.createElement("div");
      icon.className = "cake-fall";
      icon.textContent = icons[Math.floor(Math.random() * icons.length)];
      icon.style.left = Math.random() * 100 + "vw";
      icon.style.fontSize = 20 + Math.random() * 40 + "px";
      icon.style.animationDuration = 5 + Math.random() * 4 + "s";
      document.body.appendChild(icon);
      setTimeout(() => icon.remove(), 5000);
    }
  }, 300);
}

function dungMuaBanhKem() {
  clearInterval(muaBanhKemInterval);
  document.querySelectorAll(".cake-fall").forEach(e => e.remove());
}

// 🎂 Sinh nhật: hỏi tên, kiểm tra, nhạc và hiệu ứng
window.addEventListener("load", () => {
  const danhSachSinhNhat = [
    { ten: "Nguyễn Minh Mẫn", ngay: 20, thang: 11, moDau: "./sound6/batngo1.mp3", bai: "./sound6/sinhnhat.mp3" },
    { ten: "Nguyễn Hoàng Hảo", ngay: 20, thang: 8, moDau: "./sound6/batngo1.mp3", bai: "./sound6/sinhnhat.mp3" },
    { ten: "Trần Thị Hồng Đào", ngay: 30, thang: 6, moDau: "./sound6/batngo1.mp3", bai: "./sound6/sinhnhat.mp3" },
    { ten: "Lê Nguyễn Chí Khang", ngay: 5, thang: 11, moDau: "./sound6/batngo1.mp3", bai: "./sound6/sinhnhat.mp3" },
    { ten: "Nguyễn Trung Hiếu", ngay: 11, thang: 5, moDau: "./sound6/batngo1.mp3", bai: "./sound6/sinhnhat.mp3" },
    { ten: "Nguyễn Thành Đạt", ngay: 12, thang: 3, moDau: "./sound6/batngo1.mp3", bai: "./sound6/sinhnhat.mp3" }
  ];

  const homNay = new Date();
  const ngay = homNay.getDate();
  const thang = homNay.getMonth() + 1;
  const nguoiSinhNhat = danhSachSinhNhat.find(n => n.ngay === ngay && n.thang === thang);
  if (!nguoiSinhNhat) return;

  const popup = document.createElement("div");
  popup.className = "birthday-popup";
  popup.innerHTML = `
    <div class="birthday-box">
      Tớ có món quà nhỏ dành dành tặng cho một người, vì hôm nay là ngày đặc biệt của người ấy 🎉<br>
      Cậu có thể cho tớ xin đầy đủ họ tên có dấu của cậu được không, để tớ xem cậu có phải người ấy hay không 💖
      <br>
      <input type="text" id="tenNguoiDung" placeholder="Nhập tên của bạn..." style="
        padding:10px 15px;border:none;border-radius:10px;width:80%;margin:20px;
        font-size:16px;text-align:center;outline:none;" />
      <br>
      <button id="xacNhanTen" style="
        background:#00d5ff;border:none;color:white;
        padding:10px;border-radius:10px;font-size:16px;cursor:pointer;margin:10px">
        Xác nhận
      </button>
    </div>
  `;
  document.body.appendChild(popup);

  const nutXacNhan = document.getElementById("xacNhanTen");
  const oNhap = document.getElementById("tenNguoiDung");

  function hienBangNanNi(text = "Năn nỉ ă cho tớ xin tên đi mòa 🥺") {
    const nanNi = document.createElement("div");
    nanNi.className = "birthday-popup";
    nanNi.innerHTML = `<div class="birthday-box">${text}</div>`;
    document.body.appendChild(nanNi);
    setTimeout(() => nanNi.remove(), 3000);
  }

  let audioMoDau = null;

  nutXacNhan.addEventListener("click", () => {
    const tenNhap = oNhap.value.trim();
    if (!tenNhap) return hienBangNanNi();

    if (tenNhap.toLowerCase() !== nguoiSinhNhat.ten.toLowerCase()) {
      popup.innerHTML = `
        <div class="birthday-box">
          Xin lỗi vì đã làm phiền cậu, tớ mời cậu thưởng thức nhạc tiếp ạ 😔<br>
          Thật buồn, cậu không phải là người ấy 💔
        </div>`;
      setTimeout(() => popup.remove(), 4000);
      return;
    }

    popup.innerHTML = `
      <div class="birthday-box">
        Chào cậu ${nguoiSinhNhat.ten}! 💕<br>
        <button id="nutBatDau" style="
          background:linear-gradient(135deg,#ff9ce6,#00d5ff);
          border:none;color:white;padding:12px 25px;
          border-radius:12px;font-size:18px;cursor:pointer;
          margin-top:20px;box-shadow:0 0 15px #00ffff;">
          🎁 Bất ngờ ở đây click vào tớ đi (: 🎉
        </button>
      </div>`;

    batDauNoIcon();
    audioMoDau = new Audio(nguoiSinhNhat.moDau);
    audioMoDau.volume = 0.5;
    audioMoDau.addEventListener("loadedmetadata", () => {
      if (audioMoDau.duration > 43) audioMoDau.currentTime = 43;
      audioMoDau.play().catch(()=>{});
    });

    const nutBatDau = document.getElementById("nutBatDau");
   nutBatDau.addEventListener("click", () => {
  // Dừng nhạc mở đầu + hiệu ứng icon
  dungNoIcon();
  if (audioMoDau) { audioMoDau.pause(); audioMoDau.currentTime = 0; }

  // 🎂 Bắt đầu mưa bánh kem
  batDauMuaBanhKem();

  // Phát nhạc sinh nhật
  const audio = new Audio(nguoiSinhNhat.bai);
  audio.volume = 0.6;
  audio.play().catch(()=>{});

  // Danh sách các lời chúc tuần tự
  const loiChuc = [
    `🎉 Chúc mừng sinh nhật cậu ${nguoiSinhNhat.ten} 🎂<br>
    Chúc cậu có một ngày thật vui vẻ và tràn đầy hạnh phúc 💖`,
    `🍀 Chúc mừng sinh nhật nhé 040425, chúc 040425 có nhiều con ghệ không chỉ có X mà còn có NA nữa (;  ✨`,
    `😊 Đừng có cay nhe (; 💫`,
    `😅 Và lời chúc cuối cùng là Ditmemay =)`
  ];

  let index = 0;
  popup.innerHTML = `<div class="birthday-box" id="loiChucBox" style="position:relative;">${loiChuc[index]}</div>`;
  const loiChucBox = document.getElementById("loiChucBox");

  // ⏱ Thời gian tự động chuyển
  const thoiGianChuyen = [12000, 12000, 12000]; // khoảng thời gian giữa các câu
  let timer = null;

  // ⚡ Hàm hiển thị câu tiếp theo
  function hienCauTiepTheo() {
    if (index < loiChuc.length - 1) {
      index++;
      loiChucBox.innerHTML = loiChuc[index];

      // Nếu là câu cuối → thêm nút ✖ góc phải
      if (index === loiChuc.length - 1) {
        loiChucBox.innerHTML += `
          <button id="dongSinhNhat" style="
            position:absolute;
            top:10px;
            right:15px;
            background:transparent;
            border:none;
            color:white;
            font-size:22px;
            cursor:pointer;">✖</button>
        `;
        const nutDong = document.getElementById("dongSinhNhat");
        nutDong.addEventListener("click", () => {
          audio.pause();
          dungMuaBanhKem();
          popup.remove();
        });
      } else {
        // nếu chưa phải câu cuối → tiếp tục setTimeout
        clearTimeout(timer);
        timer = setTimeout(hienCauTiepTheo, thoiGianChuyen[index - 1]);
      }
    }
  }

  // ⏱ Tự động chạy các câu chúc theo thời gian
  timer = setTimeout(hienCauTiepTheo, thoiGianChuyen[0]);

  // 🖱 Click bất kỳ đâu trong popup để tua nhanh qua câu kế tiếp
  popup.addEventListener("click", (e) => {
    // bỏ qua khi click vào nút ✖
    if (e.target.id === "dongSinhNhat") return;
    clearTimeout(timer);
    hienCauTiepTheo();
  });

  // 🎵 Khi nhạc kết thúc → tự đóng popup
  audio.addEventListener("ended", () => {
    dungMuaBanhKem();
    popup.remove();
  });
});

  });
});
  
// 🧩 TẮT PHÍM TẮT KHI NHẬP TÊN
document.addEventListener("keydown", function (e) {
  const input = document.activeElement;
  if (input && (input.tagName === "INPUT" || input.tagName === "TEXTAREA")) {
    e.stopImmediatePropagation();
    return;
  }
}, true);



