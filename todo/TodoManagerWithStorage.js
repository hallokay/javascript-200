class TodoManagerWithStorage extends TodoManager {

    static get STORAGE_KEY() {
        return "TODO-APP";
    }
    //로컬 스토리지에 사용할 키를 static키워드로 정적 속성으로 정의

    constructor() {
        const todoJSON =
            localStorage.getItem(TodoManagerWithStorage.STORAGE_KEY);
        const todos = (todoJSON) ? JSON.parse(todoJSON) : [];
        super(todos)
    }
    //생성자 함수에서 로컬 스토리지에 json형태의 문자열로 저장된 할일들 데이터를 가지고 온다
    //JSON.parse메소드로 문자열 데이터를 할일 객체들로 객체화 
    //부모클래스의 생성자를 가리키는super키워드를 호출하여  _todos속성을 초기화

//addTodo를 재정의 
    addTodo(contents, done = false) {
        const newTodo = super.addTodo(contents, done);
        //super키워드를 통해 부모 클래스의 addTodo를 우선 호출하며 부모에서 정의된 코드들이 동작하게 한다
        //만들어진 새로운 할일객체를 newTodo상수에할당

        const original = newTodo.toggle;
        newTodo.toggle = () => {
            original.apply(newTodo);
            this.saveToLocalStorage();
        }
            //새롭게 만들어진 객체의 toggle 메소드를 재정의 
    //기존의 toggle메소드를 호출해야 하기 때문에 original 상수에 일단 보관 
    //새롭게 정의한 메소드 안에서 기존 메소드를 호출한 후 로컬 스토리지에 변경된 done속성을 저장
    

        this.saveToLocalStorage();
        return newTodo;
    }
    //새롭게추가된 할일들을 로컬스토리지에 저장하고 반환



    saveToLocalStorage() {
        const todoJSON = JSON.stringify(this._todos);
        localStorage.setItem(
            TodoManagerWithStorage.STORAGE_KEY,
            todoJSON);
    }
    //로컬 스토리지에저장하는 메소드 정의
    //_todos속성을 JSON형태의 문자열로 만든 후 해당 문자열을 로컬 스토리지에 저장
}