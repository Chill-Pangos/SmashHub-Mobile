import {
  User,
  Tournament,
  Match,
  Ranking,
  Notification,
  Complaint,
  Team,
  Delegation,
  TrainingPlan,
  AthleteEvaluation,
  News,
  MatchFormat,
  Gender,
} from "../types";

// ==================== USERS ====================

export const mockUsers: User[] = [
  // Athletes
  {
    id: "1",
    name: "Nguyễn Văn An",
    email: "nva@example.com",
    role: "athlete",
    avatar: "https://i.pravatar.cc/150?img=11",
    phone: "0901234567",
    organization: "Đội Hà Nội",
    dateOfBirth: "2000-05-15",
    gender: Gender.MALE,
    isOnline: true,
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Trần Thị Bình",
    email: "ttb@example.com",
    role: "athlete",
    avatar: "https://i.pravatar.cc/150?img=5",
    phone: "0901234568",
    organization: "Đội TP.HCM",
    dateOfBirth: "1999-08-20",
    gender: Gender.FEMALE,
    isOnline: false,
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "Lê Minh Châu",
    email: "lmc@example.com",
    role: "athlete",
    avatar: "https://i.pravatar.cc/150?img=12",
    phone: "0901234569",
    organization: "Đội Đà Nẵng",
    dateOfBirth: "2001-03-10",
    gender: Gender.MALE,
    isOnline: true,
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "Phạm Thu Hà",
    email: "pth@example.com",
    role: "athlete",
    avatar: "https://i.pravatar.cc/150?img=9",
    phone: "0901234570",
    organization: "Đội Hải Phòng",
    dateOfBirth: "2000-11-25",
    gender: Gender.FEMALE,
    isOnline: true,
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "5",
    name: "Hoàng Văn Dũng",
    email: "hvd@example.com",
    role: "athlete",
    avatar: "https://i.pravatar.cc/150?img=13",
    phone: "0901234571",
    organization: "Đội Hà Nội",
    dateOfBirth: "1998-07-08",
    gender: Gender.MALE,
    isOnline: false,
    createdAt: "2024-01-01T00:00:00Z",
  },

  // Coaches
  {
    id: "101",
    name: "HLV Trần Quốc Tuấn",
    email: "tqt@example.com",
    role: "coach",
    avatar: "https://i.pravatar.cc/150?img=33",
    phone: "0912345678",
    organization: "Đội Hà Nội",
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "102",
    name: "HLV Nguyễn Thị Mai",
    email: "ntm@example.com",
    role: "coach",
    avatar: "https://i.pravatar.cc/150?img=44",
    phone: "0912345679",
    organization: "Đội TP.HCM",
    createdAt: "2024-01-01T00:00:00Z",
  },

  // Team Leaders
  {
    id: "201",
    name: "Trưởng đoàn Lê Văn Phúc",
    email: "lvp@example.com",
    role: "team_leader",
    avatar: "https://i.pravatar.cc/150?img=60",
    phone: "0923456789",
    organization: "Đội Hà Nội",
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "202",
    name: "Trưởng đoàn Phạm Thị Hương",
    email: "pth2@example.com",
    role: "team_leader",
    avatar: "https://i.pravatar.cc/150?img=47",
    phone: "0923456790",
    organization: "Đội TP.HCM",
    createdAt: "2024-01-01T00:00:00Z",
  },

  // Spectators
  {
    id: "301",
    name: "Khán giả Nguyễn Văn Khoa",
    email: "nvk@example.com",
    role: "spectator",
    avatar: "https://i.pravatar.cc/150?img=15",
    phone: "0934567890",
    createdAt: "2024-01-01T00:00:00Z",
  },
];

// ==================== TOURNAMENTS ====================

