import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { colors as themeColors } from "../../../theme/colors";
import { globalStyles } from "../../../styles/global.styles";
import FormField from "../../../components/inputs/FormField";
import { contactSupportScreenStyles } from "./ContactSupportScreenStyle";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  expanded: boolean;
}

const ContactSupportScreen: React.FC = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: "1",
      question: "Làm thế nào để đăng ký tham gia giải đấu?",
      answer:
        "Để đăng ký tham gia giải đấu, bạn vào mục 'Giải đấu', chọn giải đấu muốn tham gia và nhấn nút 'Đăng ký'. Điền đầy đủ thông tin và hoàn tất thanh toán (nếu có).",
      expanded: false,
    },
    {
      id: "2",
      question: "Tôi có thể thay đổi thông tin cá nhân ở đâu?",
      answer:
        "Bạn có thể thay đổi thông tin cá nhân tại mục 'Cá nhân', sau đó chọn 'Chỉnh sửa hồ sơ'. Cập nhật thông tin và lưu lại.",
      expanded: false,
    },
    {
      id: "3",
      question: "Làm sao để xem lịch thi đấu của mình?",
      answer:
        "Vào mục 'Lịch thi đấu' trên thanh điều hướng. Tại đây bạn sẽ thấy tất cả các trận đấu sắp tới của mình theo ngày và giờ.",
      expanded: false,
    },
    {
      id: "4",
      question: "Tôi muốn khiếu nại về trận đấu, làm thế nào?",
      answer:
        "Vào chi tiết trận đấu cần khiếu nại, chọn nút 'Gửi khiếu nại'. Điền đầy đủ thông tin và bằng chứng (nếu có), sau đó gửi. Ban tổ chức sẽ xem xét và phản hồi trong 48 giờ.",
      expanded: false,
    },
    {
      id: "5",
      question: "Làm sao để theo dõi kết quả trận đấu?",
      answer:
        "Kết quả trận đấu được cập nhật trực tiếp trong mục 'Chi tiết trận đấu'. Bạn cũng có thể xem lại lịch sử các trận đã đấu trong phần 'Trận đấu' của mình.",
      expanded: false,
    },
  ]);

  const handlePhonePress = () => {
    Linking.openURL("tel:+84123456789");
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:support@smashhub.vn");
  };

  const handleLocationPress = () => {
    Linking.openURL(
      "https://maps.google.com/?q=Cung+thể+thao+quốc+gia,+Hà+Nội"
    );
  };

  const toggleFAQ = (id: string) => {
    setFaqs((prev) =>
      prev.map((faq) =>
        faq.id === id ? { ...faq, expanded: !faq.expanded } : faq
      )
    );
  };

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    // TODO: Submit support request
    alert("Yêu cầu hỗ trợ đã được gửi!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <SafeAreaView style={globalStyles.flex1} edges={["top"]}>
      <LinearGradient
        colors={[
          themeColors.primary[400],
          themeColors.primary[500],
          themeColors.primary[600],
        ]}
        style={contactSupportScreenStyles.header}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={contactSupportScreenStyles.backButton}
        >
          <ArrowLeft size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={contactSupportScreenStyles.headerTitle}>
          Liên hệ hỗ trợ
        </Text>
        <View style={{ width: 24 }} />
      </LinearGradient>

      <ScrollView
        style={globalStyles.flex1}
        contentContainerStyle={contactSupportScreenStyles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Contact Info Cards */}
        <View style={contactSupportScreenStyles.section}>
          <Text style={contactSupportScreenStyles.sectionTitle}>
            Thông tin liên hệ
          </Text>

          <TouchableOpacity
            style={[globalStyles.card, contactSupportScreenStyles.contactCard]}
            onPress={handlePhonePress}
            activeOpacity={0.7}
          >
            <View
              style={[
                contactSupportScreenStyles.iconCircle,
                { backgroundColor: themeColors.status.success },
              ]}
            >
              <Phone size={24} color="#fff" />
            </View>
            <View style={contactSupportScreenStyles.contactInfo}>
              <Text style={contactSupportScreenStyles.contactLabel}>
                Điện thoại
              </Text>
              <Text style={contactSupportScreenStyles.contactValue}>
                +84 123 456 789
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[globalStyles.card, contactSupportScreenStyles.contactCard]}
            onPress={handleEmailPress}
            activeOpacity={0.7}
          >
            <View
              style={[
                contactSupportScreenStyles.iconCircle,
                { backgroundColor: themeColors.status.info },
              ]}
            >
              <Mail size={24} color="#fff" />
            </View>
            <View style={contactSupportScreenStyles.contactInfo}>
              <Text style={contactSupportScreenStyles.contactLabel}>Email</Text>
              <Text style={contactSupportScreenStyles.contactValue}>
                support@smashhub.vn
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[globalStyles.card, contactSupportScreenStyles.contactCard]}
            onPress={handleLocationPress}
            activeOpacity={0.7}
          >
            <View
              style={[
                contactSupportScreenStyles.iconCircle,
                { backgroundColor: themeColors.status.error },
              ]}
            >
              <MapPin size={24} color="#fff" />
            </View>
            <View style={contactSupportScreenStyles.contactInfo}>
              <Text style={contactSupportScreenStyles.contactLabel}>
                Địa chỉ
              </Text>
              <Text style={contactSupportScreenStyles.contactValue}>
                Cung thể thao quốc gia, Hà Nội
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* FAQ Section */}
        <View style={contactSupportScreenStyles.section}>
          <Text style={contactSupportScreenStyles.sectionTitle}>
            Câu hỏi thường gặp
          </Text>
          {faqs.map((faq) => (
            <View
              key={faq.id}
              style={[globalStyles.card, contactSupportScreenStyles.faqCard]}
            >
              <TouchableOpacity
                style={contactSupportScreenStyles.faqHeader}
                onPress={() => toggleFAQ(faq.id)}
                activeOpacity={0.7}
              >
                <Text style={contactSupportScreenStyles.faqQuestion}>
                  {faq.question}
                </Text>
                {faq.expanded ? (
                  <ChevronUp size={20} color={themeColors.primary[500]} />
                ) : (
                  <ChevronDown size={20} color={themeColors.muted.foreground} />
                )}
              </TouchableOpacity>
              {faq.expanded && (
                <Text style={contactSupportScreenStyles.faqAnswer}>
                  {faq.answer}
                </Text>
              )}
            </View>
          ))}
        </View>

        {/* Support Form */}
        <View style={contactSupportScreenStyles.section}>
          <Text style={contactSupportScreenStyles.sectionTitle}>
            Gửi yêu cầu hỗ trợ
          </Text>
          <View
            style={[globalStyles.card, contactSupportScreenStyles.formCard]}
          >
            <FormField
              label="Họ và tên"
              value={name}
              onChangeText={setName}
              placeholder="Nhập họ và tên"
            />
            <FormField
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Nhập email"
              keyboardType="email-address"
            />
            <FormField
              label="Nội dung"
              value={message}
              onChangeText={setMessage}
              placeholder="Nhập nội dung yêu cầu hỗ trợ"
              multiline
              numberOfLines={6}
            />
            <TouchableOpacity
              style={contactSupportScreenStyles.submitButton}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <MessageCircle size={20} color="#fff" />
              <Text style={contactSupportScreenStyles.submitButtonText}>
                Gửi yêu cầu
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactSupportScreen;
