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
  TacticalReport,
  AthletePerformance,
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
  {
    id: "6",
    name: "Vũ Thị Lan",
    email: "vtl@example.com",
    role: "athlete",
    avatar: "https://i.pravatar.cc/150?img=10",
    phone: "0901234572",
    organization: "Đội Hà Nội",
    dateOfBirth: "2001-01-12",
    gender: Gender.FEMALE,
    isOnline: true,
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "7",
    name: "Đặng Thị Mai",
    email: "dtm@example.com",
    role: "athlete",
    avatar: "https://i.pravatar.cc/150?img=16",
    phone: "0901234573",
    organization: "Đội Hà Nội",
    dateOfBirth: "2002-06-18",
    gender: Gender.FEMALE,
    isOnline: true,
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

// ==================== OLD TRAINING PLANS (DEPRECATED - use mockTrainingPlans below) ====================

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
  {
    id: "team3",
    name: "Đội Hà Nội - Đơn Nam",
    delegationId: "del1",
    coachId: "101",
    athletes: ["1"],
    type: "singles",
  },
  {
    id: "team4",
    name: "Đội Hà Nội - Đơn Nữ",
    delegationId: "del1",
    coachId: "101",
    athletes: ["6", "7"],
    type: "singles",
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
    athletes: ["1", "5", "6", "7"],
    teams: ["team1", "team3", "team4"],
  },
  {
    id: "del2",
    name: "Đoàn TP.HCM",
    leaderId: "202",
    tournamentId: "t1",
    coaches: ["102"],
    athletes: ["2", "4"],
    teams: ["team2"],
  },
];

// ==================== TRAINING PLANS ====================

export const mockTrainingPlans: TrainingPlan[] = [
  {
    id: "tp1",
    coachId: "101",
    athleteId: "1",
    title: "Kế hoạch luyện tập tuần 1 - Tháng 1",
    description: "Tập trung vào kỹ thuật và tốc độ phản xạ",
    scheduledDate: "2025-01-06T08:00:00Z",
    duration: 120,
    objectives: [
      "Cải thiện kỹ thuật forehand",
      "Tăng tốc độ di chuyển",
      "Rèn luyện sức bền",
    ],
    exercises: [
      "Khởi động 15 phút",
      "Luyện forehand 30 phút",
      "Di chuyển chéo sân 20 phút",
      "Thể lực 30 phút",
      "Thư giãn 25 phút",
    ],
    status: "planned",
  },
  {
    id: "tp2",
    coachId: "101",
    athleteId: "1",
    title: "Luyện tập chiến thuật",
    description: "Phát triển chiến thuật thi đấu đơn",
    scheduledDate: "2025-01-08T14:00:00Z",
    duration: 90,
    objectives: [
      "Chiến thuật tấn công",
      "Phòng thủ phản công",
      "Xử lý tình huống",
    ],
    exercises: [
      "Khởi động 10 phút",
      "Luyện tập chiến thuật 40 phút",
      "Thực hành tình huống 30 phút",
      "Tổng kết 10 phút",
    ],
    status: "planned",
  },
  {
    id: "tp3",
    coachId: "101",
    athleteId: "3",
    title: "Phục hồi sau chấn thương",
    description: "Tập nhẹ nhàng để phục hồi thể lực",
    scheduledDate: "2024-12-28T09:00:00Z",
    duration: 60,
    objectives: [
      "Khôi phục sức mạnh",
      "Tăng độ linh hoạt",
      "Phòng tránh chấn thương",
    ],
    exercises: [
      "Khởi động kỹ 20 phút",
      "Bài tập phục hồi 30 phút",
      "Massage thư giãn 10 phút",
    ],
    status: "completed",
  },
  {
    id: "tp4",
    coachId: "101",
    athleteId: "5",
    title: "Tập luyện sức mạnh",
    description: "Tăng cường thể lực và sức mạnh cơ bắp",
    scheduledDate: "2025-01-07T16:00:00Z",
    duration: 90,
    objectives: [
      "Tăng sức mạnh tay",
      "Phát triển cơ chân",
      "Cải thiện thể lực tổng hợp",
    ],
    exercises: [
      "Khởi động 10 phút",
      "Tập tạ 30 phút",
      "Bài tập core 20 phút",
      "Cardio 20 phút",
      "Thư giãn 10 phút",
    ],
    status: "planned",
  },
  {
    id: "tp5",
    coachId: "101",
    athleteId: "6",
    title: "Luyện kỹ thuật serve",
    description: "Hoàn thiện kỹ thuật giao bóng",
    scheduledDate: "2025-01-05T10:00:00Z",
    duration: 75,
    objectives: [
      "Cải thiện độ chính xác serve",
      "Tăng tốc độ bóng",
      "Đa dạng hóa kiểu serve",
    ],
    exercises: [
      "Khởi động 10 phút",
      "Luyện serve cơ bản 25 phút",
      "Serve nâng cao 25 phút",
      "Thực hành tình huống 15 phút",
    ],
    status: "completed",
  },
];

