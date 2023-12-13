USE hoteldatabase;

DELIMITER //

CREATE FUNCTION Login(
    username VARCHAR(20),
    pass VARCHAR(20)
)
RETURNS BOOLEAN
DETERMINISTIC
BEGIN
    DECLARE isValid BOOLEAN;
    SELECT COUNT(*) INTO isValid
    FROM TaiKhoanThanhVien
    WHERE TenDangNhap = username AND MatKhau = pass;

    RETURN isValid;
END//

CREATE PROCEDURE insertLuotDatPhong(
    username VARCHAR(20),
    MaSoLDP CHAR(12),
    MaCN CHAR(4),
    TenPhong VARCHAR(50),
    ThoiGianNhanP DATETIME,
    ThoiGianTraP DATETIME,
    CCCDLT CHAR(12)
)
BEGIN
    DECLARE CCCD_KH CHAR(12);
    IF MaSoLDP IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Mã số lượt đặt phòng không được bỏ trống!";
    END IF;
    IF MaCN IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Mã số chi nhánh không được bỏ trống!";
    END IF;
    IF TenPhong IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Tên phòng không được bỏ trống!";
    END IF;
    IF ThoiGianNhanP IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Thời gian nhận phòng không được bỏ trống!";
    END IF;
    IF ThoiGianTraP IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Thời gian trả phòng không được bỏ trống!";
    END IF;
    IF CCCDLT IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "CCCD lễ tân không được bỏ trống!";
    END IF;
    IF DATEDIFF(CURDATE(), ThoiGianNhanP) < 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Ngày nhận phòng phải được đặt từ ngày hôm nay trở đi";
    END IF;
        IF DATEDIFF(ThoiGianTraP, ThoiGianNhanP) <= 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Thời gian thuê phòng phải từ 1 ngày trở lên";
    END IF;
    SET CCCD_KH = (SELECT CCCD FROM TaiKhoanThanhVien WHERE TenDangNhap = username);
    INSERT INTO LuotDatPhong VALUE (MaSoLDP, TenPhong, MaCN, CCCD_KH, CURDATE(), ThoiGianNhanP, ThoiGianTraP, NULL, NULL, NULL, CCCDLT);

END//

DELIMITER ;