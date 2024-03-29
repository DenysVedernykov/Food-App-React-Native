import { StyleSheet } from "react-native";

import { COLORS } from "../../../../../constants";

const styles = StyleSheet.create({
  wrapperContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.neutral_30,
    padding: 16,
    height: 122,
    marginBottom: 12,
  },
  imageProduct: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    paddingHorizontal: 10,
    marginRight: 16,
    borderRadius: 8,
    backgroundColor: COLORS.neutral_20,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});

export default styles;