// ==================== ATHLETE EVALUATIONS ====================

export const mockAthleteEvaluations: AthleteEvaluation[] = [
  {
    id: "eval1",
    coachId: "101",
    coachName: "HLV Trần Quốc Tuấn",
    athleteId: "1",
    athleteName: "Nguyễn Văn An",
    matchId: "m1",
    tournamentId: "t1",
    evaluationDate: "2024-12-30T00:00:00Z",
    technicalSkills: {
      forehand: 8,
      backhand: 7,
      serve: 8,
      return: 7,
      volley: 6,
    },
    physicalAttributes: {
      speed: 8,
      strength: 7,
      endurance: 9,
      agility: 8,
      flexibility: 7,
    },
    mentalStrength: {
      focus: 8,
      confidence: 7,
      composure: 8,
      determination: 9,
    },
    tacticalAwareness: {
      gameReading: 7,
      decisionMaking: 8,
      adaptability: 7,
      strategyExecution: 8,
    },
    overallRating: 7.5,
    strengths: [
      "Sức bền tốt",
      "Tinh thần thi đấu cao",
      "Kỹ thuật forehand xuất sắc",
    ],
    weaknesses: ["Cần cải thiện volley", "Tăng cường sức mạnh"],
    recommendations: [
      "Tập trung luyện volley trong 2 tuần tới",
      "Tăng cường bài tập thể lực",
      "Thực hành nhiều tình huống thi đấu",
    ],
    notes: "VĐV có tiến bộ rõ rệt, giữ vững phong độ trong giải đấu vừa qua.",
  },
  {
    id: "eval2",
    coachId: "101",
    coachName: "HLV Trần Quốc Tuấn",
    athleteId: "3",
    athleteName: "Lê Minh Châu",
    evaluationDate: "2024-12-28T00:00:00Z",
    technicalSkills: {
      forehand: 7,
      backhand: 8,
      serve: 7,
      return: 8,
      volley: 7,
    },
    physicalAttributes: {
      speed: 9,
      strength: 6,
      endurance: 7,
      agility: 9,
      flexibility: 8,
    },
    mentalStrength: {
      focus: 7,
      confidence: 6,
      composure: 7,
      determination: 8,
    },
    tacticalAwareness: {
      gameReading: 8,
      decisionMaking: 7,
      adaptability: 8,
      strategyExecution: 7,
    },
    overallRating: 7.3,
    strengths: [
      "Tốc độ di chuyển xuất sắc",
      "Khả năng đọc trận đấu tốt",
      "Backhand mạnh",
    ],
    weaknesses: ["Cần tăng sức mạnh", "Tự tin hơn trong thi đấu"],
    recommendations: [
      "Tập luyện sức mạnh thường xuyên",
      "Tham gia nhiều giải đấu để tăng tự tin",
      "Luyện kỹ thuật serve nặng hơn",
    ],
    notes: "VĐV có tiềm năng lớn, cần thời gian để phát triển.",
  },
  {
    id: "eval3",
    coachId: "101",
    coachName: "HLV Trần Quốc Tuấn",
    athleteId: "5",
    athleteName: "Hoàng Văn Dũng",
    evaluationDate: "2024-12-25T00:00:00Z",
    technicalSkills: {
      forehand: 9,
      backhand: 8,
      serve: 9,
      return: 8,
      volley: 8,
    },
    physicalAttributes: {
      speed: 7,
      strength: 9,
      endurance: 8,
      agility: 7,
      flexibility: 6,
    },
    mentalStrength: {
      focus: 9,
      confidence: 9,
      composure: 8,
      determination: 9,
    },
    tacticalAwareness: {
      gameReading: 9,
      decisionMaking: 9,
      adaptability: 8,
      strategyExecution: 9,
    },
    overallRating: 8.4,
    strengths: [
      "Kỹ thuật toàn diện",
      "Sức mạnh tốt",
      "Tinh thần chiến đấu cao",
    ],
    weaknesses: ["Cần cải thiện độ linh hoạt", "Tăng tốc độ di chuyển"],
    recommendations: [
      "Bài tập kéo giãn hàng ngày",
      "Luyện tập di chuyển nhanh",
      "Duy trì phong độ hiện tại",
    ],
    notes: "VĐV xuất sắc, có thể tham gia các giải đấu quốc tế.",
  },
  {
    id: "eval4",
    coachId: "101",
    coachName: "HLV Trần Quốc Tuấn",
    athleteId: "6",
    athleteName: "Vũ Thị Lan",
    evaluationDate: "2025-01-02T00:00:00Z",
    technicalSkills: {
      forehand: 7,
      backhand: 7,
      serve: 6,
      return: 7,
      volley: 6,
    },
    physicalAttributes: {
      speed: 8,
      strength: 6,
      endurance: 8,
      agility: 8,
      flexibility: 9,
    },
    mentalStrength: {
      focus: 7,
      confidence: 7,
      composure: 7,
      determination: 8,
    },
    tacticalAwareness: {
      gameReading: 7,
      decisionMaking: 7,
      adaptability: 7,
      strategyExecution: 6,
    },
    overallRating: 7.0,
    strengths: ["Độ linh hoạt cao", "Sức bền tốt", "Thái độ tích cực"],
    weaknesses: ["Kỹ thuật serve cần cải thiện", "Tăng sức mạnh tay"],
    recommendations: [
      "Tập trung luyện serve 3 buổi/tuần",
      "Bổ sung bài tập sức mạnh",
      "Học thêm chiến thuật thi đấu",
    ],
    notes:
      "VĐV có tinh thần học hỏi tốt, cần thời gian để phát triển kỹ thuật.",
  },
];

