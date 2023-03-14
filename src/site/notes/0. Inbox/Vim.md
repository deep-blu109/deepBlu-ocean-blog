---
{"dg-publish":true,"permalink":"/0-inbox/vim/"}
---

# 작성중

##### 태그 :  #개발 #리눅스 #편의성 
----
vim을 제대로 활용하면 매우 빠른 속도로 개발이 가능하다고 한다. 그래서 vim 단축키들을 공부하기 전에 vim에 대해 한번 알아보기 위해 이번 포스트를 쓰게 되었다.

<br/>

## Vim의 역사
<p align = "center"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bill_Joy_at_World_Economic_Forum_%28Davos%29%2C_2003-01_%28cropped%29.jpg" style="max-width: 70%; height: auto;"></p>

1976년 Bill Joy라는 개발자가 <mark style="background: #ADCCFFA6;">"Vi"</mark>라는 텍스트 에디터를 개발했다. 

Vi 이전에는 텍스트 편집 시 행간 커서 이동이 불가능했고, 편집을 위해 매번 편집을 위한 명령을 적용시켜야했다. 하지만 Vi는 이런 과정 없이 텍스트를 직접 조작하는 것이 가능했고  Unix 운영체제에서 이전보다 편리하게 프로그래밍을 할 수 있어 매우 유용하게 사용되었다. 

<br/>
<p align = "center"><img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Bram_Moolenaar_in_2007.jpg" style="max-width: 70%; height: auto;"></p>

1991년 Bram Moolenaar라는 개발자가  <mark style="background: #ADCCFFA6;">"Vi IMproved"</mark>라는 좀 더 발전된 Vi 기반 텍스트 에디터를 개발하는 데 이게, 이번 포스트에서 다룰 <mark style="background: #ADCCFFA6;">"Vim"</mark>이다.

Vim은 마우스 없이 키보드만으로 빠르게 타이핑이 가능하게 하는 등 사용자 편의적인 측면에서 발전을 이루었고, 이외에도 확장된 정규표현식 문법, 유니코드를 비롯한 다국어 지원, 문법 검사 등의 기능도 지원하게 되었다. 

<br/>

### Vim 시작하기

- <span style="color:yellow">vim 파일명</span> 형태로  vim 실행  *(git commit --amend를 통해 커밋 메시지도 수정 가능)*
- 기본적으로 명령모드, 입력모드 두가지 모드가 있음

<br/>

### 명령모드(기본)  

- esc : 명령모드 접근
- 기본 명령어

 | 명령어 | 기능 |
 |: ------: |:---|
 | :q | 종료 |
 | :q! | 강제종료 |
 | :w | 저장 |
 | :w! | 강제저장 |
 | :wq | 저장하고 종료|
 | :wq! | 강제 저장하고 종료 |

<br/>

### 입력모드

- i : 입력모드 접근 (*<입력모드> 아래 INSERT가 추가됨*)

- 입력모드 단축키

 | 명령어 | 기능 |
 |: ------: |: ------------------|
 | esc | 명령모드로 돌아감 |
 | i | insert (커서 앞) |
 | a | append (커서 뒤) |
 | I | 문장 시작 |
 | A | 문장 끝 |

<br/>

### 네비게이션

- 명령모드에서 방향키 대신 <span style="color:yellow">H, J, K, L</span>로 이동
- 이외에 0, $, w, b를 통한 이동도 가능
- 네비게이션 단축키

 | 명령어 | 기능 |
 |: ------ |: ------------------|
 | H | 왼쪽 |
 | J | 아래 |
 | K | 위 |
 | L | 오른쪽 |
 | 0 | 문장 앞으로 이동 |
 | $ | 문장 뒤로 이동 |
 | w | 한 단어씩 이동|
 | b | 뒤로 한단어씩 이동 |
 | 추가 | 숫자 + (W / B)의 형태로 몇 단어씩 이동도 가능 |
 | H(여기부터 대문자)| 화면 위|
 | M | 화면 중간|
 | L | 화면 끝|
 | gg | 파일 앞|
 | G | 파일 끝|
 | 추가 |  숫자 + G의 형태로 몇 번째줄로 이동도 가능|
 | ctrl u | 위로 스크롤링|
 | ctrl d | 아래로 스크롤링|
 | { | 문단 시작|
 | } | 문단 끝|


### 편집
- 명령어를 통한 빠른 편집 및 수정 가능
- 명령어

| 명령어 | 기능 |
 |: ------ |: ------------------|
 | x| 커서 아래 글자 삭제 |
 | dd | 문장 삭제 |
 | yy | 문장 복사 |
 | p | 붙여넣기 |
 | \*p | 클립보드 붙여넣기(vscode의 경우 설정에서 이를 허용해야 함) |


<br/>

### Vim이 강력한 이유

- command(명령) + object(무엇에게)의 조합이 매우 좋음
	- ex1) d + 3w  -> delete 3 word
	- ex2) d + it -> delete inner 
	
- 가장 많이 사용하는 명령어
	- d : delete(cut)
	- y : yank(copy)
	- c :  change

- object
	-  숫자 : 숫자 만큼
	-  a : 하나
	-  i : inner  내부에 있는

- 이 모든 것은 반복이 가능하다!
	- . : 이전 명령어 반복
	- u : undo
	- ctrl r : redo



### 출처(참고문헌)
- 위키백과 https://ko.wikipedia.org/wiki/Vim#cite_note-Ryan-4
- Jinsoo Heo, Vim은 어디서 왔나, devkoriel's Tech Blog, 2018.08.10
- 드림코딩, 2022.08.23, https://www.youtube.com/watch?v=cY0JxzENBJg&t=1s

### 연결문서
- 



