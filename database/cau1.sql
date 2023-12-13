USE hoteldatabase;

DELIMITER //

CREATE PROCEDURE insertCustomer(
    CCCD_KH CHAR(12),
    Ten_KH VARCHAR(255),
    TenDangNhap_KH VARCHAR(20),
    matkhau_KH VARCHAR(20),
    NgaySinh_KH DATE,
    SoDT_KH CHAR(10),
    GioiTinh_KH CHAR(1),
    Email_KH VARCHAR(255),
    DiaChi_KH VARCHAR(1000)
)
BEGIN
    IF CCCD_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "CCCD không được bỏ trống!";
    END IF;
    IF Ten_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Họ và tên không được bỏ trống!";
    END IF;
    IF TenDangNhap_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Tên đăng nhập không được bỏ trống!";
    END IF;
    IF matkhau_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Mật khẩu không được bỏ trống!";
    END IF;
    IF NgaySinh_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Ngày sinh không được bỏ trống!";
    END IF;
    IF SoDT_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số điện thoại không được bỏ trống!";
    END IF;
    IF Email_KH NOT LIKE "%@gmail.com" THEN  
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Email không đúng định dạng @gmail.com';
    END IF;
    IF (EXISTS (SELECT * FROM TaiKhoanThanhVien WHERE TenDangNhap = TenDangNhap_KH)) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Tên đăng nhập đã tồn tại, hãy thử tên đăng nhập khác!";
    END IF;
    IF (SELECT LENGTH(CCCD_KH) <> 12) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "CCCD phải có đúng 12 chữ số!";
    END IF;
    IF (SELECT LENGTH(SoDT_KH) <> 10 OR SoDT_KH NOT REGEXP "^0[0-9]{9}") THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số điện thoại phải bắt đầu bằng 0 và có đúng 10 chữ số!";
    END IF;
    IF DATEDIFF(CURDATE(), NgaySinh_KH) < 6570 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Khách hàng phải từ đủ 18 tuổi trở lên!";
    END IF;
    INSERT INTO ConNguoi VALUE (CCCD_KH, Ten_KH, NgaySinh_KH, SoDT_KH, GioiTinh_KH, Email_KH, DiaChi_KH);
    INSERT INTO KhachHang VALUE (CCCD_KH);
    INSERT INTO TaiKhoanThanhVien (CCCD, TenDangNhap, MatKhau, NgayTao) VALUE (CCCD_KH, TenDangNhap_KH, matkhau_KH, CURDATE());

END//

CREATE PROCEDURE updateCustomer(
    TenDangNhap_KH VARCHAR(20),
    matkhau_KH VARCHAR(20),
    NgaySinh_KH DATE,
    SoDT_KH CHAR(10),
    Email_KH VARCHAR(255),
    DiaChi_KH VARCHAR(1000)
)
BEGIN
    IF TenDangNhap_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Tên đăng nhập không được bỏ trống!";
    END IF;
    IF matkhau_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Mật khẩu không được bỏ trống!";
    END IF;
    IF NgaySinh_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Ngày sinh không được bỏ trống!";
    END IF;
    IF SoDT_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số điện thoại không được bỏ trống!";
    END IF;
    IF Email_KH NOT LIKE "%@gmail.com" THEN  
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Email không đúng định dạng @gmail.com';
    END IF;
    IF (NOT EXISTS (SELECT * FROM TaiKhoanThanhVien WHERE TenDangNhap = TenDangNhap_KH)) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Tên đăng nhập không tồn tại!";
    END IF;
    IF (SELECT LENGTH(SoDT_KH) <> 10 OR SoDT_KH NOT REGEXP "^0[0-9]{9}") THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số điện thoại phải bắt đầu bằng 0 và có đúng 10 chữ số!";
    END IF;
    IF DATEDIFF(CURDATE(), NgaySinh_KH) < 6570 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Khách hàng phải từ đủ 18 tuổi trở lên!";
    END IF;
    UPDATE TaiKhoanThanhVien SET MatKhau = matkhau_KH WHERE TenDangNhap = TenDangNhap_KH;
    UPDATE ConNguoi SET NgaySinh = NgaySinh_KH, SoDienThoai = SoDT_KH, Email = Email_KH, DiaChi = DiaChi_KH
    WHERE CCCD IN (SELECT CCCD FROM TaiKhoanThanhVien WHERE TenDangNhap = TenDangNhap_KH);
END//

CREATE PROCEDURE deleteCustomer(
    TenDangNhap_KH VARCHAR(20)
)
BEGIN
    IF TenDangNhap_KH IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Tên đăng nhập không được bỏ trống!";
    END IF;
    IF (NOT EXISTS (SELECT * FROM TaiKhoanThanhVien WHERE TenDangNhap = TenDangNhap_KH)) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Tên đăng nhập không tồn tại!";
    END IF;
    DELETE FROM ConNguoi WHERE CCCD IN (SELECT CCCD FROM TaiKhoanThanhVien WHERE TenDangNhap = TenDangNhap_KH);