// ==================== TACTICAL REPORTS ====================

export const mockTacticalReports: TacticalReport[] = [
  {
    id: "tr1",
    coachId: "101",
    coachName: "HLV Trần Quốc Tuấn",
    athleteId: "1",
    athleteName: "Nguyễn Văn An",
    matchId: "m1",
    matchInfo: "Vòng 16 đội - Giải vô địch quốc gia 2025 vs Phạm Minh Tuấn",
    reportDate: "2025-01-05T00:00:00Z",
    reportType: "match",
    title: "Phân tích trận đấu vòng 16 đội",
    strengths: [
      "Forehand mạnh mẽ và chính xác",
      "Di chuyển tốt trên sân",
      "Phòng thủ chắc chắn",
      "Xử lý tình huống tốt dưới áp lực",
    ],
    weaknesses: [
      "Backhand còn yếu khi đối thủ tấn công liên tục",
      "Thiếu kiên nhẫn trong những pha bóng dài",
      "Chưa tận dụng tốt cơ hội ghi điểm",
    ],
    opponents: [
      {
        name: "Phạm Minh Tuấn",
        analysis:
          "Đối thủ có serve mạnh, thích tấn công nhanh. Cần phòng thủ tốt và phản công hiệu quả.",
      },
    ],
    recommendations: [
      "Luyện thêm backhand để cải thiện độ ổn định",
      "Tập trung vào việc xây dựng điểm thông qua pha bóng dài",
      "Luyện tập kết thúc điểm hiệu quả hơn",
    ],
    tacticalNotes:
      "VĐV đã chơi tốt trong hiệp 1 với tỷ lệ ghi điểm cao từ forehand. Tuy nhiên, hiệp 2 và 3 gặp khó khăn khi đối thủ tập trung tấn công vào backhand. Cần cải thiện khả năng chuyển đổi giữa phòng thủ và tấn công.",
    nextSteps: [
      "Luyện backhand 3 buổi/tuần trong 2 tuần tới",
      "Thực hành chiến thuật phòng thủ phản công",
      "Chuẩn bị cho vòng 8 đội",
    ],
  },
  {
    id: "tr2",
    coachId: "101",
    coachName: "HLV Trần Quốc Tuấn",
    athleteId: "1",
    athleteName: "Nguyễn Văn An",
    reportDate: "2025-01-03T00:00:00Z",
    reportType: "training",
    title: "Đánh giá buổi tập tuần 1/2025",
    strengths: [
      "Tinh thần luyện tập tích cực",
      "Thực hiện đúng kỹ thuật được hướng dẫn",
      "Thể lực tốt, hoàn thành tốt bài tập sức bền",
    ],
    weaknesses: [
      "Độ tập trung giảm sau 60 phút tập",
      "Chưa thích nghi tốt với bài tập tốc độ mới",
    ],
    recommendations: [
      "Tăng cường bài tập tập trung và tinh thần",
      "Luyện tập tốc độ với cường độ thấp để làm quen dần",
      "Bổ sung dinh dưỡng để duy trì năng lượng",
    ],
    tacticalNotes:
      "Buổi tập tổng thể đạt 85% mục tiêu. VĐV cần cải thiện khả năng duy trì hiệu suất trong thời gian dài.",
    nextSteps: [
      "Áp dụng bài tập meditation 10 phút/ngày",
      "Tăng dần cường độ bài tập tốc độ",
      "Tư vấn dinh dưỡng với chuyên gia",
    ],
  },
  {
    id: "tr3",
    coachId: "101",
    coachName: "HLV Trần Quốc Tuấn",
    athleteId: "5",
    athleteName: "Hoàng Văn Dũng",
    matchId: "m3",
    matchInfo: "Vòng bán kết - Giải vô địch quốc gia 2025 vs Lê Minh Châu",
    reportDate: "2025-01-04T00:00:00Z",
    reportType: "match",
    title: "Phân tích trận bán kết",
    strengths: [
      "Kinh nghiệm thi đấu dày dặn",
      "Serve chính xác và đa dạng",
      "Chiến thuật linh hoạt",
      "Khả năng đọc trận đấu tốt",
    ],
    weaknesses: [
      "Thể lực giảm ở hiệp 3",
      "Tốc độ di chuyển chậm hơn đối thủ trẻ",
      "Áp lực tâm lý trong những điểm quan trọng",
    ],
    opponents: [
      {
        name: "Lê Minh Châu",
        analysis:
          "Đối thủ trẻ, năng động, thích chơi tấn công. Cần sử dụng kinh nghiệm để kiểm soát nhịp độ trận đấu.",
      },
    ],
    recommendations: [
      "Tăng cường luyện tập thể lực và sức bền",
      "Luyện tập tình huống xử lý áp lực",
      "Cải thiện tốc độ di chuyển qua bài tập chuyên biệt",
    ],
    tacticalNotes:
      "VĐV đã chơi thông minh, sử dụng kinh nghiệm để kiểm soát trận đấu. Tuy nhiên, độ tuổi và thể lực là điểm yếu cần khắc phục để cạnh tranh với các VĐV trẻ.",
    nextSteps: [
      "Tập trung vào phục hồi và thể lực",
      "Phát triển lối chơi phù hợp với độ tuổi",
      "Tư vấn tâm lý thể thao",
    ],
  },
  {
    id: "tr4",
    coachId: "101",
    coachName: "HLV Trần Quốc Tuấn",
    athleteId: "6",
    athleteName: "Vũ Thị Lan",
    reportDate: "2024-12-28T00:00:00Z",
    reportType: "general",
    title: "Đánh giá tổng quan tháng 12/2024",
    strengths: [
      "Tiến bộ vượt bậc trong tháng qua",
      "Thái độ học hỏi tốt",
      "Kỹ thuật cơ bản vững chắc",
      "Tiềm năng phát triển cao",
    ],
    weaknesses: [
      "Thiếu kinh nghiệm thi đấu",
      "Tâm lý chưa ổn định trong trận đấu quan trọng",
      "Cần cải thiện sức mạnh",
    ],
    recommendations: [
      "Tham gia nhiều giải đấu để tích lũy kinh nghiệm",
      "Luyện tập mental training",
      "Tăng cường bài tập sức mạnh",
      "Duy trì phong độ tập luyện hiện tại",
    ],
    tacticalNotes:
      "VĐV trẻ đầy tiềm năng, có thể phát triển thành tay vợt hàng đầu nếu được đầu tư đúng cách. Cần tập trung vào phát triển toàn diện cả kỹ thuật, thể lực và tinh thần.",
    nextSteps: [
      "Lên kế hoạch thi đấu cho quý 1/2025",
      "Bắt đầu chương trình mental training",
      "Điều chỉnh chương trình tập với bài tập sức mạnh",
      "Theo dõi sát tiến độ hàng tuần",
    ],
  },
];

