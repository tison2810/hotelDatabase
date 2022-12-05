USE xxx;
DELIMITER //
CREATE PROCEDURE getRevenue(
	Ma_KH_n INT
)
BEGIN
	SELECT khach_hang.Ma_KH, khach_hang.Ten, a.sum_gui + b.sum_nhan AS sum
        FROM ((khach_hang
        INNER JOIN (SELECT ma_kh_gui, SUM(Phi_noi_thanh) AS sum_gui FROM bien_ban_gui GROUP BY ma_kh_gui) a  ON a.ma_kh_gui = khach_hang.Ma_KH)
        INNER JOIN (SELECT ma_kh_nhan, SUM(Phi_noi_thanh + Phi_lien_tinh) AS sum_nhan FROM bien_ban_nhan GROUP BY ma_kh_nhan) b ON b.ma_kh_nhan = khach_hang.Ma_KH)
        HAVING khach_hang.Ma_KH = Ma_KH_n;
END //

CREATE PROCEDURE getAdrress(
	Ma_KH_n INT,
    Ngay_gui_n DATE
)
BEGIN
	select b.Ma_KH as ma_kh_gui, b.ten_nguoi_gui, bien_ban_nhan.Ma_bien_ban, b.Ngay_gui,bien_ban_nhan.Ngay_nhan, b.Noi_den, khach_hang.Ten as kh_nhan
	from ((bien_ban_nhan
	inner join 
		(select a.Ma_KH, a.ten_nguoi_gui, a.Ngay_gui, kien_hang.Noi_den,kien_hang.ma_bien_ban_gui, nhan_hang.Ma_bien_ban_nhan
		from ((kien_hang
		inner join nhan_hang on kien_hang.ID = nhan_hang.ID_kien_hang)
		inner join 
			(select khach_hang.Ma_KH as Ma_KH, bien_ban_gui.Ngay_gui ,khach_hang.Ten as ten_nguoi_gui, bien_ban_gui.Ma_bien_ban as ma_bien_ban_gui
			from bien_ban_gui
			inner join khach_hang on khach_hang.Ma_KH = bien_ban_gui.ma_kh_gui) a on a.ma_bien_ban_gui = kien_hang.ma_bien_ban_gui)) b 
		on b.Ma_bien_ban_nhan = bien_ban_nhan.Ma_bien_ban)
	inner join khach_hang on khach_hang.Ma_kh = bien_ban_nhan.ma_kh_nhan)
	having b.Ma_KH = Ma_KH_n AND b.Ngay_gui = Ngay_gui_n;
END //

CREATE PROCEDURE getCountNumber(
	Ma_NV_n INT
)
BEGIN
	select nhan_vien.Ma_NV, nhan_vien.Ten as Ten_tai_xe_lien_tinh, a.so_lan_tham_gia
	from ((tai_xe_lien_tinh
	inner join nhan_vien on nhan_vien.Ma_NV = tai_xe_lien_tinh.Ma_NV)
	inner join 
		(select ma_nv_tai_xe_lien_tinh, count(ma_nv_tai_xe_lien_tinh) as so_lan_tham_gia
		from chuyen_xe_lien_tinh
		group by ma_nv_tai_xe_lien_tinh) a on a.ma_nv_tai_xe_lien_tinh = tai_xe_lien_tinh.Ma_NV)
	having nhan_vien.Ma_NV = Ma_NV_n;
END //