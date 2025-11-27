import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Trophy } from "lucide-react-native";
import { useAuth } from "../../../contexts/AuthContext";
import { FormField } from "../../../components";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import { loginScreenStyles } from "./LoginScreenStyle";

const LoginScreen: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mock users for quick testing
  const mockUsers = [
    { email: "athlete@test.com", password: "123456", role: "Vận động viên" },
    { email: "coach@test.com", password: "123456", role: "Huấn luyện viên" },
    { email: "leader@test.com", password: "123456", role: "Trưởng đoàn" },
    { email: "spectator@test.com", password: "123456", role: "Khán giả" },
  ];

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin");
      return;
    }

    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert("Đăng nhập thất bại", "Email hoặc mật khẩu không đúng");
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickLogin = async (testEmail: string, testPassword: string) => {
    setEmail(testEmail);
    setPassword(testPassword);
    setIsLoading(true);
    try {
      await login(testEmail, testPassword);
    } catch (error) {
      Alert.alert("Đăng nhập thất bại", "Có lỗi xảy ra");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView
      style={[globalStyles.container, globalStyles.flex1]}
      edges={["top"]}
    >
      <KeyboardAvoidingView
        style={globalStyles.flex1}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={loginScreenStyles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header with Gradient */}
          <LinearGradient
            colors={[
              themeColors.primary[400],
              themeColors.primary[500],
              themeColors.primary[600],
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={loginScreenStyles.header}
          >
            <View style={loginScreenStyles.logoContainer}>
              <Trophy color="#ffffff" size={60} strokeWidth={2} />
            </View>
            <Text style={loginScreenStyles.appName}>SmashHub</Text>
            <Text style={loginScreenStyles.appTagline}>
              Quản lý giải đấu bóng bàn
            </Text>
          </LinearGradient>

          {/* Login Form */}
          <View style={loginScreenStyles.formContainer}>
            <Text style={loginScreenStyles.welcomeText}>
              Chào mừng trở lại!
            </Text>
            <Text style={loginScreenStyles.subtitleText}>
              Đăng nhập để tiếp tục
            </Text>

            {/* Email Field */}
            <FormField
              label="Email"
              value={email}
              onChangeText={setEmail}
              inputType="email"
              placeholder="Nhập email của bạn"
              autoCapitalize="none"
              autoCorrect={false}
              containerStyle={{ marginBottom: 16 }}
            />

            {/* Password Field */}
            <FormField
              label="Mật khẩu"
              value={password}
              onChangeText={setPassword}
              inputType="password"
              placeholder="Nhập mật khẩu"
              autoCapitalize="none"
              containerStyle={{ marginBottom: 8 }}
            />

            {/* Forgot Password */}
            <TouchableOpacity style={loginScreenStyles.forgotPassword}>
              <Text style={loginScreenStyles.forgotPasswordText}>
                Quên mật khẩu?
              </Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              style={loginScreenStyles.loginButton}
              onPress={handleLogin}
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
                style={loginScreenStyles.loginButtonGradient}
              >
                {isLoading ? (
                  <ActivityIndicator color="#ffffff" />
                ) : (
                  <Text style={loginScreenStyles.loginButtonText}>
                    Đăng nhập
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>

            {/* Divider */}
            <View style={loginScreenStyles.divider}>
              <View style={loginScreenStyles.dividerLine} />
              <Text style={loginScreenStyles.dividerText}>HOẶC</Text>
              <View style={loginScreenStyles.dividerLine} />
            </View>

            {/* Quick Login for Testing */}
            <Text style={loginScreenStyles.quickLoginTitle}>
              Đăng nhập nhanh (Demo)
            </Text>
            <View style={loginScreenStyles.quickLoginGrid}>
              {mockUsers.map((user, index) => (
                <TouchableOpacity
                  key={index}
                  style={loginScreenStyles.quickLoginButton}
                  onPress={() => handleQuickLogin(user.email, user.password)}
                  disabled={isLoading}
                >
                  <Text style={loginScreenStyles.quickLoginButtonText}>
                    {user.role}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Register Link */}
            <View style={loginScreenStyles.registerContainer}>
              <Text style={loginScreenStyles.registerText}>
                Chưa có tài khoản?{" "}
              </Text>
              <TouchableOpacity>
                <Text style={loginScreenStyles.registerLink}>Đăng ký ngay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
