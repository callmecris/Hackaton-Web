"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Forms() {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [fullname, setFullname] = useState("");
	const [age, setAge] = useState("");
	const [errors, setErrors] = useState({ username: "", fullname: "", age: "" });

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		router.push("/");
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Username
				<input
					value={username}
					onChange={(event) => setUsername(event.target.value)}
					onBlur={() =>
						setErrors((current) => ({
							...current,
							username: username.trim() ? "" : "Porfa plis ponga un Username :P",
						}))
					}
				/>
			</label>
			{errors.username && <p>{errors.username}</p>}

			<label>
				Fullname
				<input
					value={fullname}
					onChange={(event) => setFullname(event.target.value)}
					onBlur={() =>
						setErrors((current) => ({
							...current,
							fullname: /\d/.test(fullname) ? "Creo que no debería contener numeros jeje" : "",
						}))
					}
				/>
			</label>
			{errors.fullname && <p>{errors.fullname}</p>}

			<label>
				Age
				<input
					type="number"
					value={age}
					onChange={(event) => setAge(event.target.value)}
					onBlur={() =>
						setErrors((current) => ({
							...current,
							age: age.trim() && Number.isFinite(Number(age)) ? "" : "Como dice la gente, la edad es un número. No letras",
						}))
					}
				/>
			</label>
			{errors.age && <p>{errors.age}</p>}

			<button type="submit">Submit</button>
		</form>
	);
}