END//

CREATE PROCEDURE insertEmployee(
    CCCD_NV CHAR(12),
    Ten_NV VARCHAR(255),
    CCCD_Mgr CHAR(12),
    NgaySinh_NV DATE,
    SoDT_NV CHAR(10),
    GioiTinh_NV CHAR(1),
    Email_NV VARCHAR(255),
    DiaChi_NV VARCHAR(1000),
    MaCN_NV CHAR(4),
    MucLuong_NV INT,
    QuanLiFlag_NV CHAR(1),
    LeTanFlag_NV CHAR(1),
    PhucVuFlag_NV CHAR(1)
)
BEGIN
    IF CCCD_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "CCCD không được bỏ trống!";
    END IF;
    IF Ten_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Họ và tên không được bỏ trống!";
    END IF;
    IF NgaySinh_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Ngày sinh không được bỏ trống!";
    END IF;
    IF SoDT_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số điện thoại không được bỏ trống!";
    END IF;
    IF MaCN_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Mã chi nhánh làm việc không được bỏ trống!";
    END IF;
    IF MucLuong_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Mức lương không được bỏ trống!";
    END IF;
    IF Email_NV NOT LIKE "%@gmail.com" THEN  
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Email không đúng định dạng @gmail.com';
    END IF;
    IF (SELECT LENGTH(CCCD_NV) <> 12) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "CCCD phải có đúng 12 chữ số!";
    END IF;
    IF (SELECT LENGTH(SoDT_NV) <> 10 OR SoDT_NV NOT REGEXP "^0[0-9]{9}") THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số điện thoại phải bắt đầu bằng 0 và có đúng 10 chữ số!";
    END IF;
    IF DATEDIFF(CURDATE(), NgaySinh_NV) < 6570 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Nhân viên phải từ đủ 18 tuổi trở lên!";
    END IF;
    INSERT INTO ConNguoi VALUE (CCCD_NV, Ten_NV, NgaySinh_NV, SoDT_NV, GioiTinh_NV, Email_NV, DiaChi_NV);
    INSERT INTO NhanVien(CCCD, MgrCCCD, MaCN, MucLuong, QuanLiFlag, LeTanFlag, PhucVuFlag) 
    VALUE (CCCD_NV, CCCD_Mgr, MaCN_NV, MucLuong_NV, QuanLiFlag_NV, LeTanFlag_NV, PhucVuFlag_NV);

END//

CREATE PROCEDURE updateEmployee(
    CCCD_NV CHAR(12),
    NgaySinh_NV DATE,
    SoDT_NV CHAR(10),
    Email_NV VARCHAR(255),
    DiaChi_NV VARCHAR(1000),
    MucLuong_NV INT
)
BEGIN
    IF CCCD_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "CCCD không được bỏ trống!";
    END IF;
    IF NgaySinh_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Ngày sinh không được bỏ trống!";
    END IF;
    IF SoDT_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số điện thoại không được bỏ trống!";
    END IF;
    IF MucLuong_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Mức lương không được bỏ trống!";
    END IF;
    IF Email_NV NOT LIKE "%@gmail.com" THEN  
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Email không đúng định dạng @gmail.com';
    END IF;
    IF (SELECT LENGTH(CCCD_NV) <> 12) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "CCCD phải có đúng 12 chữ số!";
    END IF;
    IF (NOT EXISTS (SELECT * FROM NhanVien WHERE CCCD = CCCD_NV)) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số CCCD không tồn tại!";
    END IF;
    IF (SELECT LENGTH(SoDT_NV) <> 10 OR SoDT_NV NOT REGEXP "^0[0-9]{9}") THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số điện thoại phải bắt đầu bằng 0 và có đúng 10 chữ số!";
    END IF;
    IF DATEDIFF(CURDATE(), NgaySinh_NV) < 6570 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Nhân viên phải từ đủ 18 tuổi trở lên!";
    END IF;
    UPDATE NhanVien SET MucLuong = MucLuong_NV WHERE CCCD = CCCD_NV;
    UPDATE ConNguoi SET NgaySinh = NgaySinh_NV, SoDienThoai = SoDT_NV, Email = Email_NV, DiaChi = DiaChi_NV
    WHERE CCCD = CCCD_NV;
END//

CREATE PROCEDURE deleteEmployee(
    CCCD_NV CHAR(12)
)
BEGIN
    IF CCCD_NV IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "CCCD không được bỏ trống!";
    END IF;
    IF (SELECT LENGTH(CCCD_NV) <> 12) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "CCCD phải có đúng 12 chữ số!";
    END IF;
    IF (NOT EXISTS (SELECT * FROM NhanVien WHERE CCCD = CCCD_NV)) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số CCCD không tồn tại!";
    END IF;
    DELETE FROM NhanVien WHERE CCCD = CCCD_NV;
    DELETE FROM ConNguoi WHERE CCCD = CCCD_NV;
END//

DELIMITER ;