export const mockTournaments: Tournament[] = [
  {
    id: "t1",
    name: "Giải Vô Địch Quốc Gia 2025",
    description:
      "Giải đấu Bóng bàn hàng đầu Việt Nam với sự tham gia của các VĐV xuất sắc nhất",
    format: "Đơn Nam, Đơn Nữ, Đôi Nam, Đôi Nữ, Đôi Nam Nữ",
    startDate: "2025-01-15T00:00:00Z",
    endDate: "2025-01-25T00:00:00Z",
    location: "Hà Nội",
    venue: "Nhà thi đấu Quần Ngựa",
    logoUrl: "https://via.placeholder.com/300x300/0ea5e9/ffffff?text=VN+Open",
    bannerUrl:
      "https://via.placeholder.com/1200x400/0ea5e9/ffffff?text=VN+Open+2025",
    status: "ongoing",
    currentParticipants: 128,
    maxParticipants: 150,
    registrationDeadline: "2025-01-10T00:00:00Z",
    rules: "Áp dụng luật BWF, hệ thống loại trực tiếp",
    prizes: "Tổng giải thưởng: 500 triệu VNĐ",
    createdAt: "2024-12-01T00:00:00Z",
    updatedAt: "2025-01-15T00:00:00Z",
  },
  {
    id: "t2",
    name: "Giải Bóng bàn Mở Rộng TP.HCM",
    description:
      "Giải đấu Bóng bàn chuyên nghiệp cho các VĐV trong và ngoài nước",
    format: "Đơn Nam, Đơn Nữ, Đôi Nam Nữ",
    startDate: "2025-02-01T00:00:00Z",
    endDate: "2025-02-10T00:00:00Z",
    location: "TP. Hồ Chí Minh",
    venue: "Nhà thi đấu Phú Thọ",
    logoUrl: "https://via.placeholder.com/300x300/22c55e/ffffff?text=HCM+Open",
    bannerUrl:
      "https://via.placeholder.com/1200x400/22c55e/ffffff?text=HCM+Open",
    status: "registration_open",
    currentParticipants: 64,
    maxParticipants: 100,
    registrationDeadline: "2025-01-25T00:00:00Z",
    createdAt: "2024-12-15T00:00:00Z",
    updatedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "t3",
    name: "Giải Trẻ Toàn Quốc 2025",
    description: "Giải đấu dành cho VĐV trẻ dưới 18 tuổi",
    format: "Đơn Nam U18, Đơn Nữ U18, Đôi Nam U18",
    startDate: "2025-03-05T00:00:00Z",
    endDate: "2025-03-12T00:00:00Z",
    location: "Đà Nẵng",
    venue: "Cung thể thao Tiên Sơn",
    logoUrl: "https://via.placeholder.com/300x300/a855f7/ffffff?text=Junior",
    bannerUrl:
      "https://via.placeholder.com/1200x400/a855f7/ffffff?text=Junior+2025",
    status: "registration_open",
    currentParticipants: 45,
    maxParticipants: 80,
    registrationDeadline: "2025-02-25T00:00:00Z",
    createdAt: "2024-12-20T00:00:00Z",
    updatedAt: "2025-01-05T00:00:00Z",
  },
  {
    id: "t4",
    name: "Giải Bóng bàn Các Câu Lạc Bộ",
    description: "Giải đấu giao hữu giữa các câu lạc bộ Bóng bàn",
    format: "Đơn Nam, Đơn Nữ, Đôi Nam Nữ",
    startDate: "2024-12-01T00:00:00Z",
    endDate: "2024-12-15T00:00:00Z",
    location: "Hải Phòng",
    venue: "Nhà thi đấu Lạch Tray",
    status: "completed",
    currentParticipants: 96,
    maxParticipants: 100,
    createdAt: "2024-11-01T00:00:00Z",
    updatedAt: "2024-12-15T00:00:00Z",
  },
];

// ==================== MATCHES ====================

