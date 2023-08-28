
import { Button } from "bootstrap";
import React, { useEffect, useState }  from "react";
import UserQuestion from "./UserQuestion";
import {IoReorderThreeOutline}  from "react-icons/io5";
import {AiOutlineSearch} from "react-icons/ai";
import {GrFormView} from "react-icons/gr";
import {LiaThumbsUpSolid} from "react-icons/lia";
import {RiQuestionAnswerLine} from "react-icons/ri";

const QuestionBar = () => {
  const [result,setResult]=useState([]);
  
 let API="https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow";
const fetchApiData=async(url)=>
{
    try{
        const res=await fetch(url);
       const data=await res.json();
        setResult(data.items);
        console.log(data.items);
        }
    catch(error){
        console.log(error);
    }
}
 useEffect(()=>{
    fetchApiData(API);
    
 },[]);


    return(
        <div>
    <div className="left">
        <IoReorderThreeOutline />
        <div class="input-group mb-3">
            <span class="input-group-text border-0" id="basic-addon1"><AiOutlineSearch/></span>
            <input type="text" class="form-control border-0" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
      </div>
        <h2 class="text-start fs-5 text-muted"> Questions</h2>
       <br/>
       <br/>
       <div className="btn-left">
         <button type="button" class="btn  btn-warning btn-sm rounded" >Interesting</button>
         <button type="button" class="btn  btn-light btn-sm rounded" >featured</button>
         <button type="button" class="btn  btn-light btn-sm rounded" >hot</button>
         <button type="button" class="btn  btn-light btn-sm rounded" >week</button>
         <button type="button" class="btn  btn-light btn-sm rounded" >month</button>
       </div>
       <br/>
        
{
        result.map((items)=>{
            return(
                <div>
                   <p class="text-start fs-5 text-primary font-weight-bold">{items.title}</p>
                   <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{items.score} &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;{items.answer_count} &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{items.view_count}</p>
                   <p class="text-muted fs-8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; votes &nbsp;&nbsp;answers &nbsp;&nbsp;views</p>
                   <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<LiaThumbsUpSolid/> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<RiQuestionAnswerLine/> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<GrFormView/></p>
                </div>
                
            )
        })
        }
        
        </div>
    );
}
export default QuestionBar;