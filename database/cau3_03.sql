use xxx;
select nhan_vien.Ma_NV, nhan_vien.Ten as Ten_tai_xe_lien_tinh, a.so_lan_tham_gia
from ((tai_xe_lien_tinh
inner join nhan_vien on nhan_vien.Ma_NV = tai_xe_lien_tinh.Ma_NV)
inner join 
	(select ma_nv_tai_xe_lien_tinh, count(ma_nv_tai_xe_lien_tinh) as so_lan_tham_gia
	from chuyen_xe_lien_tinh
	group by ma_nv_tai_xe_lien_tinh) a on a.ma_nv_tai_xe_lien_tinh = tai_xe_lien_tinh.Ma_NV)
having nhan_vien.Ten = 'Macro K Flower';