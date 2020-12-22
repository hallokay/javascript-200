
class TodoApp {
    //생성자 함수 매개변수로 todos를 정의 앞에서 만든TOdosManager에게 전달하는 값
    constructor() {
        this.todoManager = new TodoManagerWithStorage();
        //TodoManager타입의 객체를 내부 속성으로 가짐 할일 데이터에 대한 관리는 todoManager를 통해 처리
        this.todoContainerEl = document.querySelector('.todo-container');
        this.titleEl = document.querySelector('.title h2');
        this.plusBtnEl = document.querySelector('.add-todo button');
        this.renderTodos();
        //할일목록을 화면에 그리는 메소드
        this.bindEvents();
        //사용자 입력에 따른 이벤트에 반응하는 리스너 함수를 등록하는 메소드
    }

    renderTodos() {
        this.todoContainerEl.innerHTML = '';
        this.todoManager.getList().forEach((todo, i) => {
            const todoEl = this.creatTodoEl(todo, i);
            this.todoContainerEl.appendChild(todoEl);
        });
        this.renderTitle()
    }
    //todoManager를 이용하여 전체 할일 목록을 가져와 createTodoEl메소드를 이용하며 각 할일 객체를 Todo요소로 만들어
    //todoContainderEl요소의 자식으로 추가 
    //마지막으로 renderTitle메소드로 화면 사안에 남은 할 일을 표시한다


//createTodo메소드는 할일 데이터를 통해 화면에 그려질 div요소를 만든다 
//인자로 Todo타입의 객체와 아이디를 전달 받는다 매개 변수로 전달받은 아이디는 요소의 아이디가 된다
    creatTodoEl(todo, id) {
        const todoEl = document.createElement("div");
        todoEl.id = "todo-" + id;
        todoEl.className = "todo";
        todoEl.innerHTML = 
          `<input type="checkbox" ${todo.done ? "checked" : ""}> 
            <label>${todo.contents}</label>`;
        return todoEl;
    }


    //renderTitle매소드는 titleEl요소의 innerHTML 속성값 변경을 통해 타이틀 영역을 그린다.
    //메소드가 호출 될때의 날짜와 todoManager를 통해 남은 할일 개수를 구해 화면에 그린다
    //그래서 매번 새로운 할일이 추가되거나 할일이done상태가 변경될때 호출
    renderTitle(){
        const now = new Date();
        const month = now.getMonth();
        const date = now.getDate();
        if(this.titleEl) {
            this.titleEl.innerHTML = 
            `${month}월 ${date}일  <span class="left-count">(${this.todoManager.leftTodoCount})개</span>`
        }
    }

//bindEvents 메소드는 사용자 입력에 따른 이벤트에 반응하는 리스너 함수 등록
    bindEvents(){
        //plusBtnEl은 추가 버튼 요소이고 해당 요소를 클릭하면 입력한 텍스트 값을 구해와
        //todoManager를 통해 addTodo호출  할일을 추가한다
        //그리고 인풋 박스에 입력된 텍스트를 지워주고 추가된 할일을 보여주기 위해 renderTodos메소드 호출
        this.plusBtnEl.addEventListener('click', evt => {
            var textEl = document.querySelector('.add-todo input[type="text"]');
            this.todoManager.addTodo(textEl.value);
            textEl.value = '';
            this.renderTodos();
        });

        //이벤트 위임 처리를 하기위해 투두 컨테이너에 이벤트 리스너 추가
        //클릭발생시 대상 요소(target)의 태그 이름과 클래스 이름을 통해 체크 박스 요소 일경우에만 동작하도록  제한
     this.todoContainerEl.addEventListener('click', evt => {
         if(evt.target.nodeName === 'INPUT' 
         && evt.target.parentElement.className === 'todo'){
            const clickedEl = evt.target.parentElement,
                index = clickedEl.id.replace('todo-', '');

                //실제 할일 객체의 완료 여부를 토글하기 위해 앞에서 todoEl요소의 아이디로 넣어준 아이디를 통해 
                //todoManager에서 할일 객체를 가져옴
                //가져온 할일 객체의 toggle메소드를 호출 done여부 토글링 
                this.todoManager.getList()[index].toggle();
                this.renderTitle();
                //마지막으로 renderTitle로 남은 할일 업뎃
         }
     });
    }
}