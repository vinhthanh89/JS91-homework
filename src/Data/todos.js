import {v4 as uuidv4} from "uuid"

const TODOS = [
    {
        id: uuidv4(),
        task: "Doing homework",
        isCompleted: false
    },
    {
        id: uuidv4(),
        task: "Gym",
        isCompleted: false
    },
    {
        id: uuidv4(),
        task: "Read Book",
        isCompleted: false
    },
]

export default TODOS;