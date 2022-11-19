# 라이푸 다이어리 - 너 변했어?

### 서비스 한줄 소개
나의 변의 상태를 체크하고, 친구에게 배변 활동을 응원받고, 변의 변화를 주간 리포트로 확인한다.

### BASE URL : 52.78.182.200:8000

### API
명세서: <a href="https://apriljam.notion.site/53378f4a8b4e44c39a028ae9c3181608?v=333629a940d64a66826fdd61163cf3fb">확인하기</a>

### 기술 스택

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
 <img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">

### package.json

```json
"name": "mcdelivery",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "scripts": {
        "dev": "nodemon",
        "build": "tsc && node dist",
        "db:pull": "npx prisma db pull",
        "db:push": "npx prisma db push",
        "generate": "npx prisma generate"
    },
    "dependencies": {
        "@prisma/client": "^4.6.0",
        "express": "^4.18.2",
        "moment": "^2.29.4",
        "prisma": "^4.6.0",
        "typescript-rest": "^3.0.4"
    },
    "devDependencies": {
        "@types/express": "^4.17.14",
        "@types/node": "^18.11.9",
        "nodemon": "^2.0.20",
        "prettier": "2.7.1"
    }
```

### schema
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  userId  Int       @id @default(autoincrement())
  name    String    @db.VarChar(10)
  Friend  Friend[]
  Record  Record[]
  Support Support[]
}

/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
model Friend {
  fir_user Int
  sec_user Int
  friendId Int  @id @unique @default(autoincrement())
  User     User @relation(fields: [sec_user], references: [userId], onDelete: NoAction, onUpdate: NoAction, map: "friend_user_userid_fk")
}

model Record {
  recordId    Int      @id @default(autoincrement())
  user        Int
  satisfy     Boolean
  color       Int?
  strength    Int?
  support_cnt Int      @default(0)
  date        DateTime @db.Timestamp(6)
  User        User     @relation(fields: [user], references: [userId], onDelete: NoAction, onUpdate: NoAction, map: "record_user_userid_fk")
}

/// The underlying table does not contain a valid unique identifier and can therefore currently not be handled by the Prisma Client.
model Support {
  supported Int
  supporter Int
  supportId Int  @id @unique @default(autoincrement())
  recordId  Int?
  User      User @relation(fields: [supported], references: [userId], onDelete: NoAction, onUpdate: NoAction, map: "support_user_userid_fk_2")
}

```

### Code convention

- prettier사용

```json
{
  "trailingComma": "all",
  "tabWidth": 4,
  "semi": true,
  "printWidth": 100,
  "singleQuote": true
}
```

### Commit message convention

- feat: 새로운 기능의 추가
- fix: 버그 수정
- css: css 관련 추가, 수정
- docs: 문서 수정
- style: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- refactor: 코드 리팩토링
- test: 테스트 코트, 리팩토링 테스트 코드 추가
- chore: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

### Git Branch convention

Git Flow 방식

- main : 최종적으로 배포되는 브랜치
- {router} : main 브랜치 아래에서 라우터 단위로 나누어 브랜치 생성 후 작업


### Directory Structure

```
./src
├── controller
│   ├── friendController.ts
│   ├── index.ts
│   └── recordController.ts
├── index.ts
├── interfaces
│   ├── RecordDTO.ts
│   ├── friendDTO.ts
│   └── friendListDTO.ts
├── router
│   ├── friendRouter.ts
│   ├── index.ts
│   └── recordRouter.ts
└── service
    ├── friendService.ts
    ├── index.ts
    └── recordService.ts

```

### 역할 분배

<table>
    <tr align="center">
        <td>
           💛 박서원 💛
        </td>
        <td>
           friend Router API 구현
        </td>
    </tr>
    <tr align="center">
        <td>
            💛 전희선 💛
        </td>
        <td>
            record Router API 구현
        </td>
    </tr>
</table>

### ERD
<img width="570" alt="스크린샷 2022-11-20 오전 6 18 42" src="https://user-images.githubusercontent.com/67372977/202872001-7117df7b-62ca-4bd0-80d3-faa11322282f.png">

### Server Architecture
![KakaoTalk_Photo_2022-11-20-06-25-03](https://user-images.githubusercontent.com/67372977/202872172-fa636121-a6d7-4e79-83fd-40dbe8407b93.png)

