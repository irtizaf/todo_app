"use client"
import { Button,
Flex,
ListItem,
UnordredList,
Text,
Input,
UnorderedList} from "@chakra-ui/react";
import { useState } from "react";
export default function page() {
    const [tasks,setTasks] = useState(["1","2","3"]);
    const [Item,setItem] = useState("");
    function removeItem(taskName){
            setTasks(tasks.filter(task => {
                return task != taskName;
            }))
    }
    function AddItem(){
        if (Item != "" && !tasks.includes(Item)){
            let temp = tasks;
            temp.push(Item);
            setTasks(temp);
            setItem("");
        }
    }
    return <Flex justifyContent="center" alignContent="center" width="100%" height="100%" flexDirection= "column">
        <UnorderedList> 
            {tasks.map((task) => {
                return <ListItem key = {task.index}>
                    {task}
                    <button mL={10} 
                    onClick ={()=>{
                        removeItem(task);
                    }}>
                        Remove Item
                    </button>
                </ListItem>
            })}
        </UnorderedList>
        < Input
          placeholder="Item Name"
        value={Item}
        onChange ={(e)=>{
            setItem(e.target.value)
        }}/>
            <Button onClick={AddItem}> AddItem </Button>
            
    </Flex>
}