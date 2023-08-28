import React from "react";
import pic from "./images/stack-overflow.png";
import './LeftSideBar.css';
import { BiQuestionMark  } from "react-icons/bi";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { BsTag,BsBookmark,BsInbox } from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";
import {TbSpeakerphone} from "react-icons/tb";
import {LiaStackExchange} from "react-icons/lia";
function LeftSideBar(){
    return(
        <div className="container">
        <div className="div-left">
           
          <p>  <img src={pic} className="image-style"/> stack<span className="p-bold"> overflow</span></p>
          <br/>
          <br/>
          <BiQuestionMark className="ques-mark"/><button type="button" class="btn btn-light btn-lg text-muted fs-6">QUESTIONS</button>
          <br/>
          <PiSuitcaseSimpleLight/><button type="button" class="btn btn-light btn-lg text-muted fs-6">JOBS</button><br/>
          <GrDocumentText/><button type="button" class="btn btn-light btn-lg text-muted fs-6">DOCUMENTATION</button><br/>
          <BsTag/><button type="button" class="btn btn-light btn-lg text-muted fs-6">TAGS</button><br/>
          <AiOutlineUser/><button type="button" class="btn btn-light btn-lg text-muted fs-6">USER</button><br/>
          <BsBookmark/><button type="button" class="btn btn-light btn-lg text-muted fs-6">BADGES</button><br/>
          <TbSpeakerphone/><button type="button" class="btn btn-light btn-lg text-muted fs-6">ASK QUESTION</button><br/>
          <LiaStackExchange/><button type="button" class="btn btn-light btn-lg text-muted fs-6">STACK EXCHANGE</button><br/>
          <BsInbox/><button type="button" class="btn btn-light btn-lg text-muted fs-6">INBOX</button><br/>
        </div>
        </div>
    );
}

    
export default LeftSideBar;