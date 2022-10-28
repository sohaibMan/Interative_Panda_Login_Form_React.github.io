import React, { useRef } from 'react'
import Button from './Button';
import $ from 'jquery';



$(document).ready(function(){
			$(":text").focus(function(){
				$(".handl").css({
					transform: 'rotate(0deg)',
					bottom: '140px',
					left:'50px',
					height:'45px',
					width:'35px'
				});
				$(".handr").css({
					transform: 'rotate(0deg)',
					bottom: '185px',
					left:'250px',
					height:'45px',
					width:'35px'
				});
				$(".eyeball1").css({
					top: '20px',
					left: '13px'
				});
				$(".eyeball2").css({
					top: '20px',
					left: '8px'
				});
			});
			$(":password").focus(function(){
				$(".eyeball1").css({
					top: '10px',
					left: '10px'
				});
				$(".eyeball2").css({
					top: '10px',
					left: '10px'
				});
				$(".handl").css({
					transform: 'rotate(-150deg)',
					bottom: '215px',
					left:'105px',
					height:'90px',
					width:'40px'
				});
				$(".handr").css({
					transform: 'rotate(150deg)',
					bottom: '308px',
					left:'192px',
					height:'90px',
					width:'40px'
				});
			});
		});

function Form() {
    const usernameRef=useRef();
    const passwordRef=useRef();
    const FormSubmitHandler=(e)=>{
        e.preventDefault();
       const user={
        username:usernameRef.current.value,
        password:passwordRef.current.value
       }
    //    some check rules
       console.log(user);
       alert("check the console");
    }
  return (

			<form className='form' onSubmit={FormSubmitHandler}>
            <div>

            
            <div className="login">		
            <div className='form-inputs'>
            <div>
            <i className="fa fa-user" aria-hidden="true">&nbsp;&nbsp;</i><input ref={usernameRef} placeholder='username' type="text"/>
            </div>  
            <div>
            <i className="fa fa-unlock-alt" aria-hidden="true">&nbsp;&nbsp;</i><input ref={passwordRef} placeholder='password' type="password"/>
              </div>
            <Button>Login</Button>
                </div>
                	
          </div>
            
          <div className="backg">
		<div className="panda">
			<div className="earl"></div>
			<div className="earr"></div>
			<div className="face">
				<div className="blshl"></div>
				<div className="blshr"></div>
				<div className="eyel">
					<div className="eyeball1"></div>
				</div>
				<div className="eyer">
					<div className="eyeball2"></div>
				</div>
				<div className="nose">
					<div className="line"></div>
				</div>
				<div className="mouth">
					<div className="m">
						<div className="m1"></div>
					</div>
					<div className="mm">
                        <div className="m1"></div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
	<div className="pawl">
		<div className="p1">
				<div className="p2"></div>
				<div className="p3"></div>
				<div className="p4"></div>
				</div>
			</div>
	<div className="pawr">
		<div className="p1">
			<div className="p2"></div>
			<div className="p3"></div>
			<div className="p4"></div>
		</div>
	</div>
	<div className="handl"></div>
	<div className="handr"></div>
            </div>

            </form>	


  )
}

export default Form;