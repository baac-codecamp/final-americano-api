# Check Salak API

Check Salak API คือ REST API สำหรับเว็บไซต์ตรวจสลากออมทรัพย์ ธ.ก.ส.

## 📦 Built With

- [x] Node.js
- [x] Express.js

## 📋 Feature

## 🏷 Version

## 📘 API Document

1. **[getNews](#)** : `ดึงข้อมูลข่าวสารทั้งหมด โดยเรียงจากวันที่ล่าสุด`
   <details>
   <summary>View Details</summary>

   - **Method** : `GET`
   - **Url** : `http://{URL}:{PORT}/front/getNews`
   - **Request** :
     - header : `-`
     - body : `-`
     - param : `-`
     - queryString : `-`
   - **Response** :

     ```json
     {
       "response_status": "success",
       "response_message": "Get News Success!",
       "response_data": {
         "ListNews": [
           {
             "_id": "5f339227cb71c124ba2f417e",
             "title": "ฝาก-โอนเงินที่ตู้บุญเติม ลุ้นรับทองคำหนัก 2 สลึง",
             "imgUrl": "https://www.baac.or.th/file-upload/015299-1-OK%20AD_A-Mobile%20-01.jpg",
             "desc": "ฝาก-โอนเงินที่ตู้บุญเติม ลุ้นรับทองคำหนัก 2 สลึง",
             "createdAt": "2020-08-12T06:54:31.542Z",
             "updatedAt": "2020-08-12T06:54:31.542Z",
             "__v": 0,
             "id": "5f339227cb71c124ba2f417e"
           },
           {
             "_id": "5f339227cb71c124ba2f417f",
             "title": "งานมหกรรมการเงินโคราช ครั้งที่ 14 Money Expo Korat 2020",
             "imgUrl": "https://www.baac.or.th/file-upload/015295-1-leaflet%20on%20web-1.jpg",
             "desc": "งานมหกรรมการเงินโคราช ครั้งที่ 14 Money Expo Korat 2020",
             "createdAt": "2020-08-12T06:54:31.542Z",
             "updatedAt": "2020-08-12T06:54:31.542Z",
             "__v": 0,
             "id": "5f339227cb71c124ba2f417f"
           }
         ]
       }
     }
     ```

     </details>

2. **[getNewsById](#)** : `ดึงข้อมูลข่าวสาร จาก id ข้อมูล`
   <details>
   <summary>View Details</summary>

   - **Method** : `GET`
   - **Url** : `http://{URL}:{PORT}/front/getNews/:id`
   - **Request** :
     - header : `-`
     - body : `-`
     - param : `id`
     - queryString : `-`
   - **Response** :
     ```json
     {
       "response_status": "success",
       "response_message": "Get news by id success!",
       "response_data": {
         "currNews": {
           "_id": "5f339227cb71c124ba2f417e",
           "title": "ฝาก-โอนเงินที่ตู้บุญเติม ลุ้นรับทองคำหนัก 2 สลึง",
           "imgUrl": "https://www.baac.or.th/file-upload/015299-1-OK%20AD_A-Mobile%20-01.jpg",
           "desc": "ฝาก-โอนเงินที่ตู้บุญเติม ลุ้นรับทองคำหนัก 2 สลึง",
           "createdAt": "2020-08-12T06:54:31.542Z",
           "updatedAt": "2020-08-12T06:54:31.542Z",
           "__v": 0,
           "id": "5f339227cb71c124ba2f417e"
         }
       }
     }
     ```

    </details>

3. **[getListRewardAtDate](#)** : `ดึง Group ข้อมูลวันที่ของสลาก`
   <details>
   <summary>View Details</summary>

   - **Method** : `GET`
   - **Url** : `http://{URL}:{PORT}/front/getListRewardAtDate`
   - **Request** :
     - header : `-`
     - body : `-`
     - param : `-`
     - queryString : `-`
   - **Response** :

     ```json
     {
       "response_status": "success",
       "response_message": "Get list reardAtDate success!",
       "response_data": {
         "ListRewardAtDate": ["2020-06-16T00:00:00.000Z", "2020-07-16T00:00:00.000Z"]
       }
     }
     ```

     </details>

4. **[findSalakByCid](#)** : `ตรวจข้อมูลการถูกสลากรางวัลด้วย CID`
   <details>
   <summary>View Details</summary>

   - **Method** : `POST`
   - **Url** : `http://{URL}:{PORT}/front/findSalakByCid`
   - **Request** :
     - header : `Content-Type: application/json`
     - body :
       ```json
       {
         "cid": "1770200005105",
         "bod": "2020-09-03"
       }
       ```
     - param : `-`
     - queryString : `-`
   - **Response** :
     ```json
     {
       "response_status": "success",
       "response_message": "Find salak by cid success!",
       "response_data": {
         "_id": "5f2ac61462e0850a0269d0fc",
         "cid": "1770200005105",
         "cif": "32588666",
         "cusName": "ก็ หน่อทิม",
         "bod": "1991-09-03T00:00:00.000Z",
         "arrReward": [
           {
             "accNo": "400031732942",
             "accName": "นางสาว ก็ หน่อทิม",
             "accType": "1",
             "salakNoStart": "80000000",
             "salakNoEnd": "80000199",
             "rewardAtDate": "2020-06-16T00:00:00.000Z",
             "rewardAtSeq": "1",
             "rewardPrice": 1000000,
             "rewardNo": "80000023"
           },
           {
             "accNo": "400031732942",
             "accName": "นางสาว ก็ หน่อทิม",
             "accType": "1",
             "salakNoStart": "80000000",
             "salakNoEnd": "80000199",
             "rewardAtDate": "2020-06-16T00:00:00.000Z",
             "rewardAtSeq": "4",
             "rewardPrice": 400,
             "rewardNo": "80000198"
           },
           {
             "accNo": "400031732942",
             "accName": "นางสาว ก็ หน่อทิม",
             "accType": "1",
             "salakNoStart": "80000000",
             "salakNoEnd": "80000199",
             "rewardAtDate": "2020-06-16T00:00:00.000Z",
             "rewardAtSeq": "5",
             "rewardPrice": 50,
             "rewardNo": "80000199"
           },
           {
             "accNo": "400031732942",
             "accName": "นางสาว ก็ หน่อทิม",
             "accType": "1",
             "salakNoStart": "80000000",
             "salakNoEnd": "80000199",
             "rewardAtDate": "2020-07-16T00:00:00.000Z",
             "rewardAtSeq": "1",
             "rewardPrice": 1000000,
             "rewardNo": "80000023"
           },
           {
             "accNo": "400031732942",
             "accName": "นางสาว ก็ หน่อทิม",
             "accType": "1",
             "salakNoStart": "80000000",
             "salakNoEnd": "80000199",
             "rewardAtDate": "2020-07-16T00:00:00.000Z",
             "rewardAtSeq": "4",
             "rewardPrice": 400,
             "rewardNo": "80000198"
           },
           {
             "accNo": "400031732942",
             "accName": "นางสาว ก็ หน่อทิม",
             "accType": "1",
             "salakNoStart": "80000000",
             "salakNoEnd": "80000199",
             "rewardAtDate": "2020-07-16T00:00:00.000Z",
             "rewardAtSeq": "5",
             "rewardPrice": 50,
             "rewardNo": "80000199"
           }
         ]
       }
     }
     ```
     ```json
     {
       "response_status": "fail",
       "response_message": "Is not cid!",
       "response_data": {}
     }
     ```
     ```json
     {
       "response_status": "fail",
       "response_message": "Is not bod!",
       "response_data": {}
     }
     ```

    </details>

5. **[findSalakBySelf](#)** : `ตรวจข้อมูลการถูกสลากรางวัลด้วยตนเอง จากงวดประจำวันที่`
   <details>
   <summary>View Details</summary>

   - **Method** : `POST`
   - **Url** : `http://{URL}:{PORT}/front/findSalakBySelf`
   - **Request** :
     - header : `Content-Type: application/json`
     - body :
       ```json
       {
         "rewardAtDate": "2020-06-16"
       }
       ```
     - param : `-`
     - queryString : `-`
   - **Response** :
     ```json
     {
       "response_status": "success",
       "response_message": "Find salak by self success!",
       "response_data": {
         "rewardAtDate": "2020-06-16T00:00:00.000Z",
         "seq1": {
           "no": ["80000023"],
           "price": 1000000
         },
         "seq2": {
           "no": ["222221", "222222"],
           "price": 20000
         },
         "seq3": {
           "no": ["333331", "333332", "333333"],
           "price": 3000
         },
         "seq4": {
           "no": ["444443", "444444", "444442", "80000198"],
           "price": 400
         },
         "seq5": {
           "no": ["80000199", "555551", "555554", "555553", "555555"],
           "price": 50
         }
       }
     }
     ```
     ```json
     {
       "response_status": "fail",
       "response_message": "Is not rewardDate!",
       "response_data": {}
     }
     ```

    </details>

6. **[signup](#)** : `ใช้สมัครสมาชิกเพื่อเช้าใช้งานระบบจัดการสลาก`
   <details>
   <summary>View Details</summary>

   - **Method** : `POST`
   - **Url** : `http://{URL}:{PORT}/admin/signup`
   - **Request** :
     - header : `Content-Type: application/json`
     - body :
       ```json
       {
         "username": "Test.c",
         "password": "baac",
         "fullname": "Test Codecamp"
       }
       ```
     - param : `-`
     - queryString : `-`
   - **Response** :
     ```json
     {
       "response_status": "success",
       "response_message": "signup success!",
       "response_data": {
         "username": "Test.c"
       }
     }
     ```
     ```json
     {
       "response_status": "fail",
       "response_message": "Username already exits",
       "response_data": {}
     }
     ```

    </details>

7. **[login](#)** : `ใช้เข้าสู่ระบบจัดการสลาก`
   <details>
   <summary>View Details</summary>

   - **Method** : `POST`
   - **Url** : `http://{URL}:{PORT}/admin/login`
   - **Request** :
     - header : `Content-Type: application/json`
     - body :
       ```json
       {
         "username": "Test.c",
         "password": "baac"
       }
       ```
     - param : `-`
     - queryString : `-`
   - **Response** :
     ```json
     {
       "response_status": "success",
       "response_message": "Login is success!",
       "response_data": {
         "username": "Test.c",
         "fullname": "Test Codecamp",
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzNkMmY1MWY4M2M0MmMzMDJiYzE2ZiIsImZ1bGxuYW1lIjoiVGVzdCBDb2RlY2FtcCIsImlhdCI6MTU5NzIzMjE2NCwiZXhwIjoxNTk3MzE4NTY0fQ.7w5pFg7CejFWIISf5mgp6EQ_FUvuyl-jhjjuFnTvRVs",
         "expires_in": 1597318564
       }
     }
     ```
     ```json
     {
       "response_status": "fail",
       "response_message": "Username or password is wrong!",
       "response_data": {}
     }
     ```

    </details>

8. **[insertDataCustomer](#)** : `ใช้นำเข้าข้อมูล Customer`
    <details>
   <summary>View Details</summary>

   - **Method** : `POST`
   - **Url** : `http://{URL}:{PORT}/admin/insertDataCustomer`
   - **Request** :
     - header : `Content-Type: application/json`
     - body :
       ```json
       {
         "listDataCustomer": [
           {
             "Seq": 1,
             "CID": "1770200005105",
             "CIFNo": "32588666",
             "CIFName": "ก็ หน่อทิม",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400031732942",
             "AccName": "นางสาว ก็ หน่อทิม   ",
             "SalakStart": "80000000",
             "SalakEnd": "80000199"
           },
           {
             "Seq": 2,
             "CID": "1469900113891",
             "CIFNo": "34097420",
             "CIFName": "กช ภูหมั่นเพียร",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400035720137",
             "AccName": "นางสาว กช ภูหมั่นเพียร   ",
             "SalakStart": "80000200",
             "SalakEnd": "80000202"
           },
           {
             "Seq": 3,
             "CID": "1409900484457",
             "CIFNo": "26115005",
             "CIFName": "กชกนก แสงสิทธิ์",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400024452700",
             "AccName": "น.ส. กชกนก แสงสิทธิ์   ",
             "SalakStart": "80000203",
             "SalakEnd": "80000222"
           },
           {
             "Seq": 4,
             "CID": "1209600156073",
             "CIFNo": "34036900",
             "CIFName": "กชกมล กมลสุวรรณ",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400034994371",
             "AccName": "นางสาว กชกมล กมลสุวรรณ   ",
             "SalakStart": "80000223",
             "SalakEnd": "80000622"
           },
           {
             "Seq": 5,
             "CID": "1529900131316",
             "CIFNo": "1940297",
             "CIFName": "กชกมล ภูชิตจตุรภัทร์",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400035451712",
             "AccName": "นางสาว กชกมล ภูชิตจตุรภัทร์   ",
             "SalakStart": "80000623",
             "SalakEnd": "80000642"
           },
           {
             "Seq": 6,
             "CID": "1540100051557",
             "CIFNo": "16888369",
             "CIFName": "กชกร กอบคำ",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400033847999",
             "AccName": "นางสาว กชกร กอบคำ   ",
             "SalakStart": "80000643",
             "SalakEnd": "80000643"
           },
           {
             "Seq": 7,
             "CID": "1100800964478",
             "CIFNo": "33275561",
             "CIFName": "กชกร จารุเรืองสุข",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400033779435",
             "AccName": "นางสาว กชกร จารุเรืองสุข   ",
             "SalakStart": "80000644",
             "SalakEnd": "80000644"
           },
           {
             "Seq": 8,
             "CID": "1119900766889",
             "CIFNo": "34036917",
             "CIFName": "กชกร ชัยเชิดชู",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400034978701",
             "AccName": "นางสาว กชกร ชัยเชิดชู   ",
             "SalakStart": "80000645",
             "SalakEnd": "80000744"
           },
           {
             "Seq": 9,
             "CID": "1909800636404",
             "CIFNo": "31976239",
             "CIFName": "กชกร ดุลยพัชร์",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400032795266",
             "AccName": "นางสาว กชกร ดุลยพัชร์   ",
             "SalakStart": "80000745",
             "SalakEnd": "80000794"
           },
           {
             "Seq": 10,
             "CID": "1520800009383",
             "CIFNo": "8285312",
             "CIFName": "กชกร นันทะวงศ์",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400035786115",
             "AccName": "นางสาว กชกร นันทะวงศ์   ",
             "SalakStart": "80000795",
             "SalakEnd": "80000894"
           },
           {
             "Seq": 11,
             "CID": "1770200005105",
             "CIFNo": "32588666",
             "CIFName": "ก็ หน่อทิม",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400031732942",
             "AccName": "นางสาว ก็ หน่อทิม   ",
             "SalakStart": "80002000",
             "SalakEnd": "80002010"
           },
           {
             "Seq": 12,
             "CID": "1770200005105",
             "CIFNo": "32588666",
             "CIFName": "ก็ หน่อทิม",
             "BOD": "1991-09-03",
             "AccType": "1",
             "AccNo": "400031732942",
             "AccName": "นางสาว ก็ หน่อทิม   ",
             "SalakStart": "80003000",
             "SalakEnd": "80003020"
           },
           {
             "Seq": 13,
             "CID": "1770200005105",
             "CIFNo": "32588666",
             "CIFName": "ก็ หน่อทิม",
             "BOD": "1991-09-03",
             "AccType": "3",
             "AccNo": "500031732945",
             "AccName": "นางสาว ก็ หน่อทิม   ",
             "SalakStart": "90004000",
             "SalakEnd": "90004020"
           },
           {
             "Seq": 14,
             "CID": "1770200005105",
             "CIFNo": "32588666",
             "CIFName": "ก็ หน่อทิม",
             "BOD": "1991-09-03",
             "AccType": "3",
             "AccNo": "500031732945",
             "AccName": "นางสาว ก็ หน่อทิม   ",
             "SalakStart": "90005000",
             "SalakEnd": "90005020"
           }
         ]
       }
       ```
     - param : `-`
     - queryString : `-`
   - **Response** :
     ```json
     {
       "response_status": "success",
       "response_message": "Add New Customer Success!",
       "response_data": {}
     }
     ```

    </details>

9. **[insertDataReward](#)** : `ใช้นำเข้าข้อมูล Reward`
   <details>
   <summary>View Details</summary>

   - **Method** : `POST`
   - **Url** : `http://{URL}:{PORT}/admin/insertDataReward`
   - **Request** :
   - header : `Content-Type: application/json`
   - body :
     ```json
     {
       "listDataReward": [
         {
           "RewardAtDate": "2020-06-16",
           "RewardAtSeq": "1",
           "RewardPrice": "1000000",
           "RewardNo": "9182368"
         },
         {
           "RewardAtDate": "2020-06-16",
           "RewardAtSeq": "2",
           "RewardPrice": "20000",
           "RewardNo": 4948894
         },
         {
           "RewardAtDate": "2020-06-16",
           "RewardAtSeq": "2",
           "RewardPrice": "20000",
           "RewardNo": 5040803
         },
         {
           "RewardAtDate": "2020-06-16",
           "RewardAtSeq": "2",
           "RewardPrice": "3000",
           "RewardNo": 6358780
         },
         {
           "RewardAtDate": "2020-06-16",
           "RewardAtSeq": "3",
           "RewardPrice": "3000",
           "RewardNo": "0072809"
         },
         {
           "RewardAtDate": "2020-06-16",
           "RewardAtSeq": "3",
           "RewardPrice": "3000",
           "RewardNo": "0466749"
         },
         {
           "RewardAtDate": "2020-06-16",
           "RewardAtSeq": "3",
           "RewardPrice": "400",
           "RewardNo": 3159724
         },
         {
           "RewardAtDate": "2020-06-16",
           "RewardAtSeq": "3",
           "RewardPrice": "400",
           "RewardNo": "3721866"
         },
         {
           "RewardAtDate": "2020-06-16",
           "RewardAtSeq": "3",
           "RewardPrice": "400",
           "RewardNo": 4235750
         }
       ]
     }
     ```
   - param : `-`
   - queryString : `-`
   - **Response** :

   ```json
   {
     "response_status": "success",
     "response_message": "Add New Reward Success!",
     "response_data": {}
   }
   ```

   </details>

10. **[addNews](#)** : `ใช้นำเข้าข้อมูล News`
     <details>
    <summary>View Details</summary>

    - **Method** : `POST`
    - **Url** : `http://{URL}:{PORT}/admin/addNews`
    - **Request** :
      - header : `Content-Type: application/json`
      - body :
        ```json
        {
          "title": "NewTitle1",
          "imgUrl": "urlImgg....",
          "desc": "detail......"
        }
        ```
      - param : `-`
      - queryString : `-`
    - **Response** :
      ```json
      {
        "response_status": "success",
        "response_message": "Add News Success",
        "response_data": {}
      }
      ```

     </details>

## ⚙ How to use

1. Clone project

   ```bash
   git clone https://github.com/baac-codecamp/final-americano-api.git
   ```

2. Go to project folder

   ```bash
   cd final-americano-api
   ```

3. Install Dependency Package

   ```bash
   npm install
   ```

4. Run project by command

   ```bash
   npm start
   ```

5. Runs the app in the development mode.
   Open [http://localhost:9442](http://localhost:9442) to view it in the browser.
