### Folder Structure ที่จะใช้ในการจัดวาง

-   app: สำหรับ Routing
-   componenets: สำหรับ Component ที่ครอบ Ant Design Component อีกทีหนึ่ง หรือ Component ที่สร้างขึ้นเอง
-   containers: สำหรับ Container ของ Componenet เพื่อทำการแบ่ง Form Step
-   pages: สำหรับ หน้าแสดงผล เอา Container กับ Component มาประกอบกัน
-   stores: สำหรับ State Management
-   services: สำหรับ เชื่อมต่อ API
-   types: สำหรับ Type ของข้อมูลจาก API
-   utils: Helper ต่างๆ
-   firebase: สำหรับ Authentication

### Library ที่คาดว่าจะใช้สำหรับ Project นี้

-   react-router-dom: ใช้จัดการ Route ของหน้าเว็บ
-   zustand: ใช้จัดการ Local State
-   react-query: ใช้ในการเชื่อมต่อ API และจัดการ Server State
-   antd: ใช้เป็น Component สำหรับทำแบบฟอร์ม
-   react-jss: ใช้จัดการ CSS

### จะต้องจัดการ State ของข้อมูลอย่างไร เพื่อรองรับกับโจทย์นี้ได้

#### Current Step

-   ระบุ Step ปัจจุบัน

#### Form State

แบ่งเป็น 5 State เก็บข้อมูลแต่ละ Step ดังนี้

-   ข้อมูลส่วนตัว
-   ข้อมูลเกี่ยวกับการวิ่ง
-   ผู้ติดต่อฉุกเฉิน
-   ข้อมูลทางการแพทย์
-   เสื้อของที่ระลึก

#### กรณี User กดเข้ามายัง Form ที่ลงทะเบียนแล้ว หรือ บันทึกแบบร่าง ไว้

-   ข้อมูลจาก API จะถูกจัดเก็บอยู่ใน Server State

#### กรณี User กด Next เพื่อไปขั้นตอนต่อไป

-   Set State ในส่วน Current Step
-   Set Current Step เป็นลำดับถัดไป

#### กรณี User กด Submit

-   หลังจาก Submit สำเร็จให้ทำการเคลียร์ State ทั้งหมดให้เป็นค่าเริ่มต้น

### จะใช้วิธีใดในการ Validate Form สำหรับการ Save Draft และสำหรับการ Submit

#### กรณี Save Draft

-   ไม่ต้อง Validate ใช้ค่าจาก State ได้เลย

#### กรณี Submit

-   ทำ Hidden Input Form เพื่อ Validate ข้อมูลที่ยังไม่ได้กรอก