export const mockMatches: Match[] = [
  {
    id: "m1",
    tournamentId: "t1",
    tournamentName: "Giải Vô Địch Quốc Gia 2025",
    roundName: "Vòng 1/8",
    homePlayer: "Nguyễn Văn An",
    awayPlayer: "Lê Minh Châu",
    homePlayerId: "1",
    awayPlayerId: "3",
    homePlayerAvatar: "https://i.pravatar.cc/150?img=11",
    awayPlayerAvatar: "https://i.pravatar.cc/150?img=12",
    scheduledTime: "2025-11-28T09:00:00Z",
    startTime: "2025-11-28T09:05:00Z",
    courtNumber: "Sân 1",
    status: "live",
    refereeName: "Trọng tài Nguyễn Văn A",
    format: MatchFormat.SINGLES,
    score: {
      homeSets: 1,
      awaySets: 0,
      sets: [
        { setNumber: 1, homeGames: 21, awayGames: 18 },
        { setNumber: 2, homeGames: 15, awayGames: 12 },
      ],
    },
  },
  {
    id: "m2",
    tournamentId: "t1",
    tournamentName: "Giải Vô Địch Quốc Gia 2025",
    roundName: "Vòng 1/8",
    homePlayer: "Trần Thị Bình",
    awayPlayer: "Phạm Thu Hà",
    homePlayerId: "2",
    awayPlayerId: "4",
    homePlayerAvatar: "https://i.pravatar.cc/150?img=5",
    awayPlayerAvatar: "https://i.pravatar.cc/150?img=9",
    scheduledTime: "2025-11-29T10:30:00Z",
    courtNumber: "Sân 2",
    status: "scheduled",
    refereeName: "Trọng tài Trần Thị B",
    format: MatchFormat.SINGLES,
  },
  {
    id: "m3",
    tournamentId: "t1",
    tournamentName: "Giải Vô Địch Quốc Gia 2025",
    roundName: "Vòng 1/16",
    homePlayer: "Nguyễn Văn An",
    awayPlayer: "Hoàng Văn Dũng",
    homePlayerId: "1",
    awayPlayerId: "5",
    homePlayerAvatar: "https://i.pravatar.cc/150?img=11",
    awayPlayerAvatar: "https://i.pravatar.cc/150?img=13",
    scheduledTime: "2025-11-27T14:00:00Z",
    startTime: "2025-11-27T14:02:00Z",
    endTime: "2025-11-27T15:15:00Z",
    courtNumber: "Sân 1",
    status: "completed",
    winnerId: "1",
    refereeName: "Trọng tài Lê Văn C",
    format: MatchFormat.SINGLES,
    score: {
      homeSets: 2,
      awaySets: 0,
      sets: [
        { setNumber: 1, homeGames: 21, awayGames: 15 },
        { setNumber: 2, homeGames: 21, awayGames: 17 },
      ],
    },
  },
  {
    id: "m4",
    tournamentId: "t2",
    tournamentName: "Giải Bóng bàn Mở Rộng TP.HCM",
    roundName: "Vòng bảng",
    homePlayer: "Lê Minh Châu",
    awayPlayer: "Hoàng Văn Dũng",
    homePlayerId: "3",
    awayPlayerId: "5",
    homePlayerAvatar: "https://i.pravatar.cc/150?img=12",
    awayPlayerAvatar: "https://i.pravatar.cc/150?img=13",
    scheduledTime: "2025-11-30T09:00:00Z",
    courtNumber: "Sân 3",
    status: "scheduled",
    format: MatchFormat.SINGLES,
  },
  {
    id: "m5",
    tournamentId: "t1",
    tournamentName: "Giải Vô Địch Quốc Gia 2025",
    roundName: "Vòng 1/8",
    homePlayer: "Trần Thị Bình",
    awayPlayer: "Lê Minh Châu",
    homePlayerId: "2",
    awayPlayerId: "3",
    homePlayerAvatar: "https://i.pravatar.cc/150?img=5",
    awayPlayerAvatar: "https://i.pravatar.cc/150?img=12",
    scheduledTime: "2025-11-28T14:00:00Z",
    startTime: "2025-11-28T14:05:00Z",
    courtNumber: "Sân 3",
    status: "live",
    refereeName: "Trọng tài Phạm Văn D",
    format: MatchFormat.SINGLES,
    score: {
      homeSets: 0,
      awaySets: 1,
      sets: [
        { setNumber: 1, homeGames: 19, awayGames: 21 },
        { setNumber: 2, homeGames: 8, awayGames: 5 },
      ],
    },
  },
  {
    id: "m6",
    tournamentId: "t2",
    tournamentName: "Giải Bóng bàn Mở Rộng TP.HCM",
    roundName: "Vòng bảng",
    homePlayer: "Phạm Thu Hà",
    awayPlayer: "Hoàng Văn Dũng",
    homePlayerId: "4",
    awayPlayerId: "5",
    homePlayerAvatar: "https://i.pravatar.cc/150?img=9",
    awayPlayerAvatar: "https://i.pravatar.cc/150?img=13",
    scheduledTime: "2025-11-26T10:00:00Z",
    startTime: "2025-11-26T10:03:00Z",
    endTime: "2025-11-26T11:20:00Z",
    courtNumber: "Sân 2",
    status: "completed",
    winnerId: "4",
    refereeName: "Trọng tài Hoàng Văn E",
    format: MatchFormat.SINGLES,
    score: {
      homeSets: 2,
      awaySets: 1,
      sets: [
        { setNumber: 1, homeGames: 21, awayGames: 19 },
        { setNumber: 2, homeGames: 18, awayGames: 21 },
        { setNumber: 3, homeGames: 21, awayGames: 16 },
      ],
    },
  },
  {
    id: "m7",
    tournamentId: "t1",
    tournamentName: "Giải Vô Địch Quốc Gia 2025",
    roundName: "Vòng 1/4",
    homePlayer: "Nguyễn Văn An",
    awayPlayer: "Phạm Thu Hà",
    homePlayerId: "1",
    awayPlayerId: "4",
    homePlayerAvatar: "https://i.pravatar.cc/150?img=11",
    awayPlayerAvatar: "https://i.pravatar.cc/150?img=9",
    scheduledTime: "2025-12-01T15:00:00Z",
    courtNumber: "Sân 1",
    status: "scheduled",
    refereeName: "Trọng tài Nguyễn Văn A",
    format: MatchFormat.SINGLES,
  },
  {
    id: "m8",
    tournamentId: "t2",
    tournamentName: "Giải Bóng bàn Mở Rộng TP.HCM",
    roundName: "Vòng bảng",
    homePlayer: "Trần Thị Bình",
    awayPlayer: "Hoàng Văn Dũng",
    homePlayerId: "2",
    awayPlayerId: "5",
    homePlayerAvatar: "https://i.pravatar.cc/150?img=5",
    awayPlayerAvatar: "https://i.pravatar.cc/150?img=13",
    scheduledTime: "2025-12-02T09:30:00Z",
    courtNumber: "Sân 4",
    status: "scheduled",
    refereeName: "Trọng tài Trần Thị B",
    format: MatchFormat.SINGLES,
  },
  {
    id: "m9",
    tournamentId: "t1",
    tournamentName: "Giải Vô Địch Quốc Gia 2025",
    roundName: "Vòng 1/16",
    homePlayer: "Lê Minh Châu",
    awayPlayer: "Phạm Thu Hà",
    homePlayerId: "3",
    awayPlayerId: "4",
    homePlayerAvatar: "https://i.pravatar.cc/150?img=12",
    awayPlayerAvatar: "https://i.pravatar.cc/150?img=9",
    scheduledTime: "2025-11-25T13:30:00Z",
    startTime: "2025-11-25T13:32:00Z",
    endTime: "2025-11-25T14:45:00Z",
    courtNumber: "Sân 2",
    status: "completed",
    winnerId: "3",
    refereeName: "Trọng tài Lê Văn C",
    format: MatchFormat.SINGLES,
    score: {
      homeSets: 2,
      awaySets: 0,
      sets: [
        { setNumber: 1, homeGames: 21, awayGames: 18 },
        { setNumber: 2, homeGames: 21, awayGames: 19 },
      ],
    },
  },
  {
    id: "m10",
    tournamentId: "t2",
    tournamentName: "Giải Bóng bàn Mở Rộng TP.HCM",
    roundName: "Vòng bảng",
    homePlayer: "Nguyễn Văn An",
    awayPlayer: "Trần Thị Bình",
    homePlayerId: "1",
    awayPlayerId: "2",
    homePlayerAvatar: "https://i.pravatar.cc/150?img=11",
    awayPlayerAvatar: "https://i.pravatar.cc/150?img=5",
    scheduledTime: "2025-12-03T14:00:00Z",
    courtNumber: "Sân 1",
    status: "scheduled",
    refereeName: "Trọng tài Phạm Văn D",
    format: MatchFormat.SINGLES,
  },
];

