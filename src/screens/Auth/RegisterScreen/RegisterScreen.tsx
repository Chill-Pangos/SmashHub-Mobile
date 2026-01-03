import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Trophy, ArrowLeft, Check } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, FormField } from "../../../components";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { registerScreenStyles } from "./RegisterScreenStyle";

type UserRole = "athlete" | "coach" | "team_leader" | "spectator";

interface RoleOption {
  id: UserRole;
  label: string;
  description: string;
  icon: string;
}

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [organization, setOrganization] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roleOptions: RoleOption[] = [
    {
      id: "athlete",
      label: "Vận động viên",
      description: "Tham gia thi đấu và theo dõi lịch thi",
      icon: "🏃",
    },
    {
      id: "spectator",
      label: "Khán giả",
      description: "Theo dõi và cổ vũ các trận đấu",
      icon: "👀",
    },
    {
      id: "coach",
      label: "Huấn luyện viên",
      description: "Quản lý và hướng dẫn vận động viên",
      icon: "👨‍🏫",
    },
    {
      id: "team_leader",
      label: "Trưởng đoàn",
      description: "Quản lý đoàn và đội thi đấu",
      icon: "👔",
    },
  ];

  const getPasswordStrength = (pwd: string): "weak" | "medium" | "strong" => {
    if (pwd.length < 6) return "weak";
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);
    const count = [hasUpper, hasNumber, hasSpecial].filter(Boolean).length;
    if (pwd.length >= 8 && count >= 2) return "strong";
    return "medium";
  };

  const passwordStrength = password ? getPasswordStrength(password) : null;

  const handleNext = () => {
    if (!selectedRole) {
      Alert.alert("Thông báo", "Vui lòng chọn vai trò");
      return;
    }
    setStep(2);
  };

  const handleRegister = async () => {
    // Validation
    if (!fullName.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập họ tên");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      Alert.alert("Lỗi", "Vui lòng nhập email hợp lệ");
      return;
    }
    if (!phone.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập số điện thoại");
      return;
    }
    if (password.length < 8) {
      Alert.alert("Lỗi", "Mật khẩu phải có ít nhất 8 ký tự");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Lỗi", "Mật khẩu xác nhận không khớp");
      return;
    }
    if (
      selectedRole !== "spectator" &&
      (!organization || !organization.trim())
    ) {
      Alert.alert("Lỗi", "Vui lòng nhập đơn vị");
      return;
    }
    if (!acceptedTerms) {
      Alert.alert("Lỗi", "Vui lòng đồng ý với điều khoản sử dụng");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        "Đăng ký thành công",
        "Vui lòng kiểm tra email để xác thực tài khoản",
        [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]
      );
    }, 1500);
  };

  const renderStep1 = () => (
    <View style={registerScreenStyles.content}>
      <Text style={registerScreenStyles.stepTitle}>Chọn vai trò của bạn</Text>
      <Text style={registerScreenStyles.stepSubtitle}>
        Chọn vai trò phù hợp để sử dụng các tính năng tương ứng
      </Text>

      <View style={registerScreenStyles.rolesGrid}>
        {roleOptions.map((role) => (
          <TouchableOpacity
            key={role.id}
            style={[
              registerScreenStyles.roleCard,
              selectedRole === role.id && registerScreenStyles.roleCardSelected,
            ]}
            onPress={() => setSelectedRole(role.id)}
          >
            {selectedRole === role.id && (
              <View style={registerScreenStyles.roleCheckmark}>
                <Check size={16} color="#fff" />
              </View>
            )}
            <Text style={registerScreenStyles.roleIcon}>{role.icon}</Text>
            <Text
              style={[
                registerScreenStyles.roleLabel,
                selectedRole === role.id &&
                  registerScreenStyles.roleLabelSelected,
              ]}
            >
              {role.label}
            </Text>
            <Text
              style={[
                registerScreenStyles.roleDescription,
                selectedRole === role.id &&
                  registerScreenStyles.roleDescriptionSelected,
              ]}
            >
              {role.description}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[
          registerScreenStyles.nextButton,
          !selectedRole && registerScreenStyles.nextButtonDisabled,
        ]}
        onPress={handleNext}
        disabled={!selectedRole}
      >
        <LinearGradient
          colors={
            selectedRole
              ? [
                  themeColors.primary[400],
                  themeColors.primary.DEFAULT,
                  themeColors.primary[600],
                ]
              : [themeColors["gray-300"], themeColors["gray-400"]]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={registerScreenStyles.nextButtonGradient}
        >
          <Text style={registerScreenStyles.nextButtonText}>Tiếp tục</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );

  const renderStep2 = () => (
    <View style={registerScreenStyles.content}>
      <Text style={registerScreenStyles.stepTitle}>Thông tin cá nhân</Text>
      <Text style={registerScreenStyles.stepSubtitle}>
        Điền đầy đủ thông tin để hoàn tất đăng ký
      </Text>

      <View style={registerScreenStyles.form}>
        <FormField
          label="Họ và tên"
          placeholder="Nhập họ và tên"
          value={fullName}
          onChangeText={setFullName}
          required
        />

        <FormField
          label="Email"
          placeholder="email@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          required
        />

        <FormField
          label="Số điện thoại"
          placeholder="0912345678"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          required
        />

        {selectedRole !== "spectator" && (
          <FormField
            label="Đơn vị"
            placeholder="Tên đơn vị/câu lạc bộ"
            value={organization}
            onChangeText={setOrganization}
            required
          />
        )}

        {selectedRole === "athlete" && (
          <FormField
            label="Ngày sinh"
            placeholder="DD/MM/YYYY"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            keyboardType="numbers-and-punctuation"
          />
        )}

        <FormField
          label="Mật khẩu"
          placeholder="Tối thiểu 8 ký tự"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          required
        />

        {password.length > 0 && (
          <View style={registerScreenStyles.passwordStrength}>
            <View style={registerScreenStyles.strengthBars}>
              <View
                style={[
                  registerScreenStyles.strengthBar,
                  passwordStrength === "weak" &&
                    registerScreenStyles.strengthBarWeak,
                  (passwordStrength === "medium" ||
                    passwordStrength === "strong") &&
                    registerScreenStyles.strengthBarMedium,
                ]}
              />
              <View
                style={[
                  registerScreenStyles.strengthBar,
                  (passwordStrength === "medium" ||
                    passwordStrength === "strong") &&
                    registerScreenStyles.strengthBarMedium,
                ]}
              />
              <View
                style={[
                  registerScreenStyles.strengthBar,
                  passwordStrength === "strong" &&
                    registerScreenStyles.strengthBarStrong,
                ]}
              />
            </View>
            <Text style={registerScreenStyles.strengthText}>
              {passwordStrength === "weak" && "Yếu"}
              {passwordStrength === "medium" && "Trung bình"}
              {passwordStrength === "strong" && "Mạnh"}
            </Text>
          </View>
        )}

        <FormField
          label="Xác nhận mật khẩu"
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          required
        />

        <TouchableOpacity
          style={registerScreenStyles.termsCheckbox}
          onPress={() => setAcceptedTerms(!acceptedTerms)}
        >
          <View
            style={[
              registerScreenStyles.checkbox,
              acceptedTerms && registerScreenStyles.checkboxChecked,
            ]}
          >
            {acceptedTerms && <Check size={16} color="#fff" />}
          </View>
          <Text style={registerScreenStyles.termsText}>
            Tôi đồng ý với{" "}
            <Text style={registerScreenStyles.termsLink}>
              Điều khoản sử dụng
            </Text>{" "}
            và{" "}
            <Text style={registerScreenStyles.termsLink}>
              Chính sách bảo mật
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={registerScreenStyles.buttonGroup}>
        <TouchableOpacity
          style={registerScreenStyles.backButton}
          onPress={() => setStep(1)}
        >
          <Text style={registerScreenStyles.backButtonText}>Quay lại</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            registerScreenStyles.registerButton,
            isLoading && registerScreenStyles.registerButtonDisabled,
          ]}
          onPress={handleRegister}
          disabled={isLoading}
        >
          <LinearGradient
            colors={[
              themeColors.primary[400],
              themeColors.primary.DEFAULT,
              themeColors.primary[600],
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={registerScreenStyles.registerButtonGradient}
          >
            <Text style={registerScreenStyles.registerButtonText}>
              {isLoading ? "Đang xử lý..." : "Đăng ký"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={[globalStyles.flex1, { backgroundColor: themeColors.background }]}
    >
      <KeyboardAvoidingView
        style={globalStyles.flex1}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={registerScreenStyles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <LinearGradient
            colors={[
              themeColors.primary[400],
              themeColors.primary[500],
              themeColors.primary[600],
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={registerScreenStyles.header}
          >
            <TouchableOpacity
              style={registerScreenStyles.backIcon}
              onPress={() => navigation.goBack()}
            >
              <ArrowLeft size={24} color="#fff" />
            </TouchableOpacity>
            <Trophy size={48} color="#fff" />
            <Text style={registerScreenStyles.headerTitle}>SmashHub</Text>
            <Text style={registerScreenStyles.headerSubtitle}>
              Đăng ký tài khoản
            </Text>

            {/* Step Indicator */}
            <View style={registerScreenStyles.stepIndicator}>
              <View
                style={[
                  registerScreenStyles.stepDot,
                  registerScreenStyles.stepDotActive,
                ]}
              />
              <View style={registerScreenStyles.stepLine} />
              <View
                style={[
                  registerScreenStyles.stepDot,
                  step === 2 && registerScreenStyles.stepDotActive,
                ]}
              />
            </View>
          </LinearGradient>

          {/* Content */}
          {step === 1 ? renderStep1() : renderStep2()}

          {/* Footer */}
          <View style={registerScreenStyles.footer}>
            <Text style={registerScreenStyles.footerText}>
              Đã có tài khoản?{" "}
              <Text
                style={registerScreenStyles.footerLink}
                onPress={() => navigation.goBack()}
              >
                Đăng nhập ngay
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
