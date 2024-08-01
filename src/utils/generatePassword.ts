/**
 * Generate Random Password
 */
export function generatePassword({
  length,
  numbers,
  symbols,
}: {
  length: string;
  numbers?: boolean;
  symbols?: boolean;
}) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  let chars = uppercase + lowercase;

  if (numbers) {
    chars += numberChars;
  }
  if (symbols) {
    chars += specialChars;
  }
  let password = '';

  for (let i = 0; i < Number(length); i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}
