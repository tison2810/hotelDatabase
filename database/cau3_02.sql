USE xxx;

	
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
having b.ten_nguoi_gui = 'Harry S Joyce' AND b.Ngay_gui = '2015-03-14';

