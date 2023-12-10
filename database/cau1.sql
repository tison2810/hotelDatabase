USE transportation;

	
DELIMITER //

CREATE PROCEDURE insertKH(
	Ma_KH_n INT,
    CMND_n INT,
    Ten_n VARCHAR(255),
    Mail_n VARCHAR(255)
)
BEGIN
	IF Ma_KH_n IS NULL THEN 
		SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Mã khách hàng rỗng';
	END IF;
    IF CMND_n IS NULL THEN 
		SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'CMND rỗng';
	END IF;
    IF Ten_n IS NULL THEN 
		SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Tên khách hàng rỗng';
	END IF;
    IF Mail_n NOT LIKE "%@gmail.com" THEN  
		SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Email không đúng mẫu @gmail.com';
    END IF;
    INSERT INTO khach_hang VALUE (Ma_KH_n, CMND_n, Ten_n, Mail_n);
END //


CREATE PROCEDURE updateKHfromMaKH(
	Ma_KH_update INT,
    updateCMND BOOLEAN,
    CMND_n INT,
    updateTen BOOLEAN,
    Ten_n VARCHAR(255),
    updateMail BOOLEAN,
    Mail_n VARCHAR(255)
)
BEGIN
	IF NOT EXISTS (SELECT Ma_KH FROM khach_hang WHERE Ma_KH = Ma_KH_update) THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Không tồn tại khách hàng theo mã khách hàng đã nhập';
    END IF;
    
	IF updateCMND THEN 
		IF CMND_n IS NULL THEN 
			SIGNAL SQLSTATE '45000' 
				SET MESSAGE_TEXT = 'CMND rỗng';
		END IF;
        UPDATE khach_hang
		SET CMND = CMND_n
		WHERE Ma_KH = Ma_KH_update;
    END IF;
    
    IF updateTen THEN 
		IF Ten_n IS NULL THEN 
			SIGNAL SQLSTATE '45000' 
				SET MESSAGE_TEXT = 'Tên khách hàng rỗng';
		END IF;
        UPDATE khach_hang
		SET Ten = Ten_n
		WHERE Ma_KH = Ma_KH_update;
    END IF;
    
    IF updateMail THEN 
		IF Mail_n NOT LIKE "%@gmail.com" THEN  
			SIGNAL SQLSTATE '45000' 
				SET MESSAGE_TEXT = 'Email không đúng mẫu @gmail.com';
		END IF;
        UPDATE khach_hang
		SET Mail = Mail_n
		WHERE Ma_KH = Ma_KH_update;
    END IF;
	
END //

CREATE PROCEDURE updateKHfromCMND(
	CMND_input INT,
    updateMa_KH BOOLEAN,
    Ma_KH_n INT,
    updateCMND BOOLEAN,
    CMND_n INT,
    updateTen BOOLEAN,
    Ten_n VARCHAR(255),
    updateMail BOOLEAN,
    Mail_n VARCHAR(255)
)
BEGIN

	IF CMND_input IS NULL THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'CMND input rỗng';
	END IF;
    
	IF NOT EXISTS (SELECT CMND FROM khach_hang WHERE CMND = CMND_input) THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Không tồn tại khách hàng theo CMND đã nhập';
    END IF;
    
	IF updateMa_KH THEN 
		IF Ma_KH_n IS NULL THEN 
			SIGNAL SQLSTATE '45000' 
				SET MESSAGE_TEXT = 'Mã khách hàng rỗng';
		END IF;
        UPDATE khach_hang
		SET Ma_KH = Ma_KH_n
		WHERE CMND = CMND_input;
    END IF;
    
    IF updateCMND THEN 
		IF CMND_n IS NULL THEN 
			SIGNAL SQLSTATE '45000' 
				SET MESSAGE_TEXT = 'CMND mới rỗng';
		END IF;
        UPDATE khach_hang
		SET CMND = CMND_n
		WHERE CMND = CMND_input;
    END IF;
    
    IF updateTen THEN 
		IF Ten_n IS NULL THEN 
			SIGNAL SQLSTATE '45000' 
				SET MESSAGE_TEXT = 'Tên khách hàng rỗng';
		END IF;
        UPDATE khach_hang
		SET Ten = Ten_n
		WHERE CMND = CMND_input;
    END IF;
    
    IF updateMail THEN 
		IF Mail_n NOT LIKE "%@gmail.com" THEN  
			SIGNAL SQLSTATE '45000' 
				SET MESSAGE_TEXT = 'Email không đúng mẫu @gmail.com';
		END IF;
        UPDATE khach_hang
		SET Mail = Mail_n
		WHERE CMND = CMND_input;
    END IF;
	