// ==================== ATHLETE PERFORMANCE DATA ====================

export const mockAthletePerformances: AthletePerformance[] = [
  {
    athleteId: "1",
    athleteName: "Nguyễn Văn An",
    avatar: "https://i.pravatar.cc/150?img=11",
    coachId: "101",
    stats: {
      matchesPlayed: 15,
      wins: 11,
      losses: 4,
      winRate: 73.3,
      currentRank: 3,
      previousRank: 5,
      trainingAttendance: 95,
      lastTrainingDate: "2025-01-03T00:00:00Z",
      nextMatchDate: "2025-01-10T00:00:00Z",
    },
    recentMatches: [
      {
        id: "m1",
        date: "2024-12-29T00:00:00Z",
        opponent: "Trần Thị Bình",
        result: "win",
        score: "2-1",
        tournament: "Giải Quốc gia 2024",
      },
      {
        id: "m2",
        date: "2024-12-25T00:00:00Z",
        opponent: "Lê Minh Châu",
        result: "win",
        score: "2-0",
        tournament: "Giải Quốc gia 2024",
      },
      {
        id: "m3",
        date: "2024-12-20T00:00:00Z",
        opponent: "Hoàng Văn Dũng",
        result: "loss",
        score: "1-2",
        tournament: "Giải Vô địch Hà Nội",
      },
    ],
    evaluationHistory: [
      {
        date: "2024-12-30T00:00:00Z",
        overallRating: 7.5,
        notes: "Tiến bộ rõ rệt",
      },
      {
        date: "2024-11-30T00:00:00Z",
        overallRating: 7.0,
        notes: "Ổn định",
      },
      {
        date: "2024-10-30T00:00:00Z",
        overallRating: 6.5,
        notes: "Cần cải thiện",
      },
    ],
    performanceTrend: [
      {
        month: "T10",
        winRate: 65,
        ranking: 7,
        trainingHours: 48,
      },
      {
        month: "T11",
        winRate: 70,
        ranking: 5,
        trainingHours: 52,
      },
      {
        month: "T12",
        winRate: 73,
        ranking: 3,
        trainingHours: 55,
      },
    ],
  },
  {
    athleteId: "3",
    athleteName: "Lê Minh Châu",
    avatar: "https://i.pravatar.cc/150?img=12",
    coachId: "101",
    stats: {
      matchesPlayed: 12,
      wins: 7,
      losses: 5,
      winRate: 58.3,
      currentRank: 8,
      previousRank: 9,
      trainingAttendance: 88,
      lastTrainingDate: "2025-01-02T00:00:00Z",
      nextMatchDate: "2025-01-12T00:00:00Z",
    },
    recentMatches: [
      {
        id: "m4",
        date: "2024-12-27T00:00:00Z",
        opponent: "Phạm Thu Hà",
        result: "win",
        score: "2-1",
        tournament: "Giải Vô địch Đà Nẵng",
      },
      {
        id: "m5",
        date: "2024-12-25T00:00:00Z",
        opponent: "Nguyễn Văn An",
        result: "loss",
        score: "0-2",
        tournament: "Giải Quốc gia 2024",
      },
    ],
    evaluationHistory: [
      {
        date: "2024-12-28T00:00:00Z",
        overallRating: 7.3,
        notes: "Có tiến bộ",
      },
      {
        date: "2024-11-28T00:00:00Z",
        overallRating: 7.0,
        notes: "Ổn định",
      },
    ],
    performanceTrend: [
      {
        month: "T10",
        winRate: 55,
        ranking: 10,
        trainingHours: 42,
      },
      {
        month: "T11",
        winRate: 57,
        ranking: 9,
        trainingHours: 45,
      },
      {
        month: "T12",
        winRate: 58,
        ranking: 8,
        trainingHours: 48,
      },
    ],
  },
  {
    athleteId: "5",
    athleteName: "Hoàng Văn Dũng",
    avatar: "https://i.pravatar.cc/150?img=13",
    coachId: "101",
    stats: {
      matchesPlayed: 18,
      wins: 15,
      losses: 3,
      winRate: 83.3,
      currentRank: 1,
      previousRank: 1,
      trainingAttendance: 98,
      lastTrainingDate: "2025-01-03T00:00:00Z",
      nextMatchDate: "2025-01-08T00:00:00Z",
    },
    recentMatches: [
      {
        id: "m6",
        date: "2024-12-28T00:00:00Z",
        opponent: "Lê Minh Châu",
        result: "win",
        score: "2-0",
        tournament: "Giải Quốc gia 2024",
      },
      {
        id: "m7",
        date: "2024-12-26T00:00:00Z",
        opponent: "Trần Thị Bình",
        result: "win",
        score: "2-1",
        tournament: "Giải Quốc gia 2024",
      },
      {
        id: "m8",
        date: "2024-12-20T00:00:00Z",
        opponent: "Nguyễn Văn An",
        result: "win",
        score: "2-1",
        tournament: "Giải Vô địch Hà Nội",
      },
    ],
    evaluationHistory: [
      {
        date: "2024-12-25T00:00:00Z",
        overallRating: 8.4,
        notes: "Xuất sắc",
      },
      {
        date: "2024-11-25T00:00:00Z",
        overallRating: 8.2,
        notes: "Rất tốt",
      },
    ],
    performanceTrend: [
      {
        month: "T10",
        winRate: 80,
        ranking: 1,
        trainingHours: 60,
      },
      {
        month: "T11",
        winRate: 82,
        ranking: 1,
        trainingHours: 62,
      },
      {
        month: "T12",
        winRate: 83,
        ranking: 1,
        trainingHours: 65,
      },
    ],
  },
  {
    athleteId: "6",
    athleteName: "Vũ Thị Lan",
    avatar: "https://i.pravatar.cc/150?img=10",
    coachId: "101",
    stats: {
      matchesPlayed: 10,
      wins: 6,
      losses: 4,
      winRate: 60,
      currentRank: 12,
      previousRank: 15,
      trainingAttendance: 92,
      lastTrainingDate: "2025-01-03T00:00:00Z",
      nextMatchDate: "2025-01-15T00:00:00Z",
    },
    recentMatches: [
      {
        id: "m9",
        date: "2024-12-30T00:00:00Z",
        opponent: "Đặng Thị Mai",
        result: "win",
        score: "2-0",
        tournament: "Giải Vô địch Hà Nội",
      },
      {
        id: "m10",
        date: "2024-12-22T00:00:00Z",
        opponent: "Phạm Thu Hà",
        result: "loss",
        score: "1-2",
        tournament: "Giải Vô địch Hà Nội",
      },
    ],
    evaluationHistory: [
      {
        date: "2025-01-02T00:00:00Z",
        overallRating: 7.0,
        notes: "Đang phát triển tốt",
      },
      {
        date: "2024-12-02T00:00:00Z",
        overallRating: 6.5,
        notes: "Cần cải thiện",
      },
    ],
    performanceTrend: [
      {
        month: "T10",
        winRate: 50,
        ranking: 18,
        trainingHours: 40,
      },
      {
        month: "T11",
        winRate: 55,
        ranking: 15,
        trainingHours: 44,
      },
      {
        month: "T12",
        winRate: 60,
        ranking: 12,
        trainingHours: 48,
      },
    ],
  },
];

