# วิธีรัน VIJITR Website

## 🚀 วิธีที่ 1: รัน Local Server (แนะนำ - ไม่มี Warning)

### สำหรับ Windows:

1. **Double-click** ที่ไฟล์ `start-server.bat`
2. รอจน Command Prompt เปิดและแสดงข้อความ "Serving HTTP on..."
3. เปิด Browser แล้วไปที่: **http://localhost:8000**
4. เปิดไฟล์ `index.html` หรือ `product.html`

### หรือรันด้วยตนเอง:

```bash
# เปิด Command Prompt ที่โฟลเดอร์โปรเจค แล้วรัน:

# Python 3
python -m http.server 8000

# หรือ Python 2
python -m SimpleHTTPServer 8000

# หรือใช้ py launcher
py -m http.server 8000
```

### หยุด Server:
- กด `Ctrl + C` ใน Command Prompt

---

## 📂 วิธีที่ 2: เปิดไฟล์โดยตรง (มี Warning แต่ใช้งานได้)

1. Double-click ที่ `index.html` หรือ `product.html`
2. เว็บจะทำงานปกติ แต่จะมี warning ใน Console ว่า:
   ```
   Could not load JSON file, using fallback data
   ```
3. **ไม่ต้องกังวล!** เว็บไซต์ยังใช้งานได้ปกติ เพราะมี fallback data

---

## 🌐 การทำงานของระบบ

### เมื่อรันด้วย Local Server:
✅ โหลดข้อมูลจาก `json/output.json` สำเร็จ
✅ ไม่มี CORS error
✅ ไม่มี warning ใน Console
✅ สามารถอัปเดต JSON file ได้ทันที

### เมื่อเปิดไฟล์โดยตรง:
⚠️ โหลดจาก JSON ไม่ได้ (CORS policy)
✅ ใช้ fallback data แทน (ฝังอยู่ใน JavaScript)
✅ เว็บไซต์ทำงานได้ปกติ
⚠️ มี warning ใน Console (ไม่กระทบการใช้งาน)

---

## 📝 ไฟล์สำคัญ

- `index.html` - หน้าหลัก
- `product.html` - หน้าแสดงสินค้า
- `json/output.json` - ข้อมูลสินค้า (ใช้เมื่อรัน server)
- `product-script.js` - มี fallback data (ใช้เมื่อเปิดไฟล์โดยตรง)
- `start-server.bat` - Script สำหรับรัน server ง่ายๆ

---

## ❓ FAQ

**Q: ทำไมต้องรัน server?**
A: เพื่อให้โหลดไฟล์ JSON ได้โดยไม่มี CORS error

**Q: ไม่รัน server ได้ไหม?**
A: ได้! แต่จะมี warning (ไม่กระทบการใช้งาน)

**Q: จะอัปเดตข้อมูลสินค้ายังไง?**
A: แก้ไขไฟล์ `json/output.json` (ถ้ารัน server) หรือ แก้ `fallbackProducts` ใน `product-script.js` (ถ้าเปิดไฟล์โดยตรง)

**Q: Port 8000 ถูกใช้อยู่แล้ว?**
A: แก้เลขพอร์ตใน `start-server.bat` เป็น 8001, 8080, หรือเลขอื่นๆ

---

## 🎉 เริ่มใช้งาน

เลือกวิธีที่ต้องการ:
- **วิธีที่ 1** - ไม่มี warning, โหลดจาก JSON
- **วิธีที่ 2** - เปิดง่าย, มี warning เล็กน้อย

ทั้งสองวิธีให้ผลลัพธ์เหมือนกัน! 🚀
