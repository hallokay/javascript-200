
class Todo {
    constructor(contents, done) {
        this.contents = contents;
        this.done = done;
    }
// 생성자 함수 정의 매개 변수로는 할일 내용과 완료 여부를 정의  --- 즉 todo클래스는 contents, done 이 두가지 속성을 지님

    toggle() {
        this.done = !this.done;
    }
    //완료된 상태에서 토글을 호출하면 완료되지 않은 상태가 됨
}

//할일들을 관리하는 함수
class TodoManager {
    constructor(todos = []) {
        this._todos = [];
        todos.forEach(todo => {
            this.addTodo(todo.contents, todo.done);
        });
        //생성자 함수 정의 --매개변수로 초기 할일들을 배열로 전달받고 기본 값으로 빈배열 할당
        //투두 매니저 함수에는 내부에서만 사용할 _todos 속성을 가지는데  
        //_todos 속성은 단순히 전달받은 객체를 담고있는 배열이 아니라 Todo타입의 객체를 담은 배열
        //addTodo메소드를 호출하면서  _todos 에 Todo타입의 객체들을 배열에 추가
    }

    //할일을 추가하는 메소드 -- ㅁ매개변수로 할일 내용과 완료 여부 정의 기본값이 false
    addTodo(contents, done = false) {
        const newTodo = new Todo(contents, done);
        this._todos.push(newTodo);
        return newTodo;
    }
    //전달받은 인자를 이용하여 Todo타입의 객체를 생성하고 _todos배열에 추가
    // 그리고 새롭게 만들어진 Todo 타입의 객체를 반환

    getList() {
        return this._todos;
    }
    //할일을 반환하는 메소드
    
    get leftTodoCount() {
        return this._todos.reduce((p,c) => {
            if(c.done === false) {
                return ++p;
            } else {
                return p;
            }
        }, 0);
    }
    // 남은 할일의 갯수를 의미하는 leftTodoCount속성을 오직 읽기만 가능하게 하기 위해  get키워드를 사용하여 정의
    //_todos배열의 reduce메소드를 사용하여 각 배열 요소의 done속성값이false일때 이전에 반환된 값을 증가시키면서 반복하며
    //남은 갯수를 구한다
}