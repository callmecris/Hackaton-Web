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
		<form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center justify-center border border-solid border-black rounded-2xl px-4 py-4">
			<label className="flex gap-1">
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
					className='border border-solid border-black rounded-md px-2 py-1 text-black'
				/>
			</label>
			{errors.username && <p>{errors.username}</p>}

			<label className="flex gap-1">
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
					className='border border-solid border-black rounded-md px-2 py-1 text-black'
				/>
			</label>
			{errors.fullname && <p>{errors.fullname}</p>}

			<label className="flex gap-1">
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
					className='border border-solid border-black rounded-md px-2 py-1 text-black'
				/>
			</label>
			{errors.age && <p>{errors.age}</p>}

			<button type="submit" className="bg-gray-500 text-black px-2">
				Submit
			</button>
		</form>
	);
}
