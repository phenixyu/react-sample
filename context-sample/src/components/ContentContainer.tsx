import { useEffect, useState } from "react";
import { withLogin } from "../hoc/withLogin";
import { Content } from "./Content";

const LoginContent:any = withLogin(Content)
export function ContentContainer()
{
    const [name, setName] = useState<string>()
    const [age, setAge] = useState<number>()
    useEffect(()=>{
       setName('Tom')
       setAge(11)
    },[])
   return <LoginContent name={name} age={age} ></LoginContent>
}


