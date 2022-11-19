<!-- # 쫄?! -->

<!-- ### 서비스 한줄 소개

친구야 내일 하루 이거 함 해봐 ㅋ **쫄?!**

친구에게 색다른 **내일**을 선사해보세요 -->

<!-- ### API
명세서: <a href="https://iridescent-telephone-0f2.notion.site/API-9b890d37cb74461f90b8820ed3a30b7d
">확인하기</a> -->

### 기술 스택

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
 <img src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">

### 사용 라이브러리

```json
"dependencies": {
  "@prisma/client": "^4.6.0",
  "express": "^4.18.2",
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
│   ├── index.ts
│   ├── recordController.ts
│   ├── reportController.ts
│   └── supportController.ts
├── index.ts
├── interfaces
├── router
│   ├── index.ts
│   ├── recordRouter.ts
│   ├── reportRouter.ts
│   └── supportRouter.ts
└── service
    ├── index.ts
    ├── recordService.ts
    ├── reportService.ts
    └── supportService.ts


```

### 역할 분배

<table>
    <tr align="center">
        <td>
           💛 박서원 💛
        </td>
        <td>
           support, report API 구현
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


<!-- ### Server Architecture -->