// ==================== RANKINGS ====================

export const mockRankings: Ranking[] = [
  {
    id: "r1",
    tournamentId: "t1",
    playerId: "1",
    playerName: "Nguyễn Văn An",
    playerAvatar: "https://i.pravatar.cc/150?img=11",
    position: 1,
    previousPosition: 2,
    wins: 8,
    losses: 1,
    points: 950,
    winRate: 88.9,
    matchesPlayed: 9,
    organization: "Đội Hà Nội",
    updatedAt: "2025-01-16T00:00:00Z",
  },
  {
    id: "r2",
    tournamentId: "t1",
    playerId: "3",
    playerName: "Lê Minh Châu",
    playerAvatar: "https://i.pravatar.cc/150?img=12",
    position: 2,
    previousPosition: 1,
    wins: 7,
    losses: 2,
    points: 880,
    winRate: 77.8,
    matchesPlayed: 9,
    organization: "Đội Đà Nẵng",
    updatedAt: "2025-01-16T00:00:00Z",
  },
  {
    id: "r3",
    tournamentId: "t1",
    playerId: "5",
    playerName: "Hoàng Văn Dũng",
    playerAvatar: "https://i.pravatar.cc/150?img=13",
    position: 3,
    previousPosition: 3,
    wins: 6,
    losses: 2,
    points: 820,
    winRate: 75.0,
    matchesPlayed: 8,
    organization: "Đội Hà Nội",
    updatedAt: "2025-01-16T00:00:00Z",
  },
  {
    id: "r4",
    tournamentId: "t1",
    playerId: "2",
    playerName: "Trần Thị Bình",
    playerAvatar: "https://i.pravatar.cc/150?img=5",
    position: 4,
    previousPosition: 5,
    wins: 5,
    losses: 3,
    points: 750,
    winRate: 62.5,
    matchesPlayed: 8,
    organization: "Đội TP.HCM",
    updatedAt: "2025-01-16T00:00:00Z",
  },
  {
    id: "r5",
    tournamentId: "t1",
    playerId: "4",
    playerName: "Phạm Thu Hà",
    playerAvatar: "https://i.pravatar.cc/150?img=9",
    position: 5,
    previousPosition: 4,
    wins: 4,
    losses: 4,
    points: 680,
    winRate: 50.0,
    matchesPlayed: 8,
    organization: "Đội Hải Phòng",
    updatedAt: "2025-01-16T00:00:00Z",
  },
];

