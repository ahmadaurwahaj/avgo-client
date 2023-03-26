import React from "react";
import style from "./signup.module.css";
import illustration from "../../../../assets/log.svg";

function Singup() {
  
  return (
 
    <div className={style.main}>
        <div className={style.Rec2}>
          
        <div className={style.Rec3}>

            <div className={style.Rec4}>
                <div className={style.Rec5}>

                   <div className={style.Rec6}>
                  
                    <div className={style.top_bar}> 
                 <div className={style.logo}>
                 <img className={style.icon} alt="bg_img" src={illustration} />
                 </div>
                 
                 
              
                 <div className={style.logout}>
                 <button className={style.logout_btn}>Logout</button>
                 </div>
                 
</div>

                 <div className={style.about_you}>
                    <button className={style.about}> About you </button>
                 </div>
                 <div className={style.innerrec}>
                   <div className={style.Rec7}>

                  <div className={style.Bbio}>
                  <label htmlFor="bi">Bio</label>
        
        <input className={style.Bio}type="text" placeholder="Not more than 100 Words" />

                  <div className={style.bb}> 
                 
                  <div className={style.Country}>
                  <label htmlFor="cnt">Country</label>
                 
<select className={style.country} id="country">
<option value="volvo">Country</option>
  <option value="volvo">Pakistan</option>
  <option value="saab">America</option>
  <option value="mercedes">Mexico</option>
  <option value="audi">France</option>
</select>
                  </div>

                  <div className={style.Age}>
                  <label htmlFor="aage">Age</label>
                  <input className={style.age} type="number" placeholder="Age" />
                  </div>
                
                  </div>


                  <div className={style.Gender}>
                    
                  <label className={style.gender_h} htmlFor="id">Gender:
        
        </label>
   
          <input className={style.mgender} type="radio" name="gender" value="male"male/>
             <label htmlFor="genderm" >Male</label>
    
          <input className={style.fgender} type="radio" name="gender" value="male"male/>
             <label htmlFor="genderf">Female</label>
                  </div>

            


                  <div className={style.Next}>
                  <button className={style.next_btn}>Next</button>
                  </div>
                  </div>

                 
                   </div>
                  
                   </div>
                   </div>

                </div>

            </div>
        </div>
        </div>



    </div>
    );









  // return <div>Singup3</div>;

//   return (
 
//     <div className="main">
//         <div className="Rec2">
            
//         <div className="Rec3">

//             <div className="Rec4">
//                 <div className="Rec5">

//                    <div className="Rec6">
                  
//                     <div className="top_bar"> 
//                  <div className="logo">
//                  <img className="icon" alt="" src="../log.svg" />

//                  </div>
                 
                 
              
//                  <div className="logout">
//                  <button className="logout_btn">Logout</button>
//                  </div>
                 
// </div>

//                  <div className="about_you">
//                     <button className="about"> About you </button>
//                  </div>
//                  <div className="innerrec">
//                    <div className="Rec7">

//                   <div className="Bbio">
//                   <label htmlFor="bi">Bio</label>
        
//         <input className="Bio"type="text" placeholder="Not more than 100 Words" />

//                   <div className="bb"> 
                 
//                   <div className="Country">
//                   <label htmlFor="cnt">Country</label>
                 
// <select className="country" id="country">
// <option value="volvo">Country</option>
//   <option value="volvo">Pakistan</option>
//   <option value="saab">America</option>
//   <option value="mercedes">Mexico</option>
//   <option value="audi">France</option>
// </select>
//                   </div>

//                   <div className="Age">
//                   <label htmlFor="aage">Age</label>
//                   <input className="age" type="number" placeholder="Age" />
//                   </div>
                
//                   </div>


//                   <div className="Gender">
                    
//                   <label className="gender_h" htmlFor="id">Gender:
        
//         </label>
   
//           <input className="mgender" type="radio" name="gender" value="male"male/>
//              <label htmlFor="genderm" >Male</label>
    
//           <input className="fgender" type="radio" name="gender" value="male"male/>
//              <label htmlFor="genderf">Female</label>
//                   </div>

            


//                   <div className="Next">
//                   <button className="next_btn">Next</button>
//                   </div>
//                   </div>

                 
//                    </div>
                  
//                    </div>
//                    </div>

//                 </div>

//             </div>
//         </div>
//         </div>



//     </div>
//     );
}

export default Singup;
