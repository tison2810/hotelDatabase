USE transportation;
DELIMITER //
CREATE PROCEDURE getRevenue(
	Ma_KH_n INT
)
BEGIN
	SELECT khach_hang.Ma_KH, khach_hang.Ten, a.sum_gui + b.sum_nhan AS doanh_thu
        FROM ((khach_hang
        INNER JOIN (SELECT ma_kh_gui, SUM(Phi_noi_thanh) AS sum_gui FROM bien_ban_gui GROUP BY ma_kh_gui) a  ON a.ma_kh_gui = khach_hang.Ma_KH)
        INNER JOIN (SELECT ma_kh_nhan, SUM(Phi_noi_thanh + Phi_lien_tinh) AS sum_nhan FROM bien_ban_nhan GROUP BY ma_kh_nhan) b ON b.ma_kh_nhan = khach_hang.Ma_KH)
        HAVING khach_hang.Ma_KH = Ma_KH_n;
END //

CREATE PROCEDURE getDate(
	Ma_KH_n INT,
    Ngay_gui_n DATE
)
BEGIN
	SELECT b.Ma_KH AS ma_kh_gui, b.ten_nguoi_gui ,b.ma_bien_ban_gui, b.Ngay_gui, bien_ban_nhan.ma_kh_nhan, khach_hang.Ten AS ten_nguoi_nhan, bien_ban_nhan.Ma_bien_ban AS ma_bien_ban_nhan, bien_ban_nhan.Ngay_nhan
	FROM ((bien_ban_nhan
	INNER JOIN 
		(SELECT a.Ma_KH, a.ten_nguoi_gui, a.Ngay_gui, kien_hang.Noi_den,kien_hang.ma_bien_ban_gui, nhan_hang.Ma_bien_ban_nhan
		FROM ((kien_hang
		INNER JOIN nhan_hang ON kien_hang.ID = nhan_hang.ID_kien_hang)
		INNER JOIN 
			(SELECT khach_hang.Ma_KH AS Ma_KH, bien_ban_gui.Ngay_gui ,khach_hang.Ten AS ten_nguoi_gui, bien_ban_gui.Ma_bien_ban AS ma_bien_ban_gui
			FROM bien_ban_gui
			INNER JOIN khach_hang ON khach_hang.Ma_KH = bien_ban_gui.ma_kh_gui) a ON a.ma_bien_ban_gui = kien_hang.ma_bien_ban_gui)) b 
		ON b.Ma_bien_ban_nhan = bien_ban_nhan.Ma_bien_ban)
	INNER JOIN khach_hang ON khach_hang.Ma_kh = bien_ban_nhan.ma_kh_nhan)
	HAVING b.Ma_KH = Ma_KH_n AND b.Ngay_gui = Ngay_gui_n;
END //

CREATE PROCEDURE getCountNumber(
	Ma_NV_n INT
)
BEGIN
	SELECT nhan_vien.Ma_NV, nhan_vien.Ten AS Ten_tai_xe_lien_tinh, a.so_lan_tham_gia
	FROM ((tai_xe_lien_tinh
	INNER JOIN nhan_vien ON nhan_vien.Ma_NV = tai_xe_lien_tinh.Ma_NV)
	INNER JOIN 
		(SELECT ma_nv_tai_xe_lien_tinh, count(ma_nv_tai_xe_lien_tinh) AS so_lan_tham_gia
		FROM chuyen_xe_lien_tinh
		GROUP BY ma_nv_tai_xe_lien_tinh) a ON a.ma_nv_tai_xe_lien_tinh = tai_xe_lien_tinh.Ma_NV)
	HAVING nhan_vien.Ma_NV = Ma_NV_n;
END //