END //

CREATE PROCEDURE deleteKHfromMaKH(
	Ma_KH_delete INT
)
BEGIN
	IF NOT EXISTS (SELECT Ma_KH FROM khach_hang WHERE Ma_KH = Ma_KH_delete) THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Không tồn tại khách hàng theo mã khách hàng đã nhập';
    END IF;
	DELETE FROM khach_hang WHERE Ma_KH = Ma_KH_delete;
END //



CREATE PROCEDURE insert_SDT(
	Ma_KH_n INT,
    So_dien_thoai_n VARCHAR(12)
)
BEGIN
	
    IF Ma_KH_n IS NULL THEN 
		SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Mã khách hàng rỗng';
	END IF;
    
    IF So_dien_thoai_n IS NULL THEN 
		SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Số điện thoại rỗng';
	END IF;
	
	IF NOT EXISTS (SELECT Ma_KH FROM khach_hang WHERE Ma_KH = Ma_KH_n) THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Không tồn tại khách hàng theo mã khách hàng đã nhập';
    END IF;
    
    IF LENGTH(So_dien_thoai_n) != 10 THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Số điện thoại đã nhập phải có 10 ký tự';
    END IF;
    
    IF So_dien_thoai_n NOT LIKE '0%' THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Số điện thoại đã nhập phải có số 0 nằm ở đầu tiên';
    END IF;
    
    INSERT INTO So_dien_thoai VALUE (Ma_KH_n, So_dien_thoai_n);
END //


CREATE PROCEDURE update_SDT(
	SDT_input VARCHAR(12),
    SDT_update VARCHAR(12)
)
BEGIN
	IF SDT_input IS NULL THEN 
		SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Số điện thoại input rỗng';
	END IF;
    
    IF SDT_update IS NULL THEN 
		SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Số điện thoại update rỗng';
	END IF;
    
    IF NOT EXISTS (SELECT So_dien_thoai FROM So_dien_thoai WHERE So_dien_thoai = SDT_input) THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Số điện thoại input không tồn tại';
    END IF;
    
     IF LENGTH(SDT_update) != 10 THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Số điện thoại update đã nhập phải có 10 ký tự';
    END IF;
    
    IF SDT_update NOT LIKE '0%' THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Số điện thoại update đã nhập phải có số 0 nằm ở đầu tiên';
    END IF;
    
    UPDATE So_dien_thoai
    SET So_dien_thoai = SDT_update
    WHERE So_dien_thoai = SDT_input;
END //


CREATE PROCEDURE delete_SDT(
	SDT_delete VARCHAR(12)
)
BEGIN
	IF SDT_delete IS NULL THEN 
		SIGNAL SQLSTATE '45000' 
            SET MESSAGE_TEXT = 'Số điện thoại input rỗng';
	END IF;
    
    IF NOT EXISTS (SELECT So_dien_thoai FROM So_dien_thoai WHERE So_dien_thoai = SDT_delete) THEN 
		SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'Số điện thoại input không tồn tại';
    END IF;
    
    DELETE FROM So_dien_thoai 
    WHERE So_dien_thoai = SDT_delete;
END //
DELIMITER ;