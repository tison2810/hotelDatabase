USE xxx;

DELIMITER $$

CREATE TRIGGER insert_cho
    AFTER INSERT
    ON cho FOR EACH ROW
BEGIN
	DECLARE count_kien_hang INT;
    
    SELECT COUNT(*)
    INTO count_kien_hang 
    FROM cho
    WHERE Ma_chuyen = NEW.Ma_chuyen;

	IF count_kien_hang > 0 THEN 
		UPDATE chuyen_xe_lien_tinh
        SET so_kien_hang = so_kien_hang + 1;
	ELSE 
		UPDATE chuyen_xe_lien_tinh
        SET so_kien_hang = 1;
    END IF;
END$$    


CREATE TRIGGER delete_kien_hang
    BEFORE DELETE
    ON kien_hang FOR EACH ROW
BEGIN
    DECLARE count_nhan_hang INT;
    
    SELECT COUNT(*)
    INTO count_nhan_hang 
    FROM nhan_hang
    WHERE Ma_bien_ban IN (SELECT Ma_bien_ban FROM nhan_hang WHERE ID = OLD.ID);
    
    UPDATE bien_ban_nhan 
    SET So_kien_hang = count_nhan_hang
    WHERE Ma_bien_ban IN (SELECT Ma_bien_ban FROM nhan_hang WHERE ID = OLD.ID);
    
    UPDATE bien_ban_gui 
    SET So_kien_hang = So_kien_hang - 1
    WHERE Ma_bien_ban IN (SELECT Ma_bien_ban_gui FROM kien_hang WHERE ID = OLD.ID);
    
    UPDATE chuyen_xe_lien_tinh 
    SET So_kien_hang = So_kien_hang - 1
    WHERE Ma_chuyen IN (SELECT Ma_chuyen FROM cho WHERE ID_kien_hang = OLD.ID);
END$$    


DELIMITER ;