USE hoteldatabase;

DELIMITER //

CREATE TRIGGER numberOfEmployee1 AFTER INSERT ON NhanVien
FOR EACH ROW
BEGIN
DECLARE ID CHAR(4);
DECLARE SoNhanVien INT DEFAULT 0;
SET ID = NEW.MaCN;
SET SoNhanVien = (SELECT COUNT(NhanVien.CCCD) FROM NhanVien
                  WHERE NhanVien.MaCN = ID);
UPDATE ChiNhanh SET SoLuongNhanVien = SoNhanVien WHERE ChiNhanh.MaSoCN = ID;
END//

CREATE TRIGGER numberOfEmployee2 AFTER DELETE ON NhanVien
FOR EACH ROW
BEGIN
DECLARE ID CHAR(4);
DECLARE SoNhanVien INT DEFAULT 0;
SET ID = OLD.MaCN;
SET SoNhanVien = (SELECT COUNT(NhanVien.CCCD) FROM NhanVien
                  WHERE NhanVien.MaCN = ID);
UPDATE ChiNhanh SET SoLuongNhanVien = SoNhanVien WHERE ChiNhanh.MaSoCN = ID;
END//

CREATE TRIGGER createHoaDon AFTER INSERT ON LuotDatPhong
FOR EACH ROW
BEGIN
DECLARE ID CHAR(12);
DECLARE CCCD_LT CHAR(12);
DECLARE GiaTien INT DEFAULT 0;
DECLARE ThoiGianNhanP DATE;
DECLARE ThoiGianTraP DATE;
DECLARE MucGiaPhong INT DEFAULT 0;
DECLARE ThoiGian INT DEFAULT 0;
SET ID = NEW.MaSo;
SET CCCD_LT = (SELECT CCCDLeTan FROM LuotDatPhong WHERE MaSo = ID);
SET ThoiGianNhanP = (SELECT ThoiGianNhan FROM LuotDatPhong WHERE MaSo = ID);
SET ThoiGianTraP = (SELECT ThoiGianTra FROM LuotDatPhong WHERE MaSo = ID);
SET ThoiGian = DATEDIFF(ThoiGianTraP, ThoiGianNhanP);
SET MucGiaPhong = (SELECT LoaiPhong.MucGia FROM LoaiPhong
                   WHERE MaSo IN (SELECT Phong.MaLoaiPhong FROM Phong,LuotDatPhong WHERE Phong.TenPhong = LuotDatPhong.TenPhong AND LuotDatPhong.MaSo = ID));
SET GiaTien = MucGiaPhong * ThoiGian;
INSERT INTO HoaDon(ThoiGianXuatHoaDon, TongTien, MaSoLuotDP, CCCDLeTan) VALUE (CURDATE(), GiaTien, ID, CCCD_LT);
END//

DELIMITER ;