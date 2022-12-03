CREATE SCHEMA xxx;

USE xxx;

CREATE TABLE Khach_hang(
	Ma_KH INT NOT NULL,
    CMND INT NOT NULL,
    Ten	VARCHAR(45)	NOT NULL,
    Mail VARCHAR(45),
    PRIMARY KEY (Ma_KH)
);
CREATE TABLE Nguoi_nhan(
	Ma_KH INT NOT NULL,
    PRIMARY KEY (Ma_KH),
    FOREIGN KEY (Ma_KH) REFERENCES Khach_hang (Ma_KH) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Nguoi_gui(
	Ma_KH INT NOT NULL,
    PRIMARY KEY (Ma_KH),
    FOREIGN KEY (Ma_KH) REFERENCES Khach_hang (Ma_KH) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Bien_ban_nhan(
	Ma_bien_ban INT NOT NULL,
    Ngay_nhan DATE,
    So_kien_hang INT,
    Phi_noi_thanh DECIMAL(10,2),
    Phi_lien_tinh DECIMAL(10,2),
    PRIMARY KEY (Ma_bien_ban)
);
CREATE TABLE Bien_ban_gui(
	Ma_bien_ban INT NOT NULL,
    Ngay_gui DATE,
    So_kien_hang INT,
    Phi_noi_thanh DECIMAL(10,2),
    PRIMARY KEY (Ma_bien_ban)
);
CREATE TABLE Kien_hang(
	ID INT NOT NULL,
    Khoi_luong INT,
    Noi_den VARCHAR(200),
    Noi_di VARCHAR(200),
    Loai VARCHAR(45),
    Phi_lien_tinh DECIMAL(10,2),
    PRIMARY KEY (ID)
);
CREATE TABLE Nhan_vien(
	Ma_NV INT NOT NULL,
    CMND INT NOT NULL,
    Ten	VARCHAR(45)	NOT NULL,
    So_dien_thoai INT,
    PRIMARY KEY (Ma_NV, CMND)
);
CREATE TABLE Nguoi_dieu_hanh(
	Ma_NV INT NOT NULL,    
    PRIMARY KEY(Ma_NV),
    FOREIGN KEY (Ma_NV) REFERENCES Nhan_vien (Ma_NV) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Tai_xe_noi_thanh(
	Ma_NV INT	NOT NULL,
    GPLX VARCHAR(45),
    PRIMARY KEY(Ma_NV),
    FOREIGN KEY (Ma_NV) REFERENCES Nhan_vien (Ma_NV) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Lo_xe_noi_thanh(
	Ma_NV INT NOT NULL,    
    PRIMARY KEY(Ma_NV),
    FOREIGN KEY (Ma_NV) REFERENCES Nhan_vien (Ma_NV) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Quan_ly_kho(
	Ma_NV INT NOT NULL,    
    PRIMARY KEY(Ma_NV),
    FOREIGN KEY (Ma_NV) REFERENCES Nhan_vien (Ma_NV) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Lo_xe_lien_tinh(
	Ma_NV INT NOT NULL,    
    PRIMARY KEY(Ma_NV),
    FOREIGN KEY (Ma_NV) REFERENCES Nhan_vien (Ma_NV) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Tai_xe_lien_tinh(
	Ma_NV INT NOT NULL,
    GPLX VARCHAR(45),
    PRIMARY KEY(Ma_NV),
    FOREIGN KEY (Ma_NV) REFERENCES Nhan_vien (Ma_NV) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Cuoc_xe_noi_thanh(
	Ma_chuyen INT NOT NULL,
    Trong_luong_hien_tai INT,
    PRIMARY KEY(Ma_chuyen)   
);
CREATE TABLE Xe_noi_thanh(
	Ma_xe INT NOT NULL,
    Bien_so_xe VARCHAR(45),
    Trong_luong_hien_tai INT,
    PRIMARY KEY(Ma_xe, Bien_so_xe) 
);
CREATE TABLE Kho(
	Ma_kho INT NOT NULL,
	Dien_tich INT,
    Dia_chi VARCHAR(200),
    PRIMARY KEY(Ma_kho)   
);
CREATE TABLE Bien_ban_xuat_nhap(
	ID INT NOT NULL,
    Ngay_xuat_bien_ban DATE,
    Tinh_trang VARCHAR(45),
    PRIMARY KEY(ID)   
);
CREATE TABLE Chuyen_xe_lien_tinh(
	Ma_chuyen INT NOT NULL,
    So_kien_hang INT,
    Quang_duong INT,
    PRIMARY KEY(Ma_chuyen)   
);
CREATE TABLE Xe_lien_tinh(
	Ma_xe INT NOT NULL,
    Bien_so_xe VARCHAR(45),
    Trong_tai INT,
    PRIMARY KEY(Ma_xe, Bien_so_xe)  
);
CREATE TABLE Tinh(
	Ma_tinh INT NOT NULL,
    Ten_tinh VARCHAR(45),
    PRIMARY KEY(Ma_tinh)  
);
CREATE TABLE Yeu_cau(
	Ma_KH INT NOT NULL,
    Ma_so INT unique,
    Trang_thai VARCHAR(45),
    PRIMARY KEY(Ma_KH, Ma_so),
    FOREIGN KEY (Ma_KH) REFERENCES Nguoi_gui (Ma_KH) ON DELETE CASCADE ON UPDATE CASCADE 
);
CREATE TABLE Uoc_luong(
	Ma_KH INT NOT NULL,
    Ma_so INT NOT NULL,
    Number INT,
    Loai_hang VARCHAR(255),
    Khoi_luong INT,
    So_luong INT,
    PRIMARY KEY(Ma_KH, Ma_so, Number),
    FOREIGN KEY (Ma_KH, Ma_so) REFERENCES Yeu_cau (Ma_KH, Ma_so) ON DELETE CASCADE ON UPDATE CASCADE 
);

-- //////////////////////////////////////////////////////////


ALTER TABLE bien_ban_nhan ADD (ma_kh_nhan INT NOT NULL);	
ALTER TABLE bien_ban_nhan ADD FOREIGN KEY (ma_kh_nhan) REFERENCES nguoi_nhan(ma_kh) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE bien_ban_gui ADD (ma_kh_gui INT NOT NULL);	
ALTER TABLE bien_ban_gui ADD FOREIGN KEY (ma_kh_gui) REFERENCES nguoi_gui(ma_kh) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE kien_hang ADD (ma_bien_ban_gui INT NOT NULL);	
ALTER TABLE kien_hang ADD FOREIGN KEY (ma_bien_ban_gui) REFERENCES bien_ban_gui(ma_bien_ban) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE cho (
	ID_kien_hang INT,
	Ma_chuyen INT,
    PRIMARY KEY(ID_kien_hang, Ma_chuyen),
    FOREIGN KEY (ID_kien_hang) REFERENCES kien_hang(ID) ON DELETE CASCADE ON UPDATE CASCADE, 
    FOREIGN KEY (Ma_chuyen) REFERENCES chuyen_xe_lien_tinh(ma_chuyen) ON DELETE CASCADE ON UPDATE CASCADE
);

ALTER TABLE Yeu_cau ADD (Ma_tx_noi_thanh INT NOT NULL, Ma_chuyen INT NOT NULL, Ma_bien_ban_gui INT NOT NULL);	
ALTER TABLE Yeu_cau ADD FOREIGN KEY (Ma_tx_noi_thanh) REFERENCES Tai_xe_noi_thanh(ma_nv) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE Yeu_cau ADD FOREIGN KEY (Ma_chuyen) REFERENCES cuoc_xe_noi_thanh(ma_chuyen) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE Yeu_cau ADD FOREIGN KEY (Ma_bien_ban_gui) REFERENCES bien_ban_gui(ma_bien_ban) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE kho ADD (ma_tinh INT NOT NULL, ma_nv_quan_ly_kho INT NOT NULL);	
ALTER TABLE kho ADD FOREIGN KEY (ma_tinh) REFERENCES tinh(ma_tinh) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE kho ADD FOREIGN KEY (ma_nv_quan_ly_kho) REFERENCES quan_ly_kho(ma_nv) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE bien_ban_xuat_nhap ADD (ma_nv_quan_ly_kho INT NOT NULL, ma_kho INT NOT NULL);	
ALTER TABLE bien_ban_xuat_nhap ADD FOREIGN KEY (ma_kho) REFERENCES kho(ma_kho) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE bien_ban_xuat_nhap ADD FOREIGN KEY (ma_nv_quan_ly_kho) REFERENCES quan_ly_kho(ma_nv) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE Dieu_hanh (
	Ma_nv_nguoi_dieu_hanh INT,
    Ma_nv_tai_xe_noi_thanh INT,
    PRIMARY KEY (Ma_nv_nguoi_dieu_hanh, Ma_nv_tai_xe_noi_thanh),
    FOREIGN KEY (Ma_nv_nguoi_dieu_hanh) REFERENCES nguoi_dieu_hanh(ma_nv) ON DELETE CASCADE ON UPDATE CASCADE, 
    FOREIGN KEY (Ma_nv_tai_xe_noi_thanh) REFERENCES tai_xe_noi_thanh(ma_nv) ON DELETE CASCADE ON UPDATE CASCADE
);

ALTER TABLE cuoc_xe_noi_thanh ADD (ma_nv_tai_xe_noi_thanh INT NOT NULL, ma_nv_lo_xe_noi_thanh INT NOT NULL, ma_kho INT NOT NULL, ma_xe_noi_thanh INT NOT NULL);	
ALTER TABLE cuoc_xe_noi_thanh ADD FOREIGN KEY (ma_nv_tai_xe_noi_thanh) REFERENCES Tai_xe_noi_thanh(ma_nv) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE cuoc_xe_noi_thanh ADD FOREIGN KEY (ma_nv_lo_xe_noi_thanh) REFERENCES lo_xe_noi_thanh(ma_nv) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE cuoc_xe_noi_thanh ADD FOREIGN KEY (ma_kho) REFERENCES kho(ma_kho) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE cuoc_xe_noi_thanh ADD FOREIGN KEY (ma_xe_noi_thanh) REFERENCES xe_noi_thanh(ma_xe) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE nhan_hang (
	ID_kien_hang INT,
    Ma_bien_ban_nhan INT NOT NULL,
    PRIMARY KEY (ID_kien_hang),
    FOREIGN KEY (ID_kien_hang) REFERENCES Kien_hang(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Ma_bien_ban_nhan) REFERENCES Bien_ban_nhan(Ma_bien_ban) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Dieu_phoi (
	Ma_nv_nguoi_dieu_hanh INT,
    Ma_so_yeu_cau INT,
    PRIMARY KEY (Ma_so_yeu_cau, Ma_nv_nguoi_dieu_hanh),
    FOREIGN KEY (Ma_nv_nguoi_dieu_hanh) REFERENCES nguoi_dieu_hanh(ma_nv) ON DELETE CASCADE ON UPDATE CASCADE, 
    FOREIGN KEY (Ma_so_yeu_cau) REFERENCES yeu_cau(Ma_so) ON DELETE CASCADE ON UPDATE CASCADE
);

ALTER TABLE chuyen_xe_lien_tinh ADD (ma_nv_lo_xe_lien_tinh INT NOT NULL, ma_nv_tai_xe_lien_tinh INT NOT NULL, ma_xe_lien_tinh INT NOT NULL, ID_bien_ban_nhap_xuat INT NOT NULL);	
ALTER TABLE chuyen_xe_lien_tinh ADD FOREIGN KEY (ma_nv_lo_xe_lien_tinh) REFERENCES lo_xe_lien_tinh(ma_nv) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE chuyen_xe_lien_tinh ADD FOREIGN KEY (ma_nv_tai_xe_lien_tinh) REFERENCES tai_xe_lien_tinh(ma_nv) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE chuyen_xe_lien_tinh ADD FOREIGN KEY (ma_xe_lien_tinh) REFERENCES xe_lien_tinh(ma_xe) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE chuyen_xe_lien_tinh ADD FOREIGN KEY (ID_bien_ban_nhap_xuat) REFERENCES bien_ban_xuat_nhap(ID) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE dia_chi (
	Ma_kh INT,
    dia_chi VARCHAR(255),
    PRIMARY KEY (Ma_kh,dia_chi),
    FOREIGN KEY (Ma_kh) REFERENCES khach_hang(Ma_kh) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE so_dien_thoai (
	Ma_kh INT,
    so_dien_thoai VARCHAR(25),
    PRIMARY KEY (Ma_kh, so_dien_thoai),
    FOREIGN KEY (Ma_kh) REFERENCES khach_hang(Ma_kh) ON DELETE CASCADE ON UPDATE CASCADE
);



INSERT INTO khach_hang VALUE (1,216105165,"Harry S Joyce","clifton2015@gmail.com");
INSERT INTO khach_hang VALUE (2,321350135,"Peter A Jacobson","geovany.gerla@gmail.com");
INSERT INTO khach_hang VALUE (3,115481584,"Glenn C Reeves","tony.greenho@gmail.com");
INSERT INTO khach_hang VALUE (4,211354303,"Mary M Kennedy","ollie1973@gmail.com");
INSERT INTO khach_hang VALUE (5,587752351,"Kenneth A Mendez","alvera_padbe@gmail.com");
INSERT INTO khach_hang VALUE (6,546786132,"Deborah J Paul","newell.low8@gmail.com");


INSERT INTO so_dien_thoai VALUE (1,7064049336);
INSERT INTO so_dien_thoai VALUE (1,7625832514);
INSERT INTO so_dien_thoai VALUE (2,9525569734);
INSERT INTO so_dien_thoai VALUE (2,6512101985);
INSERT INTO so_dien_thoai VALUE (3,3025951884);
INSERT INTO so_dien_thoai VALUE (4,3026903693);
INSERT INTO so_dien_thoai VALUE (5,3105980521);
INSERT INTO so_dien_thoai VALUE (5,4247047254);
INSERT INTO so_dien_thoai VALUE (6,8705321913);
INSERT INTO so_dien_thoai VALUE (6,8708248917);


INSERT INTO dia_chi VALUE (1,"1378 Davis Street Columbus Georgia(GA)");
INSERT INTO dia_chi VALUE (1,"2433 FKV Street New york USA");
INSERT INTO dia_chi VALUE (2,"2830 Barrington Court Arkansas");
INSERT INTO dia_chi VALUE (3,"3306 Brown Bear Drive California");
INSERT INTO dia_chi VALUE (4,"2835 Collins Street Florida");
INSERT INTO dia_chi VALUE (5,"128 Lakewood Drive New Jersey");
INSERT INTO dia_chi VALUE (5,"3659 Crummit Lane Nebraska");
INSERT INTO dia_chi VALUE (6,"528 Tetrick Road Florida");
INSERT INTO dia_chi VALUE (6,"4876 Rosemont Avenue Florida");


INSERT INTO nguoi_gui VALUE (1);
INSERT INTO nguoi_gui VALUE (2);
INSERT INTO nguoi_gui VALUE (3);
INSERT INTO nguoi_gui VALUE (4);
INSERT INTO nguoi_gui VALUE (5);
INSERT INTO nguoi_gui VALUE (6);


INSERT INTO nguoi_nhan VALUE (1);
INSERT INTO nguoi_nhan VALUE (2);
INSERT INTO nguoi_nhan VALUE (3);
INSERT INTO nguoi_nhan VALUE (4);
INSERT INTO nguoi_nhan VALUE (5);
INSERT INTO nguoi_nhan VALUE (6);


INSERT INTO bien_ban_gui VALUE (100,"2015-3-14",2,3,1);
INSERT INTO bien_ban_gui VALUE (101,'2016-2-14',1,0,2);
INSERT INTO bien_ban_gui VALUE (102,'2016-3-17',1,5,1);
INSERT INTO bien_ban_gui VALUE (103,'2016-7-1',3,8,3);
INSERT INTO bien_ban_gui VALUE (104,'2016-11-15',2,0,4);
INSERT INTO bien_ban_gui VALUE (105,'2017-1-13',1,0,3);
INSERT INTO bien_ban_gui VALUE (106,'2017-3-20',4,10,1);
INSERT INTO bien_ban_gui VALUE (107,'2017-3-25',4,15,6);
INSERT INTO bien_ban_gui VALUE (108,'2017-3-29',1,7,2);
INSERT INTO bien_ban_gui VALUE (109,'2017-4-1',3,0,3);
INSERT INTO bien_ban_gui VALUE (110,'2017-5-11',2,15,1);


INSERT INTO bien_ban_nhan VALUE (100,'2018-1-23',2,3,20,1);
INSERT INTO bien_ban_nhan VALUE (101,'2018-1-25',1,0,15,2);
INSERT INTO bien_ban_nhan VALUE (102,'2018-2-5',2,6,30,1);
INSERT INTO bien_ban_nhan VALUE (103,'2018-3-14',2,8,20,3);
INSERT INTO bien_ban_nhan VALUE (104,'2018-6-8',1,0,40,1);
INSERT INTO bien_ban_nhan VALUE (105,'2018-8-16',2,5,24,1);
INSERT INTO bien_ban_nhan VALUE (106,'2018-9-1',3,5,24,4);
INSERT INTO bien_ban_nhan VALUE (107,'2018-9-4',6,5,24,5);
INSERT INTO bien_ban_nhan VALUE (108,'2018-9-17',5,3,20,5);

INSERT INTO kien_hang VALUE (1,10,"Q1, TP HCM","Xuan Loc, Dong Nai","Do choi",10,100);
INSERT INTO kien_hang VALUE (2,5,"Q2, TP HCM","Xuan Loc, Dong Nai","Do choi",10,100);
INSERT INTO kien_hang VALUE (3,20,"Xuan Loc, Dong Nai","Q1, TP HCM","Noi that",5,101);
INSERT INTO kien_hang VALUE (4,4,"Q1, TP HCM", "Xuan Loc, Dong Nai","Do choi",5,102);
INSERT INTO kien_hang VALUE (5,10,"Chau Doc, An Giang","Q2, TP HCM","Quan ao",5,103);
INSERT INTO kien_hang VALUE (6,15,"Chau Doc, An Giang","Q2, TP HCM","Quan ao",15,103);
INSERT INTO kien_hang VALUE (7,20,"Chau Doc, An Giang","Q2, TP HCM","Quan ao",15,103);
INSERT INTO kien_hang VALUE (8,10,"Xuan Loc Dong Nai","Nha Trang Khanh Hoa","Sach",10,104);
INSERT INTO kien_hang VALUE (9,15,"Xuan Loc Dong Nai","Nha Trang Khanh Hoa","Sach",10,104);
INSERT INTO kien_hang VALUE (10,50,"Xuan Loc, Dong Nai","Q2, TP HCM","Vat Lieu",20,105);
INSERT INTO kien_hang VALUE (11,20,"Nha Trang, Khanh Hoa","Xuan Loc, Dong Nai","Do choi",10,106);
INSERT INTO kien_hang VALUE (12,10,"Nha Trang, Khanh Hoa","Xuan Loc, Dong Nai","Do choi",15,106);
INSERT INTO kien_hang VALUE (13,20,"Nha Trang, Khanh Hoa","Xuan Loc, Dong Nai","Do choi",9,106);
INSERT INTO kien_hang VALUE (14,30,"Nha Trang, Khanh Hoa","Xuan Loc, Dong Nai","Do choi",12,106);
INSERT INTO kien_hang VALUE (15,40,"Xuan Loc, Dong Nai","Chau Doc, An Giang","Thuc pham",12,107);
INSERT INTO kien_hang VALUE (16,20,"Xuan Loc, Dong Nai","Chau Doc, An Giang","Thuc pham",12,107);
INSERT INTO kien_hang VALUE (17,5,"Xuan Loc, Dong Nai","Chau Doc, An Giang","Thuc pham",12,107);
INSERT INTO kien_hang VALUE (18,5,"Xuan Loc, Dong Nai","Chau Doc, An Giang","Thuc pham",5,107);
INSERT INTO kien_hang VALUE (19,60,"Nha Trang, Khanh Hoa","Q1, TP HCM","Vat lieu",5,108);
INSERT INTO kien_hang VALUE (20,10,"Xuan Loc Dong Nai","Q2, TP HCM","Dung cu",5,109);
INSERT INTO kien_hang VALUE (21,10,"Xuan Loc Dong Nai","Q2, TP HCM","Dung cu",5,109);
INSERT INTO kien_hang VALUE (22,12,"Xuan Loc Dong Nai","Q2, TP HCM","Dung cu",5,109);
INSERT INTO kien_hang VALUE (23,11,"Q1, TP HCM","Xuan Loc, Dong Nai","Do choi",5,110);
INSERT INTO kien_hang VALUE (24,13,"Q1, TP HCM","Xuan Loc, Dong Nai","Do choi",5,110);

INSERT INTO nhan_hang VALUE (1,100);
INSERT INTO nhan_hang VALUE (2,100);
INSERT INTO nhan_hang VALUE (3,101);
INSERT INTO nhan_hang VALUE (4,102);
INSERT INTO nhan_hang VALUE (5,102);
INSERT INTO nhan_hang VALUE (6,103);
INSERT INTO nhan_hang VALUE (7,103);
INSERT INTO nhan_hang VALUE (8,104);
INSERT INTO nhan_hang VALUE (9,105);
INSERT INTO nhan_hang VALUE (10,105);
INSERT INTO nhan_hang VALUE (11,106);
INSERT INTO nhan_hang VALUE (12,106);
INSERT INTO nhan_hang VALUE (13,106);
INSERT INTO nhan_hang VALUE (14,107);
INSERT INTO nhan_hang VALUE (15,107);
INSERT INTO nhan_hang VALUE (16,107);
INSERT INTO nhan_hang VALUE (17,107);
INSERT INTO nhan_hang VALUE (18,107);
INSERT INTO nhan_hang VALUE (19,107);
INSERT INTO nhan_hang VALUE (20,108);
INSERT INTO nhan_hang VALUE (21,108);
INSERT INTO nhan_hang VALUE (22,108);
INSERT INTO nhan_hang VALUE (23,108);
INSERT INTO nhan_hang VALUE (24,108);

/* -------------------------------------------------------------------------*/
INSERT INTO nhan_vien VALUE (1,111111111,"Akali A Bliztcrank",1234567890);
INSERT INTO nhan_vien VALUE (2,111111112,"Aatrox C Maximant",2345678901);
INSERT INTO nhan_vien VALUE (3,111111113, "Cristiano Ronaldo",3456789012);
INSERT INTO nhan_vien VALUE (4,111111114, "Lionel Messi",4567890123);
INSERT INTO nhan_vien VALUE (5,111111115, "Lionel Messi",5678901234);
INSERT INTO nhan_vien VALUE (6,111111116, "Kelvin D Bruyner",6789012345);
INSERT INTO nhan_vien VALUE (7,111111117, "Bruno Fred",7890123456);
INSERT INTO nhan_vien VALUE (8,111111118, "Aubreya K Calf",8901234567);
INSERT INTO nhan_vien VALUE (9,111111119, "Alistar M Pantheon",9012345678);
INSERT INTO nhan_vien VALUE (10,11111110, "Ashe C Fall",0123456789);
INSERT INTO nhan_vien VALUE (11,11111101, "Hito E Shin",1023456789);
INSERT INTO nhan_vien VALUE (12,11111011, "Rogrydo D Paul",1203456789);
INSERT INTO nhan_vien VALUE (13,11110111, "Macro K Flower",1230456789);
INSERT INTO nhan_vien VALUE (14,11101111, "Macro K Micro",1234056789);
INSERT INTO nhan_vien VALUE (15,11011111, "Pedri Modric",1234506789);
INSERT INTO nhan_vien VALUE (16,10111111, "Harry Rammus",1234560789);
INSERT INTO nhan_vien VALUE (17,01111111, "Henry Ford",1234567089);

INSERT INTO nguoi_dieu_hanh VALUE (1);
INSERT INTO nguoi_dieu_hanh VALUE (2);

INSERT INTO tai_xe_noi_thanh VALUE (3,"Class D");
INSERT INTO tai_xe_noi_thanh VALUE (4,"Class D");

INSERT INTO lo_xe_noi_thanh VALUE (5);
INSERT INTO lo_xe_noi_thanh VALUE (6);

INSERT INTO quan_ly_kho VALUE (7);
INSERT INTO quan_ly_kho VALUE (8);
INSERT INTO quan_ly_kho VALUE (9);
INSERT INTO quan_ly_kho VALUE (10);
INSERT INTO quan_ly_kho VALUE (11);

INSERT INTO tai_xe_lien_tinh VALUE (12,"Class D");
INSERT INTO tai_xe_lien_tinh VALUE (13,"Class D");
INSERT INTO tai_xe_lien_tinh VALUE (14,"Class D");

INSERT INTO lo_xe_lien_tinh VALUE (15);
INSERT INTO lo_xe_lien_tinh VALUE (16);
INSERT INTO lo_xe_lien_tinh VALUE (17);

/*---------------------------------------------------------------------------*/
INSERT INTO kho VALUE (1,150,"Xuan Loc, Dong Nai",48,7);
INSERT INTO kho VALUE (2,300,"Q1, TP HCM",2,8);
INSERT INTO kho VALUE (3,300,"Q2, TP HCM",2,9);
INSERT INTO kho VALUE (4,450,"Nha Trang, Khanh Hoa",41,10);
INSERT INTO kho VALUE (5,200,"Chau Doc, An Giang",51,11);

INSERT INTO xe_noi_thanh VALUE (201,"60B5-66445",120);
INSERT INTO xe_noi_thanh VALUE (202,"51F-97022",150);
INSERT INTO xe_noi_thanh VALUE (203,"51F-97512",150);
INSERT INTO xe_noi_thanh VALUE (204,"79N-88888",160);
INSERT INTO xe_noi_thanh VALUE (205,"67G-12345",200);


-- INSERT INTO cuoc_xe_noi_thanh VALUE (1,0,3,5,1,201);
-- INSERT INTO cuoc_xe_noi_thanh VALUE (2,0,4,6,4,204);
-- INSERT INTO cuoc_xe_noi_thanh VALUE (3,0,4,6,5,205);

INSERT INTO cuoc_xe_noi_thanh VALUE (1,0,3,5,1,201);
INSERT INTO cuoc_xe_noi_thanh VALUE (2,0,3,5,1,201);
INSERT INTO cuoc_xe_noi_thanh VALUE (3,0,4,6,3,203);
INSERT INTO cuoc_xe_noi_thanh VALUE (4,0,3,5,1,201);
INSERT INTO cuoc_xe_noi_thanh VALUE (5,0,4,6,5,205);
INSERT INTO cuoc_xe_noi_thanh VALUE (6,0,4,6,2,202);
INSERT INTO cuoc_xe_noi_thanh VALUE (7,0,3,5,1,201);

INSERT INTO cuoc_xe_noi_thanh VALUE (8,0,3,5,1,201);
INSERT INTO cuoc_xe_noi_thanh VALUE (9,0,3,5,1,201);
INSERT INTO cuoc_xe_noi_thanh VALUE (10,0,3,5,3,203);
INSERT INTO cuoc_xe_noi_thanh VALUE (11,0,3,5,1,201);
INSERT INTO cuoc_xe_noi_thanh VALUE (12,0,4,6,4,204);
INSERT INTO cuoc_xe_noi_thanh VALUE (13,0,3,5,5,205);
INSERT INTO cuoc_xe_noi_thanh VALUE (14,0,3,5,5,205);

/*------------------------------------------------------------------*/

INSERT INTO bien_ban_xuat_nhap VALUE (1,'2015-3-14',"Nhap",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (2,'2015-3-17',"Xuat",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (3,'2016-2-14',"Nhap",8,2);
INSERT INTO bien_ban_xuat_nhap VALUE (4,'2016-2-15',"Xuat",8,2);
INSERT INTO bien_ban_xuat_nhap VALUE (5,'2016-3-17',"Nhap",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (6,'2016-3-19',"Xuat",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (7,'2016-7-1',"Nhap",9,3);
INSERT INTO bien_ban_xuat_nhap VALUE (8,'2016-7-3',"Xuat",9,3);
INSERT INTO bien_ban_xuat_nhap VALUE (9,'2016-11-15',"Nhap",10,4);
INSERT INTO bien_ban_xuat_nhap VALUE (10,'2016-11-25',"Xuat",10,4);
INSERT INTO bien_ban_xuat_nhap VALUE (11,'2017-1-13',"Nhap",9,3);
INSERT INTO bien_ban_xuat_nhap VALUE (12,'2017-1-18',"Xuat",9,3);
INSERT INTO bien_ban_xuat_nhap VALUE (13,'2017-3-20',"Nhap",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (14,'2017-3-21',"Xuat",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (15,'2017-3-25',"Nhap",11,5);
INSERT INTO bien_ban_xuat_nhap VALUE (16,'2017-3-26',"Xuat",11,5);
INSERT INTO bien_ban_xuat_nhap VALUE (17,'2017-3-29',"Nhap",8,2);
INSERT INTO bien_ban_xuat_nhap VALUE (18,'2017-4-1',"Xuat",8,2);
INSERT INTO bien_ban_xuat_nhap VALUE (19,'2017-4-1',"Nhap",9,3);
INSERT INTO bien_ban_xuat_nhap VALUE (20,'2017-4-3',"Xuat",9,3);
INSERT INTO bien_ban_xuat_nhap VALUE (21,'2017-5-11',"Nhap",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (22,'2017-5-13',"Xuat",7,1);

INSERT INTO bien_ban_xuat_nhap VALUE (23,'2018-1-17',"Nhap",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (24,'2018-1-23',"Xuat",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (25,'2018-1-24',"Nhap",8,2);
INSERT INTO bien_ban_xuat_nhap VALUE (26,'2018-1-25',"Xuat",8,2);
INSERT INTO bien_ban_xuat_nhap VALUE (27,'2018-2-1',"Nhap",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (28,'2018-2-5',"Xuat",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (29,'2018-3-12',"Nhap",9,3);
INSERT INTO bien_ban_xuat_nhap VALUE (30,'2018-3-14',"Xuat",9,3);
INSERT INTO bien_ban_xuat_nhap VALUE (31,'2018-6-1',"Nhap",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (32,'2018-6-8',"Xuat",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (33,'2018-8-15',"Nhap",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (34,'2018-8-16',"Xuat",7,1);
INSERT INTO bien_ban_xuat_nhap VALUE (35,'2018-9-1',"Nhap",10,4);
INSERT INTO bien_ban_xuat_nhap VALUE (36,'2018-9-1',"Xuat",10,4);
INSERT INTO bien_ban_xuat_nhap VALUE (37,'2018-9-2',"Nhap",11,5);
INSERT INTO bien_ban_xuat_nhap VALUE (38,'2018-9-4',"Xuat",11,5);
INSERT INTO bien_ban_xuat_nhap VALUE (39,'2018-9-13',"Nhap",11,5);
INSERT INTO bien_ban_xuat_nhap VALUE (40,'2018-9-17',"Xuat",11,5);

INSERT INTO xe_lien_tinh VALUE (1,"30F2-12345",200);
INSERT INTO xe_lien_tinh VALUE (2,"20F1-12456",150);
INSERT INTO xe_lien_tinh VALUE (3,"40Z1-12346",170);
INSERT INTO xe_lien_tinh VALUE (4,"50F3-12347",170);
INSERT INTO xe_lien_tinh VALUE (5,"30K2-12367",180);


INSERT chuyen_xe_lien_tinh VALUE (1,2,50,15,12,1,2);
INSERT chuyen_xe_lien_tinh VALUE (2,1,70,16,13,2,4);
INSERT chuyen_xe_lien_tinh VALUE (3,1,50,17,14,3,6);
INSERT chuyen_xe_lien_tinh VALUE (4,3,60,15,12,4,8);
INSERT chuyen_xe_lien_tinh VALUE (5,2,150,16,13,5,10);
INSERT chuyen_xe_lien_tinh VALUE (6,1,80,17,14,1,12);
INSERT chuyen_xe_lien_tinh VALUE (7,4,150,15,12,2,14);
INSERT chuyen_xe_lien_tinh VALUE (8,4,50,16,13,3,16);
INSERT chuyen_xe_lien_tinh VALUE (9,1,50,17,14,4,18);
INSERT chuyen_xe_lien_tinh VALUE (10,3,50,15,12,5,20);
INSERT chuyen_xe_lien_tinh VALUE (11,2,150,16,13,1,22);

INSERT chuyen_xe_lien_tinh VALUE (12,2,150,17,14,2,23);
INSERT chuyen_xe_lien_tinh VALUE (13,1,60,15,12,3,25);
INSERT chuyen_xe_lien_tinh VALUE (14,2,160,16,13,4,27);
INSERT chuyen_xe_lien_tinh VALUE (15,2,40,17,14,5,29);
INSERT chuyen_xe_lien_tinh VALUE (16,1,30,15,12,1,31);
INSERT chuyen_xe_lien_tinh VALUE (17,2,40,16,13,2,33);
INSERT chuyen_xe_lien_tinh VALUE (18,3,54,17,14,3,35);
INSERT chuyen_xe_lien_tinh VALUE (19,6,40,15,12,4,37);
INSERT chuyen_xe_lien_tinh VALUE (20,5,45,16,13,5,39);

INSERT Yeu_cau VALUE (1,1,"",3,1,100);
INSERT Yeu_cau VALUE (1,2,"",3,2,102);
INSERT Yeu_cau VALUE (3,3,"",4,3,103);
INSERT Yeu_cau VALUE (1,4,"",3,4,104);
INSERT Yeu_cau VALUE (6,3,"",4,5,106);
INSERT Yeu_cau VALUE (6,3,"",4,6,107);


-- Ma_KH INT NOT NULL,
--     Ma_so INT unique,
--     Trang_thai VARCHAR(45),
--     Ma_tx_noi_thanh INT NOT NULL, 
--     Ma_chuyen INT NOT NULL, 
--     Ma_bien_ban_gui INT NOT NULL