// ==================== NOTIFICATIONS ====================

export const mockNotifications: Notification[] = [
  {
    id: "n1",
    userId: "1",
    type: "match",
    title: "Trận đấu sắp bắt đầu",
    message:
      "Trận đấu của bạn với Lê Minh Châu sẽ bắt đầu sau 15 phút tại Sân 1",
    isRead: false,
    relatedId: "m1",
    relatedType: "match",
    createdAt: "2025-01-16T08:45:00Z",
  },
  {
    id: "n2",
    userId: "1",
    type: "tournament",
    title: "Đăng ký thành công",
    message: "Bạn đã đăng ký tham gia Giải Bóng bàn Mở Rộng TP.HCM thành công",
    isRead: true,
    relatedId: "t2",
    relatedType: "tournament",
    createdAt: "2025-01-10T10:00:00Z",
  },
  {
    id: "n3",
    userId: "1",
    type: "announcement",
    title: "Thay đổi lịch thi đấu",
    message: "Lịch thi đấu vòng tứ kết đã được cập nhật. Vui lòng kiểm tra lại",
    isRead: false,
    createdAt: "2025-01-15T16:00:00Z",
  },
  {
    id: "n4",
    userId: "1",
    type: "training",
    title: "Kế hoạch tập luyện mới",
    message: "HLV Trần Quốc Tuấn đã tạo kế hoạch tập luyện mới cho bạn",
    isRead: false,
    relatedId: "tp1",
    relatedType: "training",
    createdAt: "2025-01-14T09:00:00Z",
  },
];

