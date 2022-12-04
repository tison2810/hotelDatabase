USE xxx;


DELIMITER $$
CREATE FUNCTION changeState(Ma_so_yeu_cau INT,trang_thai VARCHAR(45))
returns VARCHAR(45)
     DETERMINISTIC
BEGIN
	update yeu_cau set trang_thai=trang_thai where Ma_so=Ma_so_yeu_cau;
    RETURN 	CONCAT(ma_so_yeu_cau);
END  $$
CREATE FUNCTION getCountBefore(ma_kh INT,ngay DATE)
RETURNS INT
DETERMINISTIC
BEGIN
	
	DECLARE so_lan_gui INT DEFAULT 0;    
	SELECT COUNT(ma_kh_gui) INTO so_lan_gui FROM bien_ban_gui WHERE ma_kh=ma_kh_gui AND ngay_gui<=ngay;    
	
    RETURN so_lan_gui;
END $$
DELIMITER ;
