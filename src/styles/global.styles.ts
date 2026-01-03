/**
 * Global Styles
 * Common styles used across the application
 *
 * @description Unified styling system with consistent spacing, colors, and utilities
 * @usage Import and use: import { globalStyles } from 'src/styles/global.styles'
 */

import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import { spacing, borderRadius } from "../theme/spacing";
import { fontSize, fontWeight } from "../theme/typography";

export const globalStyles = StyleSheet.create({
  // ==================== CONTAINER STYLES ====================
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerPrimary: {
    flex: 1,
    backgroundColor: colors.primary.DEFAULT,
  },
  containerCard: {
    flex: 1,
    backgroundColor: colors.card,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeAreaPrimary: {
    flex: 1,
    backgroundColor: colors.primary.DEFAULT,
  },
  safeAreaCard: {
    flex: 1,
    backgroundColor: colors.card,
  },

  // ==================== FLEX UTILITIES ====================
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexRowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRowAround: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  flexRowEvenly: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  flexColumn: {
    flexDirection: "column",
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },

  // ==================== CARD STYLES ====================
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardSmall: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing[3],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  },
  cardLarge: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    padding: spacing[6],
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  cardBorder: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardNoPadding: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  // ==================== TEXT STYLES ====================
  textPrimary: {
    color: colors.foreground,
  },
  textSecondary: {
    color: colors.muted.foreground,
  },
  textMuted: {
    color: colors.muted.foreground,
  },
  textWhite: {
    color: "#FFFFFF",
  },
  textError: {
    color: colors.destructive.DEFAULT,
  },
  textSuccess: {
    color: colors.status.success,
  },
  textWarning: {
    color: colors.status.warning,
  },
  textInfo: {
    color: colors.status.info,
  },
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },

  // Font sizes
  textXs: {
    fontSize: fontSize.xs,
  },
  textSm: {
    fontSize: fontSize.sm,
  },
  textBase: {
    fontSize: fontSize.base,
  },
  textLg: {
    fontSize: fontSize.lg,
  },
  textXl: {
    fontSize: fontSize.xl,
  },
  text2Xl: {
    fontSize: fontSize["2xl"],
  },
  text3Xl: {
    fontSize: fontSize["3xl"],
  },

  // Font weights
  fontNormal: {
    fontWeight: fontWeight.normal,
  },
  fontMedium: {
    fontWeight: fontWeight.medium,
  },
  fontSemibold: {
    fontWeight: fontWeight.semibold,
  },
  fontBold: {
    fontWeight: fontWeight.bold,
  },

  // ==================== SPACING UTILITIES ====================
  // Padding
  p0: { padding: spacing[0] },
  p1: { padding: spacing[1] },
  p2: { padding: spacing[2] },
  p3: { padding: spacing[3] },
  p4: { padding: spacing[4] },
  p5: { padding: spacing[5] },
  p6: { padding: spacing[6] },
  p8: { padding: spacing[8] },

  // Padding horizontal
  px1: { paddingHorizontal: spacing[1] },
  px2: { paddingHorizontal: spacing[2] },
  px3: { paddingHorizontal: spacing[3] },
  px4: { paddingHorizontal: spacing[4] },
  px5: { paddingHorizontal: spacing[5] },
  px6: { paddingHorizontal: spacing[6] },

  // Padding vertical
  py1: { paddingVertical: spacing[1] },
  py2: { paddingVertical: spacing[2] },
  py3: { paddingVertical: spacing[3] },
  py4: { paddingVertical: spacing[4] },
  py5: { paddingVertical: spacing[5] },
  py6: { paddingVertical: spacing[6] },

  // Margin
  m0: { margin: spacing[0] },
  m1: { margin: spacing[1] },
  m2: { margin: spacing[2] },
  m3: { margin: spacing[3] },
  m4: { margin: spacing[4] },
  m5: { margin: spacing[5] },
  m6: { margin: spacing[6] },

  // Margin horizontal
  mx1: { marginHorizontal: spacing[1] },
  mx2: { marginHorizontal: spacing[2] },
  mx3: { marginHorizontal: spacing[3] },
  mx4: { marginHorizontal: spacing[4] },
  mx5: { marginHorizontal: spacing[5] },
  mx6: { marginHorizontal: spacing[6] },

  // Margin vertical
  my1: { marginVertical: spacing[1] },
  my2: { marginVertical: spacing[2] },
  my3: { marginVertical: spacing[3] },
  my4: { marginVertical: spacing[4] },
  my5: { marginVertical: spacing[5] },
  my6: { marginVertical: spacing[6] },

  // Margin bottom (common use case)
  mb1: { marginBottom: spacing[1] },
  mb2: { marginBottom: spacing[2] },
  mb3: { marginBottom: spacing[3] },
  mb4: { marginBottom: spacing[4] },
  mb5: { marginBottom: spacing[5] },
  mb6: { marginBottom: spacing[6] },

  // Margin top
  mt1: { marginTop: spacing[1] },
  mt2: { marginTop: spacing[2] },
  mt3: { marginTop: spacing[3] },
  mt4: { marginTop: spacing[4] },
  mt5: { marginTop: spacing[5] },
  mt6: { marginTop: spacing[6] },

  // Margin left
  ml1: { marginLeft: spacing[1] },
  ml2: { marginLeft: spacing[2] },
  ml3: { marginLeft: spacing[3] },
  ml4: { marginLeft: spacing[4] },
  ml5: { marginLeft: spacing[5] },
  ml6: { marginLeft: spacing[6] },

  // Margin right
  mr1: { marginRight: spacing[1] },
  mr2: { marginRight: spacing[2] },
  mr3: { marginRight: spacing[3] },
  mr4: { marginRight: spacing[4] },
  mr5: { marginRight: spacing[5] },
  mr6: { marginRight: spacing[6] },

  // Padding top
  pt1: { paddingTop: spacing[1] },
  pt2: { paddingTop: spacing[2] },
  pt3: { paddingTop: spacing[3] },
  pt4: { paddingTop: spacing[4] },
  pt5: { paddingTop: spacing[5] },
  pt6: { paddingTop: spacing[6] },

  // Padding bottom
  pb1: { paddingBottom: spacing[1] },
  pb2: { paddingBottom: spacing[2] },
  pb3: { paddingBottom: spacing[3] },
  pb4: { paddingBottom: spacing[4] },
  pb5: { paddingBottom: spacing[5] },
  pb6: { paddingBottom: spacing[6] },

  // Padding left
  pl1: { paddingLeft: spacing[1] },
  pl2: { paddingLeft: spacing[2] },
  pl3: { paddingLeft: spacing[3] },
  pl4: { paddingLeft: spacing[4] },
  pl5: { paddingLeft: spacing[5] },
  pl6: { paddingLeft: spacing[6] },

  // Padding right
  pr1: { paddingRight: spacing[1] },
  pr2: { paddingRight: spacing[2] },
  pr3: { paddingRight: spacing[3] },
  pr4: { paddingRight: spacing[4] },
  pr5: { paddingRight: spacing[5] },
  pr6: { paddingRight: spacing[6] },

  // Gap (for flexbox)
  gap1: { gap: spacing[1] },
  gap2: { gap: spacing[2] },
  gap3: { gap: spacing[3] },
  gap4: { gap: spacing[4] },
  gap5: { gap: spacing[5] },
  gap6: { gap: spacing[6] },

  // ==================== SHADOW UTILITIES ====================
  shadowNone: {
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  shadowSm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  shadowMd: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  shadowLg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  shadowXl: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },

  // ==================== BORDER UTILITIES ====================
  border: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: colors.border,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  borderPrimary: {
    borderWidth: 1,
    borderColor: colors.primary.DEFAULT,
  },
  borderError: {
    borderWidth: 1,
    borderColor: colors.destructive.DEFAULT,
  },

  // Border radius
  roundedNone: {
    borderRadius: borderRadius.none,
  },
  roundedSm: {
    borderRadius: borderRadius.sm,
  },
  rounded: {
    borderRadius: borderRadius.md,
  },
  roundedMd: {
    borderRadius: borderRadius.md,
  },
  roundedLg: {
    borderRadius: borderRadius.lg,
  },
  roundedXl: {
    borderRadius: borderRadius.xl,
  },
  rounded2Xl: {
    borderRadius: borderRadius["2xl"],
  },
  roundedFull: {
    borderRadius: borderRadius.full,
  },

  // ==================== BACKGROUND UTILITIES ====================
  bgPrimary: {
    backgroundColor: colors.primary.DEFAULT,
  },
  bgCard: {
    backgroundColor: colors.card,
  },
  bgMuted: {
    backgroundColor: colors.muted.DEFAULT,
  },
  bgError: {
    backgroundColor: colors.destructive.DEFAULT,
  },
  bgSuccess: {
    backgroundColor: colors.status.success,
  },
  bgWarning: {
    backgroundColor: colors.status.warning,
  },
  bgInfo: {
    backgroundColor: colors.status.info,
  },
  bgTransparent: {
    backgroundColor: "transparent",
  },
  bgWhite: {
    backgroundColor: "#FFFFFF",
  },

  // ==================== WIDTH/HEIGHT UTILITIES ====================
  wFull: {
    width: "100%",
  },
  hFull: {
    height: "100%",
  },
  wAuto: {
    width: "auto",
  },
  hAuto: {
    height: "auto",
  },

  // ==================== POSITION UTILITIES ====================
  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  absoluteFill: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  // ==================== OVERFLOW UTILITIES ====================
  overflowHidden: {
    overflow: "hidden",
  },
  overflowVisible: {
    overflow: "visible",
  },

  // ==================== OPACITY UTILITIES ====================
  opacity0: {
    opacity: 0,
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity75: {
    opacity: 0.75,
  },
  opacity100: {
    opacity: 1,
  },
});
