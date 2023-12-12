USE hoteldatabase;

DELIMITER //

CREATE FUNCTION TongChiTieu(
    phoneNumber CHAR(10)
)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE TongTien INT;
    DECLARE CCCD_KH CHAR(12);
    IF (SELECT LENGTH(phoneNumber) <> 10 OR phoneNumber NOT REGEXP "^0[0-9]{9}") THEN
        RETURN CAST("Số điện thoại phải bắt đầu bằng 0 và có đúng 10 chữ số!" AS SIGNED);
    ELSEIF (NOT EXISTS (SELECT * FROM ConNguoi,KhachHang WHERE ConNguoi.CCCD = KhachHang.CCCD AND ConNguoi.SoDienThoai = phoneNumber)) THEN
        RETURN CAST("Khách hàng không tồn tại." AS SIGNED);
    ELSE
        SET CCCD_KH = (SELECT ConNguoi.CCCD FROM ConNguoi, KhachHang 
                        WHERE ConNguoi.CCCD = KhachHang.CCCD AND ConNguoi.SoDienThoai = phoneNumber);
        SET TongTien = (SELECT SUM(HoaDon.TongTien) 
                        FROM HoaDon, LuotDatPhong
                        WHERE HoaDon.MaSoLuotDP = LuotDatPhong.MaSo
                                AND LuotDatPhong.CCCDKhach = CCCD_KH);
        RETURN TongTien;
    END IF;
END//

CREATE FUNCTION TongDoanhThuCN(
    MaSo_CN CHAR(4)
)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE TongTien INT;
    IF (SELECT LENGTH(MaSo_CN) <> 4) THEN
        RETURN CAST("Mã số Chi Nhánh không đúng định dạng. Mã số chi nhánh gồm 4 kí tự" AS SIGNED);
    ELSEIF (NOT EXISTS (SELECT * FROM ChiNhanh WHERE ChiNhanh.MaSoCN = MaSo_CN)) THEN
        RETURN CAST("Chi Nhánh không tồn tại." AS SIGNED);
    ELSE
        SET TongTien = (SELECT SUM(HoaDon.TongTien) 
                        FROM HoaDon, LuotDatPhong
                        WHERE HoaDon.MaSoLuotDP = LuotDatPhong.MaSo
                                AND LuotDatPhong.MaSoCN = MaSo_CN);
        RETURN TongTien;
    END IF;
END//


DELIMITER ;
