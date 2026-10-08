
// export const hasUppercase = (value: string): boolean => /[A-Z]/.test(value);

// export const hasLowercase = (value: string): boolean => /[a-z]/.test(value);

// export const hasNumber = (value: string): boolean => /\d/.test(value);

// export const hasSpecialCharacter = (value: string): boolean => /[^A-Za-z0-9]/.test(value);

// export const hasValidPasswordLength = (
// 	value: string,
// 	minLength = 8,
// ): boolean => value.length >= minLength;

// export const generatePassword = async (
// 	requireUppercase: boolean,
// 	requireLowercase: boolean,
// 	requireNumber: boolean,
// 	requireSpecialCharacter: boolean,
// 	requireValidLength: boolean,
// ): Promise<string> => {
// 	while (true) {
// 		const p = 10 + Math.floor(Math.random() * 11);
// 		//const number = (2n ** p - 1n).toString();
// 		const digest = await crypto.subtle.digest(
// 			"SHA-256",
// 			new TextEncoder().encode(number),
// 		);
// 		const password = btoa(
// 			Array.from(new Uint8Array(digest), (byte) => String.fromCharCode(byte)).join(""),
// 		);

// 		if (
// 			(!requireUppercase || hasUppercase(password)) &&
// 			(!requireLowercase || hasLowercase(password)) &&
// 			(!requireNumber || hasNumber(password)) &&
// 			(!requireSpecialCharacter || hasSpecialCharacter(password)) &&
// 			(!requireValidLength || hasValidPasswordLength(password))
// 		) {
// 			return password;
// 		}
// 	}
// };

