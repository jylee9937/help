import React, {useCallback, useState} from "react";
import {axiosInstance} from "../../axios/Axios";

export const SignupPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setDisplayName] = useState("");

	const signup = useCallback(async (event) => {
		event.preventDefault();
		const response = await axiosInstance.post('/signup', {email, password, displayName});
		console.log(response);
	}, [email, password, displayName]);

	return (
		<div>
			<header>
				UI는 없습니다.
			</header>
			<section>
				<div>
					<h1>회원가입</h1>
				</div>
				<form onSubmit={signup}>
					<div>
						<label>이메일</label>
						<input type="email" onChange={(event) => {
							console.log(event.target.value);
							setEmail(event.target.value);
						}} value={email} placeholder="example@gmail.com"/>
					</div>
					<div>
						<label>비밀번호</label>
						<input type="password" onChange={(event) => {
							console.log(event.target.value);
							setPassword(event.target.value);
						}} value={password} placeholder="8자리 이상으로 작성해주세요"/>
					</div>
					<div>
						<label>닉네임</label>
						<input type="text" onChange={(event) => {
							console.log(event.target.value);
							setDisplayName(event.target.value);
						}} value={displayName} placeholder="닉네임을 적어주세요"/>
					</div>
					<button>회원가입</button>
				</form>
			</section>
		</div>
	);
};
