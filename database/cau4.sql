USE transportation;


DELIMITER $$
CREATE FUNCTION changeState(Ma_so_yeu_cau INT,trang_thai VARCHAR(45))
returns VARCHAR(45)
     DETERMINISTIC
BEGIN
	update yeu_cau set trang_thai=trang_thai where Ma_so=Ma_so_yeu_cau;
    RETURN 	CONCAT("Đã update");
END  $$
CREATE FUNCTION getCountBefore(ma_kh INT,ngay DATE)
RETURNS INT
DETERMINISTIC
BEGIN
	
	DECLARE so_lan_gui INT DEFAULT 0;    
	SELECT COUNT(ma_kh_gui) INTO so_lan_gui FROM bien_ban_gui WHERE ma_kh=ma_kh_gui AND ngay_gui<=ngay;    
	
    RETURN so_lan_gui;
END $$

CREATE FUNCTION getRole(ma_NV_inp INT)
RETURNS VARCHAR(45)
DETERMINISTIC
BEGIN
	DECLARE checkNV INT DEFAULT 0;
	SELECT COUNT(*) INTO checkNV FROM nguoi_dieu_hanh WHERE ma_NV=ma_NV_inp;
    IF checkNV>0 THEN RETURN  CONCAT("NGƯỜI ĐIỀU HÀNH");
    END IF;
    
    
    SELECT COUNT(ma_NV) INTO checkNV FROM tai_xe_noi_thanh WHERE ma_NV=ma_NV_inp;
    IF checkNV>0 THEN RETURN  CONCAT("TÀI XẾ NỘI THÀNH");
    END IF;
    
   
    SELECT COUNT(ma_NV) INTO checkNV FROM lo_xe_noi_thanh WHERE ma_NV=ma_NV_inp;
    IF checkNV>0 THEN RETURN  CONCAT("LƠ XE NỘI THÀNH");
    END IF;
    
    
    SELECT COUNT(ma_NV) INTO checkNV FROM quan_ly_kho WHERE ma_NV=ma_NV_inp;
    IF checkNV>0 THEN RETURN  CONCAT("QUẢN LÝ KHO");
    END IF;
    
    SELECT COUNT(ma_NV) INTO checkNV FROM tai_xe_lien_tinh WHERE ma_NV=ma_NV_inp;
    IF checkNV>0 THEN RETURN  CONCAT("TÀI XẾ LIÊN TỈNH");
    END IF;
    
    SELECT COUNT(ma_NV) INTO checkNV FROM lo_xe_lien_tinh WHERE ma_NV=ma_NV_inp;
    IF checkNV>0 THEN RETURN  CONCAT("LƠ XE LIÊN TỈNH");
    END IF;
    RETURN CONCAT("NOT FOUND");
END $$

DELIMITER ;
