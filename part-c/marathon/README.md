### Database Schema มีหน้าตาอย่างไร

#### registers

```javascript
_id: ObjectID,
userId: String,
stepOne: {
    title: String,
    fname: {
        th: String,
        en: String
    },
    lname: {
        th: String,
        en: String
    },
    dob: Date,
    email: String, // Unique
    idcard: String, // Unique
    address: String,
    phone: String, // Unique
    photo: String,
    bib: String, // Unique
},
stepTwo: {
    raced: Boolean,
    expectedTime: { hh: Integer, mm: Integer},
},
stepThree: {
    emergencyOne: {
        fullname: String,
        relation: String,
        phone: String
    },
    emergencyTwo: {
        fullname: String,
        relation: String,
        phone: String
    },
},
stepFour: {
    bloodType: String,
    drugAllergy: {
        yes: Boolean,
        detail: String
    },
    congenitalDisease: {
        yes: Boolean,
        detail: String
    },
    surgicalHistory: {
        yes: Boolean,
        detail: String
    },
    pregnant: Boolean,
    regularDrug: {
        yes: Boolean,
        detail: String
    },
    injured: Boolean,
    exercise: Boolean,
    heartRisk: Boolean,
},
stepFive: {
    shirtSize: String,
},
isDraft: Boolean // Default: true
createdAt: Date,
updatedAt: Date
```

#### master_data

```javascript
_id: ObjectID,
type: enum('blood', 'shirt', 'title'),
data: String[]
```

### จะใช้วิธีใดในการทำ Authentication

    Firebase Authentication

### ต้องมี REST API Endpoint และ Method อะไรบ้าง

-   `GET /master/blood-types` Get all blood types.
-   `GET /master/shirt-sizes` Get all shirt sizes.
-   `GET /master/titles` Get all title names.
-   `GET /drafts` Get all drafts.
-   `GET /drafts/:id` Get draft by id.
-   `POST /drafts` Add draft.
    -   Body: { ข้อมูลส่วนตัว, ข้อมูลเกี่ยวกับการวิ่ง, ผู้ติดต่อฉุกเฉิน, ข้อมูลทางการแพทย์, เสื้อของที่ระลึก }
-   `PUT /drafts/:id` Update draft by id.
    -   Body: { ข้อมูลส่วนตัว, ข้อมูลเกี่ยวกับการวิ่ง, ผู้ติดต่อฉุกเฉิน, ข้อมูลทางการแพทย์, เสื้อของที่ระลึก }
-   `GET /forms` Get registed forms.
-   `GET /forms/:id` Get registed form by id.
-   `POST /forms` Submit form.
    -   Body: { ข้อมูลส่วนตัว, ข้อมูลเกี่ยวกับการวิ่ง, ผู้ติดต่อฉุกเฉิน, ข้อมูลทางการแพทย์, เสื้อของที่ระลึก }

### API สำหรับการ Submit ส่งใบสมัคร ควรทำอะไรบ้างในขั้นตอนดังกล่าว

-   ตรวจสอบ authenticated
-   ตรวจสอบ fields ทั้งหมดที่ client ส่งมาว่าส่งมาครบ format ถูกต้องหรือไม่
-   ตรวจสอบ unique fields ที่จำเป็นเพื่อไม่ให้ข้อมูลซ้ำ เช่น email, idcard, phone, bib
