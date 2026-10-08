"use client";
import { useState } from "react";

export const hasUppercase = (value: string): boolean => /[A-Z]/.test(value);

export const hasLowercase = (value: string): boolean => /[a-z]/.test(value);

export const hasNumber = (value: string): boolean => /\d/.test(value);

export const hasSpecialCharacter = (value: string): boolean => /[^A-Za-z0-9]/.test(value);

export const hasValidPasswordLength = (
	value: string,
	minLength = 8,
): boolean => value.length >= minLength;

export const generatePassword = async (
	requireUppercase: boolean,
	requireLowercase: boolean,
	requireNumber: boolean,
	requireSpecialCharacter: boolean,
	requireValidLength: boolean,
): Promise<string> => {
	while (true) {
		const p = 10 + Math.floor(Math.random() * 11);
		const number = (2**p - 1).toString();
		const digest = await crypto.subtle.digest(
			"SHA-256",
			new TextEncoder().encode(number),
		);
		const password = btoa(
			Array.from(new Uint8Array(digest), (byte) => String.fromCharCode(byte)).join(""),
		);

		if (
			(!requireUppercase || hasUppercase(password)) &&
			(!requireLowercase || hasLowercase(password)) &&
			(!requireNumber || hasNumber(password)) &&
			(!requireSpecialCharacter || hasSpecialCharacter(password)) &&
			(!requireValidLength || hasValidPasswordLength(password))
		) {
			return password;
		}
	}

};

export default function PasswordGen() {
    const [password, setPassword] = useState("");
    const [requireUppercase, setRequireUppercase] = useState(true);
    const [requireLowercase, setRequireLowercase] = useState(true);
    const [requireNumber, setRequireNumber] = useState(true);
    const [requireSpecialCharacter, setRequireSpecialCharacter] = useState(true);
    const [requireValidLength, setRequireValidLength] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-md p-4">
            <h1 className="text-2xl font-bold">Password Generator</h1>
            <h2 className="text-lg font-semibold">Proponemos esta contrasena</h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
                <p className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">
                    {password}
                </p>
                <button
                    onClick={async () => {
                        const newPassword = await generatePassword(
                            requireUppercase,
                            requireLowercase,
                            requireNumber,
                            requireSpecialCharacter,
                            requireValidLength
                        );
                        setPassword(newPassword);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                >
                    Generate Password
                </button>
            
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(password);
                    }}
                    className="bg-blue-400 text-white px-4 py-2 rounded-md cursor-pointer"
                >
                    Copy to Clipboard
                </button>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
                <label>
                    <input
                        type="checkbox"
                        checked={requireUppercase}
                        onChange={(e) => setRequireUppercase(e.target.checked)}
                    />
                    Require Uppercase
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={requireLowercase}
                        onChange={(e) => setRequireLowercase(e.target.checked)}
                    />
                    Require Lowercase
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={requireNumber}
                        onChange={(e) => setRequireNumber(e.target.checked)}
                    />
                    Require Number
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={requireSpecialCharacter}
                        onChange={(e) => setRequireSpecialCharacter(e.target.checked)}
                    />
                    Require Special Character
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={requireValidLength}
                        onChange={(e) => setRequireValidLength(e.target.checked)}
                    />
                    Require Valid Length
                </label>
            </div>
        </div>
    );


}