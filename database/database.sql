DROP SCHEMA hoteldatabase;
CREATE SCHEMA hoteldatabase;
USE hoteldatabase;

CREATE TABLE ConNguoi (
    CCCD CHAR(12) NOT NULL,
    HoTen VARCHAR(255) NOT NULL,
    NgaySinh DATE NOT NULL,
    SoDienThoai CHAR(10) NOT NULL,
    GioiTinh CHAR(1),
    Email VARCHAR(255),
    Diachi VARCHAR(1000),
    PRIMARY KEY (CCCD)
);

CREATE TABLE KhachHang (
    CCCD CHAR(12) NOT NULL,
    PRIMARY KEY (CCCD)
);

CREATE TABLE NhanVien (
    CCCD CHAR(12) NOT NULL,
    MgrCCCD CHAR(12),
    MaCN CHAR(4) NOT NULL,
    MucLuong INT NOT NULL,
    TongLuong INT,
    QuanLiFlag CHAR(1),
    LeTanFlag CHAR(1),
    PhucVuFlag CHAR(1),
    PRIMARY KEY (CCCD)
);

CREATE TABLE CaLamViec (
    CCCD CHAR(12) NOT NULL,
    NgayLamViec DATE,
    GioBatDau DATETIME,
    GioKetThuc DATETIME,
    PRIMARY KEY(CCCD, NgayLamViec, GioBatDau, GioKetThuc)
);

CREATE TABLE TaiKhoanThanhVien (
    CCCD CHAR(12) NOT NULL,
    TenDangNhap VARCHAR(20) NOT NULL,
    MatKhau VARCHAR(20) NOT NULL,
    NgayTao DATE,
    HangTaiKhoan VARCHAR(255) DEFAULT "Khách hàng thân thiết",
    PRIMARY KEY (CCCD, TenDangNhap)
);


CREATE TABLE ChiNhanh (
    MasoCN CHAR(4) NOT NULL,
    Ten VARCHAR(255) UNIQUE,
    DiaChi VARCHAR(1000),
    SoLuongNhanVien INT,
    PRIMARY KEY (MasoCN)
);

CREATE TABLE Phong 
( 
    TenPhong VARCHAR(50) NOT NULL,
    MasoCN CHAR(4) NOT NULL,
    TinhTrang VARCHAR(255),
    MaLoaiPhong CHAR(8) NOT NULL,
    PRIMARY KEY (TenPhong, MasoCN)
);

 CREATE TABLE LuotDatPhong (
    MaSo CHAR(12) NOT NULL,
    TenPhong VARCHAR(50) NOT NULL,
    MaSoCN CHAR(4) NOT NULL,
	CCCDKhach CHAR(12) NOT NULL,
    ThoiGianDat DATETIME,
    ThoiGianNhan DATETIME,
    ThoiGianTra DATETIME,
	ThoiGianCheckin DATETIME,
    ThoiGianCheckout DATETIME,
    TrangThai VARCHAR(50),
    CCCDLeTan CHAR(12) NOT NULL,
     PRIMARY KEY (MaSo, TenPhong, MaSoCN)
);

CREATE TABLE LoaiPhong (
    MaSo CHAR(8) NOT NULL,
    MoTa VARCHAR(255),
    SoNguoiToiDa INT NOT NULL,
    MucGia INT,
    SoPhongConTrong INT,
    PRIMARY KEY (MaSo)
);

CREATE TABLE NoiThat (
    MaSoCN CHAR(4) NOT NULL,
    MaSo CHAR(4) NOT NULL,
    TenPhong VARCHAR(50) NOT NULL,
    PhanLoai VARCHAR(255),
    Ten VARCHAR(255),
	PRIMARY KEY (MaSoCN, MaSo, TenPhong)
);

CREATE TABLE HoaDon (
    MaSo INT AUTO_INCREMENT,
    ThoiGianXuatHoaDon DATETIME,
    TongTien INT,
    MaSoLuotDP CHAR (12),
    CCCDLeTan CHAR(12),
    PRIMARY KEY (MaSo)
);

CREATE TABLE DichVuThem (
    MaDichVu CHAR(12) NOT NULL,
    SoLuong INT,
    PRIMARY KEY (MaDichVu)
); 

CREATE TABLE LoaiDichVu (
    Ten VARCHAR(255) NOT NULL,
    MaDichVu CHAR(12),
    PRIMARY KEY (Ten)
);

CREATE TABLE AnUong (
    TenMonAn VARCHAR(255) NOT NULL,
    SoSuat INT,
    GiaMotSuat INT,
    PRIMARY KEY (TenMonAn)
);
 
 CREATE TABLE GiatUi (
    Ten VARCHAR(255) NOT NULL,
	GiaKgKeTiep INT,
    GiaMacDinh INT,
    SoKg INT,
     PRIMARY KEY (Ten)
);

CREATE TABLE PhucVuDichVu(
    CCCD CHAR(12) NOT NULL,
    MaDichVu CHAR(12) NOT NULL,
    PRIMARY KEY (CCCD, MaDichVu)
);


