USE hoteldatabase;

DELIMITER //

CREATE PROCEDURE listEmployeeBySalary(
    salary INT
)
BEGIN
    SELECT NhanVien.CCCD, HoTen, NgaySinh, GioiTinh, SoDienThoai, Email, MaCN, MucLuong
    FROM ConNguoi, NhanVien
    WHERE ConNguoi.CCCD = NhanVien.CCCD AND NhanVien.MucLuong >= salary
    ORDER BY MucLuong;
END//

CREATE PROCEDURE listOrderByPhoneNumber(
    phoneNumber CHAR(10)
)
BEGIN
    IF (SELECT LENGTH(phoneNumber) <> 10 OR phoneNumber NOT REGEXP "^0[0-9]{9}") THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Số điện thoại phải bắt đầu bằng 0 và có đúng 10 chữ số!";
    END IF;
    IF (NOT EXISTS (SELECT * FROM ConNguoi,KhachHang WHERE ConNguoi.CCCD = KhachHang.CCCD AND ConNguoi.SoDienThoai = phoneNumber)) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = "Khách hàng không tồn tại. Vui lòng nhập lại SĐT!";
    END IF;
    SELECT LoaiPhong.MaSo, MucGia, COUNT(*) AS SoLuong
    FROM LoaiPhong
    LEFT JOIN Phong ON LoaiPhong.MaSo = MaLoaiPhong
    LEFT JOIN LuotDatPhong ON Phong.TenPhong = LuotDatPhong.TenPhong AND Phong.MasoCN = LuotDatPhong.MasoCN
    LEFT JOIN KhachHang ON LuotDatPhong.CCCDKhach = KhachHang.CCCD
    LEFT JOIN ConNguoi On ConNguoi.CCCD = KhachHang.CCCD
    WHERE ConNguoi.SoDienThoai = phoneNumber
    GROUP BY LoaiPhong.MaSo
    HAVING SoLuong >= 1
    ORDER BY SoLuong;
END//

DELIMITER ;