// ==================== COMPLAINTS ====================

export const mockComplaints: Complaint[] = [
  {
    id: "c1",
    matchId: "m3",
    matchName: "Nguyễn Văn An vs Hoàng Văn Dũng",
    tournamentId: "t1",
    tournamentName: "Giải Vô Địch Quốc Gia 2025",
    submittedBy: "Hoàng Văn Dũng",
    submitterId: "5",
    submitterRole: "athlete",
    topic: "Phản đối quyết định trọng tài",
    description: "Trọng tài đã không nhìn thấy cầu rơi ngoài biên trong ván 2",
    category: "Referee Decision",
    priority: "medium",
    status: "under_review",
    createdAt: "2025-01-15T15:20:00Z",
    updatedAt: "2025-01-16T08:00:00Z",
  },
  {
    id: "c2",
    matchId: "m1",
    matchName: "Nguyễn Văn An vs Lê Minh Châu",
    tournamentId: "t1",
    tournamentName: "Giải Vô Địch Quốc Gia 2025",
    submittedBy: "HLV Trần Quốc Tuấn",
    submitterId: "101",
    submitterRole: "coach",
    topic: "Hành vi phi thể thao",
    description: "Đối thủ đã có lời nói xúc phạm VĐV của tôi",
    category: "Player Conduct",
    priority: "high",
    status: "pending_review",
    createdAt: "2025-01-16T09:30:00Z",
    updatedAt: "2025-01-16T09:30:00Z",
  },
];

// ==================== NEWS ====================

export const mockNews: News[] = [
  {
    id: "news1",
    title: "Giải Vô Địch Quốc Gia 2025 chính thức khai mạc",
    excerpt:
      "Với sự tham gia của hơn 120 VĐV đến từ 15 tỉnh thành trên cả nước...",
    content:
      "Giải đấu Bóng bàn Vô Địch Quốc Gia 2025 đã chính thức khai mạc sáng nay tại Nhà thi đấu Quần Ngựa, Hà Nội. Đây là sự kiện thể thao lớn nhất trong năm với sự tham gia của hơn 120 VĐV xuất sắc nhất đến từ 15 tỉnh thành trên cả nước. Giải đấu diễn ra trong 10 ngày với 5 nội dung thi đấu chính...",
    coverImage:
      "https://via.placeholder.com/800x400/0ea5e9/ffffff?text=Tournament+Opening",
    category: "Sự kiện",
    author: "Biên tập viên Nguyễn Văn A",
    authorAvatar: "https://i.pravatar.cc/150?img=68",
    publishedAt: "2025-01-15T08:00:00Z",
    views: 1523,
    likes: 245,
    tags: ["giải đấu", "khai mạc", "Bóng bàn"],
  },
  {
    id: "news2",
    title: "Nguyễn Văn An vượt qua vòng 1/16 một cách thuyết phục",
    excerpt:
      "Chiến thắng 2-0 trước Hoàng Văn Dũng giúp Nguyễn Văn An tiến vào vòng 1/8...",
    content:
      "Trong trận đấu diễn ra chiều nay, Nguyễn Văn An đã có màn trình diễn ấn tượng với chiến thắng thuyết phục 2-0 trước Hoàng Văn Dũng. Với các tỷ số 21-15 và 21-17, An đã chứng tỏ đẳng cấp và sự vượt trội về mọi mặt...",
    coverImage:
      "https://via.placeholder.com/800x400/22c55e/ffffff?text=Match+Highlights",
    category: "Tin tức",
    author: "Phóng viên Trần Thị B",
    publishedAt: "2025-01-15T16:00:00Z",
    views: 892,
    likes: 156,
    tags: ["trận đấu", "highlights", "vòng 1/16"],
  },
];