ALTER TABLE KhachHang
ADD CONSTRAINT FK__KH__CCCD FOREIGN KEY (CCCD) REFERENCES ConNguoi(CCCD) ON DELETE CASCADE;

ALTER TABLE NhanVien
ADD CONSTRAINT FK__NV__CCCD FOREIGN KEY (CCCD) REFERENCES ConNguoi(CCCD) ON DELETE CASCADE;

ALTER TABLE NhanVien
ADD CONSTRAINT FK__NV__MasoCN FOREIGN KEY (MaCN) REFERENCES ChiNhanh(MasoCN);

ALTER TABLE CaLamViec
ADD CONSTRAINT FK__CaLamViec__CCCD FOREIGN KEY (CCCD) REFERENCES NhanVien(CCCD) ON DELETE CASCADE;

ALTER TABLE TaiKhoanThanhVien
ADD CONSTRAINT FK__TK__CCCD FOREIGN KEY (CCCD) REFERENCES KhachHang(CCCD) ON DELETE CASCADE;

ALTER TABLE Phong
ADD CONSTRAINT FK__Phong__MasoCN FOREIGN KEY (MasoCN) REFERENCES ChiNhanh(MasoCN);

ALTER TABLE Phong
ADD CONSTRAINT FK__Phong__MaLoaiPhong FOREIGN KEY (MaLoaiPhong) REFERENCES LoaiPhong(MaSo);

ALTER TABLE LuotDatPhong
ADD CONSTRAINT FK__LDP__KEY FOREIGN KEY (TenPhong,MaSoCN) REFERENCES Phong(TenPhong,MaSoCN);

ALTER TABLE LuotDatPhong
ADD CONSTRAINT FK__LDP__CCCDK FOREIGN KEY (CCCDKhach) REFERENCES KhachHang(CCCD);

ALTER TABLE LuotDatPhong
ADD CONSTRAINT FK__LDP__CCCDLT FOREIGN KEY (CCCDLeTan) REFERENCES NhanVien(CCCD);

ALTER TABLE NoiThat
ADD CONSTRAINT FK__NT__TenPhong FOREIGN KEY (TenPhong,MaSoCN) REFERENCES Phong(TenPhong, MasoCN);

ALTER TABLE NoiThat
ADD CONSTRAINT FK__NT__MasoCN FOREIGN KEY (MasoCN) REFERENCES ChiNhanh(MasoCN) ON DELETE CASCADE;

ALTER TABLE HoaDon
ADD CONSTRAINT FK__HD__MaLDP FOREIGN KEY (MaSoLuotDP) REFERENCES LuotDatPhong(MaSo);

ALTER TABLE HoaDon
ADD CONSTRAINT FK__HD__MasoCN FOREIGN KEY (CCCDLeTan) REFERENCES NhanVien(CCCD);

ALTER TABLE LoaiDichVu
ADD CONSTRAINT FK__LDV__MaDV FOREIGN KEY (MaDichVu) REFERENCES DichVuThem(MaDichVu) ON DELETE CASCADE;

ALTER TABLE AnUong
ADD CONSTRAINT FK__AU__Ten FOREIGN KEY (TenMonAn) REFERENCES LoaiDichVu(Ten) ON DELETE CASCADE;

ALTER TABLE GiatUi
ADD CONSTRAINT FK__GU__Ten FOREIGN KEY (Ten) REFERENCES LoaiDichVu(Ten) ON DELETE CASCADE;

ALTER TABLE PhucVuDichVu
ADD CONSTRAINT FK__PVDV__CCCD FOREIGN KEY (CCCD) REFERENCES NhanVien(CCCD);

ALTER TABLE PhucVuDichVu
ADD CONSTRAINT FK__PVDV__MaDV FOREIGN KEY (MaDichVu) REFERENCES DichVuThem(MaDichVu);

ALTER TABLE LoaiPhong
ADD CONSTRAINT Check_SoNguoi CHECK (SoNguoiToiDa >= 1);

ALTER TABLE ConNguoi
ADD CHECK (LENGTH(SoDienThoai)=10);

ALTER TABLE ConNguoi
ADD CHECK (LENGTH(CCCD)=12);

ALTER TABLE TaiKhoanThanhVien
ADD CHECK (LENGTH(TenDangNhap)>=8);


