# local-storage

우선 HTML 파일에서 form, ul, clear, clearAll, item의 요소들을 가져와서 자바스크립트에서 사용하기 위한 변수들에 할당합니다.

localStorage 객체를 사용하여 브라우저에 데이터를 저장하고 불러옵니다. 먼저, itemsArray 변수를 초기화합니다. localStorage.getItem() 메서드로 "items"라는 이름의 key로 저장된 값을 가져와서 JSON.parse() 메서드로 파싱합니다. 이후, 조건문을 사용하여 localStorage에 "items"라는 key로 저장된 값이 없으면 빈 배열로 초기화합니다.

localStorage.setItem() 메서드로 itemsArray를 "items"라는 이름의 key로 localStorage에 저장합니다. 그리고 다시 localStorage.getItem() 메서드로 "items" key로 저장된 값을 가져와서 JSON.parse() 메서드로 파싱하여 data 변수에 할당합니다.

liMarker() 함수는 인자로 받은 텍스트를 리스트 아이템(li)에 추가하고 ul 요소의 자식 노드로 추가합니다.

form 요소에 "submit" 이벤트를 등록합니다. 이벤트 콜백 함수에서는 e.preventDefault() 메서드를 호출하여 기본 이벤트를 취소하고, itemsArray 배열에 input 요소의 값(input.value)을 추가하고 localStorage에 "item" key로 itemsArray를 JSON.stringify() 메서드로 문자열로 변환하여 저장합니다. 그리고 liMarker() 함수를 호출하여 새로운 리스트 아이템을 추가하고, input 요소의 값을 초기화합니다.

data 배열의 각 요소에 대해 liMarker() 함수를 호출하여 localStorage에 저장된 리스트 아이템들을 불러와서 화면에 출력합니다.

clear 버튼에 "click" 이벤트를 등록합니다. 이벤트 콜백 함수에서는 마지막 리스트 아이템을 가져와서 그 값(text)을 key로 갖는 localStorage 아이템을 삭제하고, 마지막 리스트 아이템을 제거합니다.

clearAll 버튼에 "click" 이벤트를 등록합니다. 이벤트 콜백 함수에서는 localStorage를 비우고, ul 요소의 자식 노드들을 제거합니다.

이 코드를 실행하면 Todo List 앱이 작동합니다. 사용자가 입력한 리스트 아이템들은 localStorage에 저장되고, 화면에 표시됩니다. 사용자가 clear 또는 clearAll 버튼을 클릭하면 해당하는 리스트 아이템들이 삭제되고 localStorage에서도 삭제됩니다.