// ==================== TRAINING PLANS ====================

export const mockTrainingPlans: TrainingPlan[] = [
  {
    id: "tp1",
    title: "Kế hoạch cải thiện kỹ thuật cơ bản",
    description: "Tập trung vào việc hoàn thiện các kỹ thuật đánh cầu cơ bản",
    coachId: "101",
    athleteId: "1",
    scheduledDate: "2025-01-17T08:00:00Z",
    duration: 120,
    objectives: [
      "Cải thiện kỹ thuật smash",
      "Tăng độ chính xác drop shot",
      "Luyện tập di chuyển sân",
    ],
    exercises: [
      "Tập smash 50 lần",
      "Tập drop shot 30 lần",
      "Chạy bước chân 15 phút",
    ],
    status: "planned",
  },
];

// ==================== EVALUATIONS ====================

export const mockEvaluations: AthleteEvaluation[] = [
  {
    id: "ev1",
    coachId: "101",
    coachName: "HLV Trần Quốc Tuấn",
    athleteId: "1",
    athleteName: "Nguyễn Văn An",
    date: "2025-01-15T17:00:00Z",
    matchId: "m3",
    rating: 8.5,
    ratings: {
      technique: 9,
      physical: 8,
      mental: 8,
      tactical: 9,
      overall: 8.5,
    },
    strengths: ["Smash mạnh", "Di chuyển nhanh", "Tinh thần thi đấu tốt"],
    weaknesses: ["Drop shot chưa ổn định", "Phòng thủ còn yếu"],
    recommendations: [
      "Tập luyện thêm drop shot",
      "Tăng cường luyện tập phòng thủ",
    ],
    comments:
      "Trận đấu rất hay, tiếp tục phát huy điểm mạnh và khắc phục điểm yếu",
    createdAt: "2025-01-15T17:30:00Z",
  },
];

// ==================== TEAMS ====================

export const mockTeams: Team[] = [
  {
    id: "team1",
    name: "Đội Hà Nội - Đôi Nam",
    delegationId: "del1",
    coachId: "101",
    athletes: ["1", "5"],
    type: "doubles",
  },
  {
    id: "team2",
    name: "Đội TP.HCM - Đôi Nữ",
    delegationId: "del2",
    coachId: "102",
    athletes: ["2", "4"],
    type: "doubles",
  },
];

// ==================== DELEGATIONS ====================

export const mockDelegations: Delegation[] = [
  {
    id: "del1",
    name: "Đoàn Hà Nội",
    leaderId: "201",
    tournamentId: "t1",
    coaches: ["101"],
    athletes: ["1", "5"],
    teams: ["team1"],
  },
  {
    id: "del2",
    name: "Đoàn TP.HCM",
    leaderId: "202",
    tournamentId: "t1",
    coaches: ["102"],
    athletes: ["2"],
    teams: ["team2"],
  },
];

// ==================== HELPER FUNCTIONS ====================

export const getUserById = (id: string): User | undefined => {
  return mockUsers.find((user) => user.id === id);
};

export const getTournamentById = (id: string): Tournament | undefined => {
  return mockTournaments.find((tournament) => tournament.id === id);
};

export const getMatchById = (id: string): Match | undefined => {
  return mockMatches.find((match) => match.id === id);
};

export const getMatchesByTournament = (tournamentId: string): Match[] => {
  return mockMatches.filter((match) => match.tournamentId === tournamentId);
};

export const getNotificationsByUser = (userId: string): Notification[] => {
  return mockNotifications.filter((notif) => notif.userId === userId);
};

export const getUnreadNotificationsCount = (userId: string): number => {
  return mockNotifications.filter(
    (notif) => notif.userId === userId && !notif.isRead
  ).length;
};
