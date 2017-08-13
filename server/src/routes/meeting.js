import express from 'express';

const router = express.Router();


router.get('/create', (req, res) => {
    return res.json({
        success: true
    });
});

router.get('/end/1@1.com', (req, res) => {
    return res.json([
      { "id": 1,
      "title": "end1",
      "comment": "weekly",
      "content": "test123",
      "date": "1970-01-01",
      "startTime": "10:00:00",
      "endTime": null,
      "userList": [
        { "id": 1,
          "email": "heehouse1@gmail.com",
          "userName": "Saeyoung",
          "password": "test123",
          "role": "USER",
          "name": "Saeyoung"
        },
        { "id": 2,
          "email": "heehouse2@gmail.com",
          "userName": "Faeyoung",
          "password": "test123",
          "role": "USER",
          "name": "Faeyoung"
        }
      ],
      "status": "END",
      "partName": "Architecture" },
      { "id": 2,
      "title": "end2",
      "comment": "weekly",
      "content": "test123",
      "date": "1970-01-01",
      "startTime": "10:00:00",
      "endTime": null,
      "userList": [
        { "id": 1,
          "email": "heehouse1@gmail.com",
          "userName": "Saeyoung",
          "password": "test123",
          "role": "USER",
          "name": "Saeyoung"
        },
        { "id": 2,
          "email": "heehouse2@gmail.com",
          "userName": "Faeyoung",
          "password": "test123",
          "role": "USER",
          "name": "Faeyoung"
        }
      ],
      "status": "END",
      "partName": "Architecture" }
    ]);
});

router.get('/wait/1@1.com', (req, res) => {
    return res.json([
      { "id": 1,
      "title": "wait1",
      "comment": "weekly",
      "content": "test123",
      "date": "1970-01-01",
      "startTime": "10:00:00",
      "endTime": null,
      "userList": [
        { "id": 1,
          "email": "heehouse1@gmail.com",
          "userName": "Saeyoung",
          "password": "test123",
          "role": "USER",
          "name": "Saeyoung"
        },
        { "id": 2,
          "email": "heehouse2@gmail.com",
          "userName": "Faeyoung",
          "password": "test123",
          "role": "USER",
          "name": "Faeyoung"
        }
      ],
      "status": "WAIT",
      "partName": "Architecture" },
      { "id": 2,
      "title": "wait2",
      "comment": "weekly",
      "content": "test123",
      "date": "1970-01-01",
      "startTime": "10:00:00",
      "endTime": null,
      "userList": [
        { "id": 1,
          "email": "heehouse1@gmail.com",
          "userName": "Saeyoung",
          "password": "test123",
          "role": "USER",
          "name": "Saeyoung"
        },
        { "id": 2,
          "email": "heehouse2@gmail.com",
          "userName": "Faeyoung",
          "password": "test123",
          "role": "USER",
          "name": "Faeyoung"
        }
      ],
      "status": "WAIT",
      "partName": "Architecture" }
    ]);
});

export default router;
