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
        SET so_kien_hang = count_kien_hang;
	ELSE 
		UPDATE chuyen_xe_lien_tinh
        SET so_kien_hang = 1;
    END IF;
END$$    







CREATE TABLE kien_hang_delete_Archives (
	ID INT AUTO_INCREMENT,
    Khoi_luong INT,
    Noi_den VARCHAR(200),
    Noi_di VARCHAR(200),
    Loai VARCHAR(45),
    Phi_lien_tinh DECIMAL(10,2),
    deletedAt TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (ID)
);

CREATE TRIGGER delete_kien_hang
    BEFORE DELETE
    ON kien_hang FOR EACH ROW
BEGIN
    DECLARE count_nhan_hang INT;
    DECLARE count_gui_hang INT;
    
    SELECT COUNT(*)
    INTO count_gui_hang 
    FROM kien_hang
    WHERE Ma_bien_ban_gui IN (SELECT Ma_bien_ban_gui FROM kien_hang WHERE ID = OLD.ID);
    
    SELECT COUNT(*)
    INTO count_nhan_hang 
    FROM nhan_hang
    WHERE Ma_bien_ban_nhan IN (SELECT Ma_bien_ban_nhan FROM nhan_hang WHERE ID_kien_hang = OLD.ID);
    
    IF count_gui_hang > 1 THEN 
		UPDATE bien_ban_gui 
		SET So_kien_hang = count_gui_hang - 1
		WHERE Ma_bien_ban IN (SELECT Ma_bien_ban_gui FROM kien_hang WHERE ID = OLD.ID);
	ELSE 
		DELETE FROM bien_ban_gui WHERE Ma_bien_ban IN (SELECT Ma_bien_ban_gui FROM kien_hang WHERE ID = OLD.ID);
	END IF;
    
    IF count_nhan_hang > 1 THEN 
		UPDATE bien_ban_nhan 
		SET So_kien_hang = count_nhan_hang - 1
		WHERE Ma_bien_ban IN (SELECT Ma_bien_ban_nhan FROM nhan_hang WHERE ID_kien_hang = OLD.ID);	
	ELSE 
		DELETE FROM bien_ban_nhan WHERE Ma_bien_ban IN (SELECT Ma_bien_ban_nhan FROM nhan_hang WHERE ID_kien_hang = OLD.ID);	
	END IF;

	UPDATE chuyen_xe_lien_tinh 
	SET So_kien_hang = So_kien_hang - 1
	WHERE Ma_chuyen IN (SELECT Ma_chuyen FROM cho WHERE ID_kien_hang = OLD.ID);
    
    INSERT INTO kien_hang_delete_Archives (Khoi_luong, Noi_den, Noi_di, Loai, Phi_lien_tinh) 
    VALUE (OLD.Khoi_luong, OLD.Noi_den, LD.Noi_di, OLD.Loai, OLD.Phi_lien_tinh);
END$$    


DELIMITER ;