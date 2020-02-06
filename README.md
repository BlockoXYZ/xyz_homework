# xyz_homework

1st week

## TodoList 만들어보기

### Tech Stack

HTML5, CSS3, Javascript(ES6+)

### 대략적인 UI 구성

```

    [input type="text"][button name="추가"]

    - input을 통해 입력한 문자열 [완료][수정][삭제]
    - input을 통해 입력한 문자열 [완료][수정][삭제]
    - input을 통해 입력한 문자열 [완료][수정][삭제]
    - input을 통해 입력한 문자열 [완료][수정][삭제]

    [수정 버튼 클릭시]
    - [input type="text" value="input을 통해 입력한 문자열"][수정완료]

```

### required feature

- 목록 아이템은 입력한 문자열 + 완료 버튼 + 수정 버튼 + 삭제버튼으로 한세트가 이루어져야함
- insert 구현 (input을 통해 문자열을 입력후 추가라는 버튼을 누르면 목록에 표시되어야 함)
- delete 구현 (삭제 버튼을 눌러 목록 아이템을 삭제할수 있어야 함)
- complete 구현 (완료 버튼을 누르면 문자열에 text-decoration: line-through 효과가 입혀져야 함)
- update 구현 (수정 버튼을 누르면 문자열이 있던 곳에 input이 나타나며, 그 input의 기본값으로 기존에 있던 문자열이 들어가 있어야함)
  (input의 문자열을 수정하고 수정버튼을 누르면 수정된 결과가 해당 라인에 있어야 함)

### optional feature

- 최대한 보기 좋게 UI를 CSS로 스타일링 해보기 (외부 UI 라이브러리 사용금지, 가급적 codepen 활용해서 참고해서 만들기 (복붙 금지))
- class를 이용하여 객체지향적으로 만들어보기 (이것까지 해내면 통신쪽만 보고 바로 실무에 가도 문제없을 듯 합니다.)

### Git 사용방법

- 협업이라 생각하고 본인의 브랜치를 따서 작업후 과제제출시 PR하도록 합니다.
- PR을 하면, 피드백을 드릴 예정입니다.
- <b style="color:red;font-weight:600;">절대로 master에서 직접작업하고 푸시하면 안됩니다.<b>
- 커밋 메시지도 최대한 의미론적이게 적도록 노력합니다.