INSERT INTO ConNguoi VALUE ("079203006219","Nguyễn Văn Tiến","1992-8-4","0909992182",'M',"vtien@gmail.com","62 Nguyễn Đình Chính, phường 15, quận Phú Nhuận, TPHCM");
INSERT INTO ConNguoi VALUE ("054618351535","Nguyễn Công Đạt","1998-6-25","0914462211",'M',"cdat@gmail.com","268 Lê Đức Thọ, phường 6, quận Gò Vấp, TPHCM");
INSERT INTO ConNguoi VALUE ("079221241462","Phạm Mai Chi","2002-2-18","0924214124",'F',"mchi@gmail.com","80 Đường số 8, phường 11, quận Gò Vấp, TPHCM");
INSERT INTO ConNguoi VALUE ("079461255125","Trần Bình Minh","2001-11-5","0983515251",'M',"tbminh@gmail.com","212 Mai Chí Thọ, phường Bình Khánh, quận 2, TPHCM");
INSERT INTO ConNguoi VALUE ("031235464575","Hoàng Tiến Dũng","1996-4-15","0909992182",'M',"tdung@gmail.com","162 Nguyễn Trọng Tuyển, phường 8, quận Phú Nhuận, TPHCM");
INSERT INTO ConNguoi VALUE ("064235325142","Nguyễn Ngọc Nhi","1999-8-12","0909992182",'F',"nnnhi@gmail.com","62 Kỳ Đồng, phường 9, 3, TPHCM");
INSERT INTO ConNguoi VALUE ("057236253251","Đoàn Công Tuấn","2003-1-21","0909992182",'M',"dct@gmail.com","32 Ngô Quyền, phường 5, quận 10, TPHCM");

INSERT INTO KhachHang VALUE ("079461255125");
INSERT INTO KhachHang VALUE ("054618351535");

INSERT INTO TaiKhoanThanhVien VALUE ("079461255125", "tranbinhminh", "123456","2023-11-25", "Khách hàng thân thiết");
INSERT INTO TaiKhoanThanhVien VALUE ("054618351535", "datnguyen", "654321", "2021-8-15", "VIP");

INSERT INTO ChiNhanh VALUE ("CN01", "CN Hoàng Văn Thụ", "262 Hoàng Văn Thụ, phường 4, quận Tân Bình, TPHCM", 3);
INSERT INTO ChiNhanh VALUE ("CN02", "CN Lý Thường Kiệt", "226 Lý Thường Kiệt, phường 9, quận Tân Bình, TPHCM", 2);

INSERT INTO NhanVien VALUE ("079203006219",NULL,"CN01",225000,NULL,'1','0','0');
INSERT INTO NhanVien VALUE ("079221241462","079203006219","CN01",102000,NULL,'0','1','0');
INSERT INTO NhanVien VALUE ("057236253251","079203006219","CN01",117000,NULL,'0','0','1');
INSERT INTO NhanVien VALUE ("031235464575",NULL,"CN02",184000,NULL,'1','0','0');
INSERT INTO NhanVien VALUE ("064235325142","031235464575","CN02",96000,NULL,'0','1','0');

INSERT INTO CaLamViec VALUE("079203006219","2023-12-12", "2023-12-12 07:00:00", "2023-12-12 11:00:00");
INSERT INTO CaLamViec VALUE("079221241462","2023-12-12", "2023-12-12 07:00:00", "2023-12-12 11:00:00");
INSERT INTO CaLamViec VALUE("057236253251","2023-12-12", "2023-12-12 07:00:00", "2023-12-12 11:00:00");
INSERT INTO CaLamViec VALUE("031235464575","2023-12-12", "2023-12-12 07:00:00", "2023-12-12 11:00:00");
INSERT INTO CaLamViec VALUE("064235325142","2023-12-12", "2023-12-12 07:00:00", "2023-12-12 11:00:00");

INSERT INTO LoaiPhong VALUE("STAND01","Phòng tiêu chuẩn 2 người",2,200000,8);
INSERT INTO LoaiPhong VALUE("STAND02","Phòng tiêu chuẩn 4 người",4,300000,4);
INSERT INTO LoaiPhong VALUE("VIP01","Phòng VIP tiêu chuẩn",2,600000,2);
INSERT INTO LoaiPhong VALUE("VIP02","Phòng VIP cao cấp",2,1000000,1);

INSERT INTO Phong VALUE("Tiêu chuẩn 1-1", "CN01", "Trống", "STAND01");
INSERT INTO Phong VALUE("Tiêu chuẩn 1-2", "CN01", "Trống", "STAND01");
INSERT INTO Phong VALUE("Tiêu chuẩn 2-1", "CN01", "Trống", "STAND02");
INSERT INTO Phong VALUE("VIP 1", "CN01", "Trống", "VIP01");
INSERT INTO Phong VALUE("Luxury", "CN01", "Trống", "VIP02");
INSERT INTO Phong VALUE("Tiêu chuẩn 1-1", "CN02", "Trống", "STAND01");
INSERT INTO Phong VALUE("VIP 1", "CN02", "Trống", "VIP01");

INSERT INTO NoiThat VALUE("CN01", "NT01", "Tiêu chuẩn 1-1", "Giường ngủ", "Giường đôi");
INSERT INTO NoiThat VALUE("CN01", "NT02", "Tiêu chuẩn 1-1", "Tủ", "Tủ quần ảo");
INSERT INTO NoiThat VALUE("CN02", "NT01", "VIP 1", "Giường ngủ", "Giường đôi");
INSERT INTO NoiThat VALUE("CN02", "NT02", "VIP 1", "Tủ", "Tủ giày dép");




