import React, {useState, useEffect, useRef} from 'react';
import { useReducer } from 'react';

const initialState = {count:0};

const reducer = (state:any, action:any) => {
        switch(action.type){
            case 'addUp':
                return {count: state.count + 1};
            case 'addLess':
                return {count: state.count -1};
            default:
                throw new Error("Reducer failed");
                
        }
            
};

export const Home:React.FC = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // USE STATE

    const [count, setCount] = useState<number>(0);
    const [clicked, setClicked] = useState<boolean>(false);
    const [todo, setTodo] = useState<any>([{todo:'one'}]);

    const refDiv = useRef<HTMLDivElement | null>(null);

    // USE EFFECT
    // Component did mount
    useEffect(() => {
        const loadAPI = () => [''];
        loadAPI();
        console.log("Component did mount correctly");
    },[]);

    useEffect(() => {
        if(clicked){
            console.log("Changed state on Clicked");
        }
    }, [clicked]);

    useEffect(() =>{
        console.log('useEffect');
    });

    useEffect(() =>{
        if(refDiv.current !== undefined){
            console.log("element exists", refDiv.current);
        }
    }, [refDiv]);

    const handleTodo = () => {
        setTodo((prevState:any) => {
			return[...prevState, {todo:'other'}]
		})
    }

    const handleClick = () => {
        setCount(count+1);
        setClicked(true);
    }

    return(
    <>
    <h1>HOME PAGE</h1>
    <div>
        <p>You clicked the button: {count} times</p>
        <button onClick={handleClick}>Add up</button>
        <button onClick={() => setCount(count - 1)}>Add down</button>
    </div>

    <div>
        <h3>TODO list</h3>
        <ul>
            {todo.map((item:any) => (
                <li key={item.todo}>
                    {item.todo}
                </li>
            ))}
        </ul>
        <button onClick={handleTodo}>Add todo</button>
    </div>

    <div ref={refDiv}>
            <p>Hola</p>
    </div>

    <div>
        <h3>Count state: {state.count}</h3>
        <button onClick={()=> dispatch({type:'addUp'})}>Add!</button>
        <button onClick={()=> dispatch({type:'addLess'})}>Remove!</button>
    </div>
    </>
    );
}