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

DELIMITER ;