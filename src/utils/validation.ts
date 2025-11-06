export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10,11}$/;
  return phoneRegex.test(phone);
};

export const validatePassword = (
  password: string
): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Mật khẩu phải có ít nhất 8 ký tự");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Mật khẩu phải có ít nhất 1 chữ hoa");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Mật khẩu phải có ít nhất 1 chữ thường");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Mật khẩu phải có ít nhất 1 số");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateRequired = (
  value: string,
  fieldName: string
): string | null => {
  if (!value || value.trim() === "") {
    return `${fieldName} là bắt buộc`;
  }
  return null;
};
