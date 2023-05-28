/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from "react";
import { useId } from "react";
import {app,database} from "../../database/firebase"
import { uuid } from 'uuidv4';
import {set,ref} from "firebase/database"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TimePicker from 'rc-time-picker';


function page() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dataPush = (d:string)=>{
    const id = uuid();
    set(ref(database,`/data-${id}`),{day:d})
  }

  const DateDialog = ({day}):JSX.Element =>{
    return(<div className="m-10">
        <Dialog>
        <DialogTrigger>{day}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You have choosen {day}</DialogTitle>
            <DialogDescription>
              <TimePicker/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>)
}
  return (
    <main className="hero min-h-screen">
      <ul className="menu menu-vertical lg:menu-horizontal   bg-gray-200">

        {days.map((d,i)=>{
            return(
               <DateDialog key={i} day={d}/>
            )
        })}
      </ul>
    </main>
  );
}

export default page;
