
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>listnhac</title>
    <link rel="stylesheet" href="nha.css">
</head>
<body>
    <h1 class="chay"> <marquee>--Nhạc chill anh Hảo khuyên nên nghe--</marquee> </h1>
    <div class="timkiembox">
    <!--Ô tìm kiếm-->
    <input type="text" id="search" placeholder="Tìm kiếm" oninput="timkiem()"> 
    <!--Ô kết quả-->
    <div id="ketqua"></div>
    </div>
    <div class="meo">
    <img class="x2" src="loip-removebg-preview.png">
    <h2 class="k">0o--Danh sách bài hát️--o0</h2>
    </div>
    <div>
    <h4 style="color: rgb(14, 11, 11);" > <marquee id="ten"> -Chọn bài hát- </marquee> </h4>
    </div>
    <audio id="nhacnen" autoplay></audio>
    <audio id="a2" src="Anh Thanh Niên - HuyR __ Viz Remix - Viz - SoundLoadMate.com.mp3" controls></audio>
    <audio id="a3" src=".Cause I Love You -Noo Phước Thịnh(speed up) - Trần Thanh Lâm - SoundLoadMate.com.mp3" controls></audio>
    <audio id="a4" src=".3107 Full (1, 2, 3, 4, 5) - W_n, Dươngg, Nâu, Titie, Erik, Nguyenn, 267 - 𝑬𝒓𝒊𝒄 ♪ - SoundLoadMate.com.mp3" controls></audio>
    <audio id="a5" src=".Yêu Anh Em Nhé - Huy, Tùng Viu - SoundLoadMate.com.mp3" controls></audio>
    <audio id="a6" src="soundcloudaud.com_Việt - Hơn Cả Mây Trời (lofi ver by hawys).mp3" controls></audio>
    <audio id="a7" src="soundcloudaud.com_Buồn Thì Cứ Khóc Đi - Lynk Lee.mp3" controls></audio>
    <audio id="a8" src="soundcloudaud.com_Yêu Em Dại Khờ.mp3" controls></audio>
    <audio id="a9" src="soundcloudaud.com_Răng Khôn (Orinn Remix) - Phí Phương Anh X Rin9.mp3" controls></audio>
    <audio id="a10" src="soundcloudaud.com_Trịnh Đình Quang – Thất Tình.mp3" controls></audio>
    <audio id="a11" src="soundcloudaud.com_Phụ Tình.mp3" controls></audio>
    <audio id="a12" src="soundcloudaud.com_Sơn Tùng MTP - Lạc Trôi (Triple D Remix).mp3" controls></audio>
    <audio id="a13" src="soundcloudaud.com_Masew - Giai Điệu Việt Nam , Ái Nộ , Nhất Thân , Túy Âm , Vô Duyên.mp3" controls></audio>
    <audio id="a14" src="soundcloudaud.com_Người Kế Nhiệm -  后继者 - Nhậm Nhiên - 任然.mp3" controls></audio>
    <audio id="a15" src="soundcloudaud.com_♪ Chạm Đáy Nỗi Đau - Erik ft Mr Siro _ Lyrics Video _ Cót Két TV.mp3" controls></audio>
    <audio id="a16" src="soundcloudaud.com_Hà Nhi - Vì Em Chưa Bao Giờ Khóc I A.C Xuân Tài I Acoustic Version.mp3" controls></audio>
    <audio id="a17" src="soundcloudaud.com_Lệ Lưu Ly - Vũ Phụng Tiên ft DT.mp3" controls></audio>
    <audio id="a18" src="soundcloudaud.com_Chàng Trai Bất Tử _ An Vũ ft Sino.mp3" controls></audio>
    <audio id="a19" src="soundcloudaud.com_Đau Để Trưởng Thành - OnlyC.mp3" controls></audio>
    <audio id="a20" src="soundcloudaud.com_Yeu La Tha Thu.mp3" controls></audio>
    <audio id="a21" src="soundcloudaud.com_Loi Anh Chua The Noi.mp3" controls></audio>
    <audio id="a22" src="soundcloudaud.com_Lời Anh Muốn Nói - The Men.mp3" controls></audio>
    <audio id="a23" src="soundcloudaud.com_XUÔI DÒNG CỬU LONG  REMIX.mp3" controls></audio>
    <audio id="a24" src="soundcloudaud.com_Sống Xa Anh Chẳng Dễ Dàng - Bảo Anh ft Mr Siro.mp3" controls></audio>
    <audio id="a25" src="soundcloudaud.com_Dưới Những Cơn Mưa - Mr Siro.mp3" controls></audio>
    <audio id="a26" src="soundcloudaud.com_Buc Tranh Tu Nuoc Mat - Mr.Siro.mp3" controls></audio>
    <audio id="a27" src="soundcloudaud.com_Lắng Nghe Nước Mắt - Mr. Siro [Master].mp3" controls></audio>
    <audio id="a28" src="soundcloudaud.com_YeuMotNguoiVoTam - Mr. Siro.mp3" controls></audio>
    <audio id="a29" src="soundcloudaud.com_Một Bước Yêu, Vạn Dặm Đau - Mr. Siro.mp3" controls></audio>
    <audio id="a30" src="soundcloudaud.com_cu chill thoi - tiktok version.mp3" controls></audio>
    <audio id="a31" src="soundcloudaud.com_Nhắn Nhủ - Ronboogz.mp3" controls></audio>
    <audio id="a32" src="soundcloudaud.com_Buồn Hay Vui x Please Tell Me Why - Vsoul x MCK x OBITO x Ronboogz.mp3" controls></audio>
    <audio id="a33" src="soundcloudaud.com_Kho Báu _ with Rhymastic.mp3" controls></audio>
    <audio id="a34" src="soundcloudaud.com_KÉM DUYÊN _ RUM X NIT X MASEW.mp3" controls></audio>
    <audio id="a35" src="soundcloudaud.com_Bán Duyên  Ver Lofi   Đình Dũng  Đăng Sơn.mp3.mp3" controls></audio>
    <audio id="a36" src="soundcloudaud.com_♬ CHẠNH LÒNG THƯƠNG CÔ - HUY VẠC X NON HANTA ( VISCONC REMIX ) _ @HoaHongDaiTrending.opus.mp3" controls></audio>
    <audio id="a37" src="soundcloudaud.com_♬ CHẠNH LÒNG THƯƠNG CÔ 2 - Huy Vạc ( WinT Remix ) _ Nhớ Đeo Tai Nghe.opus.mp3" controls></audio>
    <audio id="a38" src="soundcloudaud.com_CHẠNH LÒNG THƯƠNG CÔ 4 - HUY VẠC ( JENY PM REMIX ) Thân Em Như Cá Trong Lờ Remix Hot Tik Tok 2023.op.mp3" controls></audio>
    <audio id="a39" src="soundcloudaud.com_Kiếp má hồng - TLong _ Tú Na - Tiểu Nhi Cover.mp3" controls></audio>
    <audio id="a40" src="soundcloudaud.com_Kiếp Tơ Tằm (Lofi Ver.).mp3" controls></audio>
    <audio id="a41" src="soundcloudaud.com_Tình Đầu - Tăng Duy Tân.mp3" controls></audio>
    <audio id="a42" src="soundcloudaud.com_Yêu Một Người Có Lẽ.mp3" controls></audio>
    <audio id="a43" src="soundcloudaud.com_Giá Như Anh Lặng Im -OnlyC, Lou Hoàng, Quang Hùng.mp3" controls></audio>
    <audio id="a44" src="soundcloudaud.com_Đếm Ngày Xa Em  - OnlyC Lou Hoang.mp3" controls></audio>
    <audio id="a45" src="soundcloudaud.com_Ôm Trọn Nỗi Nhớ - RUM.mp3" controls></audio>
    <audio id="a46" src="soundcloudaud.com_Chuyện Đôi Ta (Lofi).mp3" controls></audio>
    <audio id="a47" src="soundcloudaud.com_Não Cá Vàng.mp3" controls></audio>
    <audio id="a48" src="soundcloudaud.com_CUỐI CÙNG THÌ -TAMA COVER.mp3" controls></audio>
    <audio id="a49" src="soundcloudaud.com_Công Chúa Bong Bóng _ An Vũ.mp3" controls></audio>
    <audio id="a50" src="soundcloudaud.com_Boss Mode - Phonk Racing Drift Sigma By Infraction [EDM].mp3" controls></audio>
    <audio id="a51" src="soundcloudaud.com_Tình Ca Tình Ta (Cukak Remix) (Speed Up) - Kis.mp3" controls></audio>
    <audio id="a52" src="soundcloudaud.com_Yêu Thương Chẳng Là Mãi Mãi (Lofi Ver.) - DC Tâm.mp3" controls></audio>
    <audio id="a53" src="soundcloudaud.com_Yêu Thương Nhau Gì Đâu (Bản Hót Tiktok) - Du Thiên ♫ Yêu Thương Nhau Gì Đâu Mà Chỉ Toàn Là Niềm Đau..mp3" controls></audio>
    <audio id="a54" src="soundcloudaud.com_Đêm Trắng - Khắc Việt _ Quang Quý Cover 「Lofi Version」_.mp3" controls></audio>
    <audio id="a55" src="soundcloudaud.com_Tuyệt Sắc (Orinn Remix) - NamDuc.mp3" controls></audio>
    <audio id="a56" src="soundcloudaud.com_Đoạn Tuyệt Nàng Đi (Lofi Ver.).mp3" controls></audio>
    <audio id="a57" src="soundcloudaud.com_[FULL] VÒNG SUY NGHĨ (THINK OF YOU) - MAI ÂM NHẠC (AUDIO EDIT).mp3" controls></audio>
    <audio id="a58" src="soundcloudaud.com_Sẽ Lại Đau Thôi (Remix).mp3" controls></audio>
    <audio id="a59" src="soundcloudaud.com_Eren Yeager x Nửa Vầng Trăng Remix NTD.mp3" controls></audio>
    <audio id="a60" src="soundcloudaud.com_Chẳng Còn Thời Gian Ấy - Bem ft. Nguyen, ImPoe (speed up & lyrics by zịt).mp3" controls></audio>
    <audio id="a61" src="soundcloudaud.com_Ôm Em Lần Cuối ( Lofi Ver ) - Nit X Sing X Zeaplee.mp3" controls></audio>
    <audio id="a62" src="soundcloudaud.com_Đông Miên (speed up).mp3" controls></audio>
    <audio id="a63" src="soundcloudaud.com_ĐÔNG MIÊN - TƯ NAM.mp3" controls></audio>
    <audio id="a64" src="soundcloudaud.com_Tình Yêu Diệu Kỳ - Bùi Công Nam _ Eye Contact LIVE - 5th Project.mp3" controls></audio>
    <audio id="a65" src="soundcloudaud.com_Đóa Quỳnh Lan - Htrol Remix [ H2k ft Yuni Boo ].mp3" controls></audio>
    <audio id="a66" src="soundcloudaud.com_ĐOÁ PHÙ DUNG CUỐI CÙNG - Đức Phúc cùng Hùng Huỳnh _ Anh Trai Say Hi.mp3" controls></audio>
    <audio id="a67" src="soundcloudaud.com_Từ Em Mà Ra (Whisky x Freak D Lofi Ver.) _ Lil Z Poet ft Đức Anh.mp3.mp3" controls></audio>
    <audio id="a68" src="soundcloudaud.com_Thay Thế - Hồ Gia Hùng.mp3" controls></audio>
    <audio id="a69" src="soundcloudaud.com_Giả Vờ Thương Anh Được Không.mp3" controls></audio>
    <audio id="a70" src="soundcloudaud.com_Nếu Là Anh - The Men.mp3" controls></audio>
    <audio id="a71" src="soundcloudaud.com_Nightcore - Người Con Trai Ấy - Nguyễn Đình Vũ _ Zeno Music.mp3" controls></audio>
    <audio id="a72" src="soundcloudaud.com_Chạy Về Nơi Phía Anh (Lofi Ver.) - Khắc Việt X Thảo Bebe.mp3" controls></audio>
    <audio id="a73" src="soundcloudaud.com_Níu Duyên-Lofi.mp3" controls></audio>
    <audio id="a74" src="soundcloudaud.com_ÉP DUYÊN - LONG NÓN LÁ Ft KAYDEE Cover.mp3" controls></audio>
    <audio id="a75" src="soundcloudaud.com_Suy Nghĩ Trong Anh (Lofi Ver.) - Chu Duyên X Ness.mp3" controls></audio>
    <audio id="a76" src="soundcloudaud.com_Có Duyên Không Nợ Remix - Tina Ho Cover X H2O.mp3" controls></audio>
    <audio id="a77" src="soundcloudaud.com_Vô Duyên.mp3" controls></audio>
    <audio id="a78" src="soundcloudaud.com_Duyên Mộng Vỡ Tan.mp3" controls></audio>
    <audio id="a79" src="soundcloudaud.com_Khuê Mộc Lang - Hương Ly ft Jombie.mp3" controls></audio>
    <audio id="a80" src="soundcloudaud.com_Người Thay Thế Em.mp3" controls></audio>
    <audio id="a81" src="soundcloudaud.com_Thay Lòng (Lofi By NH4T) DIMZ x TVk x WindV _ Tạm biệt nhé người em yêu ~.mp3" controls></audio>
    <audio id="a82" src="soundcloudaud.com_Như Anh Đã Thấy Em.mp3" controls></audio>
    <audio id="a83" src="soundcloudaud.com_Thay Tôi Yêu Cô Ấy.mp3" controls></audio>
    <audio id="a84" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a85" src="soundcloudaud.com_Tú Na Cover _ Bông Hoa Nở Muộn - Khánh Trung x Lê Chí Trung.mp3" controls></audio>
    <audio id="a86" src="soundcloudaud.com_Way Back Home (Lời Việt) - 숀 (SHAUN)- MV Lyrics.mp3" controls></audio>
    <audio id="a87" src="soundcloudaud.com_SHAUN - Way Back Home (feat. Conor Maynard) [Sam Feldt Edit].mp3" controls></audio>
    <audio id="a88" src="soundcloudaud.com_Gương Mặt Lạ Lẫm.mp3" controls></audio>
    <audio id="a89" src="soundcloudaud.com_Ngắm Hoàng Hôn Từ Tầng 3 - Nàng Kay Châu Anh Cover.mp3.mp3" controls></audio>
    <audio id="a90" src="soundcloudaud.com_Dối lừa (Speed Up).mp3" controls></audio>
    <audio id="a91" src="soundcloudaud.com_Em Còn Nhớ Anh Không (Speed Up).mp3" controls></audio>
    <audio id="a92" src="soundcloudaud.com_Hoa Son Vàng.mp3" controls></audio>
    <audio id="a93" src="soundcloudaud.com_Không Lấy Được Vợ Remix - Ngày Em Bước Theo Chồng Nắng Vẫn Hồng Remix 2025.mp3" controls></audio>
    <audio id="a94" src="soundcloudaud.com_Anh Nhớ Em Nhiều Lắm.mp3" controls></audio>
    <audio id="a95" src="soundcloudaud.com_Về Bên Anh (Lofi Ver.) - Jack _ Hot Tik Tok.mp3" controls></audio>
    <audio id="a96" src="soundcloudaud.com_MUỐN NÓI VỚI EM (Lofi mix).mp3" controls></audio>
    <audio id="a97" src="soundcloudaud.com_Cảm Ơn Vì Đã Yêu x Tháng Năm - Darki x SOOBIN.mp3" controls></audio>
    <audio id="a98" src="soundcloudaud.com_Cry For Me - Michita ft. Ami (愛海).mp3" controls></audio>
    <audio id="a99" src="soundcloudaud.com_Đáy Biển-Nhất Chi Lựu Liên (Bản Gốc)-[海底一支榴莲] [ig_ iam.soiii]❤️🌹.mp3" controls></audio>
    <audio id="a100" src="soundcloudaud.com_Bầu trời mới - Da LAB.mp3" controls></audio>
    <audio id="a101" src="soundcloudaud.com_Nếu những Tiếc nuối _ Vũ.mp3" controls></audio>
    <audio id="a102" src="soundcloudaud.com_Mất Kết Nối - Dương Domic (Whisky Rmx)(𝓛𝓸-𝓯𝓲 𝓿𝓮𝓻.).mp3" controls></audio>
    <audio id="a103" src="soundcloudaud.com_Bắt Cóc Con Tim - Lou Hoàng ft. OnlyC  x Quanvrox「Lofi Ver」.mp3" controls></audio>
    <audio id="a104" src="soundcloudaud.com_LOU HOÀNG - NGÀY ĐẸP TRỜI ĐỂ NÓI CHIA TAY.mp3" controls></audio>
    <audio id="a105" src="soundcloudaud.com_Đi Để Trở Về.mp3" controls></audio>
    <audio id="a106" src="soundcloudaud.com_ĐI ĐỂ TRỞ VỀ 2 - Chuyến Đi Của Năm - Soobin Hoàng Sơn [Free Download].mp3" controls></audio>
    <audio id="a107" src="soundcloudaud.com_Orange x Hoàng Dũng x Cẩm Vân x Hứa Kim Tuyền - 'Nơi Pháo Hoa Rực Rỡ (Đi Để Trở Về 8).mp3" controls></audio>
    <audio id="a108" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a109" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a110" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a111" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a112" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a113" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a114" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a115" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a116" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a117" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a118" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a119" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a120" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <audio id="a121" src="soundcloudaud.com_Anh Nên Yêu Cô Ấy「Lofi Ver」_ Quỳnh Nấm x NHp.mp3" controls></audio>
    <div class="main"> 
    <select id="s1" class="s2">
        <option value="">-Chọn bài hát-</option>
        <option value="a2"> Anh Thanh Niên ️🎵 </option>
        <option value="a3"> Cause I Love You ️🎵 </option>
        <option value="a4"> 3107 ️🎵 </option>
        <option value="a5"> Yêu Anh Em Nhé️ 🎵 </option>
        <option value="a6"> Hơn Cả Mây Trời 🎵 </option>
        <option value="a7"> Buồn Thì Cứ Khóc Đi 🎵 </option>
        <option value="a8"> Yêu Em Dại Khờ 🎵 </option>
        <option value="a9"> Răng Khôn 🎵 </option>
        <option value="a10"> Thất Tình 🎵 </option>
        <option value="a11"> Phụ Tình 🎵 </option>
        <option value="a12"> Lạc Trôi 🎵 </option>
        <option value="a13"> Masew 🎵 </option>
        <option value="a14"> Người Kế Nhiệm (Trung) 🎵 </option>
        <option value="a15"> Chạm Đáy Nỗi Đau 🎵 </option>
        <option value="a16"> Vì Em Chưa Bao Giờ Khóc 🎵 </option>
        <option value="a17"> Lệ Lưu Ly 🎵 </option>
        <option value="a18"> Chàng Trai Bất Tử 🎵 </option>
        <option value="a19"> Đau Để Trưởng Thành 🎵 </option>
        <option value="a20"> Yêu Là Tha Thu 🎵 </option>
        <option value="a21"> Lời Anh Chưa Thể Nói 🎵 </option>
        <option value="a22"> Lời Anh Muốn Nói 🎵 </option>
        <option value="a23"> Xuôi Dòng Cửu Long 🎵 </option>
        <option value="a24"> Sống Xa Anh Chẳng Dễ Dàng 🎵 </option>
        <option value="a25"> Dưới Những Cơn Mưa 🎵 </option>
        <option value="a26"> Bức Tranh Từ Nước Mắt 🎵 </option>
        <option value="a27"> Lắng Nghe Nước Mắt 🎵 </option>
        <option value="a28"> Yêu Một Người Vô Tâm 🎵 </option>
        <option value="a29"> Một Bước Yêu, Vạn Dặm Đau 🎵 </option>
        <option value="a30"> Cứ Chill Thôi 🎵 </option>
        <option value="a31"> Nhắn Nhủ 🎵 </option>
        <option value="a32"> Buồn Hay Vui 🎵 </option>
        <option value="a33"> Kho Báu (with Rhymastic) 🎵 </option>
        <option value="a34"> Kém Duyên 🎵 </option>
        <option value="a35"> Bán Duyên 🎵 </option>
        <option value="a36"> Chạnh Lòng Thương Cô 🎵 </option>
        <option value="a37"> Chạnh Lòng Thương Cô 2 🎵 </option>
        <option value="a38"> Chạnh Lòng Thương Cô 4 🎵 </option>
        <option value="a39"> Kiếp Má Hồng 🎵 </option>
        <option value="a40"> Kiếp Tơ Tằm 🎵 </option>
        <option value="a41"> Tình Đầu 🎵 </option>
        <option value="a42"> Yêu Một Người Có Lẽ 🎵 </option>
        <option value="a43"> Giá Như Anh Lặng Im 🎵 </option>
        <option value="a44"> Đếm Ngày Xa Em 🎵 </option>
        <option value="a45"> Ôm Trọn Nỗi Nhớ 🎵 </option>
        <option value="a46"> Chuyện Đôi Ta (Lofi) 🎵 </option>
        <option value="a47"> Não Cá Vàng 🎵 </option>
        <option value="a48"> Cuối Cùng Thì 🎵 </option>
        <option value="a49"> Công Chúa Bong Bóng 🎵 </option>
        <option value="a50"> Boss Mode 🎵 </option>
        <option value="a51"> Tình Ca Tình Ta 🎵 </option>
        <option value="a52"> Yêu Thương Chẳng Là Mãi Mãi 🎵 </option>
        <option value="a53"> Yêu Thương Nhau Gì Đâu 🎵 </option>
        <option value="a54"> Đêm Trắng 🎵 </option>
        <option value="a55"> Tuyệt Sắc 🎵 </option>
        <option value="a56"> Đoạn Tuyệt Nàng Đi 🎵 </option>
        <option value="a57"> Vòng Suy Nghĩ (THINK OF YOU) 🎵 </option>
        <option value="a58"> Sẽ Lại Đau Thôi 🎵 </option>
        <option value="a59"> Nửa Vầng Trăng 🎵 </option>
        <option value="a60"> Chẳng Còn Thời Gian Ấy 🎵 </option>
        <option value="a61"> Ôm Em Lần Cuối 🎵 </option>
        <option value="a62"> Đông Miên (lofi) 🎵 </option>
        <option value="a63"> ĐÔNG MIÊN 🎵 </option>
        <option value="a64"> Tình Yêu Diệu Kỳ 🎵 </option>
        <option value="a65"> Đóa Quỳnh Lan 🎵 </option>
        <option value="a66"> Đóa Phù Dung Cuối Cùng 🎵 </option>
        <option value="a67"> Từ Em Mà Ra (Whisky x Freak D Lofi Ver.) 🎵 </option>
        <option value="a68"> Thay Thế 🎵 </option>
        <option value="a69"> Giả Vờ Thương Anh Được Không 🎵 </option>
        <option value="a70"> Nếu Là Anh 🎵 </option>
        <option value="a71"> Người Con Trai Ấy 🎵 </option>
        <option value="a72"> Chạy Về Nơi Phía Anh 🎵 </option>
        <option value="a73"> Níu Duyên (lofi) 🎵 </option>
        <option value="a74"> Ép Duyên 🎵 </option>
        <option value="a75"> Suy Nghĩ Trong Anh (lofi) 🎵 </option>
        <option value="a76"> Có Duyên Không Nợ (Remix) 🎵 </option>
        <option value="a77"> Vô Duyên 🎵 </option>
        <option value="a78"> Duyên Mộng Vỡ Tan 🎵 </option>
        <option value="a79"> Khuê Mộc Lang 🎵 </option>
        <option value="a80"> Người Thay Thế Em 🎵 </option>
        <option value="a81"> Thay Lòng (Lofi By NH4T) 🎵 </option>
        <option value="a82"> Như Anh Đã Thấy Em 🎵 </option>
        <option value="a83"> Thay Tôi Yêu Cô Ấy 🎵 </option>
        <option value="a84"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a85"> Bông Hoa Nở Muộn 🎵 </option>
        <option value="a86"> Way Back Home (Lời Việt) 🎵 </option>
        <option value="a87"> Way Back Home 🎵 </option>
        <option value="a88"> Gương Mặt Lạ Lẫm 🎵 </option>
        <option value="a89"> Ngắm Hoàng Hôn Từ Tầng 3 🎵 </option>
        <option value="a90"> Dối lừa (lofi) 🎵 </option>
        <option value="a91"> Em Còn Nhớ Anh Không (lofi) 🎵 </option>
        <option value="a92"> Hoa Son Vàng 🎵 </option>
        <option value="a93"> Không Lấy Được Vợ (Remix) 🎵 </option>
        <option value="a94"> Anh Nhớ Em Nhiều Lắm 🎵 </option>
        <option value="a95"> Về Bên Anh (lofi) 🎵 </option>
        <option value="a96"> Muốn Nói Với Em (lofi) 🎵 </option>
        <option value="a97"> Cảm Ơn Vì Đã Yêu 🎵 </option>
        <option value="a98"> Cry For Me 🎵 </option>
        <option value="a99"> Đáy Biển 🎵 </option>
        <option value="a100"> Bầu Trời Mới 🎵 </option>
        <option value="a101"> Nếu những Tiếc nuối 🎵 </option>
        <option value="a102"> Mất Kết Nối 🎵 </option>
        <option value="a103"> Bắt Cóc Con Tim (lofi) 🎵 </option>
        <option value="a104"> Ngày Đẹp Trời Để Nói Chia Tay 🎵 </option>
        <option value="a105"> Đi Để Trở Về 🎵 </option>
        <option value="a106"> Đi Để Trở Về 2 (Chuyến Đi Của Năm) - Soobin Hoàng Sơn 🎵 </option>
        <option value="a107"> Nơi Pháo Hoa Rực Rỡ (Đi Để Trở Về 8) 🎵 </option>
        <option value="a108"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a109"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a110"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a111"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a112"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a113"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a114"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a115"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a116"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a117"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a118"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a119"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a120"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a121"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
        <option value="a122"> Anh Nên Yêu Cô Ấy (lofi) 🎵 </option>
    </select>
    <button id="lui" class="p" onclick="lui()">⏮️</button>
    <button id="mo" class="p" onclick="mo()">▶️</button>
    <button id="tien" class="p" onclick="tien()">⏭️</button>
    </div>
    <div class="pk">
    <button id="phatlai" class="pl" onclick="phatlai()"> Bật 🔁 </button>
    <button id="Phattiep" class="pt" onclick="doiTuDong()"> Bật 🔀</button>
    </div>
    <script src="nha.js"></script>
</body>
</html>

