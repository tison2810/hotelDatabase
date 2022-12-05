USE xxx;

	

		SELECT khach_hang.Ma_KH, khach_hang.Ten, a.sum_gui + b.sum_nhan AS doanh_thu
        FROM ((khach_hang
        INNER JOIN (SELECT ma_kh_gui, SUM(Phi_noi_thanh) AS sum_gui FROM bien_ban_gui GROUP BY ma_kh_gui) a  ON a.ma_kh_gui = khach_hang.Ma_KH)
        INNER JOIN (SELECT ma_kh_nhan, SUM(Phi_noi_thanh + Phi_lien_tinh) AS sum_nhan FROM bien_ban_nhan GROUP BY ma_kh_nhan) b ON b.ma_kh_nhan = khach_hang.Ma_KH)
        HAVING khach_hang.Ten = 'Harry S Joyce';
	

