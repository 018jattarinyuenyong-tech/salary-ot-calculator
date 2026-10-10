Salary & OT Calculator V6.1 — GitHub Pages

ไฟล์ในชุดนี้:
- index.html: หน้าแรก ปุ่มเปิดโปรแกรม ปุ่มติดตั้ง และ QR Code
- app.html: ตัวโปรแกรม V6.1
- manifest.webmanifest: ข้อมูล PWA
- sw.js: Service Worker กลยุทธ์ network-first สำหรับหน้า HTML
- qr-code.png และ icon-192.png / icon-512.png: รูปภาพที่หน้าเว็บและ PWA ใช้

วิธีอัปเดต:
1. สำรองไฟล์เดิมใน GitHub repository ก่อน
2. อัปโหลดไฟล์ทั้งหมดใน ZIP นี้ไปไว้ที่ root ของ repository (ระดับเดียวกับ index.html เดิม)
3. เลือก overwrite/แทนที่ไฟล์เดิม แล้ว Commit changes
4. เปิดเว็บไซต์ใหม่และรีโหลดหนึ่งครั้ง หากยังเห็นหน้าเดิม ให้ปิดแท็บ/แอปที่ติดตั้งแล้วเปิดใหม่

หมายเหตุ:
- ห้ามลบข้อมูลเว็บไซต์/Local Storage หากต้องการเก็บข้อมูลเงินเดือนที่บันทึกไว้ในเครื่อง
- Service Worker จะพยายามดึงหน้า HTML ล่าสุดจากเครือข่าย และใช้สำเนาแคชเมื่อออฟไลน์
- ผู้ใช้บางรายอาจต้องปิดแล้วเปิด PWA ใหม่เพื่อให้ Service Worker รุ่นใหม่เริ่มทำงาน