// ==================== HELPER FUNCTIONS ====================

// Filter helpers
export const mockAthletes = mockUsers.filter((user) => user.role === "athlete");
export const mockCoaches = mockUsers.filter((user) => user.role === "coach");
export const mockTeamLeaders = mockUsers.filter(
  (user) => user.role === "team_leader"
);

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

// Coach-specific helpers
export const getTrainingPlansByCoach = (coachId: string): TrainingPlan[] => {
  return mockTrainingPlans.filter((plan) => plan.coachId === coachId);
};

export const getTrainingPlansByAthlete = (
  athleteId: string
): TrainingPlan[] => {
  return mockTrainingPlans.filter((plan) => plan.athleteId === athleteId);
};

export const getAthletesByCoach = (coachId: string): User[] => {
  // Get all athlete IDs from training plans
  const athleteIds = mockTrainingPlans
    .filter((plan) => plan.coachId === coachId)
    .map((plan) => plan.athleteId);

  // Return unique athletes
  return mockAthletes.filter((athlete) => athleteIds.includes(athlete.id));
};

export const getEvaluationsByCoach = (coachId: string): AthleteEvaluation[] => {
  return mockAthleteEvaluations.filter(
    (evaluation) => evaluation.coachId === coachId
  );
};

export const getEvaluationsByAthlete = (
  athleteId: string
): AthleteEvaluation[] => {
  return mockAthleteEvaluations.filter(
    (evaluation) => evaluation.athleteId === athleteId
  );
};

export const getAthletePerformance = (
  athleteId: string
): AthletePerformance | undefined => {
  return mockAthletePerformances.find((perf) => perf.athleteId === athleteId);
};

export const getAthletePerformancesByCoach = (
  coachId: string
): AthletePerformance[] => {
  return mockAthletePerformances.filter((perf) => perf.coachId === coachId);
};

export const getTacticalReportsByCoach = (
  coachId: string
): TacticalReport[] => {
  return mockTacticalReports.filter((report) => report.coachId === coachId);
};

export const getTacticalReportsByAthlete = (
  athleteId: string
): TacticalReport[] => {
  return mockTacticalReports.filter((report) => report.athleteId === athleteId);
};

export const getTacticalReportById = (
  reportId: string
): TacticalReport | undefined => {
  return mockTacticalReports.find((report) => report.id === reportId);
};
